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
import { SkeletonTypeChoice } from "./skeletonGroup";

interface RadioProps {
  categoriesNameApi: apiStoreImpl;
}

const RadioTab: React.FC<RadioProps> = observer(({ categoriesNameApi }) => {
  const [categories, setCategories] = useState<string[] | null>(null);

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
          aria-label="Name of restaurant"
          defaultValue="ร้านอาหารและเครื่องดื่ม"
          onChange={(e) => categoriesNameApi.Title(e.target.value)}
        >
          <FormControlLabel
            value="ทั้งหมด"
            control={<Radio />}
            label="ทั้งหมด"
          />
          {!categories && <SkeletonTypeChoice />}
          {categories &&
            categories.map((item) => {
              return (
                <FormControlLabel
                  value={item}
                  control={<Radio />}
                  label={item}
                />
              );
            })}
        </RadioGroup>
      </FormControl>
    </Box>
  );
});

export default RadioTab;
