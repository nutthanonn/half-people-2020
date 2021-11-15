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
import { observer } from "mobx-react";
import { apiStoreImpl } from "../../stores/apiStore";
import { IoIosArrowDown } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { AiOutlineSearch } from "react-icons/ai";

interface HeaderProps {
  provincesApi: apiStoreImpl;
}

const Header: React.FC<HeaderProps> = observer(({ provincesApi }) => {
  const [provinces, setProvinces] = useState<string[]>([]);
  const [value, setValues] = useState("test");

  useEffect(() => {
    setTimeout(() => {
      const res = provincesApi.Provinces();
      setProvinces(res);
    }, 800);
  }, [provincesApi]);

  return (
    <Box sx={{ position: "sticky", top: 0, left: 0 }}>
      <CssBaseline />
      <Container
        sx={{
          display: "flex",
          p: 2,
          alignItems: "center",
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Typography>Hello</Typography>
        </Box>
        <ButtonGroup sx={{ border: 1, width: "90%" }}>
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
              <MenuItem disabled={true} value="test">
                <IoLocationSharp />
                &nbsp; Hello
              </MenuItem>
              {provinces.map((item) => {
                return (
                  <MenuItem value={item} key={item}>
                    {item}
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
    </Box>
  );
});

export default Header;
