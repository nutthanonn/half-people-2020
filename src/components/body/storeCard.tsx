import React from "react";
import { Box, Divider, Paper, Toolbar, Typography } from "@mui/material";
import { height } from "@mui/system";

const StoreCard: React.FC = () => {
  return (
    <Box>
      <Paper
        elevation={1}
        square
        sx={{ border: 1, display: "flex", flexDirection: "row" }}
      >
        <Box
          sx={{
            p: 0.5,
            border: 1,
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
        <Box sx={{ mt: 1.5, ml: 0.5, height: 500 }}>
          <Box sx={{ ml: 3, border: 1 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <Typography variant="h6">
                  <b>Nutthanon</b>
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    ml: 2,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      bgcolor: "green",
                      borderRadius: 1,
                      width: 30,
                      height: 15,
                    }}
                  >
                    <Typography sx={{ color: "white", fontSize: 8 }}>
                      เปิดอยู่
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box>
                <Typography color="gray">
                  ของหวาน ไอศกรีม เบเกอรี่ เคนื่องดื่ม ฟหก่ดืวฟหืดก ฟหาก่ื
                </Typography>
              </Box>
            </Box>
            <Box>
              <Divider />
            </Box>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default StoreCard;
