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
  Stack,
  Alert,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import AxiosHelper from "./helpers/axiosHelper";
import LoadingIndicator from "./helpers/LoadingIndicator";

export default function GuestFeedBack() {
  const [isLoading, setIsLoading] = useState(false);
  const [feedback, setFeedback] = useState({
    name: "",
    email: "",
    company: "",
    comments: "",
    satisfaction: 3, // Default rating
  });
  const [isSnackbarOpen, setSnackbarOpen] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFeedback({
      ...feedback,
      [name]: value,
    });
  };

  const handleSend = async () => {
    setIsLoading(true);
    AxiosHelper.post("/feedback/submit", feedback)
      .then((response) => {
        setFeedback({
          name: "",
          email: "",
          company: "",
          comments: "",
          satisfaction: 3, // Default rating
        });
        setIsLoading(false);
        setSnackbarOpen(true);
      })
      .catch((error) => {
        console.error("Error fetching feedback data:", error);
        setIsLoading(false);
      });
  };

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
      <Grid sx={{ marginRight: "25%", marginLeft: "40%", mt: "0", position: "absolute"}}>
      {isSnackbarOpen && (
            <Stack sx={{ width: "100%" }} spacing={2}>
              <Alert
                open={isSnackbarOpen}
                autoHideDuration={3000} // Adjust the duration as needed
                onClose={() => setSnackbarOpen(false)}
              >
                Feedback Sent Successfully!
              </Alert>
            </Stack>
          )}
      </Grid>
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
              color: "#666666",
              ml: "38%",
              "margin-top": "12px",
              "font-weight": "550",
              "font-size": "1.4rem",
             
            }}
            onChange={handleChange}
          >
            Feedback
          </Typography>
          {isLoading ? (
            <LoadingIndicator />
          ) : (
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
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={10}>
                <TextField
                  required
                  id="email"
                  name="email"
                  label="Email"
                  type="email"
                  fullWidth
                  size="small"
                  autoComplete="off"
                  variant="outlined"
                  onChange={handleChange}
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
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={10}>
                <TextField
                  id="outlined-multiline-static"
                  name="comments"
                  label="Comments"
                  multiline
                  fullWidth
                  rows={4}
                  onChange={handleChange}
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
                    value={feedback.satisfaction}
                    sx={{ ml: 4, minWidth: 300 }}
                    IconContainerComponent={ItemContainer}
                    getLabelText={(value) => customIcons[value].label}
                    highlightSelectedOnly
                    onChange={(event, newValue) =>
                      setFeedback({ ...feedback, satisfaction: newValue })
                    }
                  />
                </InputLabel>
              </Grid>
              <Grid item xs={12} sm={4} ml="69%">
                <Button variant="contained" size="large" onClick={handleSend}>
                  Send
                </Button>
              </Grid>
            </Grid>
          )}
        </Box>
      </Paper>
    </React.Fragment>
  );
}
