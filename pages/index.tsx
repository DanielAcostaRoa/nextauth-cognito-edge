import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import dynamic from "next/dynamic";
const YoutubeEmbed = dynamic(() => import("../components/embedVideo/Youtube"), {
  ssr: false,
});

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
        padding: "4px",
        mt: "14px",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Item>
            <YoutubeEmbed
              embedId="kG-fLp9BTRo"
            />
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <YoutubeEmbed
              embedId="kG-fLp9BTRo"
            />
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <YoutubeEmbed
              embedId="kG-fLp9BTRo"
            />
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <YoutubeEmbed
              embedId="kG-fLp9BTRo"
            />
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <YoutubeEmbed
              embedId="kG-fLp9BTRo"
            />
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <YoutubeEmbed
              embedId="kG-fLp9BTRo"
            />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
