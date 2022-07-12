import { Wrapper } from './ColumnWrapper.style';

interface IBaseWrapperProps {
  children: JSX.Element | JSX.Element[];
}

const ColumnWrapper = ({ children }: IBaseWrapperProps) => <Wrapper>{children}</Wrapper>;

export default ColumnWrapper;
