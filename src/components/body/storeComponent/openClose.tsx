import React from "react";
import { Box, Typography } from "@mui/material";

interface OpenCloseProps {
  status: string | undefined;
}

function Open() {
  return (
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
          bgcolor: "#5EC038",
          borderRadius: 1,
          width: 40,
          height: 20,
        }}
      >
        <Typography sx={{ color: "white", fontSize: 10 }}>เปิดอยู่</Typography>
      </Box>
    </Box>
  );
}

function Close() {
  return (
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
          bgcolor: "#A1A1A1",
          borderRadius: 1,
          width: 40,
          height: 20,
        }}
      >
        <Typography sx={{ color: "white", fontSize: 8 }}>ปิดแล้ว</Typography>
      </Box>
    </Box>
  );
}

function NA() {
  return <Box></Box>;
}

const OpenClose: React.FC<OpenCloseProps> = ({ status }) => {
  const [element, setElement] = React.useState(<NA />);

  React.useEffect(() => {
    if (status === "Y") {
      setElement(<Open />);
    } else if (status === "N") {
      setElement(<Close />);
    }
  }, [status]);
  return <Box>{element}</Box>;
};

export default OpenClose;
