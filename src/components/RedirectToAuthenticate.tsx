"use client";
import { useContext, useEffect } from "react";
import { useCookies } from "react-cookie";

export default function RedirectIfUnAuthenticated() {
  const [cookies, setCookie, removeCookie] = useCookies(["api_access_token"]);

  useEffect(() => {
    // const token = window.sessionStorage.getItem("api_access_token");
    // const contextToken = apiToken;

    if (cookies.api_access_token === undefined) {
      // window.open("http://localhost:8000/authorize", "_blank");
      window.location.href = "http://localhost:8000/authorize";
    }
  }, [cookies]);

  return <></>;
}
