import "../index.css";
import { useEffect, useId, useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import io from "socket.io-client";
import leaflet, { marker } from "leaflet";
import L from "leaflet";

export default function Map() {
  const socket = io("http://localhost:3000/map");

  const [locations, setLocation] = useState({ latitude: 0, longitude: 0 });

  const [userId, setUserId] = useState("user1");
  const [userLocation, setUserLocation] = useState({
    currentLocation: null,
    fromLocation: null,
    toLocation: null
  });
  

  // if (navigator.geolocation) {
  //   navigator.geolocation.watchPosition(
  //     (position) => {
  //       const { latitude, longitude } = position.coords;
  //       socket.emit("send-location", { latitude, longitude });
  //       console.log(latitude);

  //     },
  //     (error) => {
  //       console.error(error);
  //     }
  //   ),
  //     {
  //       enableHighAccuracy: true,
  //       timeout: 1000,
  //       maximumAge: 0,
  //     };
  // }

  // useEffect(() => {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(
  //       (position) => {
  //         const location = {
  //           latitude: position.coords.latitude,
  //           longitude: position.coords.longitude,
  //         };

  //         socket.emit("update-location", location);
  //       },
  //       (error) => {
  //         console.error("Error Obtaining location", error);
  //       }
  //     ),
  //       {
  //         enableHighAccuracy: true,
  //         timeout: 5000,
  //         maximumAge: 0,
  //       };
  //   }

  //   socket.on('location-update', (clients) => {
  //     console.log("Received updated locations:", clients);
  //     setLocation(clients);
  //   });

  //   return () => {
  //     socket.off('disconnect');
  //   }
  // }, [])
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const currentLocation = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          };
          console.log("Emitting user location:", locations);
          const fromLocation = { latitude: 51.505, longitude: -0.09 }; 
          const toLocation = { latitude: 60.515, longitude: -0.1 };
          socket.emit("update-user-location", { userId, currentLocation, fromLocation, toLocation });
        },
        (error) => {
          console.error("Error Obtaining location", error);
        }
      ),
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0,
        };
    }

    socket.on("location-update", (data) => {
      console.log("Received updated locations:", data);
      
      // if(data.users && data.users[useId]){
      //   console.log("user location", data.users[userId]);
        
      //   setUserLocation(data.users[userId])
      // }
      // else {
      //   console.log(`No location data for userid: ${userId}`);
      // }

      if (data.users && data.users[userId]) {
        const locationData = data.users[userId];

        if (
          locationData.currentLocation &&
          locationData.currentLocation.latitude !== undefined &&
          locationData.currentLocation.longitude !== undefined
        ) {
          console.log("Setting user location:", locationData);
          setUserLocation(locationData);
        } else {
          console.log("Invalid location data:", locationData);
        }
      } else {
        console.log(`No location data for userId: ${userId}`);
      }

      
    });


    

    return () => {
      socket.off("location-update");
    };
  }, [userId]);

  // useEffect(() => {

  //   socket.on('locationUpdate', (newLocation) => {
  //     setLocation(newLocation)
  //   })

  //   return () => {
  //     socket.off('locationUpdate')
  //   }
  // }, [])

  // const markers = {}

  // useEffect(() => {

  //   socket.on('receive-location', (data) => {
  //     // const {id, latitude, longitude} = data
  //     // setLocation([latitude, longitude])

  //     // // if(markers[id]){
  //     // //   markers[id].setLatLang([latitude, longitude]);
  //     // // }
  //     // // else {
  //     // //   markers[id] = setLocation(latitude, longitude)
  //     // // }

  //      socket.on("receive-location", (newLocation) => {
  //       const { id, latitude, longitude } = newLocation;
  //        if (id && latitude && longitude) {
  //          setLocation({
  //            latitude: newLocation.latitude,
  //            longitude: newLocation.longitude,
  //          });
  //        } else {
  //         marker([latitude, longitude])
  //        }
  //      });

  //      return () => {
  //        socket.off('disconnect');
  //      };

  //   })
  // }, [])

  // useEffect(() => {
  //   socket.on("user-disconnect", (id) => {
  //     if (markers[id]) {
  //       socket.off(markers[id]);
  //       delete markers[id];
  //     }
  //   });
  // }, [location, location.latitude, location.longitude]);

  



  // return (
  //   <>
  //     <MapContainer
  //       center={[locations.latitude, locations.longitude]}
  //       zoom={10}
  //       scrollWheelZoom={true}
  //       id="map"
  //     >
  //       <TileLayer
  //         attribution="&copy; Car Pooling"
  //         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  //       />

  //       {Object.keys(locations).map((clientId) => {
  //         const location = locations[clientId];

  //         // Check if location data is valid
  //         if (
  //           location &&
  //           location.latitude !== undefined &&
  //           location.longitude !== undefined
  //         ) {
  //           return (
  //             <Marker
  //               key={clientId}
  //               position={[locations.latitude, locations.longitude]}
  //             >
  //               <Popup>Client ID: {clientId}</Popup>
  //             </Marker>
  //           );
  //         }

  //         return null;
  //       })}

  //       {/* {location.latitude && location.longitude && (
  //         <Marker position={[location.latitude, location.longitude]}>
  //           <Popup>
  //             A pretty CSS3 popup. <br /> Easily customizable.
  //           </Popup>
  //         </Marker>
  //       )} */}

  //       {/* {Object.keys(location).map((clientId) => (
  //         <Marker key={clientId} position={[location[clientId].latitude, location[clientId].longitude]}>
  //           <Popup>
  //             Client ID: {clientId}
  //           </Popup>
  //         </Marker>
  //       ))} */}

  //       {/* <Marker position={[location.latitude, location.longitude]}>
  //         <Popup>
  //           A pretty CSS3 popup. <br /> Easily customizable.
  //         </Popup>
  //       </Marker> */}
  //     </MapContainer>
  //   </>
  // );
  return (
    <>
      <MapContainer
        center={[locations.latitude, locations.longitude]}
        zoom={8}
        scrollWheelZoom={true}
        id="map"
      >
        <TileLayer
          attribution="&copy; Car Pooling"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* {userLocation &&
          userLocation.latitude !== undefined &&
          userLocation.longitude !== undefined && (
            <Marker
              key={userId}
              position={[userLocation.latitude, userLocation.longitude]}
            >
              <Popup>
                <h5>You are here</h5>
              </Popup>
            </Marker>
          )} */}

        {userLocation && userLocation.currentLocation && (
          <Marker
            position={[
              userLocation.currentLocation.latitude,
              userLocation.currentLocation.longitude,
            ]}
          >
            <Popup>Current Location</Popup>
          </Marker>
        )}

        {userLocation && userLocation.fromLocation && (
          <Marker
            position={[
              userLocation.fromLocation.latitude,
              userLocation.fromLocation.longitude,
            ]}
          >
            <Popup>From Location</Popup>
          </Marker>
        )}
        {userLocation && userLocation.toLocation && (
          <Marker
            position={[
              userLocation.toLocation.latitude,
              userLocation.toLocation.longitude,
            ]}
          >
            <Popup>To Location</Popup>
          </Marker>
        )}

        {/* {location.latitude && location.longitude && (
          <Marker position={[location.latitude, location.longitude]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        )} */}

        {/* {Object.keys(location).map((clientId) => (
          <Marker key={clientId} position={[location[clientId].latitude, location[clientId].longitude]}>
            <Popup>
              Client ID: {clientId}
            </Popup>
          </Marker>
        ))} */}

        {/* <Marker position={[location.latitude, location.longitude]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker> */}
      </MapContainer>
    </>
  );
}
