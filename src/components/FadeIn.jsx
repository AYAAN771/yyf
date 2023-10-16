"use client";

import { createContext, useContext } from "react";
import { motion, useReducedMotion } from "framer-motion";
const FadeInStaggerContext = createContext(false);

const viewport = { once: true, margin: "0px 0px -200px" };

const FadeIn = (props) => {
  const shouldReducedMotion = useReducedMotion();
  const isInStaggerGrp = useContext(FadeInStaggerContext);
  return <div>FadeIn</div>;
};

export default FadeIn;
