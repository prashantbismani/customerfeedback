import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useNavigate } from 'react-router-dom';

const SignIn = () => {

  const navigate = useNavigate();
  const handleAdminLogin = () => navigate('/admin/login')
  const handleGuestLogin = () => navigate('/guest/feedback')

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
          Sign in as
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <Button
            sx={{ mt: 3, mr: 2, mb: 13 }}
            variant="outlined"
            startIcon={<AccountCircleIcon />}
            onClick={handleGuestLogin}
          >
            Guest
          </Button>
          <Button
            sx={{ mt: 3, mb: 13 }}
            variant="contained"
            startIcon={<ManageAccountsIcon />}
            onClick={handleAdminLogin}
          >
            Admin
          </Button>
        </Box>
      </Card>
      <Copyright sx={{ mt: 40, mb: 4 }} />
    </Container>
  );
}

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://github.com/prashantbismani">
        Prashant Bismani
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default SignIn
