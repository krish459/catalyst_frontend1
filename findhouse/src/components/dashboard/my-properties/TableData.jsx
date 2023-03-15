// import properties from "../../../data/properties";

import Link from "next/link";

const TableData = ({ myProperty }) => {
  // let theadConent = [
  //   "Listing Title",
  //   "Date published",
  //   "Status",
  //   "View",
  //   "Action",
  // ];
  // let tbodyContent = myProperty?.slice(0, 4)?.map((item) => (
  //   <tr key={item.id}>
  //     <td scope="row">
  //       <div className="feat_property list favorite_page style2">
  //         <div className="thumb">
  //           <img className="img-whp cover" src={item.img} alt="fp1.jpg" />
  //           <div className="thmb_cntnt">
  //             <ul className="tag mb0">
  //               <li className="list-inline-item">
  //                 <a href="#">For Rent</a>
  //               </li>
  //             </ul>
  //           </div>
  //         </div>
  //         <div className="details">
  //           <div className="tc_content">
  //             <h4>{item.title}</h4>
  //             <p>
  //               <span className="flaticon-placeholder"></span>
  //               {item.location}
  //             </p>
  //             <a className="fp_price text-thm" href="#">
  //               ${item.price}
  //               <small>/mo</small>
  //             </a>
  //           </div>
  //         </div>
  //       </div>
  //     </td>
  //     {/* End td */}

  //     <td>30 December, 2020</td>
  //     {/* End td */}

  //     <td>
  //       <span className="status_tag badge">Pending</span>
  //     </td>
  //     {/* End td */}

  //     <td>2,345</td>
  //     {/* End td */}

  //     <td>
  //       <ul className="view_edit_delete_list mb0">
  //         <li
  //           className="list-inline-item"
  //           data-toggle="tooltip"
  //           data-placement="top"
  //           title="Edit"
  //         >
  //           <a href="#">
  //             <span className="flaticon-edit"></span>
  //           </a>
  //         </li>
  //         {/* End li */}

  //         <li
  //           className="list-inline-item"
  //           data-toggle="tooltip"
  //           data-placement="top"
  //           title="Delete"
  //         >
  //           <a href="#">
  //             <span className="flaticon-garbage"></span>
  //           </a>
  //         </li>
  //       </ul>
  //     </td>
  //     {/* End td */}
  //   </tr>
  // ));

  let content =
  myProperty &&
  myProperty.product.map((item) => (
      <div className="feat_property list favorite_page" key={item._id}>
        <div className="thumb">
          <img
            className="img-whp cover"
            src={`https://makanmitra.dthree.in/api/property/images/${item.images[0]}`}
            alt="fp1.jpg"
          />
          <div className="thmb_cntnt">
            <ul className="tag mb0">
              <li className="list-inline-item">
                <a href="#">For {item.buyOrRent} </a>
              </li>
            </ul>
          </div>
        </div>
        {/* End .thumb */}

        <div className="details">
          <div className="tc_content">
            <h4>
              {" "}
              <Link href={`/listing-details-v1/${item._id}`}>
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
              <span
                className="flaticon-garbage"
                
              ></span>
            </a>
          </li>
        </ul>
        {/* view_edit_delete_list */}
      </div>
    ));
  return (
    <>{content}</>
    // <>
    //   <table className="table">
    //     <thead className="thead-light">
    //       <tr>
    //         {theadConent.map((value, i) => (
    //           <th scope="col" key={i}>
    //             {value}
    //           </th>
    //         ))}
    //       </tr>
    //     </thead>
    //     {/* End theaad */}

    //     <tbody>{tbodyContent}</tbody>
    //   </table>
    // </>
  );
};

export default TableData;
