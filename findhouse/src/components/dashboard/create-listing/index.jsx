import Header from "../../common/header/dashboard/Header";
import SidebarMenu from "../../common/header/dashboard/SidebarMenu";
import MobileMenu from "../../common/header/MobileMenu";
import CreateList from "./CreateList";
import DetailedInfo from "./DetailedInfo";
import FloorPlans from "./FloorPlans";
import LocationField from "./LocationField";
import PropertyMediaUploader from "./PropertyMediaUploader";
import { useEffect, useState } from "react";
import jwt from "jsonwebtoken";
import axios from "axios";

const index = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [type, setType] = useState("");
  const [status, setStatus] = useState("");
  const [price, setPrice] = useState();
  const [locality, setLocality] = useState("");
  const [state, setState] = useState("");
  const [area, setArea] = useState();
  const [bedrooms, setBedrooms] = useState();
  const [bathroom, setBathroom] = useState();
  const [propertyAge, setPropertyAge] = useState();

  const [furnishing, setFurnishing] = useState("");
  const [tenants, setTenants] = useState();
  const [deposit, setDeposit] = useState();
  const [foodPreference, setFoodPreference] = useState("");
  const [balcony, setBalcony] = useState();
  const [flatFloor, setFlatFloor] = useState();
  const [totalFloors, setTotalFloors] = useState();
  const [availableFrom, setAvailableFrom] = useState("");
  const [facing, setFacing] = useState("");
  const [monthlyMaintenance, setMonthlyMaintenance] = useState();
  const [waterSupply, setWaterSupply] = useState();

  const [yearBuilt, setYearBuilt] = useState();
  const [amenities, setAmenities] = useState([]);
  const [propertySelectedImgs, setPropertySelectedImgs] = useState([]);
  const [getImgKeys, setImgKeys] = useState();
  const [imgDone, setImgDone] = useState(true);
  const [message, setMessage] = useState();

  const handlePropertyImages = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      propertySelectedImgs.forEach((img) => {
        formData.append("images", img);
      });

      const result = await axios.post(
        "https://makanmitra.dthree.in/api/property/multiple-image",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(result.data.imgkeys);
      setImgKeys(result.data.imgkeys);
      setImgDone(true);
      // print(imgDone)
      setMessage("Images uploaded Successfully");
    } catch (error) {
      console.log("error: ", error);
    }
  };
  const handlePropertySubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const decodedToken = jwt.decode(token);
      console.log("decodedToken: ", decodedToken);
      const data = {
        title: title,
        description: desc,
        images: getImgKeys,
        area: parseInt(area),
        locality: locality,
        state: state,
        rent: parseInt(price),
        buyOrRent: status,
        details: [
          {
            bedrooms: parseInt(bedrooms),
            bathroom: parseInt(bathroom),
            propertyType: type,
            propertyAge: parseInt(propertyAge),
            furnishing: furnishing,
            tenants: parseInt(tenants),
            deposit: parseInt(deposit),
            foodPreference: foodPreference,
            balcony: parseInt(balcony),
            flatFloor: parseInt(flatFloor),
            totalFloors: parseInt(totalFloors),
            availableFrom: availableFrom,
            facing: facing,
            monthlyMaintenance: parseInt(monthlyMaintenance),
            waterSupply: parseInt(waterSupply),
          },
        ],
        amenities: amenities,
        flatOwner: decodedToken.user_id,
      };

      const propertyResult = await axios.post(
        "https://makanmitra.dthree.in/api/property/add-properties",
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Dtaa: ", data);
      console.log(propertyResult.data);
      setMessage("Property posted successfully");
    } catch (error) {
      console.log("error: ", error);
    }
  };
  useEffect(() => {
    const timeout = setTimeout(() => {
      setMessage("");
    }, 500);

    return () => clearTimeout(timeout);
  }, [message]);
  return (
    <>
      {/* <!-- Main Header Nav --> */}
      <Header />

      {/* <!--  Mobile Menu --> */}
      <MobileMenu />

      <div className="dashboard_sidebar_menu">
        <div
          className="offcanvas offcanvas-dashboard offcanvas-start"
          tabIndex="-1"
          id="DashboardOffcanvasMenu"
          data-bs-scroll="true"
        >
          <SidebarMenu />
        </div>
      </div>
      {/* End sidebar_menu */}

      {/* <!-- Our Dashbord --> */}
      <section className="our-dashbord dashbord bgc-f7 pb50">
        <div className="container-fluid ovh">
          <div className="row">
            <div className="col-lg-12 maxw100flex-992">
              <div className="row">
                {/* Start Dashboard Navigation */}
                <div className="col-lg-12">
                  <div className="dashboard_navigationbar dn db-1024">
                    <div className="dropdown">
                      <button
                        className="dropbtn"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#DashboardOffcanvasMenu"
                        aria-controls="DashboardOffcanvasMenu"
                      >
                        <i className="fa fa-bars pr10"></i> Dashboard Navigation
                      </button>
                    </div>
                  </div>
                </div>
                {/* End Dashboard Navigation */}

                <div className="col-lg-12 mb10">
                  <div className="breadcrumb_content style2">
                    <h2 className="breadcrumb_title">Add New Property</h2>
                    <p>We are glad to see you again!</p>
                  </div>
                </div>
                {/* End .col */}

                <div className="col-lg-12">
                  <div className="my_dashboard_review">
                    <div className="row">
                      <div className="col-lg-12">
                        <h3 className="mb30">Create Listing</h3>
                      </div>

                      <CreateList
                        title={title}
                        setTitle={setTitle}
                        desc={desc}
                        setDesc={setDesc}
                        type={type}
                        setType={setType}
                        status={status}
                        setStatus={setStatus}
                        price={price}
                        setPrice={setPrice}
                        area={area}
                        setArea={setArea}
                        bedrooms={bedrooms}
                        setBedrooms={setBedrooms}
                      />
                    </div>
                  </div>
                  {/* <div className="my_dashboard_review mt30">
                    <div className="row">
                      <div className="col-lg-12">
                        <h3 className="mb30">Location</h3>
                      </div>

                      <LocationField />
                    </div>
                  </div> */}
                  <div className="my_dashboard_review mt30">
                    <div className="col-lg-12">
                      <h3 className="mb30">Detailed Information</h3>
                    </div>
                    <DetailedInfo
                      bathroom={bathroom}
                      setBathroom={setBathroom}
                      yearBuilt={yearBuilt}
                      setYearBuilt={setYearBuilt}
                      locality={locality}
                      setLocality={setLocality}
                      state={state}
                      setState={setState}
                      propertyAge={propertyAge}
                      setPropertyAge={setPropertyAge}
                      amenities={amenities}
                      setAmenities={setAmenities}
                      furnishing={furnishing}
                      setFurnishing={setFurnishing}
                      tenants={tenants}
                      setTenants={setTenants}
                      deposit={deposit}
                      setDeposit={setDeposit}
                      foodPreference={foodPreference}
                      setFoodPreference={setFoodPreference}
                      balcony={balcony}
                      setBalcony={setBalcony}
                      flatFloor={flatFloor}
                      setFlatFloor={setFlatFloor}
                      totalFloors={totalFloors}
                      setTotalFloors={setTotalFloors}
                      availableFrom={availableFrom}
                      setAvailableFrom={setAvailableFrom}
                      facing={facing}
                      setFacing={setFacing}
                      monthlyMaintenance={monthlyMaintenance}
                      setMonthlyMaintenance={setMonthlyMaintenance}
                      waterSupply={waterSupply}
                      setWaterSupply={setWaterSupply}
                    />
                  </div>
                  <div className="my_dashboard_review mt30">
                    <div className="col-lg-12">
                      <h3 className="mb30">Property media</h3>
                    </div>
                    <PropertyMediaUploader
                      propertySelectedImgs={propertySelectedImgs}
                      setPropertySelectedImgs={setPropertySelectedImgs}
                      handlePropertyImages={handlePropertyImages}
                    />
                  </div>
                  {/* <div className="my_dashboard_review mt30">
                    <div className="col-lg-12">
                      <h3 className="mb30">Floor Plans</h3>
                      <button className="btn admore_btn mb30">Add More</button>
                    </div>
                    <FloorPlans />
                  </div> */}
                </div>
                {/* End .col */}
              </div>
              {/* End .row */}
              {imgDone && (
                <div className="col-xl-12">
                  <div
                    className="my_profile_setting_input text-center"
                    style={{
                      margin: "auto",
                      width: "10rem",
                      alignItems: "center",
                      marginTop: "0.1rem",
                      marginBottom: "2rem",
                    }}
                  >
                    <button
                      className="btn btn1 float-start"
                      onClick={handlePropertySubmit}
                    >
                      Post Property
                    </button>
                  </div>
                </div>
              )}
              {message && (
                <div className="form-group">
                  <div
                    className="alert alert-success text-center margin-auto"
                    // className={
                    //     !statusLogin ? "alert alert-success" : "alert alert-danger"
                    // }
                    role="alert"
                  >
                    {message}
                  </div>
                </div>
              )}

              <div className="row mt50">
                <div className="col-lg-12">
                  <div
                    className="copyright-widget text-center"
                    style={{ alignItems: "center", marginBottom: "0.1rem" }}
                  >
                    <p>© 2020 Find House. Made with love.</p>
                  </div>
                </div>
              </div>
              {/* End .row */}
            </div>
            {/* End .col */}
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
