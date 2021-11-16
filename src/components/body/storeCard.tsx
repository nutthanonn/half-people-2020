import React, { useState } from "react";
import StoreCardTitle from "./storeComponent/storeCardTitle";
import StoreCardImage from "./storeComponent/storeCardImage";
import { Box, Paper } from "@mui/material";
import { observer } from "mobx-react";
import { apiStoreImpl } from "../../stores/apiStore";

const test = [1, 2, 3, 4, 5];
interface StoreCard {
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

const StoreCard: React.FC<StoreCard> = observer(({ storeCardApi }) => {
  const [data, setData] = useState<stateItem | null>(null);

  return (
    <Box>
      {test.map((item) => {
        return (
          <Paper
            elevation={0}
            square
            sx={{
              border: 1,
              borderColor: "#E0EBF0",
              display: "flex",
              flexDirection: "row",
              mb: 2,
            }}
          >
            <StoreCardImage />
            {/* Text component */}
            <Box sx={{ mt: 1.5, ml: 0.5 }}>
              <StoreCardTitle />
            </Box>
          </Paper>
        );
      })}
    </Box>
  );
});

export default StoreCard;
