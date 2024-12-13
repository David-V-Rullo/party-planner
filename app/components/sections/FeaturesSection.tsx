import { Box, Container } from "@mui/material";
import { FeatureCard } from "./FeatureCard";

// const features = [
//   {
//     icon: "CalendarMonth",
//     title: "Event Planning",
//     description:
//       "Create and manage multiple events with our intuitive planning tools",
//   },
//   {
//     icon: "People",
//     title: "Guest Management",
//     description: "Easily track RSVPs and communicate with your guests",
//   },
//
// ];

export function FeaturesSection() {
  return (
    <Box className="py-16 md:py-24">
      <Container maxWidth="lg">
        <h2 className="text-3xl md:text-4xl text-center mb-16">
          Everything You Need
        </h2>
        <Box
          display="grid"
          gridTemplateColumns={{
            xs: "1fr", // 1 column on mobile
            sm: "repeat(2, 1fr)", // 2 columns on tablet
            md: "repeat(4, 1fr)", // 4 columns on desktop
          }}
          gap={4}
        >
          <FeatureCard icon={""} title={""} description={""} />
        </Box>
      </Container>
    </Box>
  );
}
