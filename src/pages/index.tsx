import "../app/globals.scss";
import "../styles/pages/_login.scss";

import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";

import Button from "@/components/Button";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

import SpotifyIcon from "@/assets/icons/spotify-icon.svg";
import ArrowLeft from "@/assets/login-arrow-left.png";
import ArrowRight from "@/assets/login-arrow-right.png";
import PhoneIcon from "@/assets/icons/phone.svg";
import NoteIcon from "@/assets/icons/note.svg";
import TicketIcon from "@/assets/icons/ticket-login.svg";
import QuoteIcon from "@/assets/icons/quote.svg";
import ExampleUser from "@/assets/user-example.png";

import test1 from "@/assets/community-1.png";
import test2 from "@/assets/community-2.png";
import test3 from "@/assets/community-3.png";
import test4 from "@/assets/community-4.png";
import test5 from "@/assets/community-5.png";
import test6 from "@/assets/community-6.png";

const processData = [
  {
    id: 1,
    icon: PhoneIcon,
    title: "Sync Your Spotify Account",
    description: "Share your Spotify listening habits.",
  },

  {
    id: 2,
    icon: NoteIcon,
    title: "Explore Recommended Events",
    description: "Explore events that are perfectly matched to your taste!",
  },

  {
    id: 2,
    icon: TicketIcon,
    title: "Buy Tickets Through Our Partner",
    description: "With one click, buy tickets to that perfect event.",
  },
];

const communityData = [
  { id: 1, image: test1, item: "item-1" },
  { id: 2, image: test2, item: "item-2" },
  { id: 3, image: test3, item: "item-3" },
  { id: 4, image: test4, item: "item-4" },
  { id: 5, image: test6, item: "item-5" },
  { id: 6, image: test5, item: "item-6" },
];

export default function Login() {
  return (
    <section className="login">
      <NavBar />
      <main className="login__background">
        <div className="login__wrapper">
          <h1 className="login__header">Discover Perfect Events For You</h1>
          <p className="login__description">
            Sign in with Spotify for personalised event recommendations!
          </p>
          <Link href="/select-playlists">
            <Button
              text="text-[#fbf9f9]"
              background="bg-[#6e3aff]"
              icon={SpotifyIcon}
            >
              Sign in with Spotify
            </Button>
          </Link>
        </div>

        <section className="login__process">
          <h2 className="login__process-header">
            Music Events <br /> matched to you
          </h2>

          {processData.map((item) => (
            <Fragment key={item.id}>
              <div className="login__process-icon-wrapper">
                <Image src={item.icon} alt={item.icon} />
              </div>
              <h4 className="login__process-step-title">{item.title}</h4>
              <p className="login__process-step-description">
                {item.description}
              </p>
            </Fragment>
          ))}
          <Image
            className="login__process-arrow-left"
            src={ArrowLeft}
            alt="arrow left"
          />
          <Image
            className="login__process-arrow-right"
            src={ArrowRight}
            alt="arrow right"
          />
        </section>

        <section className="login__users">
          <h2 className="login__users-header">Our Happy Users</h2>
          <div className="login__users-wrapper">
            <Image
              className="login__users-quotes"
              src={QuoteIcon}
              alt="Quotes"
            />
            <p className="login__users-description">
              Spot-on music matches and a personalized touch made my event
              discovery journey truly delightful. This platform is fantastic for
              music enthusiasts seeking curated and enjoyable experiences.
            </p>
            <Image
              className="login__users-user-image"
              src={ExampleUser}
              alt="User picture"
            />
            <div>
              <span className="text-white">Carl Ostin </span>
              <span className="text-[#919297]">/ Student</span>
            </div>
          </div>
        </section>

        <section className="login__community">
          <h2 className="login__community-header">
            Join our community #Spotlighted
          </h2>
          <p className="login__community-description">
            Join our online communities for personalised fun and connections.
          </p>
          <div className="login__community-grid">
            {communityData.map((item) => (
              <Image
                className="login__community-image"
                key={item.id}
                id={item.item}
                src={item.image}
                alt="Community image"
              />
            ))}
          </div>
        </section>

        <div className="px-12 lg:px-4 -mt-14">
          <Link href="/select-playlists">
            <Button
              text="text-[#fbf9f9]"
              background="bg-[#6e3aff]"
              icon={SpotifyIcon}
            >
              Sign in with Spotify
            </Button>
          </Link>
        </div>
      </main>
      <div className="pt-[138rem] pb-0.5">
        <Footer />
      </div>
    </section>
  );
}
