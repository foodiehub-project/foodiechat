import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from 'react-router-dom';
import './style.css';

import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import LoginLayout from './layouts/LoginLayout';
import MainLayout from './layouts/MainLayout';

// Your web app's Firebase configuration``
const firebaseConfig = {
  apiKey: "AIzaSyAJqUtMzGsoOqOkA0zklllp4jamOLdilbc",
  authDomain: "foodiehub-3ba28.firebaseapp.com",
  projectId: "foodiehub-3ba28",
  storageBucket: "foodiehub-3ba28.appspot.com",
  messagingSenderId: "28675153325",
  appId: "1:28675153325:web:fc79bcb6d296e90ed25524",
  databaseURL: "https://foodiehub-3ba28-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
      },
      {
        path: "group/:groupId"
      },
      {
        path: ""
      }
    ]
  },
  {
    path: "/login",
    element: <LoginLayout />,
    children: [
      {
        path: ""
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
