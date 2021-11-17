import React from "react";
import OpenClose from "../storeComponent/openClose";
import PriceLevelBox from "./priceLevelBox";
import StoreCardSubtitle from "./storeCardSubtitle";
import { Box, Typography, Divider } from "@mui/material";

interface StoreCardTitleProps {
  shopName?: string;
  subCategoriesName?: string;
  priceLevel?: number;
  isOpen?: string;
  addressDistrictName?: string;
  addressProvinceName?: string;
  highlightText: string | undefined;
  facilities?: string[];
  recommendedItems?: string[];
}

const StoreCardTitle: React.FC<StoreCardTitleProps> = ({
  shopName,
  subCategoriesName,
  priceLevel,
  isOpen,
  addressDistrictName,
  addressProvinceName,
  highlightText,
  facilities,
  recommendedItems,
}) => {
  return (
    <Box>
      <Box sx={{ ml: 3 }}>
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
              flexWrap: "wrap",
            }}
          >
            <Typography color="gray" sx={{ fontSize: 13 }}>
              {subCategoriesName} &nbsp;
            </Typography>

            {priceLevel ? (
              <PriceLevelBox priceLevel={priceLevel} />
            ) : (
              <Box></Box>
            )}

            {addressDistrictName || addressProvinceName ? (
              <Typography color="gray" sx={{ fontSize: 13 }}>
                | &nbsp;{addressDistrictName} {addressProvinceName}
              </Typography>
            ) : (
              <Box></Box>
            )}
          </Box>
        </Box>
        <Divider sx={{ my: 2 }} />
        <Box>
          <StoreCardSubtitle
            highlightText={highlightText}
            facilities={facilities}
            recommendedItems={recommendedItems}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default StoreCardTitle;
