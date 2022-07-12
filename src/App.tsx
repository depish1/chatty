import 'utils/firebase';
import { HashRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';

import ChatPage from 'pages/ChatPage';
import Layout from 'pages/Layout/Layout';
import RequireAuthentication from 'utils/RequireAuthentication';
import SignInPage from 'pages/SignInPage';
import SignUpPage from 'pages/SignUpPage';
import NotFoundPage from 'pages/NotFoundPage';

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/chat" element={RequireAuthentication(<ChatPage />)} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
