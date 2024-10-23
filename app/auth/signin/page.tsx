import { Metadata } from "next";
import SigninPage from "./SigninPage";

const Signin = () => {
  return <SigninPage />;
};

export const metadata: Metadata = {
  title: "دیلی بلاگ - ورود",
  description: "صفحه ورود کاربر در دیلی بلاگ",
};

export default Signin;
