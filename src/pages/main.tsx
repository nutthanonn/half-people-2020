import React from "react";
import { Box, Grid } from "@mui/material";
import Header from "../components/header/header";
import { apiStore } from "../stores/apiStore";
import Asite from "../components/Asite";
import BreadcrumbsTab from "../components/header/breadcrumbs";
import Title from "../components/asite/title";

const Main: React.FC = () => {
  return (
    <Box>
      <Header provincesApi={apiStore} />
      <BreadcrumbsTab />
      <Title title={apiStore} />
      <Box sx={{ mx: 2, my: 2 }}>
        <Grid container sx={{ mt: 3 }}>
          <Grid item md={3} sx={{ border: 1, borderColor: "blue" }}>
            <Asite />
          </Grid>
          <Grid md={9} sx={{ border: 1, borderColor: "blue" }}></Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Main;
