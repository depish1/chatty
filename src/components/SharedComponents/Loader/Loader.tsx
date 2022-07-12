import { InnerLoader, OuterLoader } from './Loader.style';

interface ILoaderProps {
  size: number;
  borderWidth: number;
}

const Loader = ({ ...props }: ILoaderProps) => (
  <OuterLoader {...props}>
    <InnerLoader {...props} />
  </OuterLoader>
);

export default Loader;
