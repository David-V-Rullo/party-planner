"use client";

import { Paper, Box, Typography } from "@mui/material";
import * as MuiIcons from "@mui/icons-material";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  const IconComponent = MuiIcons[icon as keyof typeof MuiIcons];

  return (
    <Paper
      elevation={0}
      className="p-6 h-full transition-transform hover:-translate-y-1"
    >
      <Box className="text-primary mb-4">
        <IconComponent />
      </Box>
      <Typography variant="h6" className="mb-2">
        {title}
      </Typography>
      <Typography className="text-gray-600 dark:text-gray-300">
        {description}
      </Typography>
    </Paper>
  );
}
