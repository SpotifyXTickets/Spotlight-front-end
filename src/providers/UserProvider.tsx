import { createContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";

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

export const UserContext = createContext<{
  user?: User;
}>({ user: undefined });

export default function UserProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<User>();
  const [cookies, setCookies, removeCookies] = useCookies(["api_access_token"]);

  useEffect(() => {
    if (cookies.api_access_token === undefined) {
      return;
    }

    fetch("http://localhost:8000/user", {
      headers: {
        Authorization: `Bearer ${cookies.api_access_token}`,
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
  }, [cookies]);
  return (
    <UserContext.Provider
      value={{
        user: user,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
