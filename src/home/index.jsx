/* eslint-disable react/jsx-no-target-blank */
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Logo, HomeWrapper, HomeContent, Footer1, Footer2 } from "./home.style";
import Linkedin from "../images/linkedin.svg";
import Twitter from "../images/twitter.svg";
import ProfilePicture from "../images/yinka.png";
import Instagram from "../images/instagram.svg";
import TwitterBig from "../images/twitter-big.svg";
import LinkedInBig from "../images/linkedin-big.svg";
import InstagramSmall from "../images/instagram-small.svg";

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
    transition: { duration: 0.5 },
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
  }, 1000);

  return (
    <>
      {intro && (
        <div className="intro-div">
          <motion.div
            className=""
            initial={{ y: -250 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 120 }}
            exit={{ x: -1000 }}
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
                variants={containerVariant}
                initial="hidden"
                animate="visible"
              >
                <HomeContent>
                  <div className="flexed-intro">
                    <img src={ProfilePicture} alt={"profilePicture"} />
                    <h1 className="h1-web">Hello 👋🏽, I’m Olayinka!</h1>
                    <h1 className="h1-mobile">Hello 👋🏽, <br/> I’m Olayinka!</h1>
                  </div>

                  <motion.p variants={titleVariant}>
                    I’m an Experienced Designer with years of experience in
                    solving problems with user centric designs.
                  </motion.p>
                  <motion.p variants={titleVariant}>
                    I currently live in Amsterdam, Netherlands and work as a
                    User Experience Designer for the largest HR service provider
                    in the world,
                    <a href="https://www.randstad.com/" target="_blank">
                      <strong> Randstad Global</strong>
                    </a>
                    .
                  </motion.p>
                  <motion.p variants={titleVariant}>
                    I share my UX knowledge on Instagram <a href="https://www.instagram.com/yinka_ux/" target="_blank">
                      <strong>@yinka_ux</strong>
                    </a>, there, I
                    teach various UX concepts and share UX resources for new
                    designers and designers wanting to get better in their
                    field.
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
            <div className="container">
              <HomeContent>
                <h1>Let’s get in touch!</h1>
                <p>
                  If you would like to talk about a potential collaboration, an
                  opportunity, an idea or just want to chat with me, I’ll be
                  happy to hear from you.
                </p>

                <a
                  href="mailto:olayinkaodetola5@gmail.com"
                  target="_blank"
                  className="email"
                >
                  olayinkaodetola5@gmail.com
                </a>

                <div className="mobile logo-div">
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
                  <a href="https://www.instagram.com/yinka_ux/" target="_blank">
                    <motion.img
                      variants={imageVariant}
                      whileHover="hover"
                      src={InstagramSmall}
                      alt="Twitter logo"
                    />
                  </a>
                </div>

                <div className="web logo-div">
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
                      src={LinkedInBig}
                      alt="Twitter logo"
                    />
                  </a>
                  <a href="https://twitter.com/yinka_x" target="_blank">
                    <motion.img
                      variants={imageVariant}
                      whileHover="hover"
                      src={TwitterBig}
                      alt="Twitter logo"
                    />
                  </a>
                  <a href="https://www.instagram.com/yinka_ux/" target="_blank">
                    <motion.img
                      variants={imageVariant}
                      whileHover="hover"
                      src={Instagram}
                      alt="Twitter logo"
                    />
                  </a>
                </div>
              </HomeContent>
            </div>
          </Footer1>

          <Footer2>
            <div className="container">
              <p>Designed by Olayinka Fadare &copy; 2020</p>
            </div>
          </Footer2>
        </>
      )}
    </>
  );
}
