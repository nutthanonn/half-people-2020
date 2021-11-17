import React from "react";
import { Box, Divider, Skeleton } from "@mui/material";

const SkaletonCard: React.FC = () => {
  return (
    <Box
      sx={{
        display: { xs: "flex", sm: "flex", md: "flex" },
        flexDirection: { md: "row", sm: "column", xs: "column" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: 0.2,
        }}
      >
        <Skeleton
          variant="rectangular"
          sx={{
            width: { md: 275, sm: "100%", xs: "100%" },
            height: { md: 240, sm: 250, xs: 250 },
          }}
          animation="wave"
        />
      </Box>
      <Box sx={{ ml: 3 }}>
        <Box
          sx={{
            mt: 2,
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
            <Skeleton variant="text" width={205} animation="wave" />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <Skeleton variant="text" width={220} animation="wave" />
          </Box>
          <Divider sx={{ my: 2 }} />
          <Box>
            <Skeleton variant="text" width={300} animation="wave" />
            <Skeleton variant="text" width={250} animation="wave" />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "row", mt: 2 }}>
            <Skeleton
              variant="circular"
              animation="wave"
              width={40}
              height={40}
              sx={{ mx: 2 }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SkaletonCard;
