import { SelectedPage, TourType } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Tour from "./Tour";

const tours: Array<TourType> = [
  {
    name: "Highlights of Turkey",
    description:
      "Discover the best of Turkey on this exciting tour! Explore Istanbul's rich history and vibrant culture, marvel at the stunning landscapes of Cappadocia, visit ancient ruins at Ephesus, and soak up the sun on the beautiful beaches of Antalya. With delicious food and warm hospitality, Turkey is waiting to be explored!",
    image: image1,
  },
  {
    name: "Discovering İzmir",
    description:
      "Explore the vibrant city of İzmir with our guided tour. Visit the ancient Roman city of Ephesus, stroll along the Kordon Promenade, taste local cuisine in the Kemeralti Bazaar.",
    image: image2,
  },
  {
    name: "Charming France",
    description:
      "Experience the magic of Paris, stroll through the lavender fields of Provence, explore the châteaux of the Loire Valley, and indulge in the culinary delights of Lyon. This 10-day tour will take you on a journey through the heart of France.",
    image: image3,
  },
  {
    name: "Italian Adventure",
    description:
      "Experience the beauty of Italy on this 10-day adventure. Visit Rome's ancient landmarks, explore the charming canals of Venice, and savor the flavors of Tuscany. Take in the breathtaking views of the Amalfi Coast and indulge in the culinary delights of Naples. This tour is the perfect mix of history, culture, and relaxation.",
    image: image4,
  },
  {
    name: "Discovering Germany",
    description:
      "Join us on a journey through Germany's vibrant cities and stunning countryside. Explore Berlin's rich history, experience Munich's famous beer gardens, and soak in the beauty of the Black Forest. From castles to culture, this tour offers a taste of all Germany has to offer.",
    image: image5,
  },
  {
    name: "Kuşadasi Dream",
    description:
      "Explore the charming coastal town of Kuşadasi on this half-day tour. Visit the ancient Roman city of Ephesus, stroll through the picturesque streets of the town center, and soak up the sun on the sandy beaches along the Aegean Sea.",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (selectedPage: SelectedPage) => void;
};

const OurTours = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourtours" className="w-full bg-primary-100  py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurTours)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>OUR TOURS</HText>
            <p className="py-5">
              Travel Express is proud to offer a range of exciting tours to some
              of the world's most popular destinations. For those looking to
              explore the City of Love, our "Paris in Four Days" tour offers a
              comprehensive itinerary that covers the city's most famous
              landmarks, including the Eiffel Tower, Notre-Dame Cathedral, and
              the Louvre Museum. For those with more time on their hands, our
              "Turkey in a Month" tour allows you to immerse yourself in the
              rich cultural history and stunning landscapes of this fascinating
              country. From the bustling streets of Istanbul to the ancient
              ruins of Ephesus, this tour has something for everyone. No matter
              which tour you choose, Travel Express guarantees an unforgettable
              experience that will leave you with memories to last a lifetime.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden ">
          <ul className="w-[2800px] whitespace-nowrap">
            {tours.map((item: TourType, index) => (
              <Tour
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurTours;
