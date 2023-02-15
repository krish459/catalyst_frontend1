import { useState } from "react";
import { Provider } from "react-redux";
import { store } from "../app/store";
import ScrollToTop from "../components/common/ScrollTop";
import Seo from "../components/common/seo";
import "../index.scss";

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

function MyApp({ Component, pageProps }) {
  //  // favourites function
   let favArray = []
   const [fav, setfav] = useState({});
   
 
 
   
  //  const removeFromfav = (itemCode) => {
  //    let newfav = JSON.parse(JSON.stringify(fav));
  //    if (itemCode in fav) {
  //      delete newfav[itemCode];
  //    }
  //    setfav(newfav);
  //    savefav(newfav);
  //  };
  //  const clearfav = () => {
  //    setfav({});
  //    savefav({});
  //    console.log("fav has been cleared");
  //  };
  
  return (
    <>
      <Seo
        font={
          "https://fonts.googleapis.com/css?family=Nunito:400,400i,500,600,700&display=swap"
        }
      />
      <Provider store={store}>
        <Component {...pageProps}/>
        {/* <Component {...pageProps} removeFromfav={removeFromfav} clearfav={clearfav} /> */}
      </Provider>

      <ScrollToTop />
    </>
  );
}

export default MyApp;
