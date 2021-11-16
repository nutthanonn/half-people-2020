import React from "react";
import { Rating, Box } from "@mui/material";

interface PriceLevelBoxProps {
  priceLevel: number | undefined;
}

const PriceLevelBox: React.FC<PriceLevelBoxProps> = ({ priceLevel }) => {
  return (
    <Box>
      <Rating
        size="small"
        name="read-only"
        value={priceLevel}
        readOnly
        icon="฿"
        sx={{ color: "black" }}
        emptyIcon="฿"
      />
    </Box>
  );
};

export default PriceLevelBox;
