import React from "react";
// import { Provider } from 'react-redux';
import ReactDOM from "react-dom/client";
import {
  RouterProvider,
  createBrowserRouter,
  // redirect,
} from "react-router-dom";
import "./style.css";

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import LoginLayout from './layouts/LoginLayout';
import MainLayout from "./layouts/MainLayout";
import Login from './views/Login';
import Group from "./views/Group";
import Home from "./views/Home";
import { Form } from "./views/Form";
import redirectIfAuthenticated, { redirectIfUnauthenticated } from "./middlewares/authentication";

// import store from "./store/index"

// Your web app's Firebase configuration``
const firebaseConfig = {
  apiKey: "AIzaSyAJqUtMzGsoOqOkA0zklllp4jamOLdilbc",
  authDomain: "foodiehub-3ba28.firebaseapp.com",
  projectId: "foodiehub-3ba28",
  storageBucket: "foodiehub-3ba28.appspot.com",
  messagingSenderId: "28675153325",
  appId: "1:28675153325:web:fc79bcb6d296e90ed25524",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    loader: redirectIfUnauthenticated,
  },
  {
    path: "/new-group",
    element: <Form />,
    loader: redirectIfUnauthenticated,
  },
  {
    path: "/edit-profile/:userId",
    element: <Form />,
    loader: redirectIfUnauthenticated,
  },
  {
    path: "/",
    element: <MainLayout />,
    loader: redirectIfUnauthenticated,
    children: [
      {
        path: "group/:groupId",
        element: <Group />,
        loader: redirectIfUnauthenticated,
      },
      {
        path: "group/:groupId/edit",
        loader: redirectIfUnauthenticated,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginLayout />,
    loader: redirectIfAuthenticated,
    children: [
      {
        path: "",
        element: <Login />,
        loader: redirectIfAuthenticated,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <RouterProvider router={router} />
    {/* </Provider> */}
  </React.StrictMode>
);
