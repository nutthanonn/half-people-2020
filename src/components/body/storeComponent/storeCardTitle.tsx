import React from "react";
import OpenClose from "../storeComponent/openClose";
import { Box, Typography, Divider } from "@mui/material";

const StoreCardTitle: React.FC = () => {
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
              <b>YWC Shop</b>
            </Typography>
            <OpenClose status={"Y"} />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Typography color="gray">
              {/* Text */}
              อาหารทั่วไป อาหารตามสั่ง อาหารจานเดียว
            </Typography>
            {/* Function map */}
            <Typography>s</Typography>
            <Typography>s</Typography>
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
