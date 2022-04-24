import { AppProps } from "next/app";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { useStore } from "../store";

const CustomApp = ({ Component, pageProps }: AppProps): JSX.Element => {

    return (
        <Provider store={useStore}>
              <Component {...pageProps} />
        </Provider>
    );
};

export default CustomApp;


