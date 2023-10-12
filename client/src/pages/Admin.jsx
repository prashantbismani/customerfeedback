import React from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Paper,
  ListItemAvatar,
  Avatar,
  Divider,
  Grid,
  Rating,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";

const Admin = () => {
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

  const feedbackList = [
    {
      name: "Prashant",
      email: "prashant.bismani@gmail.com",
      company: "BT",
      comments:
        "This product is amazing! It exceeded my expectations in terms of quality and performance.",
      satisfaction: 5,
    },
    {
      name: "Jay Shetty",
      email: "jayshetty@hotmail.com",
      company: "ABC Corp",
      comments:
        "The product is good, but it has a few minor issues that need improvement.",
      satisfaction: 3,
    },
    {
      name: "Simran Kaur",
      email: "arun@gmail.com",
      company: "Google Inc",
      comments:
        "I'm satisfied with this product, but the price is a bit high for what it offers.",
      satisfaction: 4,
    },
    {
      name: "Emily",
      email: "emily@7-11.com",
      company: "7-Eleven",
      comments:
        "The product arrived damaged, and the customer support was not very helpful.",
      satisfaction: 2,
    },
    {
      name: "Adil",
      email: "adil@yahoo.com",
      company: "Walmart",
      comments:
        "I expected more features from this product. It's somewhat disappointing.",
      satisfaction: 2,
    },
  ];

  return (
    <React.Fragment>
      <Paper
        elevation={3}
        sx={{ marginRight: "15%", marginLeft: "15%", mt: "5%" }}
      >
        <Typography
          id="feedback"
          variant="h5"
          component="h2"
          gutterBottom
          sx={{ ml: 3, pt: 2, mb: 0 }}
        >
          Customer Feedback
        </Typography>
        <List
          id="feedbackList"
          sx={{ width: "100%", maxWidth: "97%", bgcolor: "background.paper" }}
        >
          {feedbackList.map((feedback, index) => (
            <Grid id={`container-${index}`}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar
                    alt={feedback.name}
                    src="/static/images/avatar/1.jpg"
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={feedback.name}
                  sx={{color: 'rgb(15 105 17)'}}
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="#100202"
                      >
                        {feedback.company}
                      </Typography>
                      <Typography
                        sx={{ display: "inline", ml: 1, color: "rgb(4 65 120)"}}
                        component="span"
                        variant="body2"
                      >
                        {feedback.email}
                      </Typography>

                      <Grid sx={{ display: "flex", "justify-content": "space-between"}}>
                        {feedback.comments}
                        <StyledRating
                          name="highlight-selected-only"
                          value={feedback.satisfaction}
                          readOnly 
                          sx={{ ml: 2 }}
                          IconContainerComponent={ItemContainer}
                          getLabelText={(value) => customIcons[value].label}
                          highlightSelectedOnly
                        />
                      </Grid>
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider id={`divider-${index}`} variant="inset" component="li" />
            </Grid>
          ))}
        </List>
      </Paper>
    </React.Fragment>
  );
};

export default Admin;
