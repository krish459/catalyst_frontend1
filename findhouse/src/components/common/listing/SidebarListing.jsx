import Categorie from "./Categorie";
import FeaturedListings from "./FeaturedListings";
import FeatureProperties from "./FeatureProperties";
import FilteringItem from "./FilteringItem";

const SidebarListing = ({
  getKeyword,
  setKeyword,
  getBedroom,
  setBedroom,
  getBathroom,
  setBathroom,
  getGarages,
  setGarages,
  getBuiltYear,
  setBuiltYear,
  getStatus,
  setStatus,
  getLocation,
  setLocation,
  getPropertiesType,
  setPropertiesType,
  getAreaMin,
  setAreaMin,
  price,
  setPrice
}) => {
  return (
    <div className="sidebar_listing_grid1">
      <div className="sidebar_listing_list">
        <div className="sidebar_advanced_search_widget">
          <FilteringItem
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
      </div>
      {/* End .sidebar_listing_list */}

      {/* <div className="terms_condition_widget">
                <h4 className="title">Featured Properties</h4>
                <div className="sidebar_feature_property_slider">
                    <FeatureProperties />
                </div>
            </div> */}
      {/* End .Featured Properties */}

      {/* <div className="terms_condition_widget">
                <h4 className="title">Categories Property</h4>
                <div className="widget_list">
                    <ul className="list_details">
                        <Categorie />
                    </ul>
                </div>
            </div> */}
      {/* End .Categories Property */}

      {/* <div className="sidebar_feature_listing">
                <h4 className="title">Recently Viewed</h4>
                <FeaturedListings />
            </div> */}
      {/* End .Recently Viewed */}
    </div>
  );
};

export default SidebarListing;
