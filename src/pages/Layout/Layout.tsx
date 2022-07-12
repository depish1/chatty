import { Outlet } from 'react-router-dom';
import { Container } from 'pages/Layout/Layout.style';

const Layout = () => (
  <Container>
    <Outlet />
  </Container>
);

export default Layout;
