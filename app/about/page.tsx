"use client";
import { Box, Container, Flex, Heading, Img, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import Home from "../components/Home";
import Instructor from "../components/Instructor";

export default function About() {
  return (
    <>
      <Home
        title="About"
        src="https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?cs=srgb&dl=pexels-huseyn-kamaladdin-667838.jpg&fm=jpg"
      />
      <Box>
        <Container maxWidth={"1400"}></Container>
        <Flex
          mt="20px"
          my="50px"
          px={{ lg: "50px", base: "20px" }}
          display={{ lg: "flex", base: "grid" }}
        >
          <Box flexBasis={"50%"}>
            <Img src="/president.jpeg" alt="president" />
          </Box>
          <Box flexBasis={"50%"} mt="30px">
            <Heading>| Dr Arif Alvi</Heading>
            <Text>
              President Dr. Arif Alvi has been a renowned professional and has
              held many important positions in the field of Dentistry. He
              remained Dean of Orthodontics, College of Physicians and Surgeons
              of Pakistan, President, Pakistan Dental Association (1997-2001),
              Pakistan Association of Orthodontists (2005), Asia Pacific Dental
              Federation (2006-07) and Councilor of the World Dental Federation
              (2007-2013). Through his sheer hard work in the World Dental
              Federation, he was able to get the declaration of 20th March as
              World Oral Health Day. He is also an author of a book, theses, and
              many articles. Dr. Arif Alvi’s political career commenced with his
              pro-democracy struggle against the dictatorship of General Ayub
              Khan. He is a founding member of Pakistan Tehreek-e-Insaf (PTI)
              that came into being in 1996. He remained a member of the PTI’s
              Central Executive Committee since its inception and has held the
              offices of PTI President of Sindh (1997-2001), Central Vice
              President (2001-2006) and Secretary General (2006-2013).
            </Text>
          </Box>
        </Flex>
      </Box>
      <Box>
        <Container maxWidth={"1400"}></Container>
        <Flex
          mt="20px"
          my="50px"
          px={{ lg: "50px", base: "20px" }}
          display={{ lg: "flex", base: "grid" }}
        >
          <Box flexBasis={"50%"} mt="30px">
            <Heading>| Dr Arif Alvi</Heading>
            <Text>
              {" "}
              Through his sheer hard work in the World Dental Federation, he was
              able to get the declaration of 20th March as World Oral Health
              Day. He is also an author of a book, theses, and many articles.
              Dr. Arif Alvi’s political career commenced with his pro-democracy
              struggle against the dictatorship of General Ayub Khan. He is a
              founding member of Pakistan Tehreek-e-Insaf (PTI) that came into
              being in 1996. He remained a member of the PTI’s Central Executive
              Committee since its inception and has held the offices of PTI
              President of Sindh (1997-2001), Central Vice President (2001-2006)
              and Secretary General (2006-2013).
            </Text>
          </Box>
          <Box flexBasis={"50%"} mt="70px" ml="200px">
            <Img
              src="/logo.png"
              alt="logo"
              mx="auto"
              height={{ lg: "280", base: "150" }}
              width={{ lg: "450", base: "200" }}
              m="auto"
            />
          </Box>
        </Flex>
      </Box>
      <Instructor />
    </>
  );
}
