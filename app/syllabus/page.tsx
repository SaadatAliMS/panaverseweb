"use client";
import { Box, Center, Container, Heading, Text, Flex } from "@chakra-ui/react";
import React from "react";
import Home from "../components/Home";
import { cards, core } from "../components/database";

export default function Syllabus() {
  return (
    <>
      <Home
        title="Syllabus"
        src="https://images.pexels.com/photos/265004/pexels-photo-265004.jpeg?auto=compress&cs=tinysrgb&w=800"
      />
      <Box pt="30px">
        <Container maxW={"1400px"}>
          <Center flexDir={"column"}>
            <Heading size={"2xl"} mt="20px">
              | Course Syllabus
            </Heading>
            <Text mt="15px" textAlign={"center"} px="30px">
              he first three quarters are shared by all specialties and are
              dedicated to studying Object-Oriented Programming and cutting-edge
              Full-Stack Web 2.0 development. It is going to be a
              fifteen-month-long hybrid program that includes both onsite and
              online classes and is divided into five quarters of 13 weeks each
            </Text>
          </Center>
          <Center flexDir={"column"}>
            <Heading size={"2xl"} mt="20px">
              | Common in All
            </Heading>
            <Text mt="15px" textAlign={"center"} px="30px">
              Every participant of the program will start by completing the
              following three core courses:
            </Text>
          </Center>

          <Center>
            <Flex mt="30px" gap="20px">
              {/* common is just an prop/argument */}
              {core.map((common) => (
                <Box
                  textAlign={"center"}
                  px="130px"
                  boxShadow={"dark-lg"}
                  width="290px"
                  borderRadius={"20px"}
                  p="30px"
                  key={common.id}
                >
                  <Heading>{common.heading}</Heading>
                  <Text px="5px">{common.text}</Text>
                </Box>
              ))}
            </Flex>
          </Center>
        </Container>

        <Container
          maxW={"1400"}
          mt="50px"
          bgSize={"cover"}
          bgAttachment="fixed"
          bgImage={
            "https://img.freepik.com/free-vector/watercolor-stains-abstract-background_23-2149107181.jpg?w=2000"
          }
        >
          {cards.map((elem) => (
            <Box key={elem.id}>
              <Center flexDir={"column"} mt="50px">
                <Heading size={"xl"}>{elem.heading1}</Heading>
                <Text mt="20px" textAlign={"center"} px="30px">
                  {elem.text1}
                </Text>
              </Center>
              <Center>
                <Flex mt="30px" gap="20px">
                  <Box
                    textAlign={"center"}
                    px="130px"
                    boxShadow={"dark-lg"}
                    width="290px"
                    borderRadius={"20px"}
                    p="30px"
                    bgColor={"white"}
                  >
                    <Heading>{elem.heading2}</Heading>
                    <Text px="5px">{elem.text2}</Text>
                  </Box>
                  <Box
                    textAlign={"center"}
                    px="130px"
                    boxShadow={"dark-lg"}
                    width="290px"
                    borderRadius={"20px"}
                    p="30px"
                    bgColor={"white"}
                  >
                    <Heading>{elem.heading3}</Heading>
                    <Text px="5px">{elem.text3}</Text>
                  </Box>
                </Flex>
              </Center>
            </Box>
          ))}
        </Container>
      </Box>
    </>
  );
}
