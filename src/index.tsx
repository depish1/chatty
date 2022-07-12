import { Helmet, HelmetProvider } from 'react-helmet-async';
import { StrictMode } from 'react';
import { ThemeProvider } from 'styled-components';
import { createRoot } from 'react-dom/client';

import './translation/i18n';
import App from 'App';
import GlobalStyles from 'styles/GlobalStyles';
import theme from 'styles/themes';
import { Provider } from 'react-redux';
import store from 'store/store';

const rootElement = document.getElementById('root') as HTMLElement;
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <App />
          <Helmet>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Anek+Latin:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
          </Helmet>
          <GlobalStyles />
        </ThemeProvider>
      </Provider>
    </HelmetProvider>
  </StrictMode>,
);
