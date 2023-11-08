import { SignJWT } from "jose";
import { NextResponse, NextRequest } from "next/server";
import { GetServerSideProps, NextPage } from "next";
// import Cookies from "cookies";
import Cookies from "universal-cookie";
import { Page } from "@playwright/test";
import { getJwtSecretKey } from "@/libs/auth";
import { useEffect } from "react";

type PageProps = {
  success: boolean;
  twix_access_token?: string;
};

export const getServerSideProps: GetServerSideProps<PageProps> = async (
  context
) => {
  const { code, state } = context.query;

  let props = { success: false } as PageProps;

  if (code !== undefined && state !== undefined) {
    await fetch(
      `http://localhost:8000/authorize/spotify?state=${state}&code=${code}`
    )
      .then(async (res) => {
        const data = (await res.json()) as { accessToken: string };
        console.log(data);
        const token = await new SignJWT({
          accessToken: data.accessToken,
        })
          .setProtectedHeader({ alg: "HS256" })
          .setIssuedAt()
          .setExpirationTime("7d")
          .sign(getJwtSecretKey());

        props = { success: true, twix_access_token: token };
        const cookies = new Cookies();
        cookies.set("twix_access_token", token, {
          path: "/",
          sameSite: "strict",
        });

        const twixRedirectUrl = cookies.get("twix_redirect_url");
        if (twixRedirectUrl) {
          return {
            redirect: {
              permanent: false,
              destination: twixRedirectUrl,
            },
            props: { success: false, twix_access_token: undefined },
          };
        } else {
          return {
            redirect: {
              permanent: false,
              destination: "/playlist_selection",
            },
            props: { success: false, twix_access_token: undefined },
          };
        }
      })
      .catch((err) => {
        console.error(err);
      });

    return { props };
  }

  return {
    redirect: {
      permanent: false,
      destination: "http://localhost:8000/authorize",
    },
    props: { success: false, twix_access_token: undefined },
  };
};
export const SpotifyAuthorizer: NextPage<PageProps> = (props) => {
  useEffect(() => {
    if (props.success) {
      const cookies = new Cookies();
      cookies.set("twix_access_token", props.twix_access_token, {
        path: "/",
        sameSite: "strict",
      });

      const twixRedirectUrl = cookies.get("twix_redirect_url");
      if (twixRedirectUrl) {
        cookies.remove("twix_redirect_url");
        window.location.href = twixRedirectUrl;
      } else {
        window.location.href = "/playlist_selection";
      }
    }
  }, [props]);
  if (props.success) {
    return <></>;
  }

  return <>Authentication failed</>;
};

export default SpotifyAuthorizer;
