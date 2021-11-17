import React, { useState, useEffect } from "react";
import StoreCardTitle from "./storeComponent/storeCardTitle";
import StoreCardImage from "./storeComponent/storeCardImage";
import SkaletonCard from "./storeComponent/skeletonCard";
import { Box, Paper } from "@mui/material";
import { observer } from "mobx-react";
import { apiStoreImpl } from "../../stores/apiStore";

interface StoreCardProps {
  storeCardApi: apiStoreImpl;
}

interface stateItem {
  shopNameTH?: string;
  categoryName?: string;
  subcategoryName?: string;
  coverImageId?: string;
  facilities?: string[];
  priceLevel?: number;
  isOpen?: string;
  highlightText?: string;
  recommendedItems?: string[];
  addressProvinceName?: string;
  addressDistrictName?: string;
}

const skeletonBox = [1, 2, 3, 4];

const StoreCard: React.FC<StoreCardProps> = observer(({ storeCardApi }) => {
  const [data, setData] = useState<stateItem[] | null>(null);

  useEffect(() => {
    setTimeout(() => {
      const res = storeCardApi.StoreCardData();
      setData(res);
    }, 800);
  }, [storeCardApi]);

  return (
    <Box>
      {!data &&
        skeletonBox.map(() => {
          return (
            <Paper
              elevation={0}
              square
              sx={{
                border: 1,
                borderColor: "#E0EBF0",
                display: "flex",
                flexDirection: "column",
                mb: 1.5,
              }}
            >
              <SkaletonCard />
            </Paper>
          );
        })}
      {data &&
        data.map((item) => {
          return (
            <Paper
              elevation={0}
              square
              sx={{
                border: 1,
                borderColor: "#E0EBF0",
                display: { xs: "flex", sm: "flex", md: "flex" },
                flexDirection: { md: "row", sm: "column", xs: "column" },
                mb: 1.5,
              }}
            >
              <StoreCardImage imageTag={item.coverImageId} />
              <Box sx={{ mt: 1.5 }}>
                <StoreCardTitle
                  shopName={item.shopNameTH}
                  subCategoriesName={item.subcategoryName}
                  priceLevel={item.priceLevel}
                  isOpen={item.isOpen}
                  addressDistrictName={item.addressDistrictName}
                  addressProvinceName={item.addressProvinceName}
                  highlightText={item.highlightText}
                  facilities={item.facilities}
                  recommendedItems={item.recommendedItems}
                />
              </Box>
            </Paper>
          );
        })}
    </Box>
  );
});

export default StoreCard;
