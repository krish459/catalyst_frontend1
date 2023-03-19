import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import CopyrightFooter from "../../components/common/footer/CopyrightFooter";
import Footer from "../../components/common/footer/Footer";
import Header from "../../components/common/header/DefaultHeader";
import MobileMenu from "../../components/common/header/MobileMenu";
import PopupSignInUp from "../../components/common/PopupSignInUp";
// import Modal from 'react-modal';
// import properties from "../../data/properties";
import DetailsContent from "../../components/listing-details-v1/DetailsContent";
// import Sidebar from "../../components/listing-details-v1/Sidebar";
import axios from "axios";
import { FcLike } from "react-icons/fc";
import LoginSignup from "../../components/common/user-credentials/LoginSignup";

let favArray = [];
const ListingDynamicDetailsV1 = () => {
  const router = useRouter();
  const [shortUrl, setShortUrl] = useState("");
  const [property, setProperty] = useState();
  const [fav, setfav] = useState({});
  const [favButton, setfavButton] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const id = router.query.id;

  const savefav = (myfav) => {
    typeof window !== "undefined"
      ? localStorage.setItem("fav", JSON.stringify(myfav))
      : null;
  };
  const addtofav = (itemCode, title, locality, rent, images) => {
    if (!localStorage.getItem("fav")) {
      localStorage.setItem("fav", JSON.stringify(favArray));
      favArray =
        typeof window !== "undefined"
          ? JSON.parse(localStorage.getItem("fav"))
          : [];

      let k = 0;
      for (let i = 0; i < favArray.length; i++) {
        if (favArray[i].itemCode == itemCode) {
          k = k + 1;
        }
      }

      if (k != 0) {
        console.log("already added");
        // setAddFavs("Already Added");
        setfavButton(true);
      } else {
        const newfav = { itemCode, title, locality, rent, images };
        favArray.push(newfav);
        // setAddFavs("Added to favourites");
        console.log("favarray: ", favArray);
      }
      setfav(newfav);
      setfavButton(true);
      savefav(favArray);
    } else {
      let newfav = fav;
      favArray =
        typeof window !== "undefined"
          ? JSON.parse(localStorage.getItem("fav"))
          : [];

      let k = 0;
      for (let i = 0; i < favArray.length; i++) {
        if (favArray[i].itemCode == itemCode) {
          k = k + 1;
        }
      }

      if (k != 0) {
        console.log("already added");
        // setAddFavs("Already Added");
      } else {
        newfav = { itemCode, title, locality, rent, images };
        favArray.push(newfav);
        // setAddFavs("Added to favourites");
        console.log("favarray: ", favArray);
      }
      setfav(newfav);
      setfavButton(true);
      savefav(favArray);
    }
  };
  const removeFromfav = (itemCode) => {
    let favArray1 =
      typeof window !== "undefined"
        ? JSON.parse(localStorage.getItem("fav"))
        : [];
    for (let i = 0; i < favArray1.length; i++) {
      if (favArray1[i].itemCode == itemCode) {
        console.log(favArray1[i].itemCode);
        console.log(itemCode);
        favArray1.splice(i, 1);
        console.log(favArray1);
      }
    }
    // setAddFavs("Removed from favourites");
    localStorage.setItem("fav", JSON.stringify(favArray1));
    setfavButton(false);
  };
  const propertybyid = async (id) => {
    const token = localStorage.getItem("token");

    if (!token) {
      setShowLoginModal(true);
      setIsLoading(false);
      return;
    }

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const result = await axios.get(
      `https://makanmitra.dthree.in/api/property/get-properties/${id}`,
      config
    );
    console.log(result.data);
    setProperty(result.data);
    setShortUrl(result.data.product.short);
    setIsLoading(false);
  };

  useEffect(() => {
    {
      id && propertybyid(id);
    }
  }, [id]);

  useEffect(() => {
    if (!localStorage.getItem("fav")) {
      localStorage.setItem("fav", JSON.stringify([]));
    }
  }, []);

  useEffect(() => {
    if (showLoginModal) {
      const triggerEl = document.querySelector(".flaticon-heart");
      // console.log(triggerEl);
      if (triggerEl) {
        triggerEl.click();
      } 
    }
  }, [showLoginModal]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (showLoginModal) {
    return (
      <>
        <Header />
        <MobileMenu />
        <PopupSignInUp />
        <li className="list-inline-item">
          <a
            href="#"
            data-bs-toggle="modal"
            data-bs-target=".bd-example-modal-lg"
          >
            <span className="flaticon-heart" style={{display:"none"}}></span>
          </a>
        </li>
      </>
    );
  }
  return (
    <>
      {/* <!-- Main Header Nav --> */}
      <Header />

      {/* <!--  Mobile Menu --> */}
      <MobileMenu />

      {/* <!-- Modal --> */}
      <PopupSignInUp />

      {/* <!-- Listing Single Property --> */}
      <section className="listing-title-area mt85 md-mt0">
        <div className="container">
          <Gallery>
            <div className="row mb30">
              <div className="col-lg-7 col-xl-8">
                <div className="single_property_title mt30-767">
                  <h2>{property.product.title}</h2>
                  <p>{property.product.locality}</p>
                </div>
              </div>
              <div className="col-lg-5 col-xl-4">
                <div className="single_property_social_share position-static transform-none">
                  <div className="price float-start fn-400">
                    <h2>
                      ₹{property.product.rent.toLocaleString()}
                      <small>/mo</small>
                    </h2>
                  </div>

                  <div className="spss style2 mt20 text-end tal-400">
                    <ul className="mb0">
                      {/* <li
                        className="list-inline-item"
                        onClick={handleShareClick}
                      >
                        
                        <span className="flaticon-transfer-1"></span>
                      </li>
                      {shortUrl && (
                        <div>
                          <input type="text" value={shortUrl} readOnly />
                          <button onClick={handleCopyClick}>Copy</button>
                        </div>
                      )} */}

                      {localStorage.getItem("token") ? (
                        <li className="list-inline-item">
                          <a href="#">
                            {!favButton ? (
                              <span
                                className="flaticon-heart"
                                onClick={() => {
                                  addtofav(
                                    property.product._id,
                                    property.product.title,
                                    property.product.locality,
                                    property.product.rent,
                                    property.product.images
                                  );
                                }}
                              ></span>
                            ) : (
                              <span>
                                <FcLike
                                  onClick={() => {
                                    removeFromfav(property.product._id);
                                  }}
                                  size="30"
                                />
                              </span>
                            )}
                          </a>
                        </li>
                      ) : (
                        <li className="list-inline-item">
                          <a
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target=".bd-example-modal-lg"
                          >
                            <span className="flaticon-heart"></span>
                          </a>
                        </li>
                      )}
                      {/* <li className="list-inline-item">
                        <a href="#">
                          <span className="flaticon-share"></span>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#">
                          <span className="flaticon-printer"></span>
                        </a>
                      </li> */}
                    </ul>
                  </div>
                  {/* End activity and social sharing */}
                </div>
              </div>
            </div>
            {/* End .row */}

            <div className="row">
              <div className="col-sm-7 col-lg-8">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="spls_style_two mb30-520">
                      {/* {property.product.images.map((data)=>{

                     
                      <Item
                        original={`https://makanmitra.dthree.in/api/property/images/${data}`}
                        thumbnail={`https://makanmitra.dthree.in/api/property/images/${data}`}
                        width={752}
                        height={450}
                      >
                        {({ ref, open }) => (
                          <div role="button" ref={ref} onClick={open}>
                            <img
                              className="img-fluid w100 cover lds-1"
                              src={`https://makanmitra.dthree.in/api/property/images/${data}`}
                              alt="1.jpg"
                            />
                          </div>
                        )}
                      </Item>

                       })} */}
                      <Item
                        original={`https://makanmitra.dthree.in/api/property/images/${property.product.images[0]}`}
                        thumbnail={`https://makanmitra.dthree.in/api/property/images/${property.product.images[0]}`}
                        width={752}
                        height={450}
                      >
                        {({ ref, open }) => (
                          <div role="button" ref={ref} onClick={open}>
                            <img
                              className="img-fluid w100 cover lds-1"
                              src={`https://makanmitra.dthree.in/api/property/images/${property.product.images[0]}`}
                              alt="1.jpg"
                            />
                            <h6>{ref[0]}</h6>
                          </div>
                        )}
                      </Item>
                    </div>
                  </div>
                </div>
              </div>
              {/* End .col-sm-7 .col-lg-8 */}

              <div className="col-sm-5 col-lg-4">
                <div className="row">
                  {property.product.images.map((val, i) => (
                    <div className="col-6" key={i}>
                      <div className="spls_style_two img-gallery-box mb24">
                        <Item
                          original={`https://makanmitra.dthree.in/api/property/images/${val}`}
                          thumbnail={`https://makanmitra.dthree.in/api/property/images/${val}`}
                          width={752}
                          height={450}
                        >
                          {({ ref, open }) => (
                            <div role="button" ref={ref} onClick={open}>
                              <img
                                className="img-fluid w100"
                                src={`https://makanmitra.dthree.in/api/property/images/${val}`}
                                alt="2.jpg"
                              />
                            </div>
                          )}
                        </Item>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* End  col-sm-5 col-lg-4 */}
            </div>
            {/* End .row */}
          </Gallery>
        </div>
      </section>

      {/* <!-- Agent Single Grid View --> */}
      <section className="our-agent-single bgc-f7 pb30-991">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-8">
              <DetailsContent
                bedrooms={property.product.details[0].bedrooms}
                bathroom={property.product.details[0].bathroom}
                propertyType={property.product.details[0].propertyType}
                area={property.product.area.toLocaleString()}
                description={property.product.description}
                rent={property.product.rent.toLocaleString()}
                propertyAge={property.product.details[0].propertyAge}
                rentOrBuy={property.product.buyOrRent}
                amenities={property.product.amenities}
                furnishing={property.product.details[0].furnishing}
                locality={property.product.locality}
                view={property.product.view}
              />
            </div>
            {/* End details content .col-lg-8 */}
            {/* 
            <div className="col-lg-4 col-xl-4">
              <Sidebar />
            </div> */}
            {/* End sidebar content .col-lg-4 */}
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

export default ListingDynamicDetailsV1;
