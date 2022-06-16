import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { signIn } from "next-auth/react";

const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#26a69a",
    },
  },
});

const FormWithoutHookForm = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        p: 3,
        justifyContent: "center",
        alignItems: "center",
        m: "auto",
        maxWidth: "500px",
        maxHeight: "500px",
      }}
    >
      <Paper elevation={5}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            px: "20px",
            py: "20px",
            mx: "20px",
            my: "20px",
          }}
        >
          <h2>MyDashboard</h2>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            m: 5,
            p: 5,
          }}
        >
          <ThemeProvider theme={darkTheme}>
            <Button
              variant="contained"
              onClick={() => {
                signIn("cognito");
              }}
            >
              Sign In
            </Button>
          </ThemeProvider>
        </Box>
      </Paper>
    </Box>
  );
};

export default FormWithoutHookForm;
