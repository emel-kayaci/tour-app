import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "@/shared/types";
import HomePageText from "@/assets/HomePageText.png";
import HomePage from "@/assets/HomePage.png";
// later change
import Sponsor1 from "@/assets/sponsor1.png";
import Sponsor2 from "@/assets/Sponsor2.png";
import Sponsor3 from "@/assets/sponsor3.png";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      {/* IMAGE AND MAIN HEADER */}
      <motion.div
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* MAIN HEADER */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* HEADINGS */}
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 md:before:content-tetext">
                <img src={HomePageText} alt="home-page-text" />
              </div>
            </div>
            <p className="mt-8 text-sm">
              Welcome to Travel Express, your one-stop travel agency for all
              your travel needs. Our experienced team of travel experts is
              dedicated to providing you with the best travel experiences,
              whether you're planning a weekend getaway or a month-long
              adventure. With a wide range of destinations, accommodations, and
              activities to choose from, we make it easy for you to explore the
              world and create unforgettable memories. Contact us today to start
              planning your next trip!
            </p>
          </motion.div>
          {/* ACTIONS*/}
          <motion.div
            className="mt-8 flex items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.1, duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Travelers!
            </ActionButton>
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-400"
              onClick={() => setSelectedPage(SelectedPage.Contact)}
              href={`#${SelectedPage.Contact}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </motion.div>
        </div>
        {/* IMAGE*/}
        <div className="flex basis-3/5 md:z-10 md:ml-40 md:mt-16">
          <img src={HomePage} alt="home-page-image" />
        </div>
      </motion.div>

      {/* SPONSORS*/}
      {isAboveMediumScreens && (
        <div className="h-[150px] w-full bg-primary-100 py-10">
          <div className="mx-auto w-5/6 ">
            <div className="flex w-3/5 items-center justify-between gap-6">
              <img src={Sponsor1} alt="sponsor-1" />
              <img src={Sponsor2} alt="sponsor-2" />
              <img src={Sponsor3} alt="sponsor-3" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
