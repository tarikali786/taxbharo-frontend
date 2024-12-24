import React, { useState } from "react";
import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { Box, Typography } from "@mui/material";

const CustomMuiCalendar = () => {
  // Define events with dates
  const events = [
    { date: new Date(2024, 3, 10), event: "Income Tax Filing Deadline" }, // April is 3 (zero-indexed)
    { date: new Date(2024, 6, 10), event: "TDS Payment Due Date" }, // July is 6
    { date: new Date(2024, 11, 10), event: "GST Filing Deadline" }, // December is 11
  ];

  const [selectedDate, setSelectedDate] = useState(null);

  // Check if a date has an event
  const hasEvent = (date) => {
    return events.some(
      (event) => event.date.toDateString() === date.toDateString()
    );
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box
        sx={{
          width: "100%",
          maxWidth: 500,
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <Typography variant="h4" gutterBottom>
          Custom Event Calendar
        </Typography>
        <DateCalendar
          value={selectedDate}
          onChange={(newDate) => setSelectedDate(newDate)}
          renderDay={(day, selectedDate, pickersDayProps) => {
            const isEventDay = hasEvent(day);
            return (
              <div
                {...pickersDayProps}
                style={{
                  position: "relative",
                  borderRadius: "50%",
                  backgroundColor: isEventDay ? "blue" : "transparent",
                  color: isEventDay ? "white" : "inherit",
                  fontWeight: isEventDay ? "bold" : "normal",
                }}
              >
                {day.getDate()}
              </div>
            );
          }}
        />
        {selectedDate && (
          <Box mt={2}>
            <Typography variant="h6">
              Selected Date: {selectedDate.toDateString()}
            </Typography>
            {hasEvent(selectedDate) ? (
              <Typography variant="body1">
                Event:{" "}
                {
                  events.find(
                    (event) =>
                      event.date.toDateString() === selectedDate.toDateString()
                  ).event
                }
              </Typography>
            ) : (
              <Typography variant="body2">No event on this date.</Typography>
            )}
          </Box>
        )}
      </Box>
    </LocalizationProvider>
  );
};

export default CustomMuiCalendar;
