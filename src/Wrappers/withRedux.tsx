import { store } from "@services";
import { Provider } from "react-redux";

export const withRedux = (Component: React.FC) => {
  return () => {
    return (
      <Provider store={store}>
        <Component />
      </Provider>
    );
  };
}