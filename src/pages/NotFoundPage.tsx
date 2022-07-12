import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { userUidSelector } from 'store/selectors/user';

const NotFoundPage = () => {
  const isUserLogged = useSelector(userUidSelector);

  return <Navigate replace to={isUserLogged ? `/chat` : `/signin`} />;
};

export default NotFoundPage;
