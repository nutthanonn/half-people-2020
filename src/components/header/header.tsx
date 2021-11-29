import React, { useEffect, useState } from "react";
import {
  Box,
  TextField,
  CssBaseline,
  FormControl,
  Select,
  MenuItem,
  Container,
  Typography,
  ButtonGroup,
  Button,
} from "@mui/material";
import Logo from "../../images/logoDesktop.png";
import { observer } from "mobx-react";
import { apiStoreImpl } from "../../stores/apiStore";
import { IoIosArrowDown } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { AiOutlineSearch } from "react-icons/ai";
import MobileNavbar from "./mobile/mobileNavbar";

interface HeaderProps {
  provincesApi: apiStoreImpl;
}

const Header: React.FC<HeaderProps> = observer(({ provincesApi }) => {
  const [provinces, setProvinces] = useState<string[]>([]);
  const [value, setValues] = useState("default");

  useEffect(() => {
    setTimeout(() => {
      const res = provincesApi.Provinces();
      setProvinces(res);
    }, 800);
  }, [provincesApi]);

  return (
    <Box sx={{ mt: 0 }}>
      <CssBaseline />
      <Container
        sx={{
          display: { md: "flex", sm: "none", xs: "none" },
          p: 2,
          alignItems: "center",
        }}
      >
        <Box sx={{ flexGrow: 1, mr: 1 }}>
          <Box>
            <img src={Logo} width="100%" height="50" />
          </Box>
        </Box>
        <ButtonGroup sx={{ width: "90%" }}>
          <FormControl
            sx={{
              width: 200,
              "& .MuiInputBase-root": {
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
                "&:hover fieldset": {
                  borderColor: "#C4C4C4",
                },
              },
              "& fieldset": { borderRight: 0 },
            }}
          >
            <Select
              size="small"
              defaultValue={value}
              onChange={(e) => setValues(e.target.value)}
              value={value}
              IconComponent={IoIosArrowDown}
            >
              <MenuItem disabled={true} value="default">
                <IoLocationSharp />
                &nbsp; พื้นที่ใกล้ฉัน
              </MenuItem>
              {provinces.map((item) => {
                return (
                  <MenuItem value={item} key={item}>
                    <IoLocationSharp />
                    &nbsp; {item}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <Box sx={{ width: 800 }}>
            <form>
              <TextField
                placeholder="ค้นหา ชื่อ ร้านอาหาร และเครื่องดื่ม ร้านธงฟ้า ร้าน OTOP และสินค้าทั่วไป"
                fullWidth
                size="small"
                sx={{
                  "& .MuiInputBase-root": {
                    borderRadius: 0,
                    "& fieldset": {
                      borderRight: 0,
                    },
                    "&:hover fieldset": {
                      borderColor: "#C4C4C4",
                    },
                  },
                }}
              />
            </form>
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
            <AiOutlineSearch />
          </Button>
        </ButtonGroup>
      </Container>
      <Container
        sx={{
          display: {
            md: "none",
            sm: "flex",
            xs: "flex",
          },
        }}
      >
        <MobileNavbar />
      </Container>
    </Box>
  );
});

export default Header;
