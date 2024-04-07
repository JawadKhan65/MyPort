import React from 'react';
import { Box } from '@chakra-ui/react';
import ProfileCard from './ProfileCard';
import ProjectDetails from './ProjectDetails';

const Landing = () => {
  return (
    <Box mt="10px" p={4} color='black' >
      <Box
        display="flex"
        flexDirection={{ base: 'column', lg: 'row' }}  // Stack on small screens, side by side on large screens
        alignItems={{ base: 'center', lg: 'flex-start' }} // Center items on small screens, align to top on large screens
        justifyContent={{ base: 'center', lg: 'flex-start' }} // Center items horizontally on small screens, align to start on large screens
      >
        <Box flex="1" maxW={{ base: '100%', lg: '50%' }} margin={{ base: '0', lg: '1' }} mb={{ base: '5', lg: '0' }}>
          <ProfileCard />
        </Box>
        <Box flex="1" maxW={{ base: '100%' }} margin={{ base: '0' }} mt={{ base: '10' }}>
          <ProjectDetails />
        </Box>
      </Box>
    </Box>
  );
}

export default Landing;
