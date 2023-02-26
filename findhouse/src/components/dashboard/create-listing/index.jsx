import Header from "../../common/header/dashboard/Header";
import SidebarMenu from "../../common/header/dashboard/SidebarMenu";
import MobileMenu from "../../common/header/MobileMenu";
import CreateList from "./CreateList";
import DetailedInfo from "./DetailedInfo";
import FloorPlans from "./FloorPlans";
import LocationField from "./LocationField";
import PropertyMediaUploader from "./PropertyMediaUploader";
import { useEffect, useState } from "react";

const index = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [type, setType] = useState("");
  const [status, setStatus] = useState("");
  const [price, setPrice] = useState();
  const [area, setArea] = useState();
  const [bedrooms, setBedrooms] = useState();
  const [bathroom, setBathroom] = useState();
  const [yearBuilt, setYearBuilt] = useState();
  const [amenities, setAmenities] = useState([]);
  const [propertySelectedImgs, setPropertySelectedImgs] = useState([]);

  const handlePropertyImages = async (e) => {
    e.preventDefault();
    try {
      const data = {
        images: propertySelectedImgs
      };

      //   const response = await axios.post(
      //     "https://makanmitra.dthree.in/api/users/register",
      //     { data }
      //   );
      // axios
      //   .post(
      //     "https://makanmitra.dthree.in/api/users/register",

      //     data,

      //     { headers: { "Content-Type": "application/json" } }
      //   )
      // .then((res) => {
      //   console.log(res);
      // })
      // .catch((error) => {
      //   console.log(error);
      // });

      console.log(data);
      //   console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handlePropertySubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        title: title,
        desc:desc,
        type:type,
        status:status,
        price:parseInt(price),
        area:parseInt(area),
        bedrooms:parseInt(bedrooms),
        bathroom: parseInt(bathroom),
        yearBuilt: parseInt(yearBuilt),
        amenities: amenities
      };

      //   const response = await axios.post(
      //     "https://makanmitra.dthree.in/api/users/register",
      //     { data }
      //   );
      // axios
      //   .post(
      //     "https://makanmitra.dthree.in/api/users/register",

      //     data,

      //     { headers: { "Content-Type": "application/json" } }
      //   )
      // .then((res) => {
      //   console.log(res);
      // })
      // .catch((error) => {
      //   console.log(error);
      // });

      console.log(data);
      //   console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
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

                      <CreateList title={title} setTitle={setTitle} desc={desc} setDesc={setDesc} type={type} setType={setType} status={status} setStatus={setStatus} 
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
                    <DetailedInfo bathroom={bathroom} setBathroom={setBathroom} yearBuilt={yearBuilt} setYearBuilt={setYearBuilt} amenities={amenities} setAmenities={setAmenities}/>
                  </div>
                  <div className="my_dashboard_review mt30">
                    <div className="col-lg-12">
                      <h3 className="mb30">Property media</h3>
                    </div>
                    <PropertyMediaUploader propertySelectedImgs={propertySelectedImgs} setPropertySelectedImgs={setPropertySelectedImgs} handlePropertyImages={handlePropertyImages} />
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
              <div className="col-xl-12" >
                <div className="my_profile_setting_input text-center" style={{margin:"auto", width: "100rem"}}>
                  <button className="btn btn1 float-start" onClick={handlePropertySubmit}>
                    Post Property
                  </button>
                </div>
              </div>
              <div className="row mt50">
                <div className="col-lg-12">
                  <div className="copyright-widget text-center">
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
