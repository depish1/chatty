import { useTranslation } from 'react-i18next';

import ColumnWrapper from 'components/SharedComponents/ColumnWrapper/ColumnWrapper';
import Link from 'components/SharedComponents/Link/Link';
import Logo from 'components/SharedComponents/Logo/Logo';
import SignUpForm from 'components/Forms/SignUpForm/SignUpForm';

const SignUp = () => {
  const { t } = useTranslation();

  return (
    <ColumnWrapper>
      <Logo>Chatty</Logo>
      <SignUpForm />
      <Link description={t('signInLinkDescription')} linkText={t('signIn')} target="/signin" />
    </ColumnWrapper>
  );
};

export default SignUp;
