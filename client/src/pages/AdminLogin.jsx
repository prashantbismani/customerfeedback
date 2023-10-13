import React, { useState } from "react";
import { TextField, Avatar, Button, Card, Box, Grid, Stack, Alert } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";
import AxiosHelper from "./helpers/axiosHelper";
import LoadingIndicator from "./helpers/LoadingIndicator";

const AdminLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [credentials, setCredentials] = useState({});
  const [isSnackbarOpen, setSnackbarOpen] = useState(false);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const handleAdminLogin = () => {
    // Encrypt the data (e.g., password)
    // const encryptedPassword = CryptoJS.AES.encrypt(
    //   password,
    //   secretKey
    // ).toString();
    setIsLoading(true);
    AxiosHelper.post("/user/login", {
      username: credentials.username,
      password: credentials.password,
    })
      .then((response) => {
        console.log(response);
        setIsLoading(false);
        if (response.status == 200 && response.data.role == "admin") {
          navigate("/admin/review");
        } else {
          setSnackbarOpen(true)
        }
      })
      .catch((error) => {
        setIsLoading(false);
        setSnackbarOpen(true)
        console.error(error);
      });
  };

  const handleCancel = () => {
    setCredentials({});
    navigate("/");
  };

  return (
    <Container component="main" maxWidth="xs">
      <Grid sx={{ marginRight: 1, marginLeft: 3, mt: 1, position: "absolute"}}>
      {isSnackbarOpen && (
            <Stack sx={{ width: "100%" }} spacing={2}>
              <Alert
                open={isSnackbarOpen}
                autoHideDuration={3000} // Adjust the duration as needed
                onClose={() => setSnackbarOpen(false)}
              >
                Invalid Admin Username or Password!
              </Alert>
            </Stack>
          )}
      </Grid>
      <Card
        sx={{
          marginTop: 20,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        variant="outlined"
      >
        <Avatar sx={{ m: 2, mt: 8, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Admin
        </Typography>

        {isLoading ? (
            <LoadingIndicator />
          ) : (
        <Box component="form" noValidate sx={{ mt: 1, mb: 2 }}>
          <Grid container spacing={3} m={3}>
            <Grid item xs={12} sm={10}>
              <TextField
                required
                id="username"
                name="username"
                label="Username"
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
                id="password"
                name="password"
                label="Password"
                type="password"
                fullWidth
                size="small"
                autoComplete="off"
                variant="outlined"
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Grid
            container
            sx={{
              display: "flex",
              "justify-content": "center",
            }}
          >
            <Button
              sx={{ mt: 3, mr: 2, mb: 3 }}
              variant="outlined"
              startIcon={<AccountCircleIcon />}
              onClick={handleCancel}
            >
              Cancel
            </Button>
            <Button
              sx={{ mt: 3, mb: 3 }}
              variant="contained"
              startIcon={<ManageAccountsIcon />}
              onClick={handleAdminLogin}
            >
              Login
            </Button>
          </Grid>
        </Box> ) }
      </Card>
      <Grid mt = {30} ml={2}>
        Test: Username - prashant, password - 123abc
      </Grid>
    </Container>
  );
};

export default AdminLogin;
