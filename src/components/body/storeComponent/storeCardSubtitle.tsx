import React, { useEffect, useState } from "react";
import { Box, Typography, Skeleton, IconButton } from "@mui/material";
import { AiFillCar } from "react-icons/ai";

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
        <Box sx={{ fontSize: 13, my: 1 }}>
          <div dangerouslySetInnerHTML={{ __html: text }} />
        </Box>
      )}
      {!text && <Skeleton variant="text" width={250} animation="wave" />}

      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Typography sx={{ fontSize: 13 }}>แนะนำ:</Typography>
        {recommendedItems.map((item: any) => {
          return (
            <Typography sx={{ fontSize: 13, color: "gray" }}>
              &nbsp; {item} &nbsp;
            </Typography>
          );
        })}
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row", mt: 2 }}>
        <IconButton sx={{ border: 1, borderColor: "#5EC038" }}>
          <AiFillCar color="#5EC038" size="20" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default StoreCardTitle;
