import ActionButton from "@/shared/ActionButton";
import HText from "@/shared/HText";
import { AboutType, SelectedPage } from "@/shared/types";
import {
  HomeIcon,
  UserGroupIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import AboutUs from "@/assets/AboutUs.png";

const benefits: Array<AboutType> = [
  {
    icon: <HomeIcon className="h-6 w-6" />,
    title: "Comfortable Journey",
    description:
      "Our travel agency is committed to providing you with a seamless and stress-free travel experience.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "Trust of Countless Clients Worldwide",
    description:
      "When it comes to planning your next vacation or adventure, choosing a reliable and trustworthy travel agency is essential. By selecting a travel agency that has earned the trust and loyalty of countless clients worldwide, you can rest assured that you are in good hands. ",
  },
  {
    icon: <InformationCircleIcon className="h-6 w-6" />,
    title: "Expert Staff",
    description:
      "Our knowledgeable team is dedicated to making your travel dreams a reality.",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const About = ({ setSelectedPage }: Props) => {
  return (
    <section id="about" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.About)}>
        {/* HEADER */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>About Us</HText>
          <p className="my-5 text-sm">
            At Travel Express, we understand that travel is not just about
            visiting new places, it's about creating unforgettable memories that
            will last a lifetime. Our team of expert travel advisors is
            passionate about travel and has years of experience in the industry.
            They are always up-to-date with the latest travel trends and are
            dedicated to helping you plan your dream vacation.
          </p>
        </motion.div>
        {/* ABOUT US */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: AboutType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHIC */}
          <img className="mx-auto" src={AboutUs} alt="about-us" />
          <div>
            {/* TITLE */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves">
                <motion.div
                  className="md:my-5 md:w-3/5"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 1 }}
                  variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    CLIENTS WORLDWIDE ARE LIVING THEIR DREAM{" "}
                    <span className="text-primary-300">VACATIONS</span>
                  </HText>
                </motion.div>
              </div>
            </div>
            {/* DESCRIPTION */}
            <motion.div
              className="md:my-5 md:w-3/5"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 1 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                I had an amazing experience booking my vacation through Travel
                Express. Their team was so helpful in helping me choose the
                perfect destination, and they took care of all the details so
                that I could just sit back and relax on my trip.
              </p>
              <p>- Emma Ryan</p>
              <br></br>
              <p className="mb-5">
                I was initially hesitant to book through a travel agency, but
                Travel Express exceeded my expectations. They listened to my
                preferences and recommended a vacation package that was tailored
                to my needs, and their customer service was top-notch.
              </p>
              <br></br>
              <p>- Jake Smith</p>
            </motion.div>
            {/* BUTTON */}
            <div className="mt-16">
              <ActionButton setSelectedPage={setSelectedPage}>
                Travel Now
              </ActionButton>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
