import { Outlet, Route, Routes } from "react-router-dom";
import Header from "../components/header";
import SideNav from "../components/side-nav";
import TaxReturns from "./tax-returns";

function HomePage() {
  return (
    <>
      <Header />
      <div class="row">
        <div class="col-md-2">
          <SideNav />
        </div>
        <div class="col-md-10">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default HomePage;
