import React from "react";
import { Box } from "@mui/material";
import RadioTab from "./asite/radioTab";
import NearProvince from "./asite/nearProvince";
import PriceofRange from "./asite/priceofRange";
import TypeOfRestaurant from "./asite/typeOfRestaurant";
import { apiStore } from "../stores/apiStore";

const Asite: React.FC = () => {
  return (
    <Box
      sx={{
        border: 1,
        bgcolor: "white",
        display: { xs: "none", sm: "none", md: "flex" },
        borderColor: "blue",
      }}
    >
      <Box sx={{ pl: 2.2, width: "100%" }}>
        <RadioTab categoriesNameApi={apiStore} />
        <NearProvince nearProvinceApi={apiStore} />
        <PriceofRange priceofRange={apiStore} />
        <TypeOfRestaurant typeOfRestaurant={apiStore} />
      </Box>
    </Box>
  );
};

export default Asite;
