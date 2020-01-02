// Import React
import React from "react";
import styled from "react-emotion";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Code,
  Fit,
  Fill,
  Heading,
  Image,
  List,
  ListItem,
  Layout,
  Notes,
  Quote,
  Slide,
  Text,
  CodePane
} from "spectacle";

import Slides from "./slides";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const theme = createTheme(
  {
    primary: "#BB86FC",
    primaryVariant: "#3700B3",
    secondary: "#03DAC6",
    surfaceColor: "#121212"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        contentWidth={1200}
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
      >
        {Slides}
      </Deck>
    );
  }
}
