import {
  Box,
  Center,
  Container,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { data } from "../components/database";

export default function Instructor() {
  return (
    <Box>
      <Container maxW={"1400"}></Container>
      <Center>
        {" "}
        <Heading>| Our Instructors</Heading>
      </Center>
      <Flex flexDir={"row"}>
        {data.map((ins: any) => (
          <Box key={ins.id}>
            <Center>
              <Image src={ins.src} borderRadius="full" width={90} height={90} />
            </Center>

            <Heading textAlign={"center"} size="md">
              {ins.heading}
            </Heading>
            <Text textAlign={"center"} px="40px" fontSize="sm">
              {ins.text}
            </Text>
          </Box>
        ))}

        {/* <Box>
          <Center>
            <Image
              src="/ziakhan.jpeg"
              borderRadius={"full"}
              width="50"
              height={"50"}
            />
          </Center>

          <Heading textAlign={"center"}>Zia Khan</Heading>
          <Text textAlign={"center"} px="50px">
            Panaverse DAO is a community of Web 3 and Metaverse developers,
            designers, trainers, startup founders
          </Text>
        </Box>
        <Box>
          <Center>
            <Image
              src="/ziakhan.jpeg"
              borderRadius={"full"}
              width="50"
              height={"50"}
            />
          </Center>

          <Heading textAlign={"center"}>Zia Khan</Heading>
          <Text textAlign={"center"} px="50px">
            Panaverse DAO is a community of Web 3 and Metaverse developers,
            designers, trainers, startup founders
          </Text>
        </Box>
        <Box>
          <Center>
            <Image
              src="/ziakhan.jpeg"
              borderRadius={"full"}
              width="50"
              height={"50"}
            />
          </Center>

          <Heading textAlign={"center"}>Zia Khan</Heading>
          <Text textAlign={"center"} px="50px">
            Panaverse DAO is a community of Web 3 and Metaverse developers,
            designers, trainers, startup founders
          </Text>
        </Box>
        <Box>
          <Center>
            <Image
              src="/ziakhan.jpeg"
              borderRadius={"full"}
              width="50"
              height="50"
            />
          </Center>

          <Heading textAlign={"center"}>Zia Khan</Heading>
          <Text textAlign={"center"} px="50px">
            Panaverse DAO is a community of Web 3 and Metaverse developers,
            designers, trainers, startup founders
          </Text>
        </Box>
        <Box>
          <Center>
            <Image
              src="/ziakhan.jpeg"
              borderRadius={"full"}
              width="50"
              height="50"
            />
          </Center>

          <Heading textAlign={"center"}>Zia Khan</Heading>
          <Text textAlign={"center"} px="50px">
            Panaverse DAO is a community of Web 3 and Metaverse developers,
            designers, trainers, startup founders
          </Text>
        </Box> */}
      </Flex>
    </Box>
  );
}
