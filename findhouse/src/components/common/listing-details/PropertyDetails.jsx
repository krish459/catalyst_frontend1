const PropertyDetails = ({rent,area,propertyAge,bedrooms,bathroom,furnishing,propertyType,rentOrBuy}) => {
  return (
    <>
      <div className="col-md-6 col-lg-6 col-xl-4">
        <ul className="list-inline-item">
          <li>
            <p>
              Property ID : <span>HZ27</span>
            </p>
          </li>
          <li>
            <p>
              Price : <span>$ {rent}</span>
            </p>
          </li>
          <li>
            <p>
              Property Size : <span>{area} Sq Ft</span>
            </p>
          </li>
          <li>
            <p>
              Year Built : <span>Before {propertyAge} years </span>
            </p>
          </li>
        </ul>
      </div>
      {/* End .col */}

      <div className="col-md-6 col-lg-6 col-xl-4">
        <ul className="list-inline-item">
          <li>
            <p>
              Bedrooms : <span>{bedrooms}</span>
            </p>
          </li>
          <li>
            <p>
              Bathrooms : <span>{bathroom}</span>
            </p>
          </li>
          <li>
            <p>
              Furnished : <span>{furnishing}</span>
            </p>
          </li>
          {/* <li>
            <p>
              Garage Size : <span>200 SqFt</span>
            </p>
          </li> */}
        </ul>
      </div>
      {/* End .col */}

      <div className="col-md-6 col-lg-6 col-xl-4">
        <ul className="list-inline-item">
          <li>
            <p>
              Property Type : <span>{propertyType}</span>
            </p>
          </li>
          <li>
            <p>
              Property Status : <span>For {rentOrBuy}</span>
            </p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default PropertyDetails;
