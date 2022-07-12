import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { yupResolver } from '@hookform/resolvers/yup';

import { ErrorMessage } from 'components/SharedComponents/ErrorMessage/ErrorMessage.style';
import { Form, SubmitWrapper } from 'components/Forms/SignUpForm/SignUpForm.style';
import { useFirebaseLogin } from 'hooks/useFirebaseLogin';
import Button from 'components/SharedComponents/Button/Button';
import FormInput from 'components/SharedComponents/FormInput/FormInput';

interface ISignInFormInputs {
  email: string;
  password: string;
}

const SignUpForm = () => {
  const { t } = useTranslation();
  const { signInWithFirebase, loginErrorMessage, isLoginLoading } = useFirebaseLogin();

  const schema = yup
    .object({
      email: yup.string().email(t('uncorrectEmailError')).required(t('requiredFieldError')),
      password: yup
        .string()
        .min(6, `${t('minLengthError')} 6`)
        .required(t('requiredFieldError')),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignInFormInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit = ({ email, password }: ISignInFormInputs) => signInWithFirebase(email, password);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormInput<'email'> error={errors.email?.message} label={t('email')} register={register('email')} type="email" />
      <FormInput<'password'> error={errors.password?.message} label={t('password')} register={register('password')} type="password" />
      <SubmitWrapper>
        <Button fullWidth content={t('signIn')} isLoading={isLoginLoading} type="submit" />
        {loginErrorMessage && <ErrorMessage>{t(loginErrorMessage)}</ErrorMessage>}
      </SubmitWrapper>
    </Form>
  );
};

export default SignUpForm;
