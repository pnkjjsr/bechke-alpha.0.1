import type { NextPage } from "next";
import { Text } from "@chakra-ui/react";

import { Hero } from "@/components/Hero.js";
import { Container } from "@/components/Container.js";
import { Main } from "@/components/Main.js";
import { DarkModeSwitch } from "@/components/DarkModeSwitch.js";
import { Footer } from "@/components/Footer.js";

const Home: NextPage = () => {
  return (
    <Container height="100vh">
      <Hero />
      <Main>
        <Text fontSize="xl" align="center">
          Welcome to Bechke.com
        </Text>
        <Text align="center">
          Simplest eMarket platform for small non-seller.
        </Text>
      </Main>

      <DarkModeSwitch />
      <Footer>
        <Text align="center">© 2021 Bechke</Text>
      </Footer>
    </Container>
  );
};

export default Home;
