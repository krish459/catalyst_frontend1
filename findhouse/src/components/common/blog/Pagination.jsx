import { useEffect } from "react";

const Pagination = ({
  page,
  setPage,
  perPage,
  setPerPage,
  totalPages,
  setTotalPages,
}) => {
  // const buttonClicked = (e) => {
  //   console.log("!!!");
  //   setPage(e)
  //   console.log(page);

  // }
  useEffect(() => {
    setPage(1); // set the default active page to 1
  }, []);
  let pageArray = [];
  for (let i = 0; i < totalPages; i++) {
    pageArray.push(i);
  }

  // console.log("page array", pageArray);

  return (
    <ul className="page_navigation">
      {/* <li className="page-item disabled">
        <a
          className="page-link"
          href="#"
          tabIndex="-1"
          aria-disabled="true"
        >
          {" "}
          <button onClick={()=>{setPage(page-1)}}>

          </button>
          <span className="flaticon-left-arrow"></span>
        </a>
      </li> */}
      
      {pageArray.map((k) => {
        return (
          <li className="page-item" key={k}>
              
            <a className="page-link" href="#" style={{border:"none", background: page === k+1 ? "grey" : (page === 1 && k === 0) ? "grey" : "white"}}>
              <button
              // style={{border:"none", background:"white"}}
                // style={{border:"none", background: page === k+1 ? "grey" : "white"}}
                style={{border:"none", background: page === k+1 ? "grey" : (page === 1 && k === 0) ? "grey" : "white"}}
                onClick={() => {
                  setPage(k+1);
                }}
              >
                {k+1}
              </button>
            </a>
          </li>
        );
      })}
      {/* <li className="page-item " aria-current="page">
        <a className="page-link" href="#">
          <button
            onClick={() => {
              setPage(2);
            }}
          >
            2
          </button>
          2 <span className="sr-only">(current)</span>
        </a>
      </li> */}
      {/* <li
        className="page-item"
        value={3}
        onChange={(e) => setPage(e.target.value)}
      >
        <a className="page-link" href="#">
          <button
            onClick={() => {
              setPage(3);
            }}
          >
            3
          </button>
        </a>
      </li> */}
      {/* <li
        className="page-item"
        value={4}
        onChange={(e) => setPage(e.target.value)}
      >
        <a className="page-link" href="#">
          <button
            onClick={() => {
              setPage(4);
            }}
          >
            4
          </button>
        </a>
      </li> */}
      {/* <li className="page-item">
        <a className="page-link" href="#">
          ...
        </a>
      </li>
      <li className="page-item">
        <a className="page-link" href="#">
          29
        </a>
      </li> */}
      {/* <li
        className="page-item"
        // value={page}
        // onClick={(page) => setPage(page + 1)}
      >
        <a className="page-link" href="#">
          <span className="flaticon-right-arrow"></span>
        </a>
      </li> */}
    </ul>
  );
};

export default Pagination;
