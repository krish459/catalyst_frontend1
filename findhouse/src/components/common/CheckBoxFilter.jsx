const CheckBoxFilter = ({amenities, setAmenities}) => {
  const selectAmenities = (icon) => {
    if (amenities.includes(icon)) {
      // If the amenity already exists in the array, remove it
      setAmenities(amenities.filter(item => item !== icon));
    } else {
      // If the amenity doesn't exist in the array, add it
      setAmenities([...amenities, icon]);
    }
    console.log(amenities);
  }
  return (
    <>
      <div className="col-xxs-6 col-sm col-lg col-xl">
        <ul className="ui_kit_checkbox selectable-list">
          <li>
            <div className="form-check custom-checkbox">
              <input
                type="checkbox"
                className="form-check-input"
                id="customCheck1"
                onClick={() => selectAmenities("Air Conditioning")}
              />
              <label className="form-check-label" htmlFor="customCheck1">
                Air Conditioning
              </label>
            </div>
          </li>
          {/* End li */}

          <li>
            <div className="form-check custom-checkbox">
              <input
                type="checkbox"
                className="form-check-input"
                id="customCheck2"
                onClick={() => selectAmenities("Lawn")}
              />
              <label className="form-check-label" htmlFor="customCheck2">
                Lawn
              </label>
            </div>
          </li>
          {/* End li */}

          <li>
            <div className="form-check custom-checkbox">
              <input
                type="checkbox"
                className="form-check-input"
                id="customCheck3"
                onClick={() => selectAmenities("Swimming Pool")}
              />
              <label className="form-check-label" htmlFor="customCheck3">
                Swimming Pool
              </label>
            </div>
          </li>
          {/* End li */}
        </ul>
      </div>
      {/* End .col */}

      <div className="col-xs-6 col-sm col-lg col-xl">
        <ul className="ui_kit_checkbox selectable-list">
          <li>
            <div className="form-check custom-checkbox">
              <input
                type="checkbox"
                className="form-check-input"
                id="customCheck4"
                onClick={() => selectAmenities("Barbeque")}
              />
              <label className="form-check-label" htmlFor="customCheck4">
                Barbeque
              </label>
            </div>
          </li>
          {/* End li */}

          <li>
            <div className="form-check custom-checkbox">
              <input
                type="checkbox"
                className="form-check-input"
                id="customCheck5"
                onClick={() => selectAmenities("Microwave")}
              />
              <label className="form-check-label" htmlFor="customCheck5">
                Microwave
              </label>
            </div>
          </li>
          {/* End li */}

          <li>
            <div className="form-check custom-checkbox">
              <input
                type="checkbox"
                className="form-check-input"
                id="customCheck6"
                onClick={() => selectAmenities("TV Cable")}
              />
              <label className="form-check-label" htmlFor="customCheck6">
                TV Cable
              </label>
            </div>
          </li>
          {/* End li */}
        </ul>
      </div>
      {/* End .col */}

     
      {/* End .col */}

      <div className="col-xxs-6 col-sm col-lg col-xl">
        <ul className="ui_kit_checkbox selectable-list">
          <li>
            <div className="form-check custom-checkbox">
              <input
                type="checkbox"
                className="form-check-input"
                id="customCheck10"
                onClick={() => selectAmenities("Gym")}
              />
              <label className="form-check-label" htmlFor="customCheck10">
                Gym
              </label>
            </div>
          </li>
          {/* End li */}

          {/* <li>
            <div className="form-check custom-checkbox">
              <input
                type="checkbox"
                className="form-check-input"
                id="customCheck11"
              />
              <label className="form-check-label" htmlFor="customCheck11">
                Refrigerator
              </label>
            </div>
          </li> */}
          {/* End li */}

          <li>
            <div className="form-check custom-checkbox">
              <input
                type="checkbox"
                className="form-check-input"
                id="customCheck12"
                onClick={() => selectAmenities("WiFi")}
              />
              <label className="form-check-label" htmlFor="customCheck12">
                WiFi
              </label>
            </div>
          </li>
          {/* End li */}
        </ul>
      </div>
      {/* End .col */}

      <div className="col-xxs-6 col-sm col-lg col-xl">
        <ul className="ui_kit_checkbox selectable-list">
          {/* <li>
            <div className="form-check custom-checkbox">
              <input
                type="checkbox"
                className="form-check-input"
                id="customCheck13"
              />
              <label className="form-check-label" htmlFor="customCheck13">
                Laundry
              </label>
            </div>
          </li> */}
          {/* End li */}

          {/* <li>
            <div className="form-check custom-checkbox">
              <input
                type="checkbox"
                className="form-check-input"
                id="customCheck14"
              />
              <label className="form-check-label" htmlFor="customCheck14">
                Sauna
              </label>
            </div>
          </li> */}
          {/* End li */}

          {/* <li>
            <div className="form-check custom-checkbox">
              <input
                type="checkbox"
                className="form-check-input"
                id="customCheck15"
              />
              <label className="form-check-label" htmlFor="customCheck15">
                Window Coverings
              </label>
            </div>
          </li> */}
          {/* End li */}
        </ul>
      </div>
      {/* End .col */}
    </>
  );
};

export default CheckBoxFilter;
