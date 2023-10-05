import {
  Box,
  Button,
  Menu,
  MenuItem,
  Paper,
  TextField,
  inputLabelClasses,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import moment from "moment";
import "../App.css";
import { GetEarthquakes, getDealers } from "../Apis";
import dealers from "../dummyDatas/dealer.json";
import { setEarthquakes } from "../@redux/app/actions";
import { useDispatch } from "react-redux";

function FilterEarthquake({ latitude, longitude, paginationn }) {
  const date = new Date(); // Örnek tarih

  const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);

  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorEl2, setAnchorEl2] = useState(null);
  const [startDate, setStartDate] = useState(new Date().toISOString());
  const [endDate, setEndDate] = useState(firstDayOfMonth.toISOString());
  const [pagination, setPagination] = useState(10);
  const dispatch = useDispatch();

  // const [dealers, setDealers] = useState();

  const open = Boolean(anchorEl);
  const open2 = Boolean(anchorEl2);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose2 = (i) => {
    console.log("lat:", i.dealer_latitude);
    latitude(i.dealer_latitude);
    longitude(i.dealer_longitude);
    console.log("long:", i.dealer_longitude);
    setAnchorEl2(null);
  };

  const handleStartDate = (event) => {
    const ev = event.target.value;
    setStartDate(new Date(ev).toISOString());
  };
  const handleEndDate = (event) => {
    const ev = event.target.value;
    setEndDate(new Date(ev).toISOString());
  };

  const GetEarthquakess = () => {
    GetEarthquakes({
      startDate: startDate,
      endDate: endDate,
      pagination: pagination,
      currentPage: 1,
    }).then((i) => {
      const data = i.data.eventList;
      const loc = "Kahramanmaraş";
      const loc2 = "Gaziantep";
      const loc3 = "Hatay";
      // const location = i.location.replace(")", " ").split("(")[1];
      console.log("data:", data);

      const filteredData = data?.filter(
        (i) =>
          (i.magnitude >= 3.5 && i.location.includes(loc)) ||
          (i.magnitude >= 3.5 && i.location.includes(loc2)) ||
          (i.magnitude >= 3.5 && i.location.includes(loc3))
      );
      console.log("filteredData:", filteredData);

      dispatch(setEarthquakes(filteredData));
    });
  };

  return (
    <Paper elevation={3} sx={styles.container}>
      <Box sx={{ marginLeft: 5, display: "flex" }}>
        <p style={{ color: "#484B54" }}>Filtrele:</p>
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          variant="text"
          endIcon={<KeyboardArrowDownIcon />}
          sx={{
            color: "white",
            textTransform: "capitalize",
            fontWeight: "bold",
          }}
        >
          Durum
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose}>Algılanmadı</MenuItem>
          <MenuItem onClick={handleClose}>Algılanan</MenuItem>
          <MenuItem onClick={handleClose}>Cihaz Kapalı</MenuItem>
          <MenuItem onClick={handleClose}>Tespit Edilemedi</MenuItem>
        </Menu>
      </Box>
      <Box sx={{ marginLeft: 5, display: "flex" }}>
        <p style={{ color: "#484B54" }}>Filtrele:</p>
        <Button
          id="basic-button"
          aria-controls={open2 ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open2 ? "true" : undefined}
          onClick={handleClick2}
          variant="text"
          endIcon={<KeyboardArrowDownIcon />}
          sx={{
            color: "white",
            textTransform: "capitalize",
            fontWeight: "bold",
          }}
        >
          Mağaza
        </Button>

        <Menu
          id="basic-menu"
          anchorEl={anchorEl2}
          open={open2}
          onClose={handleClose2}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {dealers?.map((dealer) => (
            <MenuItem onClick={() => handleClose2(dealer)}>
              {dealer.dealer_name}
            </MenuItem>
          ))}
        </Menu>
      </Box>
      <Box sx={{ marginLeft: 5, display: "flex" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Paper sx={{ background: "transparent" }} elevation={3}>
            <TextField
              id="date"
              label="*Başlangıç Tarihi"
              type="date"
              onChange={handleStartDate}
              defaultValue={moment().startOf("month").format("YYYY-MM-DD")}
              inputProps={{
                style: styles.inputStyle,
              }}
              sx={{
                width: window.innerWidth * 0.08,
                height: 45,
                input: { color: "white" },
              }}
              InputLabelProps={{
                sx: {
                  [`&.${inputLabelClasses.shrink}`]: {
                    color: "white",
                  },
                },
                shrink: true,
              }}
            />
          </Paper>
          <TextField
            id="date2"
            label="*Bitiş Tarihi"
            type="date"
            onChange={handleEndDate}
            defaultValue={new Date().toISOString().split("T")[0]}
            inputProps={{
              style: styles.inputStyle,
            }}
            sx={{
              width: window.innerWidth * 0.08,
              height: 45,
              marginLeft: 1,
              input: { color: "white" },
            }}
            InputProps={{
              border: "1px solid white",
            }}
            InputLabelProps={{
              sx: {
                [`&.${inputLabelClasses.shrink}`]: {
                  color: "white",
                },
              },

              shrink: true,
            }}
          />
          <Button
            variant="contained"
            sx={{
              marginLeft: 1,
              display: "flex",
              background: "linear-gradient(#1C1F2B, #94A9FF)",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={() => GetEarthquakess()}
          >
            Ara
          </Button>
          <Button
            variant="contained"
            sx={{
              marginLeft: 1,
              display: "flex",
              background: "linear-gradient(#1C1F2B, #94A9FF)",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={() => {}}
          >
            Dışa Aktar
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    background: "#141922",
    height: 60,
  },
  floatingLabelFocusStyle: {
    color: "white",
  },
  inputStyle: {
    background: "#1C1F2B",
    height: 15,
  },
  root: {
    // - The TextField-root
    border: "solid 3px #0ff", // - For demonstration: set the TextField-root border
    padding: "3px", // - Make the border more distinguishable

    // (Note: space or no space after `&` matters. See SASS "parent selector".)
    "& .MuiOutlinedInput-root": {
      // - The Input-root, inside the TextField-root
      "& fieldset": {
        // - The <fieldset> inside the Input-root
        borderColor: "pink", // - Set the Input border
      },
      "&:hover fieldset": {
        borderColor: "yellow", // - Set the Input border when parent has :hover
      },
      "&.Mui-focused fieldset": {
        // - Set the Input border when parent is focused
        borderColor: "green",
      },
    },
  },
};

export default FilterEarthquake;
