import axios from "axios";

const BASE_URL = "http://localhost:8000";

export const getDealers = async () => {
  return await axios.get(`${BASE_URL}/dealers`);
};
export const GetEarthquakes = async (params) => {
  return await axios.post(
    `https://deprem.afad.gov.tr/EventData/GetEventsByFilter`,
    {
      EventSearchFilterList: [
        {
          FilterType: 9,
          Value: params.startDate,
        },
        {
          FilterType: 8,
          Value: params.endDate,
        },
      ],
      Skip: 0,
      Take: 100,
      SortDescriptor: {
        field: "magnitude",
        dir: "desc",
      },
    },
    {
      headers: {
        // Origin: "https://deprem.afad.gov.tr",
        "Content-Type": "application/json",
      },
    }
  );
};
// exports.GetEarthquakes = async (params) => {
//   return await axios.post(
//     `https://deprem.afad.gov.tr/EventData/GetEventsByFilter`,
//     {
//       EventSearchFilterList: [
//         {
//           FilterType: 9,
//           Value: params.startDate,
//         },
//         {
//           FilterType: 8,
//           Value: params.oneWeekAgo,
//         },
//       ],
//       Skip: 0,
//       Take: 1000,
//       SortDescriptor: {
//         field: "eventDate",
//         dir: "desc",
//       },
//     },
//     {
//       headers: {
//         Origin: "https://deprem.afad.gov.tr",
//         "Content-Type": "application/json",
//       },
//     }
//   );
// };
