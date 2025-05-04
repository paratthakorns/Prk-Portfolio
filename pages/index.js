import NextLink from 'next/link';
import {
  Container,
  Box,
  Image,
  Heading,
  useColorModeValue,
  Button,
  SimpleGrid,
  List,
  ListItem,
  Link,
  Icon,
  Flex,
} from '@chakra-ui/react';
import Section from '../components/section';
import Paragraph from '../components/paragraph';
import { ChevronRightIcon } from '@chakra-ui/icons';
import Layout from '../components/layouts/article';
import { BioSection, BioYear } from '../components/bio';
import { IoLogoGithub, IoLogoLinkedin, IoDocumentTextOutline } from 'react-icons/io5';
import { motion } from 'framer-motion';

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.600', 'whiteAlpha.200')}
          mb={6}
          p={3}
          textAlign="center"
        >
          Hi! I&apos;m a passionate software engineer with a knack for crafting solutions to complex problems. Let&apos;s collaborate and bring your next project to life!
        </Box>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Paratthakorn Sribunyong
            </Heading>
            <p>Full-stack / Frontend Developer</p>
          </Box>
          <Box
            flexShrink={0}
            nt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/profile.png"
              alt="Profile Image"
            />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h2" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            I love building fast, scalable apps for both web and mobile platforms. I have a knack for creating modern architecture and making applications run smoothly. I enjoy mentoring fellow developers, facilitating tech discussions, and championing quality code and design practices.
          </Paragraph>
        </Section>
        <Flex justify="center">
          <motion.div
                whileHover={{ y: -2, boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.1)" }}
                transition={{ duration: 0.2 }}
          >
            <Button
                as="a"
                href="/Paratthakorn_Sribunyong_Resume.pdf"
                download="Paratthakorn_Sribunyong_Resume.pdf"
                rightIcon={<ChevronRightIcon />}
                leftIcon={<Icon as={IoDocumentTextOutline} />}
                size="lg"
                colorScheme="teal"
                variant="solid"
                boxShadow="md"
                _hover={{
                  transform: 'translateY(-2px)',
                  boxShadow: 'lg',
                }}
                _active={{
                  transform: 'translateY(0)',
                  boxShadow: 'sm',
                }}
                transition="all 0.2s"
              >
                Download Resume
              </Button>
            </motion.div>
        </Flex>
        <Section delay={0.3}>
          <Heading as="h2" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>Apr 2024 - Now</BioYear>
            iOS Developer, {' '}
            <Link href="https://www.arise.tech/"> 
              <b>Arise by Infinitas</b>
            </Link>
          </BioSection>
          <BioSection>
            <BioYear>Apr 2023 - Mar 2024</BioYear>
            Frontend Developer (Contract), {' '}
            <Link href="https://scbtechx.io/th/home/"> 
              <b>SCB Tech X</b>
            </Link>
          </BioSection>
          <BioSection>
            <BioYear>May 2022 - Dec 2022</BioYear>
            iOS Developer (Internship),{' '} 
            <Link href="https://lineman.line.me/">
              <b>LINE MAN Wongnai</b>
            </Link>
          </BioSection>
          <BioSection>
            <BioYear>Oct 2021 - Feb 2023</BioYear>
            Frontend Developer (Part Time), {' '} 
            <Link href="https://www.facebook.com/CUInterofficial/"> 
              <b>CU ISA</b>
            </Link>
          </BioSection>
          <BioSection>
            <BioYear>Jan 2019 - Apr 2023</BioYear>
            Bachelor of Computer Engineering, {' '} 
            <Link href="https://www.kmitl.ac.th/"> 
              <b>KMITL</b>
            </Link>
            {' '}
          </BioSection>
        </Section>
        <Section delay={0.3}>
          <Heading as="h2" variant="section-title">
            I ♥
          </Heading>
          <Paragraph>Travel, Café, Music, Guitar, Book, Workout</Paragraph>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List> 
            <ListItem>
                <Link href="https://www.linkedin.com/in/paratthakorns/" target="_blank">
                  <Button
                    variant="ghost"
                    colorScheme="teal"
                    leftIcon={<Icon as={IoLogoLinkedin} />}
                  >
                    linkedin.com/in/paratthakorns
                  </Button>
                </Link>
            </ListItem>
            <ListItem>
              <Link href="https://github.com/paratthakorns" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @paratthakorns
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  );
};
export default Page;