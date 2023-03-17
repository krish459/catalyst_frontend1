import React, { useState, useEffect } from 'react';
import PropertyLocation from './PropertyLocation';

const PropertySearch = ({address1}) => {
  const [location, setLocation] = useState([]);

  useEffect(() => {
      const getAddressCoordinates = async (address1) => {
        //   const address = 'Lake view resort, ketkawale Balaji Road, Maharashtra, SH63, Pune, Narayanpur - 412205, Maharashtra, India';
          const address = address1;
        //   console.log("address: ", address.address1);
          const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(address.address1)}&format=json&addressdetails=1&limit=1`;
              const response = await fetch(url);
              const data = await response.json();
            //   console.log("Data: ",data);
              if (data.length > 0) {
                  const { lat, lon } = data[0];
                  console.log("lat, lon: ",lat, lon);

                  setLocation([lat, lon]);
                } else {
                    setLocation([19.076090, 72.877426]);
                    alert('Location not found');
                }
            };
            if (typeof window !== "undefined") {
                getAddressCoordinates({address1});
            }
  }, []);


  return (
    <>
      {location.length > 0 && <PropertyLocation location={location} />}
    </>
  );
};

export default PropertySearch;
