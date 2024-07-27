import { RouterProvider , createBrowserRouter } from 'react-router-dom';
import './App.css';
import Register from './pages/register/register';
import ErrorPage from './pages/error/errorPage';
import Login from './pages/login/login';
import Home from './pages/home/home';
import ChatPage from './pages/chatPage/chat';
import userData from './Components/data/data';

function App() {
  const router = createBrowserRouter([
    {
      path : '/',
      element : <Home />,
      errorElement : <ErrorPage />,
    },
    {
      path : '/login' ,
      element : <Login /> ,
      errorElement : <ErrorPage />
    },
    {
      path : '/register' ,
      element : <Register /> ,
      errorElement : <ErrorPage />
    },
    {
      path : '/chat' ,
      element : <ChatPage /> ,
      errorElement : <ErrorPage />
    }
    
  ])
  return (
    <RouterProvider router={router} />
)
}

export default App
