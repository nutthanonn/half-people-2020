import React from "react";
import { Box } from "@mui/material";

interface StoreCardImageProps {
  imageTag: string | undefined;
}

const StoreCardImage: React.FC<StoreCardImageProps> = ({ imageTag }) => {
  return (
    <Box>
      <Box
        sx={{
          p: 0.5,
          display: "flex",
          justifyContent: { md: "center" },
          overflow: "hidden",
          backgroundSize: "cover",
        }}
      >
        <Box
          component="img"
          src={imageTag}
          alt=""
          sx={{
            width: { md: 275, sm: "100%", xs: "100%" },
            height: { md: 240, sm: 250, xs: 250 },
            backgroundSize: "cover",
          }}
        />
      </Box>
    </Box>
  );
};

export default StoreCardImage;
