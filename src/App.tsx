import { motion } from "framer-motion";
import { heroBanner2 } from "./data";
import Navbar from "./components/Navbar";
import Heading from "./components/Heading";
import WhyUs from "./components/WhyUs";
import TopGames from "./components/TopGames";
import UserRating from "./components/UserRating";
import HowToInstall from "./components/HowToInstall";
import FAQ from "./components/Faq";
import About from "./components/About";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />

      <motion.div
        id="Home"
        className="flex  gt    justify-center bg-gray-100 "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="pt-20">
          <img
            src={heroBanner2}
            height={1200}
            className="w-screen object-center object-contain"
            width={1200}
            alt="herobanner"
          />
        </div>
      </motion.div>
      <Heading title="Why us ">
        <WhyUs />
      </Heading>
      <Heading title="Top Games">
        <TopGames />
      </Heading>
      <Heading title="Binzo Winners">
        <UserRating />
      </Heading>
      <Heading title="FAQ">
        <FAQ />
      </Heading>
      <Heading title="About">
        <About />
      </Heading>
      <Heading title="Why Binzo">
        <WhyUs />
      </Heading>

      <Heading title="How to Install & Download App">
        <HowToInstall />
      </Heading>
      <Heading title="Binzo App">
        <Footer />
      </Heading>
    </div>
  );
};

export default App;
