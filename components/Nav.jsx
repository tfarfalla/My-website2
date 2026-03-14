"use client"

import React, { useState } from "react";
import { motion } from "framer-motion";

const Nav = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open)
    console.log("click")
  }

  return (
    <>
      <motion.div
        initial={{ x: 0, y: -30, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="nav"
      >
        <div className="left"><a href="https://tonyfarfalla.com/" >TONY FARFALLA</a></div>
        <div className="right">
          
            <button onClick={() => handleClick()} className="info">
              Info
            </button>
          
        </div>
      </motion.div>
      <div className={`text`}>
        <p className={`${open ? "open pointer-events-auto" : "close pointer-events-none"}`}>
          Tony Farfalla is a multi-disciplinary artist, anthropologist and creative collaborator exploring the subtle space between form and feeling. <br/> Contact: <a href="mailto:tonyfarfalla@gmail.com">tonyfarfalla@gmail.com</a> <br/> Instagram: <a href="https://www.instagram.com/tony_farfalla">@tony_farfalla</a>
        </p>
      </div>
    </>
  );
};

export default Nav;
