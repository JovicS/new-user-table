import './App.css';
import Login from './pages/login';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Users from './pages/users';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/users",
      element: <Users />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
