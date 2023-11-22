import React from "react";
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
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "group/:groupId",
        element: <Group />,
      },
      {
        path: "group/:groupId/edit",
      },
    ],
  },

  {
    path: "/login",
    element: <LoginLayout />,
    children: [
      {
        path: "",
        element: <Login />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
