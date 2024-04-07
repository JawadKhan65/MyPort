import React, { useEffect, useRef } from 'react'
import { HStack, Box, Text, Link } from "@chakra-ui/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { Link } from "react-router-dom"
import { faLinkedin, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
const Navbar = () => {
    const navRef = useRef(null)
    const content = {

        gmail: "JawadKhan8464@gmail.com",
        LinkedIn: "https://www.linkedin.com/in/jawad-khan-77289528b", // Your LinkedIn profile URL
        github: "https://github.com/JawadKhan65",

    };
    useEffect(() => {
        let previousScrollPosition = window.scrollY;
        const handleScrollForNav = () => {
            console.log("Scroll event occurred");
            const currentScrollPostion = window.scrollY;
            console.log("Current Scroll Position:", currentScrollPostion);
            const headerElement = navRef.current;
            if (!headerElement)
                return;
            if (previousScrollPosition > currentScrollPostion) {
                console.log("Scrolling up");
                headerElement.style.transform = "translateY(0)";
            }
            else {
                console.log("Scrolling down");
                headerElement.style.transform = "translateY(-200px)";
            }
            previousScrollPosition = currentScrollPostion;

        }
        window.addEventListener("scroll", handleScrollForNav);
        return () => {
            console.log("Removing event listener");
            window.removeEventListener("scroll", handleScrollForNav);
        }
    }, []);
    const WscrollIntoView = () => {
        const element = document.getElementById("projectdetails-section");
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    }

    return (
        <Box
            zIndex={100}
            bg="#f7f7f7" h="50px" >
            <HStack display="flex" justifyContent="space-between">
                <HStack color="gray.500" margin={15} display="flex" alignItems="center" justifyContent="center">
                    <Text fontWeight={600} fontSize="lg">JAWAD KHAN</Text>
                </HStack>
                <HStack spacing={2} m={2}>
                    <Text display={{ lg: "none" }} _hover={{ cursor: "pointer" }} fontWeight={600} onClick={WscrollIntoView} >Projects</Text>
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
            </HStack>
        </Box>
    )
}

export default Navbar