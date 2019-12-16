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

const images = {
  formidagon: require("../assets/formidable-logo.svg"),
  goodWork: require("../assets/good-work.gif")
};

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
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
      >
        {Slides}

        <Slide bgColor="surfaceColor">
          <Image src={images.formidagon} width={800} />
        </Slide>
        <Slide transition={["fade"]} bgColor="surfaceColor">
          <Heading size={6} textColor="primary" caps>
            Typography
          </Heading>
          <Heading size={1} textColor="secondary">
            Heading 1
          </Heading>
          <Heading size={2} textColor="secondary">
            Heading 2
          </Heading>
          <Heading size={3} textColor="secondary">
            Heading 3
          </Heading>
          <Heading size={4} textColor="secondary">
            Heading 4
          </Heading>
          <Heading size={5} textColor="secondary">
            Heading 5
          </Heading>
          <Text size={6} textColor="secondary">
            Standard text
          </Text>
        </Slide>
        <Slide
          transition={["fade"]}
          bgColor="surfaceColor"
          textColor="tertiary"
        >
          <Heading size={6} textColor="secondary" caps>
            Standard List
          </Heading>
          <List>
            <ListItem bulletStyle="star">Item 1</ListItem>
            <ListItem bulletStyle="cross">Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="surfaceColor" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite margin="10px 0 0 30px">Author</Cite>
          </BlockQuote>
        </Slide>
        <Slide bgColor="surfaceColor">
          <Image src={images.goodWork} width={500} />
          <Notes>gifs work too</Notes>
        </Slide>
      </Deck>
    );
  }
}
