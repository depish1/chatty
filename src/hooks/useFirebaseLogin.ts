import { FirebaseError } from 'firebase/app';
import { doc, getDoc } from 'firebase/firestore';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { useCallback, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { authErrors, defaultAuthErrorMessage } from 'utils/authErrors';
import { firebaseAuth, firebaseDatabase } from 'utils/firebase';

import { setUserData } from 'store/actions/user';

const getUserName = async (uid: string) => {
  const usersRef = doc(firebaseDatabase, 'users', uid);
  const docSnap = await getDoc(usersRef);
  if (docSnap.exists()) {
    return docSnap.data().userName;
  } else {
    signOut(firebaseAuth);
    throw new Error('Cannot get user name from server');
  }
};

export const useFirebaseLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loginErrorMessage, setLoginErrorMessage] = useState<string>('');
  const [isLoginLoading, setIsLoginLoading] = useState<boolean>(false);

  const signInWithFirebase = useCallback(
    async (email: string, password: string) => {
      try {
        setLoginErrorMessage('');
        setIsLoginLoading(true);

        const userCredential = await signInWithEmailAndPassword(firebaseAuth, email, password);
        const { uid } = userCredential.user;
        const userName = await getUserName(uid);
        if (userName) {
          dispatch(setUserData({ email, uid, userName }));
          navigate('/chat');
        }
      } catch (error) {
        console.log(error);
        if (error instanceof FirebaseError) {
          const isMessageForCode = authErrors[error.code] !== undefined;
          isMessageForCode ? setLoginErrorMessage(authErrors[error.code]) : setLoginErrorMessage(defaultAuthErrorMessage);
        } else if (error instanceof Error) {
          const isMessageForError = authErrors[error.message] !== undefined;
          isMessageForError ? setLoginErrorMessage(authErrors[error.message]) : setLoginErrorMessage(defaultAuthErrorMessage);
        } else {
          setLoginErrorMessage(defaultAuthErrorMessage);
        }
      } finally {
        setIsLoginLoading(false);
      }
    },
    [dispatch, navigate],
  );

  const memoizedValues = useMemo(
    () => ({
      signInWithFirebase,
      loginErrorMessage,
      isLoginLoading,
    }),
    [signInWithFirebase, isLoginLoading, loginErrorMessage],
  );

  return memoizedValues;
};
