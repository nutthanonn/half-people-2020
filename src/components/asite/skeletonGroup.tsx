import React from "react";
import { Skeleton, Box, FormControlLabel, Radio } from "@mui/material";

export const SkeletonTypeChoice: React.FC = () => {
  return (
    <Box>
      <FormControlLabel
        value="Skeleton"
        control={<Radio />}
        label={<Skeleton variant="text" width={250} />}
      />
      <FormControlLabel
        value="Skeleton"
        control={<Radio />}
        label={<Skeleton variant="text" width={250} />}
      />
      <FormControlLabel
        value="Skeleton"
        control={<Radio />}
        label={<Skeleton variant="text" width={250} />}
      />
      <FormControlLabel
        value="Skeleton"
        control={<Radio />}
        label={<Skeleton variant="text" width={250} />}
      />
    </Box>
  );
};
