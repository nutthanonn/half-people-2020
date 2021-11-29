import React, { useState } from "react";
import {
  Box,
  TextField,
  Typography,
  Toolbar,
  CssBaseline,
  Button,
  ButtonGroup,
  Drawer,
  Container,
  IconButton,
} from "@mui/material";
import DrawerItem from "./drawerItem";
import { RiFilterLine } from "react-icons/ri";
import Logo from "../../../images/logomobile.png";

const MobileNavbar: React.FC = () => {
  const [isOpenDrawer, setIsOpenDrawer] = useState<boolean>(false);

  return (
    <Box sx={{ width: "100%" }}>
      <CssBaseline />
      <Container
        sx={{
          p: 1,
          width: "100%",
        }}
      >
        <Toolbar>
          <Box>
            <img src={Logo} width="100" />
          </Box>
          <ButtonGroup sx={{ ml: { xs: 0.5, sm: 1.5 }, flexGrow: 1 }}>
            <Box sx={{ width: "100%" }}>
              <TextField
                fullWidth
                placeholder="ค้นหา ชื่อ ร้านอาหาร และเครื่องดื่ม ร้านธงฟ้า ร้าน OTOP และสินค้าทั่วไป"
                size="small"
                sx={{
                  "& .MuiInputBase-root": {
                    borderRadius: 1,
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0,
                    "& fieldset": {
                      borderRight: 0,
                    },
                    "&:hover fieldset": {
                      borderColor: "#C4C4C4",
                    },
                  },
                }}
              />
            </Box>
            <Button
              variant="outlined"
              sx={{
                width: 70,
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
                borderLeft: 0,
                "&:hover": {
                  borderLeft: 0,
                  borderColor: "#C4C4C4",
                },
                bgcolor: "whitesmoke",
                borderColor: "#C4C4C4",
                color: "black",
              }}
            >
              Click
            </Button>
          </ButtonGroup>
          <IconButton sx={{ ml: 1 }} onClick={() => setIsOpenDrawer(true)}>
            <RiFilterLine size="25" />
          </IconButton>
        </Toolbar>
        <Drawer
          anchor="right"
          open={isOpenDrawer}
          onClose={() => setIsOpenDrawer(!isOpenDrawer)}
          sx={{
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: "80%",
            },
          }}
        >
          <DrawerItem />
        </Drawer>
      </Container>
    </Box>
  );
};

export default MobileNavbar;
