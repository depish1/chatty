import { InputHTMLAttributes } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import { ErrorMessage } from 'components/SharedComponents/ErrorMessage/ErrorMessage.style';
import { Input, Label, Wrapper } from 'components/SharedComponents/FormInput/FormInput.style';

type IFormInputProps<GenericName extends string> = {
  register: UseFormRegisterReturn<GenericName>;
  label?: string;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const FormInput = <GenericName extends string>({ label, register, error, ...rest }: IFormInputProps<GenericName>) => {
  return (
    <Wrapper>
      {label && <Label>{label}</Label>}
      <Input isError={!!error} {...register} {...rest} />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Wrapper>
  );
};

export default FormInput;
