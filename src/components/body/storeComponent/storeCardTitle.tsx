import React from "react";
import OpenClose from "../storeComponent/openClose";
import PriceLevelBox from "./priceLevelBox";
import { Box, Typography, Divider, Rating } from "@mui/material";

interface StoreCardTitleProps {
  shopName?: string | undefined;
  subCategoriesName?: string | undefined;
  priceLevel?: number | undefined;
  isOpen?: string | undefined;
  addressDistrictName?: string | undefined;
  addressProvinceName?: string | undefined;
}

const StoreCardTitle: React.FC<StoreCardTitleProps> = ({
  shopName,
  subCategoriesName,
  priceLevel,
  isOpen,
  addressDistrictName,
  addressProvinceName,
}) => {
  return (
    <Box>
      <Box sx={{ ml: 3, border: 1 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Typography variant="h6">
              <b>{shopName}</b>
            </Typography>
            <OpenClose status={isOpen} />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Typography color="gray">{subCategoriesName}</Typography>
            {/* Function map */}
            {priceLevel ? (
              <PriceLevelBox priceLevel={priceLevel} />
            ) : (
              <Box></Box>
            )}
          </Box>
        </Box>
        <Box>
          <Divider sx={{ width: 500, my: 2 }} />
        </Box>
        <Box>
          <Typography>Hello</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default StoreCardTitle;
