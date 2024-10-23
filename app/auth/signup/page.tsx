import React from "react";
import SignupPage from "./SignupPage";
import { Metadata } from "next";

const signupForm = () => {
  return <SignupPage />;
};

export const metadata: Metadata = {
  title: "دیلی بلاگ - ثبت نام",
  description: "صفحه ثبت نام کاربر در دیلی بلاگ",
};

export default signupForm;
