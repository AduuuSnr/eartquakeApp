import React, { useEffect, useState } from "react";
import { Box, Button } from "@mui/material";
import AccordionCard from "./AccordionCard";
import { useSelector } from "react-redux";

function Leftbody({ earthquakeLatt, earthquakeLngg }) {
  const [eventData, setEventData] = useState([]);
  const [message, setMessage] = useState("Depremler Yükleniyor....");
  const [loadCount, setLoadCount] = useState(1);
  const itemsPerLoad = 10;

  const earthquakes = useSelector((state) => state.app.earthquakes);

  const getEarthquakeLat = (earthquakeLat) => {
    earthquakeLatt(earthquakeLat);
  };
  const getEarthquakeLng = (earthquakeLng) => {
    earthquakeLngg(earthquakeLng);
  };
  const handleLoadMore = () => {
    setLoadCount(loadCount + 1);
  };

  useEffect(() => {
    setEventData(earthquakes);
    if (earthquakes === null) {
      setMessage(
        "Sorguladığınız tarihler arası belirtilen kriterlerde deprem olmamıştır"
      );
    }
  }, [earthquakes]);

  if (!eventData) {
    return <div style={{ color: "white" }}>{message}</div>;
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      {console.log(
        eventData.sort((a, b) => new Date(a.eventDate) - new Date(b.eventDate))
      )}
      {eventData
        ?.sort((a, b) => new Date(b.eventDate) - new Date(a.eventDate))
        .map((a, index) => (
          <AccordionCard
            data={a}
            key={index}
            earthquakeLat={getEarthquakeLat}
            earthquakeLng={getEarthquakeLng}
          />
        ))}
      <Button onClick={handleLoadMore}>Daha Fazla Göster</Button>
    </Box>
  );
}

export default Leftbody;
