import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./fingerprint.css";

const Fingerprint = () => {
  const [Loading, setLoading] = useState(false);
  const handleLoading = () => {
    setLoading(!Loading);
  };
  let nav = useNavigate();
  const handleButton = () => {
    // alert("fsf");
    // return nav("/DashBoard/Page3");
  };
  return (
    <div className="Body">
      <div className="heading"> Scan Fingerprint</div>
      <hr className="h_line" />
      <input
        className="scan"
        size="50"
        type="button"
        onClick={handleLoading}
        value="Scan My Fingerprint"
      />
      <div>
        <input
          className="scan1"
          size="500"
          type="button"
          onClick={handleButton}
          value=""
        />
      </div>
      {Loading === true ? <div className="loader"></div> : <div />}
    </div>
  );
};

export default Fingerprint;
