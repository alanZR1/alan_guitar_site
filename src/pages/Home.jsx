import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import Featured from "../components/home/LatestContent";
import Footer from "../components/layout/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Featured />
      <Footer />
    </div>
  );
}

export default Home;