// import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
// import { useMemo } from "react";

// const GoogleMaps = () => {
//   const { isLoaded } = useLoadScript({
//     googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
//   });
//   const center = useMemo(() => ({ lat: 18.52043, lng: 73.856743 }), []);

//   return (
//     <div className="h-[700px] w-[100%]">
//       {!isLoaded ? (
//         <h1>Loading...</h1>
//       ) : (
//         <GoogleMap
//             mapContainer ClassName="h-[100%] w-[100%]"
//             center={center}
//             zoom={10}
//             style={{width:"100%",height:"100%"} }
//         >
//           <Marker position={{ lat: 18.52043, lng: 73.856743 }} />
//         </GoogleMap>
//       )}
//     </div>
//   );
// };

// export default GoogleMaps;