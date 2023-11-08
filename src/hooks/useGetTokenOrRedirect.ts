"use client";
import Cookies from "universal-cookie";
import { useRouter } from "next/router";
import { verifyJwtToken } from "@/libs/auth";
import { useEffect, useMemo } from "react";

export const useGetTokenOrRedirect = (): string => {
  const cookies = useMemo(() => new Cookies(), []);
  const token = cookies.get("twix_access_token") ?? null;
  const router = useRouter();

  useEffect(() => {
    (async () => {
      const verifiedToken = await verifyJwtToken(token ?? "");

      if (!verifiedToken) {
        cookies.set("twix_redirect_url", router.pathname, {
          path: "/",
        });
        router.push("/spotify_authorizer");
      }
    })();
  }, [router, token, cookies]);

  return token;
};
