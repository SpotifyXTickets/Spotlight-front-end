import { SignJWT } from "jose";
import { NextResponse, NextRequest } from "next/server";
import { getJwtSecretKey } from "@/libs/auth";
import { GetServerSideProps, NextPage } from "next";
// import Cookies from "cookies";
import Cookies from "universal-cookie";
import { useRouter } from "next/router";
import { Page } from "@playwright/test";

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
          .setExpirationTime("2m")
          .sign(getJwtSecretKey());

        props = { success: true, twix_access_token: token };
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
  const router = useRouter();
  if (props.success) {
    const cookies = new Cookies();
    cookies.set("twix_access_token", props.twix_access_token, {
      path: "/",
      sameSite: "strict",
    });

    const twixRedirectUrl = cookies.get("twix_redirect_url");
    if (twixRedirectUrl) {
      cookies.remove("twix_redirect_url");
      router.push(twixRedirectUrl);
    }
    return <></>;
  }

  return <>Authentication failed</>;
};

export default SpotifyAuthorizer;
