import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './Components/Home/HomePage.jsx';
import ListedBooks from './Components/Listed Books/ListedBooks.jsx';
import BookChart from './Components/Books Chart/BookChart.jsx';
import BookDetails from './Components/Home/Books/BookDetails.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <HomePage></HomePage>
      },
      {
        path: '/listedBooks',
        loader: () => fetch('/booksdata.json'),
        element: <ListedBooks></ListedBooks>
      },
      {
        path: '/bookChart',
        element: <BookChart></BookChart>
      },
      {
        path: '/bookDetails/:id',
        loader: () => fetch('../booksdata.json'),
        element: <BookDetails></BookDetails>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
