import React from "react";
import { Rating, Box, Typography } from "@mui/material";

interface PriceLevelBoxProps {
  priceLevel: number | undefined;
}

const PriceLevelBox: React.FC<PriceLevelBoxProps> = ({ priceLevel }) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Typography color="gray" sx={{ fontSize: 13 }}>
        | &nbsp;
      </Typography>
      <Rating
        size="small"
        name="read-only"
        value={priceLevel}
        readOnly
        icon="฿"
        sx={{ color: "black", fontSize: 13 }}
        emptyIcon="฿"
      />
      &nbsp;
    </Box>
  );
};

export default PriceLevelBox;
