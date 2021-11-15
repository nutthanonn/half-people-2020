import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { observer } from "mobx-react";

const Title: React.FC = observer(() => {
  return (
    <Box sx={{ ml: 2 }}>
      <Typography variant="h6">
        <b>ผลการค้นหา : </b>
      </Typography>
    </Box>
  );
});

export default Title;
