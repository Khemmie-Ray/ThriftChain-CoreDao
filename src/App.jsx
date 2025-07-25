import React from "react";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router";
import Home from "./pages/Home";
import HomeLayout from "./Layout/HomeLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Route>
  )
);

const App = () => {
  return (
    <div className="max-w-[1550px] mx-auto font-dmsans text-[16px] text-dark">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
