import { Provider } from "@self.id/react";

export default function App({ Component, pageProps }) {
  return (
    <Provider client={{ cermaic: "testnet-clay" }}>
      <Component {...pageProps} />
    </Provider>
  );
}
