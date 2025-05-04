import { motion } from 'framer-motion';
import {
  Container,
  Box,
  Heading,
  Text,
  Flex,
  useColorModeValue,
  Button,
  Icon,
  Link
} from '@chakra-ui/react';
import { ChevronLeftIcon, DownloadIcon, ExternalLinkIcon } from '@chakra-ui/icons';
import { IoDocumentTextOutline } from 'react-icons/io5';
import Layout from '../components/layouts/article';
import NextLink from 'next/link';
import { useState, useEffect } from 'react';

const variants = {
  hidden: { opacity: 0, y: 20 },
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

const ResumePage = () => {
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Simulate PDF loading time
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <Layout title="Resume - Paratthakorn Sribunyong">
      <motion.div
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ duration: 0.4, type: 'easeInOut' }}
      >
        <Container maxW="container.xl" py={8}>
          <Flex justifyContent="space-between" alignItems="center" mb={6}>
            <motion.div
              whileHover={{ x: -4 }}
              transition={{ duration: 0.2 }}
            >
              <NextLink href="/" passHref>
                <Button 
                  leftIcon={<ChevronLeftIcon />} 
                  colorScheme="teal" 
                  variant="outline"
                >
                  Back to Home
                </Button>
              </NextLink>
            </motion.div>
            
            <Flex>
              <motion.div
                whileHover={{ y: -2, boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.1)" }}
                transition={{ duration: 0.2 }}
              >
                <Button
                  as="a"
                  href="/Paratthakorn_Sribunyong_Resume.pdf"
                  download="Paratthakorn_Sribunyong_Resume.pdf"
                  rightIcon={<DownloadIcon />}
                  colorScheme="teal"
                  mr={3}
                >
                  Download PDF
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ y: -2, boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.1)" }}
                transition={{ duration: 0.2 }}
              >
                <Button
                  as={Link}
                  href="/Paratthakorn_Sribunyong_Resume.pdf"
                  target="_blank"
                  rightIcon={<ExternalLinkIcon />}
                  colorScheme="gray"
                  isExternal
                >
                  Open in New Tab
                </Button>
              </motion.div>
            </Flex>
          </Flex>
          
          <Box
            bg={bgColor}
            borderRadius="lg"
            borderWidth="1px"
            borderColor={borderColor}
            overflow="hidden"
            boxShadow="lg"
            position="relative"
            height="80vh"
          >
            {/* PDF Loading Animation */}
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: isLoaded ? 0 : 1 }}
              transition={{ duration: 0.5 }}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: isLoaded ? -1 : 2,
                background: useColorModeValue('white', '#1A202C')
              }}
            >
              <Flex direction="column" align="center">
                <motion.div
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.2, 1] 
                  }}
                  transition={{ 
                    repeat: Infinity,
                    duration: 2 
                  }}
                >
                  <Icon as={IoDocumentTextOutline} boxSize={16} color="teal.500" />
                </motion.div>
                <Text mt={4} fontSize="lg">Loading your resume...</Text>
              </Flex>
            </motion.div>
            
            {/* PDF Viewer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isLoaded ? 1 : 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              style={{ height: '100%', width: '100%' }}
            >
              <iframe
                src="/Paratthakorn_Sribunyong_Resume.pdf#view=FitH"
                width="100%"
                height="100%"
                style={{ border: 'none' }}
                title="Resume PDF"
              />
            </motion.div>
            
            {/* Floating Decorative Elements */}
            <motion.div
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                zIndex: 10,
                pointerEvents: 'none'
              }}
              animate={{
                y: [0, -10, 0],
                opacity: [0.8, 1, 0.8]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Box 
                bg="teal.500" 
                width="60px" 
                height="60px" 
                borderRadius="full" 
                opacity="0.2"
              />
            </motion.div>
            
            <motion.div
              style={{
                position: 'absolute',
                bottom: '30px',
                left: '30px',
                zIndex: 10,
                pointerEvents: 'none'
              }}
              animate={{
                x: [0, 10, 0],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            >
              <Box 
                bg="teal.300" 
                width="40px" 
                height="40px" 
                borderRadius="md" 
                opacity="0.2" 
              />
            </motion.div>
          </Box>
          
          <Box textAlign="center" mt={6}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <Heading as="h3" size="md" color="teal.500" mb={2}>
                Paratthakorn Sribunyong
              </Heading>
              <Text>Full-stack / Frontend Developer</Text>
            </motion.div>
          </Box>
        </Container>
      </motion.div>
    </Layout>
  );
};

export default ResumePage;