import { Box, Typography } from "@mui/material";
import { BasText, SonucText } from "../constants/textstyle";
import React, { useEffect, useState } from "react";

function DepremInfo(props) {
  const { veri } = props;

  return (
    <div>
      <Box
        sx={{
          width: window.innerWidth * 0.45,
          display: "flex",
          justifyContent: "space-evenly",
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            width: "12.5%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#ffffff",
              height: window.innerWidth * 0.03,
              width: window.innerWidth * 0.03,
              background: veri?.magnitude > 4 ? "#9F251D" : "#ff7f00",
            }}
          >
            {veri?.magnitude}
          </Box>
        </Box>
        <Box
          sx={{
            width: "12.5%",
          }}
        >
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"space-between"}
            height={"50px"}
          >
            <Typography sx={BasText}>id</Typography>
            <Typography sx={SonucText}>{veri?.id}</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: "12.5%",
          }}
        >
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"space-between"}
            height={"50px"}
          >
            <Typography sx={BasText}>eventDate</Typography>
            <Typography sx={SonucText}>
              {veri?.eventDate.split("T")[0] +
                " " +
                veri?.eventDate.split("T")[1]}
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            width: "12.5%",
          }}
        >
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"space-between"}
            height={"50px"}
          >
            <Typography sx={BasText}>longitude</Typography>
            <Typography sx={SonucText}>{veri?.longitude}</Typography>
          </Box>
        </Box>

        <Box
          sx={{
            width: "12.5%",
          }}
        >
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"space-between"}
            height={"50px"}
          >
            <Typography sx={BasText}>latitude</Typography>
            <Typography sx={SonucText}>{veri?.latitude}</Typography>
          </Box>
        </Box>

        <Box
          sx={{
            width: "12.5%",
          }}
        >
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"space-between"}
            height={"50px"}
          >
            <Typography sx={BasText}>magnitude</Typography>
            <Typography sx={SonucText}>{veri?.magnitude}</Typography>
          </Box>
        </Box>

        <Box
          sx={{
            width: "12.5%",
          }}
        >
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"space-between"}
            height={"50px"}
          >
            <Typography sx={BasText}>location</Typography>
            <Typography sx={SonucText}>{veri?.location}</Typography>
          </Box>
        </Box>

        <Box
          sx={{
            width: "12.5%",
          }}
        >
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"space-between"}
            height={"50px"}
          >
            <Typography sx={BasText}>depth</Typography>
            <Typography sx={SonucText}>{veri?.depth}</Typography>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default DepremInfo;
