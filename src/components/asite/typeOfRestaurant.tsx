import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { observer } from "mobx-react";
import { apiStoreImpl } from "../../stores/apiStore";
import { setTimeout } from "timers";

interface TypeOfRestaurantProps {
  typeOfRestaurant: apiStoreImpl;
}

const TypeOfRestaurant: React.FC<TypeOfRestaurantProps> = observer(
  ({ typeOfRestaurant }) => {
    const [text, setText] = useState<string>("");
    const [values, setValues] = useState<string[]>([]);

    useEffect(() => {
      setText(typeOfRestaurant.title);
      setTimeout(() => {
        const res = typeOfRestaurant.TypeRestaurant();
        console.log(res[0].subcategories);
      }, 800);
    }, [typeOfRestaurant.title, typeOfRestaurant]);

    return (
      <Box>
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" sx={{ my: 2 }}>
            ประเภทร้านค้า{text}
          </Typography>
          <FormControl component="fieldset">
            <RadioGroup aria-label="type of restaurant">
              <FormControlLabel
                value="ทั้งหมด"
                control={<Radio />}
                label="ทั้งหมด"
              />
              {/* ????????? map-item */}
            </RadioGroup>
          </FormControl>
        </Box>
      </Box>
    );
  }
);

export default TypeOfRestaurant;
