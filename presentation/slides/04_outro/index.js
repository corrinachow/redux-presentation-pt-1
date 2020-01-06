import React from "react";
import {
  Slide,
  Heading,
  Text,
  Image,
  Layout,
  Link,
  List,
  ListItem,
  Fill,
  MarkdownSlides
} from "spectacle";
import notes from "./notes";
import resourceMarkdown from "./resources.md";

const officialResources = {
  title: "Official Info",
  documents: [
    { name: "React documentation", link: "https://reactjs.org/" },
    { name: "Redux documentation", link: "https://redux.js.org/" },
    {
      name: "Redux Toolkit documentation",
      link: "https://redux-toolkit.js.org/"
    }
  ]
};

const otherResources = {
  title: "Other Resources",
  documents: [
    {
      name: "React/Redux links",
      link: "https://github.com/markerikson/react-redux-links"
    },
    {
      name: "Understand MVC Architecture with React",
      link:
        "https://medium.com/createdd-notes/understanding-mvc-architecture-with-react-6cd38e91fefd"
    }
  ]
};

function makeResourceList(resources) {
  const { title, documents } = resources;
  return (
    <>
      <h3>{title}</h3>
      <List>
        {documents.map((documents, i) => {
          const { link, name } = documents;
          return (
            <>
              <ListItem key={i} textColor="primary" textSize="1.5rem">
                <Link
                  style={{ textDecoration: "underline" }}
                  textSize="1.5rem"
                  textColor="secondary"
                  href={link}
                >
                  {name}
                </Link>
              </ListItem>
            </>
          );
        })}
      </List>
    </>
  );
}

export default [
  <Slide bgColor="surfaceColor" align="flex-start center">
    <Heading size={6} textColor="primary">
      Resources
    </Heading>
    <Layout>
      <Fill>
        {makeResourceList(officialResources)}
        {makeResourceList(otherResources)}
      </Fill>
      <Fill>
        <h3>Presentation Materials</h3>
        <List>
          <ListItem textColor="primary" textSize="1.5rem">
            <Link
              style={{ textDecoration: "underline" }}
              textSize="1.5rem"
              textColor="secondary"
              href="https://blog.isquaredsoftware.com/presentations/2017-02-react-redux-intro"
            >
              React-Redux Intro, &nbsp;
            </Link>
            Mark Erikson
          </ListItem>
          <ListItem textColor="primary" textSize="1.5rem">
            <Link
              style={{ textDecoration: "underline" }}
              textSize="1.5rem"
              textColor="secondary"
              href="https://elijahmanor.com/talks/react-to-the-future/dist/#/slide/0/0"
            >
              React to the Future, &nbsp;
            </Link>
            by Elijah Manor
          </ListItem>
          <ListItem textColor="primary" textSize="1.5rem">
            <Link
              style={{ textDecoration: "underline" }}
              textSize="1.5rem"
              textColor="secondary"
              href="http://slides.com/jenyaterpil/redux-from-twitter-hype-to-production#/"
            >
              Redux: From Twitter Hype to Production, &nbsp;
            </Link>
            by Jenya Terpil
          </ListItem>
        </List>
      </Fill>
    </Layout>
  </Slide>
];
