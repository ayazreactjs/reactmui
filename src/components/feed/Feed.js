import { Box } from '@mui/material';
import React from 'react';
import FeedData from './FeedData';

const Feed = () => {
  return (
    <Box flex={4} p={2} ml={[0, 2]}>
      <FeedData />
    </Box>
  );
};

export default Feed;
