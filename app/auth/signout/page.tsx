import React from "react";
import SignoutPage from "./SignoutPage";
import { Metadata } from "next";

const Signout = () => {
  return <SignoutPage />;
};

export const metadata: Metadata = {
  title: "دیلی بلاگ - خروج",
  description: "صفحه خروج کاربر از دیلی بلاگ",
};

export default Signout;
