import { Box, Button, Typography } from "@mui/material";

export function HeroContent() {
  return (
    <Box className="flex-1 text-center md:text-left">
      <Typography variant="h1" className="text-3xl md:text-5xl mb-4 font-bold">
        Plan Your Perfect Party
      </Typography>
      <Typography
        variant="h2"
        className="text-l md:text-xl mb-8 font-normal text-gray-600 dark:text-gray-300"
      >
        Effortlessly organize events, manage guest lists, and create
        unforgettable memories
      </Typography>
      <Box className="flex gap-4 justify-center md:justify-start">
        <Button variant="contained" size="large">
          Get Started
        </Button>
        <Button variant="outlined" size="large">
          Learn More
        </Button>
      </Box>
    </Box>
  );
}
