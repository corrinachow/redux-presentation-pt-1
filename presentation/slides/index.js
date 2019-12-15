import { cloneElement } from "react";

import Intro from "./01_intro";
// import React from "./02_react";

const slides = [].concat(Intro);

export default slides.map((slide, i) => cloneElement(slide, { key: i }));
