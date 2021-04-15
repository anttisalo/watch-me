import React, { useEffect } from "react";
import { Container, Heading, Button, Flex } from "theme-ui";
import netlifyIdentity from "netlify-identity-widget";

const Home = (props) => {
  useEffect(() => {
    netlifyIdentity.init({});
  });

  return (
    <Container>
      <Flex sx={{ flexDirection: "column", padding: 3 }}>
        <Heading as="h1">Here we go</Heading>
        <Button sx={{ marginTop: 2 }} onClick={() => netlifyIdentity.open()}>
          Log in
        </Button>
      </Flex>
    </Container>
  );
};

export default Home;
