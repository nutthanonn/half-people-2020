import React from "react";
import { Skeleton, Box, FormControlLabel, Radio } from "@mui/material";

const widthSkeletons: number = 150;

export const SkeletonTypeChoice: React.FC = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <FormControlLabel
        value="Skeleton"
        control={<Radio />}
        label={
          <Skeleton variant="text" width={widthSkeletons} animation="wave" />
        }
      />
      <FormControlLabel
        value="Skeleton"
        control={<Radio />}
        label={
          <Skeleton variant="text" width={widthSkeletons} animation="wave" />
        }
      />
      <FormControlLabel
        value="Skeleton"
        control={<Radio />}
        label={
          <Skeleton variant="text" width={widthSkeletons} animation="wave" />
        }
      />
      <FormControlLabel
        value="Skeleton"
        control={<Radio />}
        label={
          <Skeleton variant="text" width={widthSkeletons} animation="wave" />
        }
      />
    </Box>
  );
};
