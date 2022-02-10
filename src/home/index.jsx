import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo, HomeWrapper, HomeContent, Footer1, Footer2 } from "./home.style";
import Linkedin from "../images/linkedin.svg";
import Twitter from "../images/twitter.svg";
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';

const containerVariant = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      mass: 0.4,
      damping: 8,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const titleVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {duration:0.5},
  },
};

const imageVariant = {
  hover: {
    scale: 1.3,
    boxShadow: "rgba(0, 0, 0, 0.2) 0px 3px 6px 4px",
    transition: {
      type: "spring",
      stiffness: 300,
      yoyo: Infinity,
      duration: 0.3,
    },
  },
};

export default function Home() {
  const [intro, setIntro] = useState(true);
  const [content, setContent] = useState(false);
  setTimeout(() => {
    setIntro(false);
    setContent(true);
  }, 2000);

  return (
    <>
      
        {intro && (
          <div className="intro-div">
            <motion.div
              className=""
              initial={{ y: -250 }}
              animate={{ y: 0 }}
              transition={{ type: "spring", stiffness: 120 }}
              exit={{x:-1000}}
            >
              <Logo>Olayinka Fadare</Logo>
            </motion.div>
          </div>
        )}

      {content && (
        <>
          <HomeWrapper>
            <div className="container">
              <motion.div
                initial={{ y: -250 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
              >
                <Logo>Olayinka Fadare</Logo>
              </motion.div>

              {/* content */}
              <motion.div
                variants={containerVariant}
                initial="hidden"
                animate="visible"
              >
                <HomeContent>
                  <h1>Hello 👋🏽, I’m Olayinka!</h1>

                  <motion.p variants={titleVariant}>
                    I’m an Experienced Designer with over 4 years of experience
                    in solving problems with user centric designs.
                  </motion.p>
                  <motion.p variants={titleVariant}>
                    I currently live in Amsterdam, Netherlands and work as a
                    User Experience Designer at{" "}
                    <a href="https://www.randstad.com/" target="_blank">
                      <strong>Randstad Global</strong>
                    </a>
                    .
                  </motion.p>
                  <motion.p variants={titleVariant}>
                    The core of my work involves working collaboratively with
                    stakeholders to understand business goals, data, technical
                    constraints, break down insights, ideate, brainstorm
                    solutions and deliver the most easy to use, intuitive and
                    delightful products.
                  </motion.p>
                  <motion.p variants={titleVariant}>
                    When I'm not knee-deep in some design work, I travel and
                    explore new places.
                  </motion.p>
                </HomeContent>
              </motion.div>
            </div>
          </HomeWrapper>
         
          <Footer1>
          <Fade bottom>
            <div className="container">
              <HomeContent>
                <h1>Let’s get in touch!</h1>
                <p>
                  If you would like to talk about a potential collaboration, an
                  opportunity, an idea or just want to chat with me, I’ll be
                  happy to hear from you.
                </p>
                <Fade left>
                <a href="mailto:olayinkaodetola5@gmail.com" target="_blank" className="email">
                  olayinkaodetola5@gmail.com
                </a>
                </Fade>
                <div className="logo-div">
                  <a
                    href="https://www.linkedin.com/in/olayinka-fadare/"
                    whileHover={{
                      scale: 1.1,
                      boxShadow: "0px 0px 8px rgb(255, 255, 255)",
                    }}
                  >
                    <motion.img
                      variants={imageVariant}
                      whileHover="hover"
                      src={Linkedin}
                      alt="Twitter logo"
                    />
                  </a>
                  <a href="https://twitter.com/yinka_x" target="_blank">
                    <motion.img
                      variants={imageVariant}
                      whileHover="hover"
                      src={Twitter}
                      alt="Twitter logo"
                    />
                  </a>
                </div>
              </HomeContent>
            </div>
        </Fade>

          </Footer1>
          
          <Footer2>
              
            <div className="container">
              <p>
                Designed by <strong>Olayinka Fadare</strong> &copy; 2020
              </p>
            </div>
          </Footer2>
        </>
      )}
    </>
  );
}
