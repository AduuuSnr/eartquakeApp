import {
  AppBar,
  Toolbar,
  Typography,
  styled,
  Box,
  Avatar,
  Button,
  Divider,
} from "@mui/material";
import React from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { PRIMARY_COLOR, TOPBAR_COLOR } from "../constants/colors";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const LeftSide = styled(Box)({
  display: "flex",
  gap: "20px",
  alignItems: "center",
});

const RightSide = styled(Box)({
  display: "flex",
  gap: "20px",
  alignItems: "center",
});

/*


  <MenuRoundedIcon
            style={{
              backgroundColor: PRIMARY_COLOR,
              padding: "5px 8px",
              borderRadius: "6px",
              border: "2px solid #494e55",
            }}
          />

const CenterZone = styled(Box)({
  display: "flex",
  gap: "3px",
  alignItems: "center",
});



 <CenterZone>
          <Button
            variant="contained"
            startIcon={<WidgetsOutlinedIcon />}
            style={{
              fontSize: "12px",
              padding: "8px",
              backgroundColor: PRIMARY_COLOR,
            }}
          >
            Overview
          </Button>
          <Button
            variant="contained"
            startIcon={<WidgetsOutlinedIcon />}
            style={{
              fontSize: "12px",
              padding: "8px",
              backgroundColor: PRIMARY_COLOR,
            }}
          >
            Overview
          </Button>
          <Button
            variant="contained"
            startIcon={<WidgetsOutlinedIcon />}
            style={{
              fontSize: "12px",
              padding: "8px",
              backgroundColor: PRIMARY_COLOR,
            }}
          >
            Overview
          </Button>
          <Button
            variant="contained"
            startIcon={<WidgetsOutlinedIcon />}
            style={{
              fontSize: "12px",
              padding: "8px",
              backgroundColor: PRIMARY_COLOR,
            }}
          >
            Overview
          </Button>
          <Button
            variant="contained"
            startIcon={<WidgetsOutlinedIcon />}
            style={{
              fontSize: "12px",
              padding: "8px",
              backgroundColor: PRIMARY_COLOR,
            }}
          >
            Overview
          </Button>
        </CenterZone>
*/

const TopNavBar = () => {
  return (
    <>
      <AppBar
        position="sticky"
        style={{
          backgroundColor: TOPBAR_COLOR,
          justifyContent: "space-between",
          padding: "5px",
        }}
      >
        <StyledToolbar>
          <LeftSide>
            <Box
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ bgcolor: "blue", marginRight: "8px" }}>B</Avatar>
              <Typography variant="h6">B-Vibe</Typography>
            </Box>
          </LeftSide>

          <RightSide>
            <Typography variant="h6" color={"#FFFF59"}>
              12
            </Typography>

            <Typography variant="subtitle1">Algılanan Sayısı</Typography>
            <Divider
              orientation="vertical"
              flexItem
              style={{ backgroundColor: "#232934" }}
            />
            {/* topbar infossssssssssss*/}
            <Typography variant="h6" color={"#FFFF59"}>
              12
            </Typography>

            <Typography variant="subtitle1">Algılanan Sayısı</Typography>
            <Divider
              orientation="vertical"
              flexItem
              style={{ backgroundColor: "#232934" }}
            />
            {/* topbar infossssssssssss*/}
            <Typography variant="h6" color={"#FFFF59"}>
              12
            </Typography>

            <Typography variant="subtitle1">Algılanan Sayısı</Typography>
            <Divider
              orientation="vertical"
              flexItem
              style={{ backgroundColor: "#232934" }}
            />
            {/* topbar infossssssssssss*/}
            <Typography variant="h6" color={"#FFFF59"}>
              12
            </Typography>

            <Typography variant="subtitle1">Algılanan Sayısı</Typography>
          </RightSide>
        </StyledToolbar>
      </AppBar>

      <Divider style={{ backgroundColor: "#1E232B", height: "1px" }} />
    </>
  );
};

export default TopNavBar;
