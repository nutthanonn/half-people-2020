import React from "react";
import { Box, Grid, Paper } from "@mui/material";
import RadioTab from "./asite/radioTab";
import { apiStore } from "../stores/apiStore";

const Asite: React.FC = () => {
  return (
    <Box sx={{ border: 1 }}>
      <RadioTab categoriesNameApi={apiStore} />
    </Box>
  );
};

export default Asite;
