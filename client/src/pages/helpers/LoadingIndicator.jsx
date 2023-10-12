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
    //   sx={{
    //     mt: 4,
    //     mb: 4,
    //   }}
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
      {/* <LinearProgress color="secondary" /> */}
    </Box>
  );
};

export default LoadingIndicator;
