import { SignUp } from "@clerk/nextjs";

import "./page.css";

export default function RegisterPage() {
  return <SignUp path="/register" />;
}
