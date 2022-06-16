import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Link from "next/link";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Home = () => {

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        flexWrap: "wrap",
        padding: "20px",
        m:"20px"
      }}
    >
      <Grid container spacing={2}>
       <div onClick={() => {
        fetch("/api/settings", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          }
        });
      }
      }>
        <Grid item xs={12}>
          <Item>
           <a>Darse de baja</a>
          </Item>
        </Grid>
        </div>
      </Grid>
    </Box>
  );
};

export default Home;
