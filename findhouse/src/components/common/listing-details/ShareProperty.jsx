import React, { useState, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FaCopy } from "react-icons/fa";

const ShareProperty = () => {
  const [isCopied, setIsCopied] = useState(false);
  const [propertyUrl, setPropertyUrl] = useState('');

  useEffect(() => {
    setPropertyUrl(window.location.href);
  }, []);

  const handleCopy = () => {
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 3000);
  };

  return (
    <div className="share-property" style={{height:"5rem"}}>
      <h4 className="share-property__title">Share Property Link</h4>
      <div className="share-property__actions">
        <div>

        <CopyToClipboard text={propertyUrl} onCopy={handleCopy}>
          <button className="btn btn1 float-start share-property__button" aria-label="Copy link">
            <FaCopy className="share-property__icon" />
            {isCopied ? "Copied!" : "Copy Link"}
          </button>
        </CopyToClipboard>
        </div>
        <div className="share-property__more">
          {/* <a className="share-property__link" href={propertyUrl}>
            More Details Here
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default ShareProperty;



// import React, { useState } from "react";
// import { CopyToClipboard } from "react-copy-to-clipboard";
// import { FaCopy } from "react-icons/fa";

// const ShareProperty = () => {
//   const [isCopied, setIsCopied] = useState(false);

//   const handleCopy = () => {
//     setIsCopied(true);
//     setTimeout(() => setIsCopied(false), 3000);
//   };

//   return (
//     <div className="share-property" style={{height:"5rem"}}>
//       <h4 className="share-property__title">Share Property Link</h4>
//       <div className="share-property__actions">
//         <div>

//         <CopyToClipboard text={window.location.href} onCopy={handleCopy}>
//           <button className="btn btn1 float-start share-property__button" aria-label="Copy link">
//             <FaCopy className="share-property__icon" />
//             {isCopied ? "Copied!" : "Copy Link"}
//           </button>
//         </CopyToClipboard>
//         </div>
//         <div className="share-property__more">
//           {/* <a className="share-property__link" href={window.location.href}>
//             More Details Here
//           </a> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ShareProperty;
