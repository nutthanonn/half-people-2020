import React, { useState, useEffect } from "react";
import {
  Box,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { observer } from "mobx-react";
import { apiStoreImpl } from "../../stores/apiStore";

interface RadioProps {
  categoriesNameApi: apiStoreImpl;
}

const RadioTab: React.FC<RadioProps> = observer(({ categoriesNameApi }) => {
  const [categories, setCategories] = useState<string[]>([]);
  const [values, setValues] = useState("ทั้งหมด");

  useEffect(() => {
    setTimeout(() => {
      const res = categoriesNameApi.Categories("name");
      setCategories(res);
    }, 700);
  }, [categoriesNameApi]);

  return (
    <Box>
      <Typography variant="h6" sx={{ my: 2 }}>
        ประเภทร้านค้า
      </Typography>
      <FormControl component="fieldset">
        <RadioGroup
          aria-label="gender"
          defaultValue={values}
          onChange={(e) => console.log(e.target.value)}
        >
          <FormControlLabel
            value="ทั้งหมด"
            control={<Radio />}
            label="ทั้งหมด"
          />
          {categories.map((item) => {
            return (
              <FormControlLabel value={item} control={<Radio />} label={item} />
            );
          })}
        </RadioGroup>
      </FormControl>
    </Box>
  );
});

export default RadioTab;