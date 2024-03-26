import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "@layouts/Layout";
import ErrorPage from "@pages/ErrorPage";
import Home from "@pages/Home";
import BookDetails from "@pages/BookDetails";
import ListedBooks from "@pages/ListedBooks";

const router = createBrowserRouter([
   {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
         {
            path: "/",
            element: <Home />,
            loader: () => fetch("/books.json"),
         },
         {
            path: "/book/:id",
            element: <BookDetails />,
            loader: () => fetch("/books.json"),
         },
         {
            path: "/listed-books",
            element: <ListedBooks />,
            loader: () => fetch("/books.json"),
         },
      ],
   },
]);

export default () => {
   return <RouterProvider router={router} />;
};
