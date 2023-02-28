import { Box, Button, Container, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import meta from "../../public/logo2.webp";
import bege from "../../public/bg.jpg";
import { RevealWrapper } from "next-reveal";
export default function Banner() {
  return (
    <>
      <Box bgGradient="radial(gray.300, yellow.400, pink.200)" filter="auto">
        <RevealWrapper
          origin="left"
          delay={200}
          duration={3000}
          distance="1000px"
          reset={true}
        >
          <Container maxW={"1400"}>
            <Flex
              pt={{ lg: "150px", base: "10px" }}
              pb="100px"
              px={{ lg: "40px", base: "5px" }}
            >
              <Box flexBasis={"50%"} px="40px">
                <Heading mb="10px" size={"2xl"}>
                  Prepare yourself for the Next Generation of Internet with
                  Panaverse
                </Heading>
                <Text mb="15px">
                  One Year Panaverse DAO Earn as you Learn Program.
                  Consolidating Web 3.0, Metaverse, Artificial Intelligence
                  (AI), Cloud, Edge, and Ambient Computing/IoT Technologies
                </Text>
                <Button size={"lg"} colorScheme={"teal"} mt="10px">
                  More Info
                </Button>
              </Box>

              <Box
                flexBasis={{ lg: "50%", base: "0px" }}
                mt={{ lg: "-80px", base: "0" }}
                ml="10px"
              >
                <Image src={meta} alt="meta" />
              </Box>
            </Flex>
          </Container>
        </RevealWrapper>
      </Box>
      <Box>
        <RevealWrapper
          origin="left"
          delay={200}
          duration={3000}
          distance="1000px"
          reset={true}
        >
          <Container maxW={"1400px"}>
            <Flex
              gap={{ lg: "flex", base: "grid" }}
              display={{ lg: "flex", base: "grid" }}
            >
              <Box flexBasis={"50%"} display={{ lg: "flex", base: "grid" }}>
                <Image src={meta} alt="meta" width="500" height={"200"} />
              </Box>
              <Box flexBasis={"50%"} pt={{ lg: "100px", base: "5px" }}>
                <Heading size={"2xl"}>Program Of Studies</Heading>
                <Text>
                  This curriculum is intended for beginners who want to learn
                  software development from the ground up. It is going to be a
                  fifteen-month-long hybrid program that includes both onsite
                  and online classes and is divided into five quarters of 13
                  weeks each. The emphasis will be on hands-on learning by
                  educating students to produce projects.
                </Text>
                <Button colorScheme={"teal"} size="lg" mt="20px">
                  Read More
                </Button>
              </Box>
            </Flex>
          </Container>
        </RevealWrapper>
      </Box>
      <Box>
        <RevealWrapper
          origin="left"
          delay={200}
          duration={3000}
          distance="1000px"
          reset={true}
        >
          <Container maxW={"1400px"}>
            <Flex
              gap={{ lg: "50px", base: "10px" }}
              display={{ lg: "flex", base: "grid" }}
            >
              <Box flexBasis={"50%"} pt={{ lg: "100px", base: "10px" }}>
                <Heading size={"2xl"}>Program Of Studies</Heading>
                <Text>
                  This curriculum is intended for beginners who want to learn
                  software development from the ground up. It is going to be a
                  fifteen-month-long hybrid program that includes both onsite
                  and online classes and is divided into five quarters of 13
                  weeks each. The emphasis will be on hands-on learning by
                  educating students to produce projects.
                </Text>
                <Button colorScheme={"teal"} size="lg" mt="20px">
                  Read More
                </Button>
              </Box>
              <Box flexBasis={"50%"}>
                <Image src={meta} alt="meta" width="500" height={"200"} />
              </Box>
            </Flex>
          </Container>
        </RevealWrapper>
      </Box>
    </>
  );
}
