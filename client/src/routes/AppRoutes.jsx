import Login from "@/components/Login/Login";
import Layout from "@/layouts/Layout";
import LayoutAdmin from "@/layouts/LayoutAdmin";
import About from "@/pages/About";
import Dashboard from "@/pages/admin/Dashboard";
import Manage from "@/pages/admin/Manage";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router";
const AppRoutes = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/*Public*/}
          <Route element={<Layout/>}>
            <Route path="/" element={<Home/>} />
            <Route path="about" element={<About/>} />
          </Route>
          {/*Private*/}
          <Route
            path="admin"
            element={<LayoutAdmin/>}
          >
            <Route index element={<Dashboard/>} />
            <Route path="manage" element={<Manage/>} />
          </Route>



          {/*Test*/}
          <Route>
            <Route path="login" element={<Login/>}/>
          </Route>

          <Route path="*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRoutes;
