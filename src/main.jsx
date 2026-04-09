import { createRoot } from "react-dom/client";
import "./index.css";
import AppRouter from "./Routes/AppRouter.jsx";
import { Provider } from "react-redux";
import { store } from "./app/store/Store.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";

let queryclient = new QueryClient();
createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryclient}>
    <Provider store={store}>
      <AppRouter />
      <ToastContainer />
    </Provider>
  </QueryClientProvider>,
);
