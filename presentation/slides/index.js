import { cloneElement } from "react";

import Intro from "./01_intro";
import React from "./02_react";
import Redux from "./03_redux";
import Outro from "./04_outro";

const slides = [].concat(Intro, React, Redux, Outro);

export default slides.map((slide, i) => cloneElement(slide, { key: i }));
