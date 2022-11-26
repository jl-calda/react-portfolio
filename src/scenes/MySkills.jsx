import { motion } from "framer-motion";

import useMediaQuery from "../hooks/useMediaQuery";
import LineGradient from "../components/LineGradient";

const MySkills = ({ isAboveMediumScreens }) => {
  return (
    <section id="skills" className="pt-10 pb-24">
      {/* HEADER AND IMAGE SECTION*/}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playFair font-semibold text-4xl mb-5">
            MY <span className="text-red">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut non
            repellendus doloremque blanditiis dolor nam quidem unde hic a?
            Aspernatur ipsa eaque modi qui fuga!
          </p>
        </motion.div>
        <div className="mt-16 md:mt-0">
          {isAboveMediumScreens ? (
            <div className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10 before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]">
              <img
                alt="profile"
                className="z-10"
                src="../assets/skills-image.png"
              />
            </div>
          ) : (
            <img
              alt="profile"
              className="z-10"
              src="../assets/skills-image.png"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default MySkills;
