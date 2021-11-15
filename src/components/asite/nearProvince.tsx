import React, { useState, useEffect } from "react";
import { Box, FormControl, MenuItem, Select, Typography } from "@mui/material";
import { IoIosArrowDown } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { observer } from "mobx-react";
import { apiStoreImpl } from "../../stores/apiStore";

interface SelecterProps {
  nearProvinceApi: apiStoreImpl;
}

const NearProvince: React.FC<SelecterProps> = observer(
  ({ nearProvinceApi }) => {
    const [provinces, setProvinces] = useState<string[]>([]);
    const [values, setValues] = useState<string>("default");

    useEffect(() => {
      setTimeout(() => {
        const res = nearProvinceApi.Provinces();
        setProvinces(res);
      }, 800);
    }, [nearProvinceApi]);

    return (
      <Box>
        <Box>
          <Typography variant="h6" sx={{ mt: 3, mb: 2 }}>
            จังหวัด/ใกล้ฉัน
          </Typography>
          <FormControl sx={{ width: "90%" }}>
            <Select
              sx={{
                height: 30,
              }}
              size="small"
              defaultValue={values}
              onChange={(e) => setValues(e.target.value)}
              value={values}
              IconComponent={IoIosArrowDown}
            >
              <MenuItem disabled value="default">
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
        </Box>
      </Box>
    );
  }
);

export default NearProvince;
