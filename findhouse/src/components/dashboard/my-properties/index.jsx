import Header from "../../common/header/dashboard/Header";
import SidebarMenu from "../../common/header/dashboard/SidebarMenu";
import MobileMenu from "../../common/header/MobileMenu";
import TableData from "./TableData";
import Filtering from "./Filtering";
import Pagination from "./Pagination";
import SearchBox from "./SearchBox";
import jwt from "jsonwebtoken";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Router from "next/router";

const index = () => {
  const [myProperty, setMyProperty] = useState();
  const [myMessage, setMyMessage] = useState();
  // const router = useRouter();
  // const id = router.query.id;
  const token = localStorage.getItem("token");
  const decodedToken = jwt.decode(token);
  const propertybyid = async (flatOwner) => {
    try {
      const result = await axios.get(
        `https://makanmitra.dthree.in/api/property/broker-properties/${flatOwner}`
      );
      console.log(result.data.product);
      setMyProperty(result.data.product);
    } catch (error) {
      console.log("error: ", error);
    }
  };


  const propertyAll = async () => {
    try {
      const result = await axios.get(
        `https://makanmitra.dthree.in/api/property/get-properties?perPage=100`
      );
      console.log(result.data.properties.docs);
      setMyProperty(result.data.properties.docs);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  const deletepropertybyid = async (id) => {
    const result = await axios.delete(
      `https://makanmitra.dthree.in/api/property/delete-property/${id}`
    );
    console.log(result.data);
    // setMyMessage("Property deleted")
    setMyMessage(result.data.message)
  };



  const editpropertybyid = async (itemId) => {
    Router.push({
      pathname: "/create-listing",
      query: { id: itemId },
    });
  };

  

  useEffect(() => {
    if (decodedToken.user_id && decodedToken.role === 'admin'){
      propertyAll()
    }
    else {
      decodedToken.user_id && propertybyid(decodedToken.user_id);
    }
  }, [decodedToken.user_id,decodedToken.role]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setMyMessage("");
    }, 5000);

    return () => clearTimeout(timeout);
  }, [myMessage]);

  if (!myProperty || !decodedToken.user_id) {
    return <h1>Load..</h1>;
  }

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

                <div className="col-lg-4 col-xl-4 mb10">
                  <div className="breadcrumb_content style2 mb30-991">
                    <h2 className="breadcrumb_title">My Properties</h2>
                    <p>We are glad to see you again!</p>
                  </div>
                </div>
                {/* End .col */}

                <div className="col-lg-8 col-xl-8">
                  <div className="candidate_revew_select style2 text-end mb30-991">
                    <ul className="mb0">
                      <li className="list-inline-item">
                        <div className="candidate_revew_search_box course fn-520">
                          <SearchBox />
                        </div>
                      </li>
                      {/* End li */}

                      <li className="list-inline-item">
                        <Filtering />
                      </li>
                      {/* End li */}
                    </ul>
                  </div>
                </div>
                {/* End .col */}

                <div className="col-lg-12">
                  <div className="my_dashboard_review mb40">
                    <div className="property_table">
                      {myMessage && (
                        <div className="form-group">
                          <div
                            className="alert alert-success text-center margin-auto"
                            role="alert"
                          >
                            {myMessage}
                          </div>
                        </div>
                      )}
                      <div className="table-responsive mt0">
                        <TableData
                          myProperty={myProperty}
                          deletepropertybyid={deletepropertybyid}
                          editpropertybyid={editpropertybyid}
                        />
                      </div>
                      {/* End .table-responsive */}
                      {/* 
                      <div className="mbp_pagination">
                        <Pagination />
                      </div> */}
                      {/* End .mbp_pagination */}
                    </div>
                    {/* End .property_table */}
                  </div>
                </div>
                {/* End .col */}
              </div>
              {/* End .row */}

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
