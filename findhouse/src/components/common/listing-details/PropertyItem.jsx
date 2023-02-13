const PropertyItem = ({bedrooms ,
  bathroom ,
  propertyType ,
  area }) => {
  return (
    <ul className="mb0">
      <li className="list-inline-item">
        <a href="#">{propertyType}</a>
      </li>
      <li className="list-inline-item">
        <a href="#">Beds: {bedrooms}</a>
      </li>
      <li className="list-inline-item">
        <a href="#">Baths: {bathroom}</a>
      </li>
      <li className="list-inline-item">
        <a href="#">Sq Ft: {area}</a>
      </li>
    </ul>
  );
};

export default PropertyItem;
