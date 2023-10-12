"use client";
import { useSearchParams } from "next/navigation";
import React, { useContext, useEffect } from "react";
import { useCookies } from "react-cookie";

export const SpotifyAuthorizer: React.FC = () => {
  const searchParams = useSearchParams();
  const [cookies, setCookie, removeCookie] = useCookies(["api_access_token"]);
  useEffect(() => {
    if (searchParams !== null) {
      const code = searchParams.get("code");
      const state = searchParams.get("state");

      if (code === null || state === null) {
        return;
      }

      fetch(
        `http://localhost:8000/authorize/spotify?state=${state}&code=${code}`
      )
        .then(async (res) => {
          const data = (await res.json()) as { accessToken: string };
          setCookie("api_access_token", data.accessToken, { path: "/" });
        })
        .catch((err) => {
          console.error(err);
        })
        .finally(() => {
          // window.location.href = "http://localhost:3000/";
        });
    }
  }, [searchParams, setCookie]);

  return <></>;
};

export default SpotifyAuthorizer;
