import React from "react";
import { Box, Link, Breadcrumbs, Container, CssBaseline } from "@mui/material";

const BreadcrumbsTab: React.FC = () => {
  return (
    <Box sx={{ bgcolor: "#2C3978", p: 1.5 }}>
      <Container>
        <CssBaseline />
        <Breadcrumbs sx={{ color: "white" }}>
          <Link underline="hover" href="#" color="white">
            หน้าแรก
          </Link>
          <Link underline="hover" href="#" color="white">
            ค้นหา
          </Link>
        </Breadcrumbs>
      </Container>
    </Box>
  );
};

export default BreadcrumbsTab;
