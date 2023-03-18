import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import dayjs from 'dayjs';
// import blogContent from "../../data/blogs";

const Blog = ({profiledata}) => {



  return (
    <>
      {profiledata.map((item) => (
        <div className="for_blog feat_property" key={item._id}>
          <div className="thumb">
            <Link href={`/blog-details/${item._id}`}>
              <a>
                <img className="img-whp" src={`https://makanmitra.dthree.in/api/property/images/${item.img}`} alt={item.img} />
              </a>
            </Link>
            <div className="blog_tag">{item.postMeta}</div>
          </div>
          {/* End .thumb */}

          <div className="details">
            <div className="tc_content">
              <h4 className="mb15">
                <Link href={`/blog-details/${item._id}`}>
                  <a>{item.title}</a>
                </Link>
              </h4>
              <p>{item.postDescriptions.slice(0, 285)}</p>
            </div>
            {/* End .tc_content */}

            <div className="fp_footer">
              <ul className="fp_meta float-start mb0">
                {/* <li className="list-inline-item">
                  <a href="#">
                    <img src={item.posterAvatar} alt={item.posterAvatar} />
                  </a>
                </li> */}
                {/* <li className="list-inline-item">
                  <a href="#">{item.posterName}</a>
                </li> */}
                <li className="list-inline-item">
                  <a href="#">
                    <span className="flaticon-calendar pr10"></span>{" "}
                    {dayjs(item.updatedAt).locale('en').format('MMM DD, YYYY ')}
                  </a>
                </li>
              </ul>
              {/* <a className="fp_pdate float-end text-thm" href="#">
                Read More <span className="flaticon-next"></span>
              </a> */}
            </div>
            {/* End fb_footer */}
          </div>
          {/* End .thumb */}
        </div>
      ))}
    </>
  );
};

export default Blog;
