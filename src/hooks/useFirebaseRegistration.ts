import { FirebaseError } from 'firebase/app';
import { collection, doc, getDocs, query, setDoc, where } from 'firebase/firestore';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useCallback, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { authErrors, defaultAuthErrorMessage } from 'utils/authErrors';
import { firebaseAuth, firebaseDatabase } from 'utils/firebase';

import { setUserData } from 'store/actions/user';

const checkUserName = async (userName: string) => {
  const usersRef = collection(firebaseDatabase, 'users');
  const q = query(usersRef, where('userName', '==', userName));
  const querySnapshot = await getDocs(q);
  const docs = querySnapshot.docs.map(doc => doc.data().userName);
  if (docs.includes(userName)) throw Error('userName-in-use');
};

export const useRegistrationWithFirebase = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [registrationErrorMessage, setRegistrationErrorMessage] = useState<string>('');
  const [isRegistrationLoading, setIsRegistrationLoading] = useState<boolean>(false);

  const createUserWithFirebase = useCallback(
    async (email: string, password: string, userName: string) => {
      try {
        setRegistrationErrorMessage('');
        setIsRegistrationLoading(true);
        await checkUserName(userName);
        const userCredential = await createUserWithEmailAndPassword(firebaseAuth, email, password);
        const { uid } = userCredential.user;
        await setDoc(doc(firebaseDatabase, 'users', uid), { userName, email, uid });
        dispatch(setUserData({ email, uid, userName }));
        navigate('/chat');
      } catch (error) {
        if (error instanceof FirebaseError) {
          const isMessageForCode = authErrors[error.code] !== undefined;
          isMessageForCode ? setRegistrationErrorMessage(authErrors[error.code]) : setRegistrationErrorMessage(defaultAuthErrorMessage);
        } else if (error instanceof Error) {
          const isMessageForError = authErrors[error.message] !== undefined;
          isMessageForError ? setRegistrationErrorMessage(authErrors[error.message]) : setRegistrationErrorMessage(defaultAuthErrorMessage);
        } else {
          setRegistrationErrorMessage(defaultAuthErrorMessage);
        }
      } finally {
        setIsRegistrationLoading(false);
      }
    },
    [dispatch, navigate],
  );

  const memoizedValues = useMemo(
    () => ({
      createUserWithFirebase,
      registrationErrorMessage,
      isRegistrationLoading,
    }),
    [createUserWithFirebase, isRegistrationLoading, registrationErrorMessage],
  );

  return memoizedValues;
};
