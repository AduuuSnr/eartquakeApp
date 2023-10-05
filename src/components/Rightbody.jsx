import { Box } from "@mui/material";
import React from "react";
import MyMap from "./MapContainer";

function Rightbody(params) {
  console.log('params:',params)
  return (
    <Box flex={2} paddingLeft={"20px"} marginTop={"10px"}>
      <Box
        borderRadius={"5px"}
        width={"100%"}
        height={window.innerHeight * 0.85}
        bgcolor={"red"}
      >
        <MyMap position={params.earthquake}/>
      </Box>
    </Box>
  );
}

export default Rightbody;
