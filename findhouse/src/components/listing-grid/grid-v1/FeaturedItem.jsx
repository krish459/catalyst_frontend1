import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addLength } from "../../../features/properties/propertiesSlice";
const dayjs = require("dayjs");
var relativeTime = require("dayjs/plugin/relativeTime");
// import properties from "../../../data/properties";
import { FcLike } from "react-icons/fc";

const FeaturedItem = ({
  key,
  _id,
  title,
  description,
  images,
  area,
  locality,
  state,
  rent,
  buyOrRent,
  details,
  bedrooms,
  bathroom,
  propertyType,
  furnishing,
  tenants,
  deposit,
  foodPreferance,
  balcony,
  flatFloor,
  totalFloors,
  availableFrom,
  facing,
  monthlymaintenance,
  waterSupply,
  amenities,
  createdAt,
  // favButton,
  // setfavButton
  // favArray,
  // fav,
  // setfav,
  // savefav,
  // addtofav,
  // removeFromfav,
  // clearfav,
}) => {
  // const {
  //   keyword,
  //   location,
  //   status,
  //   propertyType,
  //   price,
  //   bathrooms,
  //   // bedrooms,
  //   garages,
  //   yearBuilt,
  //   area,
  //   amenities,
  // } = useSelector((state) => state.properties);
  const { statusType, featured, isGridOrList } = useSelector(
    (state) => state.filter
  );

  // const dispatch = useDispatch();

  // keyword filter
  // const keywordHandler = (item) =>
  //   item.title.toLowerCase().includes(keyword?.toLowerCase());

  // // location handler
  // const locationHandler = (item) => {
  //   return item.location.toLowerCase().includes(location.toLowerCase());
  // };

  // // status handler
  // const statusHandler = (item) =>
  //   item.type.toLowerCase().includes(status.toLowerCase());

  // // properties handler
  // const propertiesHandler = (item) =>
  //   item.type.toLowerCase().includes(propertyType.toLowerCase());

  // // price handler
  // const priceHandler = (item) =>
  //   item.price < price?.max && item.price > price?.min;

  // // bathroom handler
  // const bathroomHandler = (item) => {
  //   if (bathrooms !== "") {
  //     return item.itemDetails[1].number == bathrooms;
  //   }
  //   return true;
  // };

  // // bedroom handler
  // const bedroomHandler = (item) => {
  //   if (bedrooms !== "") {
  //     return item.itemDetails[0].number == bedrooms;
  //   }
  //   return true;
  // };

  // // garages handler
  // const garagesHandler = (item) =>
  //   garages !== ""
  //     ? item.garages?.toLowerCase().includes(garages.toLowerCase())
  //     : true;

  // // built years handler
  // const builtYearsHandler = (item) =>
  //   yearBuilt !== "" ? item?.built == yearBuilt : true;

  // // area handler
  // const areaHandler = (item) => {
  //   if (area.min !== 0 && area.max !== 0) {
  //     if (area.min !== "" && area.max !== "") {
  //       return (
  //         parseInt(item.itemDetails[2].number) > area.min &&
  //         parseInt(item.itemDetails[2].number) < area.max
  //       );
  //     }
  //   }
  //   return true;
  // };

  // // advanced option handler
  // const advanceHandler = (item) => {
  //   if (amenities.length !== 0) {
  //     return amenities.find((item2) =>
  //       item2.toLowerCase().includes(item.amenities.toLowerCase())
  //     );
  //   }
  //   return true;
  // };

  // // status filter
  // const statusTypeHandler = (a, b) => {
  //   if (statusType === "recent") {
  //     return a.created_at + b.created_at;
  //   } else if (statusType === "old") {
  //     return a.created_at - b.created_at;
  //   } else if (statusType === "") {
  //     return a.created_at + b.created_at;
  //   }
  // };

  // // featured handler
  // const featuredHandler = (item) => {
  //   if (featured !== "") {
  //     return item.featured === featured;
  //   }
  //   return true;
  // };

  // // status handler
  // let content = properties
  //   ?.slice(0, 10)
  //   ?.filter(keywordHandler)
  //   ?.filter(locationHandler)
  //   ?.filter(statusHandler)
  //   ?.filter(propertiesHandler)
  //   ?.filter(priceHandler)
  //   ?.filter(bathroomHandler)
  //   ?.filter(bedroomHandler)
  //   ?.filter(garagesHandler)
  //   ?.filter(builtYearsHandler)
  //   ?.filter(areaHandler)
  //   ?.filter(advanceHandler)
  //   ?.sort(statusTypeHandler)
  //   ?.filter(featuredHandler)
  // .map((item) => (

  dayjs.extend(relativeTime);
  // var a = dayjs("2023-01-01");
  var a = dayjs();
  let date = dayjs(a).to(createdAt);

  // // favourites function
  let favArray = [];
  const [fav, setfav] = useState({});

  const [addFavs, setAddFavs] = useState();

  const [favButton, setfavButton] = useState();

  const savefav = (myfav) => {
    typeof window !== "undefined"
      ? localStorage.setItem("fav", JSON.stringify(myfav))
      : null;
    // localStorage.setItem("fav", myfav);
  };
  const addtofav = (itemCode, title, locality, rent, images) => {
    if (!localStorage.getItem("fav")) {
      localStorage.setItem("fav", JSON.stringify(favArray));
      let newfav = fav;
      favArray =
        typeof window !== "undefined"
          ? JSON.parse(localStorage.getItem("fav"))
          : [];

      // console.log(favArray[0].itemCode);
      let k = 0;
      for (let i = 0; i < favArray.length; i++) {
        if (favArray[i].itemCode == itemCode) {
          k = k + 1;
        }
      }

      if (k != 0) {
        console.log("already added");
        setAddFavs("Already Added");
        setfavButton(true);
        // console.log(fav);
      } else {
        newfav = { itemCode, title, locality, rent, images };
        // console.log(favArray);
        favArray.push(newfav);
        setAddFavs("Added to favourites");
        console.log("favarray: ", favArray);
      }
      setfav(newfav);
      // savefav(newfav);
      setfavButton(true);
      savefav(favArray);
    } else {
      let newfav = fav;
      favArray =
        typeof window !== "undefined"
          ? JSON.parse(localStorage.getItem("fav"))
          : [];
      // console.log(favArray[0].itemCode);
      let k = 0;
      for (let i = 0; i < favArray.length; i++) {
        if (favArray[i].itemCode == itemCode) {
          k = k + 1;
        }
      }

      if (k != 0) {
        console.log("already added");
        setAddFavs("Already Added");
        // console.log(fav);
      } else {
        newfav = { itemCode, title, locality, rent, images };
        // console.log(favArray);
        favArray.push(newfav);
        setAddFavs("Added to favourites");
        console.log("favarray: ", favArray);
      }
      setfav(newfav);
      // savefav(newfav);
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
    setAddFavs("Removed from favourites");
    localStorage.setItem("fav", JSON.stringify(favArray1));
    setfavButton(false);
  };

  if (!localStorage.getItem("fav")) {
    localStorage.setItem("fav", JSON.stringify([]));
  }

  // const clearfav = () => {
  //   setfav({});
  //   savefav({});
  //   console.log("fav has been cleared");
  // };
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAddFavs();
    }, 500);

    return () => clearTimeout(timeout);
  }, [addFavs]);

 

  return (
    <div
      className={`${
        isGridOrList ? "col-12 feature-list" : "col-md-6 col-lg-6"
      } `}
      key={key}
    >
      <div
        className={`feat_property home7 style4 ${
          isGridOrList ? "d-flex align-items-center" : undefined
        }`}
      >
        <div className="thumb">
          {/* <img className="img-whp" src={`https://makanmitra.s3.amazonaws.com/${images[0]}`} alt="fp1.jpg" /> */}
          <Link href={`/listing-details-v1/${_id}`}>
            <img
              className="img-whp"
              src={`https://makanmitra.dthree.in/api/property/images/${images[0]}`}
              alt="fp1.jpg"
            />
          </Link>
          <div className="thmb_cntnt">
            <ul className="tag mb0">
              {/* <li className="list-inline-item">
                <a href="#">Featured</a>
              </li> */}
              {/* <li className="list-inline-item">
                  <a href="#" className="text-capitalize">
                    {item.featured}
                  </a>
                </li> */}
            </ul>

            <ul className="icon mb0">
              <li className="list-inline-item">
                <a href="#">
                  <span className="flaticon-transfer-1"></span>
                </a>
              </li>
              {
                localStorage.getItem("token") ? (
                  <li className="list-inline-item">
                    <a href="#">
                      {!favButton ? (
                        <span
                          className="flaticon-heart"
                          onClick={() => {
                            addtofav(_id, title, locality, rent, images);
                          }}
                        ></span>
                      ) : (
                        <span>
                          <FcLike
                            onClick={() => {
                              removeFromfav(_id);
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
                )
                // (
                //   <li className="list-inline-item">
                //     <a href="#">
                //       <span
                //         className="flaticon-heart"
                //         onClick={() => {
                //           setAddFavs("Login first");
                //         }}
                //       ></span>
                //     </a>
                //   </li>
                // )
              }
            </ul>

            <Link href={`/listing-details-v1/${_id}`}>
              <a className="fp_price">
                ₹{rent.toLocaleString()}
                <small>/mo</small>
              </a>
            </Link>
          </div>
        </div>
        <Link href={`/listing-details-v1/${_id}`}>
          <div className="details">
            <div className="tc_content">
              {addFavs && (
                <div className="form-group">
                  <div
                    className={
                      !addFavs ? "alert alert-success" : "alert alert-danger"
                    }
                    role="alert"
                  >
                    {addFavs}
                  </div>
                </div>
              )}

              <p className="text-thm">{propertyType}</p>
              <h4>
                <a>{title}</a>

                {/* <Link href={`/listing-details-v1/${_id}`}>
                <a>{title}</a>
              </Link> */}
              </h4>
              <p>
                <span className="flaticon-placeholder"></span>
                {locality.slice(0, 40)}...
              </p>

              <ul className="prop_details mb0">
                {/* {details.map((val, i) => ( */}
                <li className="list-inline-item" key={details._id}>
                  <a href="#" style={{ padding: "0.5rem" }}>
                    Bed: {bedrooms}
                  </a>
                  <a href="#" style={{ padding: "0.5rem" }}>
                    Bath: {bathroom}
                  </a>
                  <a href="#" style={{ padding: "0.5rem" }}>
                    Deposit: ₹{deposit.toLocaleString()}
                  </a>
                </li>
                {/* // ) */}
                {/* )} */}
              </ul>
            </div>
            {/* End .tc_content */}

            <div className="fp_footer">
              {/* <ul className="fp_meta float-start mb0">
                <li className="list-inline-item">
                  <Link href="/agent-v2">
                    <a>
                      <img src={item.posterAvatar} alt="pposter1.png" />
                    </a>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link href="/agent-v2">
                    <a>{item.posterName}</a>
                  </Link>
                </li>
              </ul> */}
              <div className="fp_pdate float-end">{date}</div>
            </div>
            {/* End .fp_footer */}
          </div>
        </Link>
      </div>
    </div>
    // )
  );

  // add length of filter items
  useEffect(() => {
    dispatch(addLength(content.length));
  }, [dispatch, addLength, content]);

  return <>{content}</>;
};

export default FeaturedItem;
