import React, { useState, useEffect } from "react";
import { Box, FormControl, MenuItem, Select, Typography } from "@mui/material";
import { IoIosArrowDown } from "react-icons/io";
import { observer } from "mobx-react";
import { apiStoreImpl } from "../../stores/apiStore";

interface SelecterProps {
  priceofRange: apiStoreImpl;
}

const PriceofRange: React.FC<SelecterProps> = observer(({ priceofRange }) => {
  const [priceRange, setPriceRange] = useState<string[]>([]);
  const [priceRangeValues, setPriceRangeValues] = useState<string>("default");

  useEffect(() => {
    setTimeout(() => {
      const price = priceofRange.PriceRange();
      setPriceRange(price);
    }, 800);
  }, [priceofRange]);

  return (
    <Box>
      <Box>
        <Typography variant="h6" sx={{ mt: 3, mb: 2 }}>
          ราคา
        </Typography>
        <FormControl sx={{ width: "90%" }}>
          <Select
            size="small"
            defaultValue={priceRangeValues}
            onChange={(e) => setPriceRangeValues(e.target.value)}
            value={priceRangeValues}
            IconComponent={IoIosArrowDown}
          >
            <MenuItem disabled value="default">
              &nbsp; กรุณาเลือก
            </MenuItem>
            {priceRange.map((item) => {
              return (
                <MenuItem value={item} key={item}>
                  {item}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
});

export default PriceofRange;
