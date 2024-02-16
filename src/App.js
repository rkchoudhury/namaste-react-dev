import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";

import Header from "./components/Header";
import Body from "./components/Body";
import Error from "./components/Error";
import About from "./components/About";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import store from "./redux/store";

const AppLayout = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <Header />
        {/* <Body /> */}
        <Outlet />
      </div>
    </Provider>
  );
};

const Grocery = lazy(() => import("./components/Grocery"));

/**
 * Here with each links we are navigating to different pages
 */
const rootRouter1 = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

/**
 * By making the children of AppLayout component we are rendering About and Contact screen on the same screen
 * Here the Header will be fixed and the Outlet content will be replaced by the specified element when we are navigating to the specified path
 */
const rootRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={rootRouter} />);
