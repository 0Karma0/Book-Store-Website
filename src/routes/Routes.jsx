import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layout/mainLayout'
import Home from '../pages/Home'
import ListedBooks from '../components/ListedBooks'
import PagesToRead from '../components/PagesToRead'
import ErrorPage from '../pages/ErrorPage'
import ListedBooksDetails from '../pages/ListedBooksDetails'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/listedBooks',
        element:<ListedBooks></ListedBooks>
      },
      {
        path: '/pagesToRead',
        element:<PagesToRead></PagesToRead>
      },
      {
        path: '/listedBooks-details/:id',
        element:<ListedBooksDetails></ListedBooksDetails>
      },
    ],
  },
])