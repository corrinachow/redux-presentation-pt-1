import React from "react";
import {
  BlockQuote,
  Cite,
  Deck,
  Code,
  Heading,
  Fit,
  Fill,
  Image,
  List,
  Link,
  ListItem,
  Layout,
  Notes,
  Quote,
  Slide,
  Text,
  CodePane
} from "spectacle";
import notes from "./notes";

export default [
  <Slide>
    {notes.reactIntro}
    <BlockQuote>"A JavaScript Library for Building User Interfaces"</BlockQuote>
    <Cite>
      <Link href="https://reactjs.org/">React</Link>
    </Cite>
  </Slide>,
  <Slide>{notes.declarativeComponent}...</Slide>
];
