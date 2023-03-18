const WalkScore = ({view}) => {
  return (
    <>
      <h4 className="mb30">
        Views for the Property{" "}
        {/* <span className="float-end">
          <img src="/assets/images/resource/wscore.png" alt="wscore.png" />
        </span> */}
      </h4>
      <div className="iba_container">
        <div className="icon_box_area">
          <div className="score">
            <span>{view}</span>
          </div>
          <div className="details">
            <h5>Views</h5>
          </div>
        </div>
        {/* <div className="icon_box_area">
          <div className="score">
            <span>40</span>
          </div>
          <div className="details">
            <h5>Bike Score</h5>
            <p>Bikeable</p>
          </div>
        </div> */}
      </div>
      <a className="more_info" href="#">
        More Details Here
      </a>
    </>
  );
};

export default WalkScore;
