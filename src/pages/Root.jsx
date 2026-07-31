import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

function RootLayout() {
  return (
    <>
      <MainNavigation />
      <h1>Root Layout</h1>
      <Outlet />
    </>
  );
}

export default RootLayout;
