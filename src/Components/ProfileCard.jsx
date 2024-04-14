import React from 'react';
import { Box, Heading, HStack, Avatar, Badge, Link, Button } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import imgurl from "../IMG_0402.jpg"
import resume from "../jawad_khan_resume.pdf"
const ProfileCard = () => {

    const content = {
        imageUrl: './public/IMG_0402.jpg',
        imageAlt: 'Image',
        Name: 'Jawad Khan',
        Description: 'I am a passionate Full Stack MERN Developer with extensive experience in building robust and scalable web applications. My journey in the realm of software development began with a fascination for creating seamless user experiences and has evolved into a comprehensive skill set encompassing both front-end and back-end technologies.',
        gmail: "JawadKhan8464@gmail.com",
        LinkedIn: "https://www.linkedin.com/in/jawad-khan-77289528b", // Your LinkedIn profile URL
        github: "https://github.com/JawadKhan65",
        contact: "If you're looking for a skilled Full Stack MERN Developer with expertise in Python development and data analysis, I'd love to connect. Feel free to reach out via Links below."
    };

    const skills = [
        "Full Stack Mern Developer",
        "Javascript",
        "TypeScript",
        "Node Js",
        "MongoDb",
        "Sanity CRM",
        "FireBase",
        "NEXTJS",
        "ReactJS",
        "Chakra UI",
        "Shadcn UI",
        "Python Dev",
        "ML Dev",
        "Pandas",
        "Numpy",
        "Matplotlib",
        "Seaborn",
        "ScikitLearn",
        "Web Scraping",
        "BeautifulSoup bs4",
        "Selenium"
    ];

    return (
        <Box maxW='100vw' maxH="100vh" display="flex" flexDirection="column" alignItems="center">
            <Avatar margin={2} size="2xl" src={imgurl} alt={content.imageAlt} />
            <Box margin={2} display='flex' flexWrap="wrap" alignItems='baseline'>
                <Heading size="lg" color="gray.600" fontWeight={600}>{content.Name}</Heading>
            </Box>
            <Box margin={2} maxW={{ lg: "25vw" }} display='flex' w={{ lg: "25vw" }} maxH={{ base: "20vh", lg: "25vh" }} flexWrap="wrap" alignItems='baseline'>
                {skills.map((skill, index) => (
                    <Badge key={index} margin={1} borderRadius='full' px='2' colorScheme='purple' >
                        {skill}
                    </Badge>
                ))}
            </Box>

            <Box mt='10px' fontWeight='semibold' as='h4'>About Me</Box>
            <Box>
                <Box as='span' maxW={{ lg: "25vw" }} maxH={{ lg: "28vw" }} margin={2} color='gray.600' fontSize='sm' display="flex" flexDirection="column" flexWrap="wrap">
                    {content.Description}
                </Box>
            </Box>


            <Box>
                <Box as='span' maxW={{ lg: "25vw" }} maxH={{ lg: "25vw" }} margin={2} color='gray.600' fontSize='sm' display="flex" flexDirection="column" flexWrap="wrap">
                    {content.contact}
                </Box>
            </Box>
            <Box margin={2} >
                <Button colorScheme="purple">
                    <a href={resume} download>Download My RESUME </a>
                </Button>
            </Box>
            <Box margin={2} display="flex" alignItems="center">
                <HStack spacing={2}>
                    <Link href={content.LinkedIn} isExternal>
                        <FontAwesomeIcon icon={faLinkedin} size='lg' title={content.LinkedIn} />
                    </Link>
                    <Link href={`mailto:${content.gmail}`} isExternal>
                        <FontAwesomeIcon icon={faGoogle} size='lg' title={content.gmail} />
                    </Link>
                    <Link href={content.github} isExternal>
                        <FontAwesomeIcon icon={faGithub} size='lg' title={content.github} />
                    </Link>
                </HStack>
            </Box>
        </Box>
    );
}

export default ProfileCard;
