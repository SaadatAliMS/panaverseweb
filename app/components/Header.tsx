"use client";
import {
  AddIcon,
  EditIcon,
  ExternalLinkIcon,
  HamburgerIcon,
  RepeatIcon,
} from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  Flex,
  IconButton,
  Link,
  SimpleGrid,
} from "@chakra-ui/react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import logo from "../../public/Logo.png";

export default function Header() {
  return (
    <Box boxShadow="lg" rounded={"md"} padding="1">
      <Container maxW={"1400"}>
        <SimpleGrid
          templateColumns={{ lg: "repeat(3,1fr)", base: "repeat(2,1fr)" }}
        >
          <Box p="-0.5">
            <Image src={logo} alt="panaverse logo" />
          </Box>
          <Flex
            display={{ lg: "flex", base: "none" }}
            gap={10}
            placeItems={"center"}
            color="black"
            fontSize={18}
            fontWeight="semibold"
          >
            <Link href="/">Home</Link>
            <Link href="/syllabus">Syllabus</Link>
            <Link href="/explore">Explore</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/about">About</Link>
          </Flex>
          <Box display={{ lg: "initial", base: "none" }}>
            <Button mx="-0.5" mt="3" float="right" size="lg" colorScheme="teal">
              Apply
            </Button>
          </Box>
          <Box display={{ lg: "none", base: "initial" }}>
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<HamburgerIcon />}
                variant="outline"
                float="right"
                mt="15px"
              />
              <MenuList>
                <MenuItem>Home</MenuItem>
                <MenuItem>Syllabus</MenuItem>
                <MenuItem>Explore</MenuItem>
                <MenuItem>Contact Us</MenuItem>
                <MenuItem>About</MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
