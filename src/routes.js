import { Route, BrowserRouter, Routes } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Posts from "./pages/Posts";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route index element={<Home />} />
          <Route path="posts" element={<Posts />} />
        </Route>
        {/* <Route path="post-editor" element={}>

        </Route> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
