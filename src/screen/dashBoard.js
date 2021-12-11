import React from "react";
import { useEffect } from "react";
import jwt from "jsonwebtoken";
import { useNavigate } from "react-router-dom";

export default function DashBoard() {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = jwt.decode(token);
      if (!user) {
        localStorage.removeItem("token");
        // window.location.href = "/"; // either do this way or uesr navigate hook
        navigate("/register");
      } else {
      }
    }
  }, []);
  return <div>I must be visible after login</div>;
}
