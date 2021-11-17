import React, { useEffect, useState } from "react";
import { Box, Typography, Skeleton, IconButton, Tooltip } from "@mui/material";
import { AiFillCar } from "react-icons/ai";
import { MdOutlineBookmarkAdded } from "react-icons/md";
import { GiSittingDog } from "react-icons/gi";

interface StoreCardTitleProps {
  highlightText?: string;
  facilities?: string[];
  recommendedItems?: any;
}

const StoreCardTitle: React.FC<StoreCardTitleProps> = ({
  highlightText,
  facilities,
  recommendedItems,
}) => {
  const [text, setText] = useState<string | undefined>("");

  useEffect(() => {
    setTimeout(() => {
      setText(highlightText);
    }, 800);
  }, [highlightText]);

  return (
    <Box>
      {text && (
        <Box sx={{ fontSize: 13, my: 1, color: "gray" }}>
          <div dangerouslySetInnerHTML={{ __html: text }} />
        </Box>
      )}
      {!text && <Skeleton variant="text" width={250} animation="wave" />}

      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Typography sx={{ fontSize: 13 }}>แนะนำ:</Typography>
        {recommendedItems.map((item: any) => {
          return (
            <Typography sx={{ fontSize: 13, color: "gray" }}>
              &nbsp; {item}
            </Typography>
          );
        })}
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row", mt: 4 }}>
        {facilities?.map((item) => {
          if (item === "ที่จอดรถ") {
            return (
              <Tooltip title={item}>
                <IconButton sx={{ border: 1, borderColor: "#5EC038", ml: 1 }}>
                  <AiFillCar color="#5EC038" size="20" />
                </IconButton>
              </Tooltip>
            );
          } else if (item === "รับจองล่วงหน้า") {
            return (
              <Tooltip title={item}>
                <IconButton sx={{ border: 1, borderColor: "#5EC038", ml: 1 }}>
                  <MdOutlineBookmarkAdded color="#5EC038" size="20" />
                </IconButton>
              </Tooltip>
            );
          } else {
            return (
              <Tooltip title={item}>
                <IconButton sx={{ border: 1, borderColor: "#5EC038", ml: 1 }}>
                  <GiSittingDog color="#5EC038" size="20" />
                </IconButton>
              </Tooltip>
            );
          }
        })}
      </Box>
    </Box>
  );
};

export default StoreCardTitle;
