import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FaCopy } from "react-icons/fa";

const ShareProperty = () => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 3000);
  };

  return (
    <div className="share-property" style={{height:"5rem"}}>
      <h4 className="share-property__title">Share Property Link</h4>
      <div className="share-property__actions">
        <div>

        <CopyToClipboard text={window.location.href} onCopy={handleCopy}>
          <button className="btn btn1 float-start share-property__button" aria-label="Copy link">
            <FaCopy className="share-property__icon" />
            {isCopied ? "Copied!" : "Copy Link"}
          </button>
        </CopyToClipboard>
        </div>
        <div className="share-property__more">
          {/* <a className="share-property__link" href={window.location.href}>
            More Details Here
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default ShareProperty;


// import React from "react";

// const ShareProperty = () => {
//   const copyLinkToClipboard = () => {
//     const link = window.location.href;
//     navigator.clipboard.writeText(link);
//     alert("Link copied to clipboard!");
//   };

//   return (
//     <>
//     <div style={{height:"5rem"}}>

//       <h4 className="mb30">Share Property Link</h4>
//       <button className="btn btn1 float-start" onClick={copyLinkToClipboard}>Copy Link</button>
//       <div style={{marginTop:"0.5rem"}}>
//       {/* <a className="more_info" href={window.location.href}>
//         More Details Here
//     </a> */}
//       </div>
//     </div>
//     </>
//   );
// };

// export default ShareProperty;
