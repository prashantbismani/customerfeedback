import React from "react";
import { CircularProgress, Box } from "@mui/material";

const LoadingIndicator = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{
        "padding-bottom": "20px",
        "padding-top": "20px"
      }}
    >
      <CircularProgress color="secondary" size={20} sx={{
        "margin-right": "10px"
      }}/>
      <CircularProgress color="success" size={20} sx={{
        "margin-right": "10px"
      }}/>
      <CircularProgress color="inherit" size={20} sx={{
        "margin-right": "10px"
      }}/>
    </Box>
  );
};

export default LoadingIndicator;
