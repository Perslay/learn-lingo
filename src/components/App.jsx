import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { NotFound } from "../pages/NotFound/NotFound";
import { Layout } from "./Layout/Layout";
import { Loader } from "./Loader/Loader";

const Home = lazy(() => import("../pages/Home/Home"));

export const App = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
          </Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Suspense>
    </>
  );
};
