import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '@src/components/Style/global.styles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={{ bg: '#20232a' }}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
