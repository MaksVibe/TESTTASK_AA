import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import "./assets/fonts/Nunito-Regular.ttf";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Loader from "./components/Loader/Loader";

const App = React.lazy(() => import("./App"));

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense fallback={<Loader global />}>
        <App />
      </Suspense>
    </Provider>
  </React.StrictMode>
);
