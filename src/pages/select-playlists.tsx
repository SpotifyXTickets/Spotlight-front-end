import "../styles/pages/_select-playlists.scss";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import PlaylistSection from "@/components/PlaylistSection";
import SearchBar from "@/components/SearchBar";
import Button from "@/components/Button";
import { GetServerSideProps, NextPage } from "next";
import { PlaylistType } from "@/types/types";
import Cookies from "universal-cookie";
import { verifyJwtToken } from "@/libs/auth";

type PageProps = {
  playlist: PlaylistType | null;
};

export const getServerSideProps: GetServerSideProps<PageProps> = async (
  context
) => {
  const cookies = new Cookies();
  console.log(cookies.getAll());
  const twix_access_token = verifyJwtToken(cookies.get("twix_access_token"));

  console.log(await twix_access_token);
  // const accessToken = ((await twix_access_token) as { accessToken: string })
  //   .accessToken;

  // await fetch("http://localhost:8000/playlist", {
  //   headers: {
  //     Authorization: `Bearer ${accessToken}`,
  //   },
  // }).then(async (res) => {
  //   return { props: { playlist: (await res.json()) as PlaylistType } };
  // });

  return {
    props: {
      playlist: null,
    },
  };
};
export const SelectPlaylists: NextPage<PageProps> = (props) => {
  return (
    <section>
      <NavBar />
      <main className="select-playlists">
        <h2 className="select-playlists__header">Select Playlists</h2>
        <p className="select-playlists__info">
          Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit.
        </p>
        <SearchBar />
        <PlaylistSection />
      </main>
      <section className="select-playlists__buttons">
        <Button
          text="text-[#6e3aff]"
          background="bg-[#fbf9f9]"
          border="border"
          borderColor="border-[#6e3aff]"
        >
          Skip This Step
        </Button>
        <Button text="text-[#fbf9f9]" background="bg-[#6e3aff]">
          Get Started
        </Button>
      </section>
      <Footer />
    </section>
  );
};

export default SelectPlaylists;
