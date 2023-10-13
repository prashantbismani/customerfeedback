import React, { useState } from "react";
import { TextField, Avatar, Button, Card, Box } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";
import AxiosHelper from "./helpers/axiosHelper";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({});
  const handleAdminLogin = () => navigate("/admin/review");
  const handleGuestLogin = () => navigate("/guest/feedback");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const handleLogin = () => {
    // Encrypt the data (e.g., password)
    // const encryptedPassword = CryptoJS.AES.encrypt(
    //   password,
    //   secretKey
    // ).toString();

    AxiosHelper.post("/admin/login", {
      username: credentials.username,
      password: credentials.password,
    })
      .then((response) => {
        if(response.status == 200){
         navigate("/admin/review")
        }
      })
      .catch((error) => {
       console.error(error);
      });
  };

  const handleCancel = () => {};

  return (
    <Container component="main" maxWidth="xs">
      <Card
        sx={{
          marginTop: 20,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        variant="outlined"
      >
        <Avatar sx={{ m: 2, mt: 15, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Admin
        </Typography>

        <Box component="form" noValidate sx={{ mt: 1 }}>
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
          <Button
            sx={{ mt: 3, mr: 2, mb: 13 }}
            variant="outlined"
            startIcon={<AccountCircleIcon />}
            onClick={handleGuestLogin}
          >
            Cancel
          </Button>
          <Button
            sx={{ mt: 3, mb: 13 }}
            variant="contained"
            startIcon={<ManageAccountsIcon />}
            onClick={handleAdminLogin}
          >
            Login
          </Button>
        </Box>
      </Card>
    </Container>
  );
};

export default SignIn;
