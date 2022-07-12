import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { userUidSelector } from 'store/selectors/user';

const RequireAuthentication = (children: JSX.Element) => {
  const isUserLogged = useSelector(userUidSelector);

  if (!isUserLogged) return <Navigate replace to={`/signin`} />;

  return <>{children}</>;
};

export default RequireAuthentication;
