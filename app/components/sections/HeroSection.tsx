import { Container, Box } from "@mui/material";
import { HeroContent } from "./HeroContent";

export function HeroSection() {
  return (
    <Box className="min-h-[80vh] flex items-center bg-gradient-to-r from-purple-50 to-teal-50 dark:from-purple-900/20 dark:to-teal-900/20 pt-8 md:pt-0">
      <Container maxWidth="lg">
        <Box className="flex flex-col md:flex-row items-center gap-4">
          <HeroContent />
          <Box className="hidden md:block flex-1 relative h-[400px]">
            <Box className="w-full h-full rounded-[20px] bg-purple-200/20 dark:bg-purple-300/30" />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
