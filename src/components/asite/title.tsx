import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { observer } from "mobx-react";
import { apiStoreImpl } from "../../stores/apiStore";

interface TitleProps {
  title: apiStoreImpl;
}

const Title: React.FC<TitleProps> = observer(({ title }) => {
  const [text, setText] = useState<string>("");

  useEffect(() => {
    if (title.title === "ทั้งหมด") {
      setText("");
    } else {
      setText(title.title);
    }
  }, [title.title]);

  return (
    <Box sx={{ ml: 2, my: 2 }}>
      <Typography variant="h6">ผลการค้นหา {text} ทั้งหมด</Typography>
    </Box>
  );
});

export default Title;
