const Pagination = ({page,
  setPage,
  perPage,
  setPerPage}) => {
    const paginationClicked = (event) => {
      var itemClicked = event
      setPage(itemClicked)
    }
  return (
    <ul className="page_navigation">
      <li className="page-item disabled">
        <a className="page-link" href="#" tabIndex="-1" aria-disabled="true" value={page} onClick={(page)=>setPage(page-1)}>
          {" "}
          <span className="flaticon-left-arrow" ></span>
        </a>
      </li>
      <li className="page-item" value={1} onClick={paginationClicked(1)}>
        <a className="page-link" href="#" >
          1
        </a>
      </li>
      <li className="page-item " aria-current="page" value={2} onClick={paginationClicked(2)}>
        <a className="page-link" href="#">
          {/* 2 <span className="sr-only">(current)</span> */}
          2
        </a>
      </li>
      <li className="page-item" value={3} onClick={paginationClicked(3)}>
        <a className="page-link" href="#">
          3
        </a>
      </li>
      <li className="page-item" value={4} onClick={paginationClicked(4)}>
        <a className="page-link" href="#" >
          4
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
      <li className="page-item" value={page} onClick={(page)=>setPage(page+1)}>
        <a className="page-link" href="#">
          <span className="flaticon-right-arrow"></span>
        </a>
      </li>
    </ul>
  );
};

export default Pagination;
