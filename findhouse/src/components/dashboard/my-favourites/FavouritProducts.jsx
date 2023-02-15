import Link from "next/link";
import { useState } from "react";

// import properties from "../../../data/properties";

const FavouritProducts = () => {

    let favArray = JSON.parse(localStorage.getItem('fav'))
    const removeFromfav=(itemCode)=>{
      
    for (let i=0; i < favArray.length ; i++){
      if(favArray[i].itemCode == itemCode){
        console.log(favArray[i].itemCode);
        console.log(itemCode);
        favArray.splice(i,1)
        console.log(favArray);
      }
    }
    localStorage.setItem("fav", JSON.stringify(favArray));
    }

    if(!localStorage.getItem("fav")){
      localStorage.setItem("fav", JSON.stringify([]));
    }

    // console.log("properties", properties);/
    let content = favArray && favArray.map((item) => (
      <div className="feat_property list favorite_page" key={item.itemCode}>
      <div className="thumb">
        <img className="img-whp cover" src={`https://makanmitra.dthree.in/api/property/images/${item.images[0]}`} alt="fp1.jpg" />
        <div className="thmb_cntnt">
          <ul className="tag mb0">
            <li className="list-inline-item">
              <a href="#">For Rent</a>
            </li>
          </ul>
        </div>
      </div>
      {/* End .thumb */}

      <div className="details">
        <div className="tc_content">
          <h4>
            {" "}
            <Link href={`/listing-details-v1/${item.itemCode}`}>
              <a>{item.title}</a>
            </Link>
          </h4>
          <p>
            <span className="flaticon-placeholder"></span> {item.locality}
          </p>
          <a className="fp_price text-thm" href="#">
            ${item.rent}
            <small>/mo</small>
          </a>
        </div>
      </div>
      {/* End details */}

      <ul className="view_edit_delete_list mb0 mt35">
        <li
          className="list-inline-item"
          data-toggle="tooltip"
          data-placement="top"
          title="Delete"
        >
          <a href="#">
            <span className="flaticon-garbage" onClick={()=>{removeFromfav(item.itemCode)}}></span>
          </a>
        </li>
      </ul>
      {/* view_edit_delete_list */}
    </div>
  ));

  return <>{content}</>;
  
};

export default FavouritProducts;
