import * as React from "react";
import { useState } from "react";
import {
  Grid,
  Typography,
  TextField,
  Box,
  Paper,
  InputLabel,
  Button,
  Rating,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";

export default function GuestFeedBack() {
  const StyledRating = styled(Rating)(({ theme }) => ({
    "& .MuiRating-iconEmpty .MuiSvgIcon-root": {
      color: theme.palette.action.disabled,
    },
  }));

  function ItemContainer(props) {
    const { value, ...other } = props;
    return <span {...other}>{customIcons[value].icon}</span>;
  }

  const customIcons = {
    1: {
      icon: <SentimentVeryDissatisfiedIcon color="error" />,
      label: "Very Dissatisfied",
    },
    2: {
      icon: <SentimentDissatisfiedIcon color="error" />,
      label: "Dissatisfied",
    },
    3: {
      icon: <SentimentSatisfiedIcon color="warning" />,
      label: "Neutral",
    },
    4: {
      icon: <SentimentSatisfiedAltIcon color="success" />,
      label: "Satisfied",
    },
    5: {
      icon: <SentimentVerySatisfiedIcon color="success" />,
      label: "Very Satisfied",
    },
  };

  return (
    <React.Fragment>
      <Paper
        elevation={3}
        sx={{ marginRight: "25%", marginLeft: "25%", mt: "5%" }}
      >
        <Box sx={{ padding: 5 }}>
          <Typography
            variant="h5"
            gutterBottom
            sx={{
              fontWeight: 400,
              ml: "38%",
              "font-weight": "550",
              "font-size": "1.4rem",
              color: "#666666",
            }}
          >
            Feedback
          </Typography>
          <Grid container spacing={3} m={3}>
            <Grid item xs={12} sm={10}>
              <TextField
                required
                id="name"
                name="name"
                label="Name"
                fullWidth
                size="small"
                autoComplete="off"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={10}>
              <TextField
                required
                id="email"
                name="email"
                label="Email"
                fullWidth
                size="small"
                autoComplete="off"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={10}>
              <TextField
                required
                id="company"
                name="company"
                label="Company"
                fullWidth
                size="small"
                autoComplete="off"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={10}>
              <TextField
                id="outlined-multiline-static"
                label="Comments"
                multiline
                fullWidth
                rows={4}
              />
            </Grid>
            <Grid item xs={4} sm={6.2}>
              <InputLabel
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  fontWeight: 700,
                  minWidth: 630,
                }}
              >
                How would you Rate you experience?
                <StyledRating
                  name="highlight-selected-only"
                  defaultValue={3}
                  sx={{ ml: 4, minWidth: 300 }}
                  IconContainerComponent={ItemContainer}
                  getLabelText={(value) => customIcons[value].label}
                  highlightSelectedOnly
                />
              </InputLabel>
            </Grid>
            <Grid item xs={12} sm={4} ml="69%">
              <Button variant="contained" size="large">
                Send
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </React.Fragment>
  );
}
