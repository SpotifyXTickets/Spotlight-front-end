import "../styles/pages/_log-in.scss";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";



export default function Login() {
  return (
    <section>
      <NavBar />
      <main className="log-in-block">
        <h1>Best way to find the perfect music event </h1>
        <p>Welcome to the world of music events that was created for you </p>
        <button>Continue with Spotify</button>
   

        
      </main>
      <Footer />
    </section>
  );
}