import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import PostDetails from "./Components/PostDetails";
import Posts from "./Components/Posts";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Posts></Posts>,
    },
    {
      path: "/postDetails/:id",
      element: <PostDetails></PostDetails>,
    },
  ]);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
