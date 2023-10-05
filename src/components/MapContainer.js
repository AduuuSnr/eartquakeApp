import React, { useCallback, useEffect, useState } from "react";
import {
  GoogleMap,
  InfoWindow,
  InfoWindowF,
  MarkerF,
  Polyline,
  PolylineF,
  useJsApiLoader,
} from "@react-google-maps/api";
import icon from "../assets/Vector.svg";
// import { getDealers } from "../Apis";
import dealers from "../dummyDatas/dealer.json";

const containerStyle = {
  width: "100%",
  height: "100%",
  borderRadius: "5px",
};

function MyComponent(params) {
  // const [dealers, setDealers] = useState();
  const [infoWindowIndex, setInfoWindowIndex] = useState(-1); // Default: No InfoWindow

  const center = {
    lat:
      params?.position.latitude === undefined
        ? 38.423733
        : params?.position.latitude,
    lng:
      params?.position.longitude === undefined
        ? 27.142826
        : params?.position.longitude,
  };

  const OPTIONS = {
    minZoom: 4,
    maxZoom: 15,
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCLbKz83bRJv7C2k7yxhRgGldo7sWgZUHw",
  });

  const [map, setMap] = useState(null);

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  // useEffect(() => {
  //   getDealers().then((dealer) => {
  //     console.log("dealer:", dealer?.data);

  //     setDealers(dealer.data);
  //   });
  // }, []);
  console.log("params.position:", params.position);

  const primaryMarker = {
    lat: params?.position.latitude,
    lng: params?.position.longitude,
  };
  const connectedMarkers = [];
  dealers?.map((i) => {
    connectedMarkers.push({ lat: i.dealer_latitude, lng: i.dealer_longitude });
  });

  const polylinePaths = connectedMarkers.map((marker) => [
    primaryMarker,
    { lat: marker.lat, lng: marker.lng },
  ]);

  const calculateDistance = (pointA, pointB) => {
    const latLngA = new window.google.maps.LatLng(pointA.lat, pointA.lng);
    const latLngB = new window.google.maps.LatLng(pointB.lat, pointB.lng);
    const distanceInMeters =
      window.google.maps.geometry.spherical.computeDistanceBetween(
        latLngA,
        latLngB
      );
    const distanceInKm = distanceInMeters / 1000; // Convert meters to kilometers
    return distanceInKm;
  };

  const handlePolylineClick = (index) => {
    setInfoWindowIndex(index === infoWindowIndex ? -1 : index);
  };

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={8}
      options={OPTIONS}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <MarkerF
        icon={{ url: require("../assets/Vector.svg").default }}
        position={primaryMarker}
      />

      {connectedMarkers.map((marker, index) => {
        return <MarkerF key={index} position={marker} />;
      })}
      {polylinePaths.map((path, index) => (
        <div key={index}>
          <PolylineF
            path={path}
            options={{ strokeColor: "#FF0000" }}
            onClick={() => handlePolylineClick(index)}
          />
          {infoWindowIndex === index && (
            <InfoWindowF position={path[1]}>
              <p>
                Uzaklık: {calculateDistance(primaryMarker, path[1]).toFixed(2)}
                km
              </p>
            </InfoWindowF>
          )}
        </div>
      ))}
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(MyComponent);
