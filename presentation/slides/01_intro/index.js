import React from "react";
import { Slide, Heading, Text, Image, Layout, Fill } from "spectacle";
import notes from "./notes";

export default [
  <Slide bgColor="surfaceColor">
    {notes.intro}
    <Heading size={6} textColor="primary">
      Up Framework Development with React and Redux 🚀
    </Heading>
    <Text textColor="primary">Corrina Chow</Text>
    <Text textColor="primary">December 2019</Text>
  </Slide>,
  technologySlide()
];

function technologySlide() {
  return (
    <Slide bgColor="surfaceColor">
      {notes.intro}
      <Heading size={6} textColor="primary">
        Up Framework
      </Heading>
      <Layout>
        <Image
          width="100px"
          src="https://nodejs.org/static/images/logos/nodejs-new-pantone-black.png"
        />
        <Image
          width="75px"
          src="https://pbs.twimg.com/profile_images/1149708719178993664/3Hb8W4aX.png"
        />
      </Layout>
      <Layout>
        <Fill>
          <Image
            width="75px"
            src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
          />
        </Fill>
        <Fill>
          <Image
            width="75px"
            src="https://cdn-images-1.medium.com/max/1600/1*WcRnU2ERqYHZBKBQ0zXCvg.png"
          />
        </Fill>
        <Fill>
          <Image
            width="75px"
            src="https://camo.githubusercontent.com/162ddfad7529f94cd4eb74ee9596da721050e055/68747470733a2f2f692e696d6775722e636f6d2f556e504c566c792e706e67"
          />
        </Fill>
        <Fill>
          <Image
            width="75px"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/2000px-GraphQL_Logo.svg.png"
          />
        </Fill>
      </Layout>
    </Slide>
  );
}
