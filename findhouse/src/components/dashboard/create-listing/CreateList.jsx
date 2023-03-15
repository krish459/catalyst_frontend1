const CreateList = ({
  title,
  setTitle,
  desc,
  setDesc,
  type,
  setType,
  status,
  setStatus,
  price,
  setPrice,
  area,
  setArea,
  bedrooms,
  setBedrooms,
}) => {
  return (
    <>
      <div className="col-lg-12">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="propertyTitle">Property Title</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter property title"
            id="propertyTitle"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-12">
        <div className="my_profile_setting_textarea">
          <label htmlFor="propertyDescription">Description</label>
          <textarea
            className="form-control"
            id="propertyDescription"
            rows="7"
            placeholder="Enter description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6 col-xl-6">
        <div className="my_profile_setting_input ui_kit_select_search form-group">
          <label>Prroperty type</label>
          <select
            className="selectpicker form-select"
            data-live-search="true"
            data-width="100%"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option data-tokens="type1">flat</option>
            <option data-tokens="Type2">mansion</option>
            <option data-tokens="Type3">bunglow</option>
            <option data-tokens="Type4">Type4</option>
            <option data-tokens="Type5">Type5</option>
          </select>
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6 col-xl-6">
        <div className="my_profile_setting_input ui_kit_select_search form-group">
          <label>Buy/Rent</label>
          <select
            className="selectpicker form-select"
            data-live-search="true"
            data-width="100%"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option data-tokens="buy">buy</option>
            <option data-tokens="rent">rent</option>
          </select>
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-4 col-xl-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="formGroupExamplePrice">Rent</label>
          <input
            type="number"
            className="form-control"
            id="formGroupExamplePrice"
            placeholder="Enter rent per month"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
          />
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-4 col-xl-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="formGroupExampleArea">Area</label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleArea"
            placeholder="Enter Area of property"
            value={area}
            onChange={(e) => setArea(Number(e.target.value))}
          />
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-4 col-xl-4">
        <div className="my_profile_setting_input ui_kit_select_search form-group">
          <label>Bedrooms</label>
          <select
            className="selectpicker form-select"
            data-live-search="true"
            data-width="100%"
            value={bedrooms}
            onChange={(e) => setBedrooms(Number(e.target.value))}
          >
            <option data-tokens="Status1">1</option>
            <option data-tokens="Status2">2</option>
            <option data-tokens="Status3">3</option>
            <option data-tokens="Status4">4</option>
            <option data-tokens="Status5">5</option>
            <option data-tokens="Status6">Other</option>
          </select>
        </div>
      </div>
      {/* End .col */}

      {/* <div className="col-xl-12">
        <div className="my_profile_setting_input">
          <button className="btn btn1 float-start">Back</button>
          <button className="btn btn2 float-end">Next</button>
        </div>
      </div> */}
    </>
  );
};

export default CreateList;
