import React from "react";
import StoreCardTitle from "./storeComponent/storeCardTitle";
import { Box, Paper } from "@mui/material";
import { observer } from "mobx-react";

const test = [1, 2, 3, 4, 5];

const StoreCard: React.FC = observer(() => {
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
            <Box
              sx={{
                p: 0.5,
                display: "flex",
                justifyContent: "center",
                overflow: "hidden",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1432139555190-58524dae6a55?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80"
                alt=""
                width="270"
                height="250"
              />
            </Box>
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
