import React from "react";
import UserRoutes from "../routes/UserRoutes";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function BaseLayout() {
  return (
    <div className="base-layout min-h-screen">
      <Header />
      <UserRoutes />
      <Footer />
    </div>
  );
}
