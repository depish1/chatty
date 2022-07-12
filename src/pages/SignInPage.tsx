import { useTranslation } from 'react-i18next';

import ColumnWrapper from 'components/SharedComponents/ColumnWrapper/ColumnWrapper';
import Link from 'components/SharedComponents/Link/Link';
import Logo from 'components/SharedComponents/Logo/Logo';
import SignInForm from 'components/Forms/SignInForm/SignInForm';

const SignIn = () => {
  const { t } = useTranslation();

  return (
    <ColumnWrapper>
      <Logo>Chatty</Logo>
      <SignInForm />
      <Link description={t('signUpLinkDescription')} linkText={t('signUp')} target="/signup" />
    </ColumnWrapper>
  );
};

export default SignIn;
