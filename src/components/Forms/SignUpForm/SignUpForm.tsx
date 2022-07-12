import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { yupResolver } from '@hookform/resolvers/yup';

import { ErrorMessage } from 'components/SharedComponents/ErrorMessage/ErrorMessage.style';
import { Form, SubmitWrapper } from 'components/Forms/SignUpForm/SignUpForm.style';
import { useRegistrationWithFirebase } from 'hooks/useFirebaseRegistration';
import Button from 'components/SharedComponents/Button/Button';
import FormInput from 'components/SharedComponents/FormInput/FormInput';

interface ISignUpFormInputs {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUpForm = () => {
  const { t } = useTranslation();
  const { createUserWithFirebase, registrationErrorMessage, isRegistrationLoading } = useRegistrationWithFirebase();

  const schema = yup
    .object({
      userName: yup
        .string()
        .min(3, `${t('minLengthError')} 3`)
        .required(t('requiredFieldError')),
      email: yup.string().email(t('invalidEmailError')).required(t('requiredFieldError')),
      password: yup
        .string()
        .min(6, `${t('minLengthError')} 6`)
        .required(t('requiredFieldError')),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref('password'), null], t('matchPassowrdError'))
        .required(t('requiredFieldError')),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignUpFormInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit = ({ email, password, userName }: ISignUpFormInputs) => createUserWithFirebase(email, password, userName);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormInput<'userName'> error={errors.userName?.message} label={t('userName')} register={register('userName')} type="text" />
      <FormInput<'email'> error={errors.email?.message} label={t('email')} register={register('email')} type="email" />
      <FormInput<'password'> error={errors.password?.message} label={t('password')} register={register('password')} type="password" />
      <FormInput<'confirmPassword'>
        error={errors.confirmPassword?.message}
        label={t('confirmPassword')}
        register={register('confirmPassword')}
        type="password"
      />
      <SubmitWrapper>
        <Button fullWidth content={t('signUp')} isLoading={isRegistrationLoading} type="submit" />
        {registrationErrorMessage && <ErrorMessage>{t(registrationErrorMessage)}</ErrorMessage>}
      </SubmitWrapper>
    </Form>
  );
};

export default SignUpForm;
