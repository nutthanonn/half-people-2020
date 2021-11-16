import React from "react";
import { Box } from "@mui/material";

interface StoreCardImageProps {
  imageTag: string;
}

const StoreCardImage: React.FC = () => {
  return (
    <Box>
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
    </Box>
  );
};

export default StoreCardImage;
