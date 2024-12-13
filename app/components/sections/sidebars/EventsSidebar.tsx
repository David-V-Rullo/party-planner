import React from "react";
import {
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import { Calendar } from "lucide-react";

const EventsSidebar = () => {
  // Sample events data
  const events = [
    { id: 1, name: "Birthday Party", date: "Mar 20" },
    { id: 2, name: "Wedding Reception", date: "Mar 25" },
    { id: 3, name: "Garden Party", date: "Apr 2" },
  ];

  return (
    <Paper
      elevation={2}
      className="w-64 h-full bg-[rgb(var(--primary-light)/0.05)] dark:bg-[rgb(var(--primary-dark)/0.1)] p-4"
    >
      {/* Header */}
      <div className="flex items-center gap-2 mb-6">
        <Calendar className="text-[rgb(var(--primary))]" size={24} />
        <Typography variant="h6" className="font-medium">
          Planned Events
        </Typography>
      </div>

      {/* Mini Calendar Placeholder */}
      <div className="mb-6 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
        <Typography
          variant="subtitle2"
          className="mb-2 text-gray-600 dark:text-gray-300"
        >
          March 2024
        </Typography>
        <div className="grid grid-cols-7 gap-1 text-center text-sm">
          {["S", "M", "T", "W", "T", "F", "S"].map((day, i) => (
            <div key={i} className="text-gray-500 text-xs">
              {day}
            </div>
          ))}
          {[...Array(31)].map((_, i) => (
            <div
              key={i}
              className={`text-xs p-1 ${
                i === 14
                  ? "bg-[rgb(var(--primary))] text-white rounded-full"
                  : ""
              }`}
            >
              {i + 1}
            </div>
          ))}
        </div>
      </div>

      {/* Events List */}
      <Typography
        variant="subtitle2"
        className="mb-2 text-gray-600 dark:text-gray-300"
      >
        Upcoming Events
      </Typography>
      <List className="p-0">
        {events.map((event) => (
          <React.Fragment key={event.id}>
            <ListItem className="px-0 hover:bg-[rgb(var(--primary-light)/0.1)] rounded">
              <ListItemText
                primary={event.name}
                secondary={event.date}
                primaryTypographyProps={{
                  className: "text-sm font-medium",
                }}
                secondaryTypographyProps={{
                  className: "text-xs",
                }}
              />
            </ListItem>
            <Divider component="li" />
          </React.Fragment>
        ))}
      </List>
    </Paper>
  );
};

export default EventsSidebar;
