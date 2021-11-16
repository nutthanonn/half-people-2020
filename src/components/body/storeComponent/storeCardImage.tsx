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
          justifyContent: "center",
          overflow: "hidden",
          backgroundSize: "cover",
        }}
      >
        <Box
          component="img"
          src={imageTag}
          alt=""
          sx={{ width: 270, height: 240 }}
        />
      </Box>
    </Box>
  );
};

export default StoreCardImage;
