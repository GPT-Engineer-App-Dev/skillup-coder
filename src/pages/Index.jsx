import { Box, Button, Container, Flex, Heading, HStack, Input, Stack, Text, Textarea, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Header */}
      <Box as="header" bg="blue.700" color="white" py={4}>
        <Flex justify="space-between" align="center" maxW="container.xl" mx="auto" px={4}>
          <Heading as="h1" size="lg">CodeLearn</Heading>
          <HStack spacing={8}>
            <Link to="/">Home</Link>
            <Link to="/courses">Courses</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </HStack>
        </Flex>
      </Box>

      {/* Hero Section */}
      <Box as="section" bg="blue.50" py={20} textAlign="center">
        <Heading as="h2" size="2xl" mb={4}>Welcome to CodeLearn</Heading>
        <Text fontSize="xl" mb={8}>Your journey to becoming a coding expert starts here.</Text>
        <Button colorScheme="blue" size="lg">Sign Up Now</Button>
      </Box>

      {/* Courses Section */}
      <Box as="section" py={20} px={4}>
        <Heading as="h2" size="xl" textAlign="center" mb={10}>Our Courses</Heading>
        <VStack spacing={8}>
          <Box p={5} shadow="md" borderWidth="1px" borderRadius="md" w="full">
            <Heading as="h3" size="md">Introduction to Python</Heading>
            <Text mt={4}>Learn the basics of Python programming. Perfect for beginners.</Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px" borderRadius="md" w="full">
            <Heading as="h3" size="md">Web Development with JavaScript</Heading>
            <Text mt={4}>Build dynamic websites using JavaScript, HTML, and CSS.</Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px" borderRadius="md" w="full">
            <Heading as="h3" size="md">Data Science with R</Heading>
            <Text mt={4}>Analyze data and build statistical models using R.</Text>
          </Box>
        </VStack>
      </Box>

      {/* About Section */}
      <Box as="section" bg="gray.50" py={20} px={4}>
        <Heading as="h2" size="xl" textAlign="center" mb={10}>About Us</Heading>
        <Text fontSize="lg" textAlign="center" maxW="container.md" mx="auto">
          CodeLearn is dedicated to providing high-quality coding education to learners of all levels. Our mission is to empower individuals with the skills they need to succeed in the tech industry.
        </Text>
      </Box>

      {/* Contact Section */}
      <Box as="section" py={20} px={4}>
        <Heading as="h2" size="xl" textAlign="center" mb={10}>Contact Us</Heading>
        <VStack spacing={4} maxW="container.md" mx="auto">
          <Input placeholder="Your Name" size="lg" />
          <Input placeholder="Your Email" size="lg" />
          <Textarea placeholder="Your Message" size="lg" />
          <Button colorScheme="blue" size="lg">Send Message</Button>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;