import BlogSidebar from "../common/blog/BlogSidebar";
import Pagination from "../common/blog/Pagination";
import CopyrightFooter from "../common/footer/CopyrightFooter";
import Footer from "../common/footer/Footer";
import Header from "../common/header/DefaultHeader";
import MobileMenu from "../common/header/MobileMenu";
import PopupSignInUp from "../common/PopupSignInUp";
import BreadCrumbBlog from "./BreadCrumbBlog";
import Blog from "./Blog";
import axios from "axios";
import { useEffect, useState } from "react";

const index = () => {
  const [profiledata, setProfiledata] = useState();

  const listBlogs = async () => {
    const apiUrl = `https://makanmitra.dthree.in/api/blog/get-blogs`;
    const result = await axios.get(apiUrl);
    setProfiledata(result.data.blogs.docs);
    console.log(result.data.blogs.docs);
    // setTotalPages(result.data.properties.totalPages);
  };

  useEffect(() => {
    listBlogs();
  }, []);
  if (!profiledata) {
    return <h1>Load..</h1>;
  }

  return (
    <>
      {/* <!-- Main Header Nav --> */}
      <Header />

      {/* <!--  Mobile Menu --> */}
      <MobileMenu />

      {/* <!-- Modal --> */}
      <PopupSignInUp />

      {/* <!-- Main Blog Post Content --> */}
      <section className="blog_post_container bgc-f7">
        <div className="container">
          <div className="row">
            {/* <div className="col-xl-6">
              <BreadCrumbBlog />
            </div> */}
            <div className="breadcrumb_content style2">
              <h2 className="breadcrumb_title">Blogs</h2>
            </div>
          </div>
          {/* End .row */}

          <div className="row">
            <div className="col-lg-8">
              <div className="main_blog_post_content">
                <Blog profiledata={profiledata} />
                {/* End blog item */}

                {/* <div className="mbp_pagination mt20">
                  <Pagination />
                </div> */}
                {/* End .mbp_pagination */}
              </div>
            </div>
            {/* End .col */}

            {/* <div className="col-lg-4 col-xl-4">
              <BlogSidebar />
            </div> */}
            {/* End Sidebar column */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
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
