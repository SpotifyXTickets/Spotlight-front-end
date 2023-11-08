import { createContext, useEffect, useState } from "react";
import Cookies from "universal-cookie";
import { useAuth } from "@/hooks/useAuth";
import { GetServerSideProps, NextPage } from "next";
import { useCookies } from "react-cookie";
import { verifyJwtToken } from "@/libs/auth";
import { JWTPayload } from "jose";

type User = {
  country: string;
  display_name: string;
  email: string;
  explicit_content: {
    filter_enabled: boolean;
    filter_locked: boolean;
  };
  external_urls: {
    spotify: string;
  };
  followers: {
    href: string | null;
    total: number;
  };
  href: string;
  id: string;
  images: {
    url: string;
    height: number;
    width: number;
  }[];
  product: string;
  type: string;
  uri: string;
};

type PageProps = {
  api_access_token: string;
};

export const UserContext = createContext<{
  user?: User;
}>({ user: undefined });

export const UserProvider: NextPage<{ children: React.ReactNode }> = (
  props
) => {
  console.log(props); //
  const [user, setUser] = useState<User>();
  useEffect(() => {
    const cookies = new Cookies();

    const getUser = async () => {
      const twix_access_token = await verifyJwtToken(
        cookies.get("twix_access_token")
      );
      const accessToken = ((await twix_access_token) as { accessToken: string })
        .accessToken;

      console.log(accessToken);
      fetch("http://localhost:8000/user", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
        .then(async (res) => {
          console.log(res);
          const data = (await res.json()) as User;
          setUser(data);
        })
        .catch((err) => {
          console.error(err);
        });
    };

    getUser();
  }, []);
  return (
    <UserContext.Provider
      value={{
        user: user,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
