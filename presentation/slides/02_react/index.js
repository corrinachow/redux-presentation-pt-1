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

import declarativeExample from "raw-loader!./declarative.example";
import imperativeExample from "raw-loader!./imperative.example";

const images = {
  mvcDiagram: require("../../assets/mvc-diagram.png")
};

export default [
  <Slide bgColor="surfaceColor" textColor="primary">
    {notes.reactIntro}
    <Image
      width="75px"
      src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
    />
    <BlockQuote>"A JavaScript Library for Building User Interfaces"</BlockQuote>
    <Cite>
      <Link href="https://reactjs.org/">React</Link>
    </Cite>
  </Slide>,
  MVCSlide(),
  imperativeDeclarativeSlide()
];

function MVCSlide() {
  return (
    <Slide bgColor="surfaceColor" textColor="primary">
      {notes.reactIntro}
      <Image
        width="75px"
        src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
      />
      <BlockQuote>
        "A JavaScript Library for Building User Interfaces"
      </BlockQuote>
      <Cite>
        <Link href="https://reactjs.org/">React</Link>
      </Cite>
    </Slide>
  );
}

function imperativeDeclarativeSlide() {
  return (
    <Slide bgColor="surfaceColor">
      {notes.declarativeComponent}
      <Layout>
        <Fit>
          <Heading size={6} textColor="primary">
            Imperative
          </Heading>
          <CodePane
            padding="0 1rem"
            source={imperativeExample}
            lang="javascript"
          ></CodePane>
        </Fit>

        <Fit>
          <Heading size={6} textColor="primary">
            Declarative
          </Heading>
          <CodePane
            padding="0 1rem"
            source={declarativeExample}
            lang="javascript"
          ></CodePane>
        </Fit>
      </Layout>
    </Slide>
  );
}
