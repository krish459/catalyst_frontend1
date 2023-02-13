import axios from "axios";
import { useEffect, useState } from "react";
import { addKeyword } from "../../../features/properties/propertiesSlice";
import Pagination from "../../common/blog/Pagination";
import CopyrightFooter from "../../common/footer/CopyrightFooter";
import Footer from "../../common/footer/Footer";
import Header from "../../common/header/DefaultHeader";
import MobileMenu from "../../common/header/MobileMenu";
import FilterTopBar from "../../common/listing/FilterTopBar";
import GridListButton from "../../common/listing/GridListButton";
import ShowFilter from "../../common/listing/ShowFilter";
import SidebarListing from "../../common/listing/SidebarListing";
import PopupSignInUp from "../../common/PopupSignInUp";
import BreadCrumb2 from "./BreadCrumb2";
import FeaturedItem from "./FeaturedItem";

const index = () => {
  const [getKeyword, setKeyword] = useState();
  const [getBedroom, setBedroom] = useState();
  const [getBathroom, setBathroom] = useState();
  const [getGarages, setGarages] = useState();
  const [getBuiltYear, setBuiltYear] = useState();
  const [getStatus, setStatus] = useState();
  const [getLocation, setLocation] = useState();
  const [getPropertiesType, setPropertiesType] = useState();
  const [getAreaMin, setAreaMin] = useState();
  const [price, setPrice] = useState();
  // console.log(getKeyword);
  const [profiledata, setProfiledata] = useState();
  const listproperties = async () => {
    const result = await axios.get(
      `https://makanmitra.dthree.in/api/property/get-properties?bedrooms=${getBedroom}&bathroom=${getBathroom}&furnishing=${getGarages}&availableFromYear=${getBuiltYear}&buyOrRent=${getStatus}&locality=${getLocation}&propertyType=${getPropertiesType}&minarea=${getAreaMin}&price=${price}`
    );
    // console.log(result.data);
    if(!result.data.details){
      setProfiledata(result.data.properties);
    }else{
      setProfiledata(result.data.details);
    }
  };
  
  useEffect(() => {
    listproperties();
  }, [
    getKeyword,
    getBedroom,
    getBathroom,
    getGarages,
    getBuiltYear,
    getStatus,
    getLocation,
    getPropertiesType,
    getAreaMin,
    price
  ]);
  if (!profiledata) {
    return <h1>Load..</h1>;
  }

  // console.log("addKey : ",addKeyword);
  return (
    <>
      {/* <!-- Main Header Nav --> */}
      <Header />

      {/* <!--  Mobile Menu --> */}
      <MobileMenu />

      {/* <!-- Modal --> */}
      <PopupSignInUp />

      {/* <!-- Listing Grid View --> */}
      <section className="our-listing bgc-f7 pb30-991 mt85 md-mt0 ">
        <div className="container">
          {/* <div className="row">
              <div className="col-lg-6">
                <BreadCrumb2 />
              </div>
              {/* End .col */}

          <div className="col-lg-6 position-relative">
            <div className="listing_list_style mb20-xsd tal-991">
              <GridListButton />
            </div>
            {/* End list grid */}

            <div className="dn db-991 mt30 mb0">
              <ShowFilter />
            </div>
            {/* ENd button for mobile sidebar show  */}
          </div>
          {/* End .col filter grid list */}
          {/* </div> */}
          {/* End Page Breadcrumb and Grid,List and filter Button */}

          <div className="row">
            <div className="col-lg-4 col-xl-4">
              <div className="sidebar-listing-wrapper">
                <SidebarListing
                  getKeyword={getKeyword}
                  setKeyword={setKeyword}
                  getBedroom={getBedroom}
                  setBedroom={setBedroom}
                  getBathroom={getBathroom}
                  setBathroom={setBathroom}
                  getGarages={getGarages}
                  setGarages={setGarages}
                  getBuiltYear={getBuiltYear}
                  setBuiltYear={setBuiltYear}
                  getStatus={getStatus}
                  setStatus={setStatus}
                  getLocation={getLocation}
                  setLocation={setLocation}
                  getPropertiesType={getPropertiesType}
                  setPropertiesType={setPropertiesType}
                  getAreaMin={getAreaMin}
                  setAreaMin={setAreaMin}
                  price={price}
                  setPrice={setPrice}
                />
              </div>
              {/* End SidebarListing */}

              <div
                className="offcanvas offcanvas-start offcanvas-listing-sidebar"
                tabIndex="-1"
                id="sidebarListing"
              >
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title">Advanced Search</h5>
                  <button
                    type="button"
                    className="btn-close text-reset"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                {/* End .offcanvas-heade */}

                <div className="offcanvas-body">{/* <SidebarListing /> */}</div>
              </div>
              {/* End mobile sidebar listing  */}
            </div>
            {/* End sidebar conent */}

            <div className="col-md-12 col-lg-8">
              <div className="grid_list_search_result ">
                {/* <div className="row align-items-center">
                  <FilterTopBar />
                </div> */}
              </div>
              {/* End .row */}

              <div className="row">
                {profiledata.map((data) => {
                  return (
                    <FeaturedItem
                      key={data._id}
                      _id={data._id}
                      title={data.title}
                      description={data.description}
                      images={data.images}
                      area={data.area}
                      locality={data.locality}
                      state={data.state}
                      rent={data.rent}
                      buyOrRent={data.buyOrRent}
                      details={data.details}
                      bedrooms={data.details[0].bedrooms}
                      bathroom={data.details[0].bathroom}
                      propertyType={data.details[0].propertyType}
                      furnishing={data.details[0].furnishing}
                      tenants={data.details[0].tenants}
                      deposit={data.details[0].deposit}
                      foodPreferance={data.details[0].foodPreferance}
                      balcony={data.details[0].balcony}
                      flatFloor={data.details[0].flatFloor}
                      totalFloors={data.details[0].totalFloors}
                      availableFrom={data.details[0].availableFrom}
                      facing={data.details[0].facing}
                      monthlymaintenance={data.details[0].monthlymaintenance}
                      waterSupply={data.details[0].waterSupply}
                      amenities={data.amenities}
                      createdAt={data.createdAt}
                    />
                  );
                })}
              </div>
              {/* End .row */}

              <div className="row">
                <div className="col-lg-12 mt20">
                  <div className="mbp_pagination">
                    <Pagination />
                  </div>
                </div>
                {/* End paginaion .col */}
              </div>
              {/* End .row */}
            </div>
            {/* End  page conent */}
          </div>
          {/* End .row */}
        </div>
      </section>

      {/* <!-- Our Footer --> */}
      <section className="footer_one">
        <div className="container">
          <div className="row">
            <Footer />
          </div>
        </div>
      </section>

      {/* <!-- Our Footer Bottom Area --> */}
      <section className="footer_middle_area pt40 pb40">
        <div className="container">
          <CopyrightFooter />
        </div>
      </section>
    </>
  );
};

export default index;
