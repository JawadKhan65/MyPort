import React from 'react';
import { Link } from "react-router-dom";
import { Box, Text, VStack, Divider } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

const ProjectDetails = () => {
    return (
        <Box id="projectdetails-section" maxW="100vh" p={6} borderRadius='lg' display="flex" flexDirection="column" bg="white" >
            <Text fontSize="2xl" fontWeight="bold" mb={4}>Projects</Text>

            {/* E-commerce Platform */}
            <VStack spacing={4} align="start" mb={6}
                maxW={{ lg: "25vw" }} maxH={{ lg: "25vw" }}
            >
                <Text fontSize="xl" fontWeight="bold">E-commerce Platform</Text>
                <Text>
                    Developed a feature-rich e-commerce platform using the MERN stack, enabling users to browse products, add them to cart, and securely checkout. Implemented features like user authentication, product filtering, and order management.
                </Text>
                <Link target='_blank' to="https://ecommerce-electron.vercel.app/" isExternal>
                    <Text fontSize="sm" fontWeight="bold"> Link  <FontAwesomeIcon icon={faExternalLinkAlt} /> </Text>

                </Link>
            </VStack>
            <Divider />

            {/* Todo APP */}
            <VStack spacing={4} align="start" my={6}
                maxW={{ lg: "25vw" }} maxH={{ lg: "25vw" }}
            >
                <Text fontSize="xl" fontWeight="bold">Todo APP</Text>
                <Text>
                    A Simple Todo App with edit and delete functionality, setting priority of tasks made with localStorage browser API's.
                </Text>
                <Link target='_blank' to="https://todo-react-silk-one.vercel.app/" isExternal>
                    <Text fontSize="sm" fontWeight="bold">Link  <FontAwesomeIcon icon={faExternalLinkAlt} /></Text>

                </Link>
            </VStack>
            <Divider />

            {/* Data Analysis and Visualization */}
            <VStack
                maxW={{ lg: "25vw" }} maxH={{ lg: "25vw" }}
                spacing={4} align="start" my={6}>
                <Text fontSize="xl" fontWeight="bold">Data Analysis and Visualization</Text>
                <Text>
                    Utilized Python libraries including pandas, numpy, and matplotlib to perform data analysis and visualization on large datasets. Developed machine learning models using scikit-learn to derive actionable insights for business decision-making.
                </Text>
                <Link target='_blank' to="https://github.com/JawadKhan65/Sentimental-Analysis-Model">
                    <Box display="flex">
                        <Text marginRight={1} fontWeight={500}>Text Sentimental Analysis

                        </Text>
                        <FontAwesomeIcon icon={faGithub} size='lg' title="GitHub" />

                    </Box>

                </Link>

                <Link target='_blank' to="https://github.com/JawadKhan65/Sales-Analysis">
                    <Box display="flex">
                        <Text marginRight={1} fontWeight={500}>Sales Analysis

                        </Text>
                        <FontAwesomeIcon icon={faGithub} size='lg' title="GitHub" />

                    </Box>

                </Link>

            </VStack>
        </Box>
    );
}

export default ProjectDetails;
