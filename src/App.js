import React, { useEffect, useState } from "react";
import TopNavBar from "./components/TopNavBar";
import { Box, Divider, Grid, Stack } from "@mui/material";
import Leftbody from "./components/Leftbody";
import Rightbody from "./components/Rightbody";
import FilterEarthquake from "./components/FilterEarthquake";
import { GetEarthquakes } from "./Apis";
import { useDispatch } from "react-redux";
import { setEarthquakes } from "./@redux/app/actions";

function App() {
  // const [title, setTitle] = useState('Onaylananlar')
  const [title, setTitle] = useState("Onay Bekleyen");
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const [earthquakeLat, setEarthquakeLat] = useState();
  const [earthquakeLng, setEarthquakeLng] = useState();
  const [pagination, setPagination] = useState(10);

  const dispatch = useDispatch();

  const date = new Date(); // Örnek tarih

  const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);

  const getEarthquakeLat = (earthquakeLat) => {
    console.log("earthquakeLatttttt:", earthquakeLat);
    setEarthquakeLat(earthquakeLat);
  };

  const getEarthquakeLng = (earthquakeLng) => {
    console.log("earthquakeLngggggg:", earthquakeLng);
    setEarthquakeLng(earthquakeLng);
  };

  const getLatitude = (latitude) => {
    setLatitude(latitude);
  };
  const getLongitude = (longitude) => {
    setLongitude(longitude);
  };

  useEffect(() => {
    GetEarthquakes({
      startDate: new Date().toISOString(),
      endDate: firstDayOfMonth.toISOString(),
      pagination: pagination,
      currentPage: 1,
    }).then((i) => {
      const data = i.data.eventList;
      const loc = "Kahramanmaraş";
      const loc2 = "Gaziantep";
      const loc3 = "Hatay";

      const filteredData = data?.filter(
        (i) =>
          (i.magnitude >= 3.5 && i.location.includes(loc)) ||
          (i.magnitude >= 3.5 && i.location.includes(loc2)) ||
          (i.magnitude >= 3.5 && i.location.includes(loc3))
      );

      dispatch(setEarthquakes(filteredData));
    });
  }, []);

  return (
    <>
      <TopNavBar />
      {title === "Onay Bekleyen" ? (
        <FilterEarthquake latitude={getLatitude} longitude={getLongitude} />
      ) : (
        <></>
      )}

      <Box
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: "15px",
          marginLeft: "1.5%",
          color: "white",
          fontWeight: "bold",
        }}
      >
        {title}
      </Box>
      <Grid
        container
        justifyContent={"center"}
        spacing={1}
        columns={16}
        sx={{ marginTop: "5px" }}
      >
        {/*leftbody */}
        <Grid item xs={7.8} display={"flex"}>
          <Leftbody
            earthquakeLatt={getEarthquakeLat}
            earthquakeLngg={getEarthquakeLng}
          />
        </Grid>
        <Divider orientation="vertical" color="#0d1217"></Divider>
        {/*rightbody */}
        <Grid item xs={7.8}>
          <Rightbody
            position={{ latitude: latitude, longitude: longitude }}
            earthquake={{ latitude: earthquakeLat, longitude: earthquakeLng }}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
