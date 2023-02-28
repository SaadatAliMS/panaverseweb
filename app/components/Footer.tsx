"use client";
import {
  Box,
  Container,
  Grid,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../public/Logo.png";
export default function Footer() {
  return (
    <Box bg="black">
      <Container maxW={1500}>
        <SimpleGrid
          py="30px"
          templateColumns={{ lg: "repeat(4,1fr)", base: "repeat(1,1fr)" }}
        >
          <Box justifyContent={"center"}>
            <Heading
              textAlign={{ lg: "center", base: "center" }}
              color="white"
              pb="10px"
            >
              | About Us
            </Heading>
            <Image src={logo} alt="Panaverse logo" />
            <Text color={"white"} pr="20" textAlign={"center"}>
              The Future of Web is web 3.0 blockchain and edge computing{" "}
            </Text>
          </Box>
          <Box>
            <Heading
              color="white"
              pb="10px"
              textAlign={{ lg: "center", base: "center" }}
            >
              | Useful Links
            </Heading>
            <Grid color={"white"} textAlign={{ base: "center", lg: "center" }}>
              <Link href={"/"}> Home</Link>
              <Link href={"/"}> Syllabus</Link>
              <Link href={"/"}> Explore</Link>
              <Link href={"/"}>About</Link>
              <Link href={"/"}>Contact</Link>
            </Grid>
          </Box>
          <Box>
            <Heading
              color="white"
              pb="10px"
              textAlign={{ lg: "center", base: "center" }}
            >
              | Follow Us
            </Heading>
            <Grid color={"white"} textAlign={{ base: "center", lg: "center" }}>
              <Link href={"/"}> Facebook</Link>
              <Link href={"/"}> LinkedIn</Link>
              <Link href={"/"}> Youtube</Link>
              <Link href={"/"}>Twitter</Link>
              <Link href={"/"}>Instagram</Link>
            </Grid>
          </Box>

          <Box>
            <Heading
              color="white"
              pb="10px"
              textAlign={{ lg: "center", base: "center" }}
            >
              | Contact Us
            </Heading>
            <Grid color={"white"} textAlign={{ base: "center", lg: "center" }}>
              <Link href={"/"}> +21-2788111833</Link>
              <Link href={"/"}> panaversedao@gmail.com</Link>
              <Link href={"/"}> Karachi,Pakistan</Link>
            </Grid>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
