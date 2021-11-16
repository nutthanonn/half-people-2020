import React from "react";
import { Box, Grid } from "@mui/material";
import Header from "../components/header/header";
import { apiStore } from "../stores/apiStore";
import Asite from "../components/Asite";
import StoreCard from "../components/body/storeCard";
import BreadcrumbsTab from "../components/header/breadcrumbs";
import Title from "../components/asite/title";

const Main: React.FC = () => {
  return (
    <Box>
      <Header provincesApi={apiStore} />
      <BreadcrumbsTab />
      <Title title={apiStore} />
      <Box sx={{ mt: 5 }}>
        <Box sx={{ mx: 2, my: 2 }}>
          <Grid container sx={{ mt: 3 }}>
            <Grid item md={3}>
              <Asite />
            </Grid>
            <Grid md={9}>
              <Box sx={{ mx: 2, ml: 5 }}>
                <StoreCard storeCardApi={apiStore} />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Main;
