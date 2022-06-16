import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Link from "next/link";

const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#26a69a",
    },
  },
});

interface NavBarProps {
  isAuthenticated: boolean;
  handleLogout: () => void;
}

export default function TopBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={darkTheme}>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>

            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
              <Link href={"/"}>My Dashboard</Link>
            </Typography>
            <Button
              color="inherit"
              sx={{ mr: 2 }}
              onClick={() => {
                console.log("logout");
              }}
            >
              Logout
            </Button>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </Box>
  );
}
