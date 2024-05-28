import { Box, Button, Container, Flex, Heading, HStack, Input, Stack, Text, Textarea, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Header */}
      <Box bg="blue.800" color="white" py={4}>
        <Flex justify="space-between" align="center" px={8}>
          <Heading as="h1" size="lg">CodeMaster</Heading>
          <HStack spacing={8}>
            <Link to="/">Home</Link>
            <Link to="#courses">Courses</Link>
            <Link to="#about">About</Link>
            <Link to="#contact">Contact</Link>
          </HStack>
        </Flex>
      </Box>

      {/* Hero Section */}
      <Box bg="blue.600" color="white" py={20} textAlign="center">
        <Heading as="h2" size="2xl" mb={4}>Welcome to CodeMaster</Heading>
        <Text fontSize="xl" mb={8}>Learn to code from the best in the industry.</Text>
        <Button colorScheme="teal" size="lg">Sign Up Now</Button>
      </Box>

      {/* Courses Section */}
      <Box id="courses" py={20} px={8}>
        <Heading as="h3" size="xl" mb={8} textAlign="center">Our Courses</Heading>
        <VStack spacing={8}>
          <Box p={5} shadow="md" borderWidth="1px" borderRadius="md" width="100%">
            <Heading as="h4" size="md">Introduction to JavaScript</Heading>
            <Text mt={4}>Learn the basics of JavaScript, the most popular programming language in web development.</Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px" borderRadius="md" width="100%">
            <Heading as="h4" size="md">Advanced CSS Techniques</Heading>
            <Text mt={4}>Master the art of CSS and learn how to create stunning web pages with advanced styling techniques.</Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px" borderRadius="md" width="100%">
            <Heading as="h4" size="md">React for Beginners</Heading>
            <Text mt={4}>Get started with React, a powerful JavaScript library for building user interfaces.</Text>
          </Box>
        </VStack>
      </Box>

      {/* About Section */}
      <Box id="about" bg="gray.100" py={20} px={8}>
        <Heading as="h3" size="xl" mb={8} textAlign="center">About Us</Heading>
        <Text fontSize="lg" textAlign="center" maxW="3xl" mx="auto">
          CodeMaster is dedicated to providing high-quality coding education to learners of all levels. Our mission is to empower individuals with the skills they need to succeed in the tech industry.
        </Text>
      </Box>

      {/* Contact Section */}
      <Box id="contact" py={20} px={8}>
        <Heading as="h3" size="xl" mb={8} textAlign="center">Contact Us</Heading>
        <VStack spacing={4} maxW="md" mx="auto">
          <Input placeholder="Your Name" />
          <Input placeholder="Your Email" />
          <Textarea placeholder="Your Message" />
          <Button colorScheme="teal" size="lg">Send Message</Button>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;