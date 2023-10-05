import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React from "react";
import { BasText, SonucText } from "../constants/textstyle";

function Magazalar({dealer}) {
  return (
    <div style={{ display: "flex"}}>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box
          className="box-info"
          sx={{display:'flex', flexDirection:'column', alignItems:'center', width:window.innerWidth* 0.07}}

        >
          <Typography sx={BasText}>Magaza</Typography>
          <Typography sx={SonucText}>{dealer?.dealer_name}</Typography>
        </Box>
        <Box
          className="box-info"
  sx={{display:'flex', flexDirection:'column', alignItems:'center', width:window.innerWidth* 0.07}}
        >
          <Typography sx={BasText}>Location</Typography>
          <Typography sx={SonucText}>{dealer?.location}</Typography>
        </Box>
        <Box
          className="box-info"
          sx={{display:'flex', flexDirection:'column', alignItems:'center', width:window.innerWidth* 0.07}}
        >
          <Typography sx={BasText}>Coordinates</Typography>
          <Typography sx={SonucText}>{dealer?.dealer_latitude}-{dealer?.dealer_longitude}</Typography>
        </Box>
        <FormControl
          sx={{
            //aşagıda kendi özel root ismine ulaştım bunu verıp style atayabıldım bunu yapmasaydın stıl atamama ızın vermıyordu
            //cekırdek stılıne ulasmıs oldum boylece
            "& .MuiTypography-root": BasText,
          }}
        >
          <FormLabel id="demo-form-control-label-placement"></FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-form-control-label-placement"
            name="position"
            defaultValue="top"
          >
            <FormControlLabel
              value="detected"
              control={
                <Radio
                  sx={{
                    color:'white',
                    "& .MuiSvgIcon-root": {
                      fontSize: 20,
                    },
                  }}
                />
              }
              label="Algılandı"
              labelPlacement="top"
            />
            <FormControlLabel
              value="notDetected"
              control={
                <Radio
                  sx={{
                    color:'white',
                    "& .MuiSvgIcon-root": {
                      fontSize: 20,
                    },
                  }}
                />
              }
              label="Algılanmadı"
              labelPlacement="top"
              color=""
            />
            <FormControlLabel
              value="deviceClosed"
              control={
                <Radio
                  sx={{
                    color:'white',
                    "& .MuiSvgIcon-root": {
                      fontSize: 20,
                    },
                  }}
                />
              }
              label="Cihaz Kapalı"
              labelPlacement="top"
              color=""
            />
            <FormControlLabel
              value="deviceNotActice"
              control={
                <Radio
                  sx={{
                    color:'white',
                    "& .MuiSvgIcon-root": {
                      fontSize: 20,
                    },
                  }}
                />
              }
              label="Aktif Değil"
              labelPlacement="top"
              color="#484B54"
            />
          </RadioGroup>
        </FormControl>
      </Box>


    </div>
  );
}

export default Magazalar;
