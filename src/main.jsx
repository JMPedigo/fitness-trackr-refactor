import { AuthProvider } from "./auth/AuthContext";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";

import "./index.css";
import App from "./App.jsx";
import Layout from "./layout/Layout";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <Layout>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Layout>
  </AuthProvider>,
);
