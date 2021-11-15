import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { SkeletonTypeChoice } from "./skeletonGroup";
import { observer } from "mobx-react";
import { apiStoreImpl } from "../../stores/apiStore";
import { setTimeout } from "timers";

interface TypeOfRestaurantProps {
  typeOfRestaurant: apiStoreImpl;
}

const TypeOfRestaurant: React.FC<TypeOfRestaurantProps> = observer(
  ({ typeOfRestaurant }) => {
    const [text, setText] = useState<string>("");
    const [values, setValues] = useState<string[] | null>(null);

    useEffect(() => {
      setText(typeOfRestaurant.title);
      setValues(null);
      setTimeout(() => {
        const res = typeOfRestaurant.TypeRestaurant();
        setValues(res);
      }, 700);
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
                control={
                  <Radio
                    sx={{
                      "&.Mui-checked": {
                        color: "#2196f3",
                      },
                    }}
                  />
                }
                label="ทั้งหมด"
              />
              {!values && <SkeletonTypeChoice />}
              {values &&
                values.map((item) => {
                  return (
                    <FormControlLabel
                      value={item}
                      control={
                        <Radio
                          sx={{
                            "&.Mui-checked": {
                              color: "#2196f3",
                            },
                          }}
                        />
                      }
                      label={item}
                    />
                  );
                })}
            </RadioGroup>
          </FormControl>
        </Box>
      </Box>
    );
  }
);

export default TypeOfRestaurant;
