import { useEffect } from "react";

const Pagination = ({ page, setPage, perPage, setPerPage }) => {
  const buttonClicked = (e) => {
    console.log("!!!");
    setPage(e)
    console.log(page);

  }

  return (
    <ul className="page_navigation">
      <li className="page-item disabled">
        <a
          className="page-link"
          href="#"
          tabIndex="-1"
          aria-disabled="true"
          // value={page}
          // onClick={(page) => setPage(page - 1)}
        >
          {" "}
          <span className="flaticon-left-arrow"></span>
        </a>
      </li>
      <li className="page-item">
        <a className="page-link" href="#">
          <button onClick={()=>{setPage(1)}}>1</button>
        </a>
      </li>
      <li
        className="page-item "
        aria-current="page"
      >
        <a className="page-link" href="#">
        <button onClick={()=>{setPage(2)}}>2
        </button>
          {/* 2 <span className="sr-only">(current)</span> */}
        </a>
      </li>
      <li
        className="page-item"
        value={3}
        onChange={(e) => setPage(e.target.value)}
      >
        <a className="page-link" href="#">
        <button onClick={()=>{setPage(3)}}>3
        </button>
        </a>
      </li>
      <li
        className="page-item"
        value={4}
        onChange={(e) => setPage(e.target.value)}
      >
        <a className="page-link" href="#">
        <button onClick={()=>{setPage(4)}}>4
        </button>
        </a>
      </li>
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
      <li
        className="page-item"
        // value={page}
        // onClick={(page) => setPage(page + 1)}
      >
        <a className="page-link" href="#">
          <span className="flaticon-right-arrow"></span>
        </a>
      </li>
    </ul>
  );
};

export default Pagination;
