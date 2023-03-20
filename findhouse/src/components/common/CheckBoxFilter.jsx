import { useEffect } from "react";

const CheckBoxFilter = ({amenities, setAmenities}) => {
  const selectAmenities = (icon) => {
    if (amenities.includes(icon)) {
      // If the amenity already exists in the array, remove it
      setAmenities(amenities.filter(item => item !== icon));
    } else {
      // If the amenity doesn't exist in the array, add it
      setAmenities([...amenities, icon]);
    }
    // console.log(amenities);
  }
  
  useEffect(() => {
    const checkboxes = document.querySelectorAll('[id^="customCheck"]');
    checkboxes.forEach((checkbox) => {
      const amenity = checkbox.id.replace('customCheck', '');
      if (amenities.includes(amenity)) {
        checkbox.checked = true;
      }
    });
  }, [amenities]);

  // useEffect(() => {
  //   if (amenities.length !== 0) {
  //     for (let i = 0; i < amenities.length; i++) {
  //       const checkbox = document.getElementById(`customCheck${amenities[i]}`);
  //       if (checkbox) {
  //         checkbox.checked = true;
  //         selectAmenities(amenities[i]);
  //       }
  //     }
  //   }
  // }, []);
  
  
  
  return (
    <>
      <div className="col-xxs-6 col-sm col-lg col-xl">
        <ul className="ui_kit_checkbox selectable-list">
          <li>
            <div className="form-check custom-checkbox">
              <input
                type="checkbox"
                className="form-check-input"
                id="customCheckAir_Conditioning"
                onClick={() => selectAmenities("Air_Conditioning")}
              />
              <label className="form-check-label" htmlFor="customCheck1">
                Air_Conditioning
              </label>
            </div>
          </li>
          {/* End li */}

          <li>
            <div className="form-check custom-checkbox">
              <input
                type="checkbox"
                className="form-check-input"
                id="customCheckLawn"
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
                id="customCheckSwimming_Pool"
                onClick={() => selectAmenities("Swimming_Pool")}
              />
              <label className="form-check-label" htmlFor="customCheck3">
                Swimming_Pool
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
                id="customCheckBarbeque"
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
                id="customCheckMicrowave"
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
                id="customCheckTV_Cable"
                onClick={() => selectAmenities("TV_Cable")}
              />
              <label className="form-check-label" htmlFor="customCheck6">
                TV_Cable
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
                id="customCheckGym"
                onClick={() => selectAmenities("Gym")}
              />
              <label className="form-check-label" htmlFor="customCheck10">
                Gym
              </label>
            </div>
          </li>
          {/* End li */}

          <li>
            <div className="form-check custom-checkbox">
              <input
                type="checkbox"
                className="form-check-input"
                id="customCheckRefrigerator"
                onClick={() => selectAmenities("Refrigerator")}
              />
              <label className="form-check-label" htmlFor="customCheck11">
                Refrigerator
              </label>
            </div>
          </li>
          {/* End li */}

          <li>
            <div className="form-check custom-checkbox">
              <input
                type="checkbox"
                className="form-check-input"
                id="customCheckWiFi"
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
