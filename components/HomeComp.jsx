"use client";

import React from "react";
import { motion } from "framer-motion";
import Nav from "./Nav";
const HomeComp = () => {
  return (
    <div className="maindiv">
      <Nav />

      <motion.div
        transition={{ duration: 0.5, delay: 0.5 }}
        initial={{ x: 0, y: 100, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        className="home"
      >
        {/* <video src={VideoFile.src}></video> */}
        {/* <video
          className="video"
          width={700}
          src={require("../public/videos/video.mp4")}
          autoPlay
          loop
          muted
        /> */}
      </motion.div>
    </div>
  );
};

export default HomeComp;
