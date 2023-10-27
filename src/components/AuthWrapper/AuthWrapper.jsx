import React from "react";
import { Link } from "react-router-dom";

export default function AuthWrapper() {
  return (
    <div>
      <Link to={"/login"}>Sign In</Link> or <Link to={"/signup"}>Sign Up</Link>
    </div>
  );
}
