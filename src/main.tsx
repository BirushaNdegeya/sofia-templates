import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router";
import "./css/index.css";
import Layout from "./layouts/layout";
import Home from "./components/pages/home";
import Templates from "./components/pages/templates";
import TemplateDetail from "./components/pages/template-detail";
import About from "./components/pages/about";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/templates",
        element: <Templates />,
      },
      {
        path: "/templates/:slug",
        element: <TemplateDetail />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
