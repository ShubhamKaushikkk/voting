import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./newvoter.css";

const Newvoter = () => {
  // const memberName = useRef(null);
  // const adhar = useRef(null);
  // const age = useRef(null);
  // const sex = useRef(null);
  // const dobirth = useRef(null);
  // const mob = useRef(null);
  // const state = useRef(null);
  // const address = useRef(null);
  // const city1 = useRef(null);

  const [detail, setDetail] = useState({
    candidateName: "",
    adharNumber: 0,
    age: 0,
    sex: "Male",
    dob: "",
    mobileNumber: "",
    state: "",
    address: "",
    city: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setDetail((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  let nav = useNavigate();
  const handlefingerprint = async (e) => {
    e.preventDefault();
    const body = detail;
    console.log(body);

    await axios
      .post("http://localhost:5000/api/v0/signup", body)
      .then((res) => {
        console.log(res);
        alert("Record Saved");
      })
      .catch((err) => console.log(err));
    return nav("/DashBoard/Page2");
  };

  return (
    <>
      <div className="Voter">
        <div className="Heading">New Voter Registration</div>
        <hr className="h_line" />

        <form
          className="style_form"
          form="Registration_form"
          onSubmit={handlefingerprint}
          // onsubmit="submit_form()"
        >
          <div className="right_side">
            <h2> Mobile Number</h2>
            <input
              placeholder="Mobile Number"
              value={detail.mobileNumber}
              name="mobileNumber"
              className=" fields"
              maxLength="10"
              type="text"
              size="50"
              onChange={handleChange}
            />
            <h2> Address</h2>
            <input
              placeholder="Address"
              value={detail.address}
              name="address"
              className=" fields"
              type="text"
              size="50"
              onChange={handleChange}
            />
            <h2> State</h2>
            <select
              id="state"
              className="drop"
              value={detail.state}
              name="state"
              onChange={handleChange}
            >
              <option value="">Select the State</option>
              <option value="Andhra Pradesh">Andhra Pradesh</option>
              <option value="Andaman and Nicobar Islands">
                Andaman and Nicobar Islands
              </option>
              <option value="Arunachal Pradesh">Arunachal Pradesh</option>
              <option value="Assam">Assam</option>
              <option value="Bihar">Bihar</option>
              <option value="Chandigarh">Chandigarh</option>
              <option value="Chhattisgarh">Chhattisgarh</option>
              <option value="Dadar and Nagar Haveli">
                Dadar and Nagar Haveli
              </option>
              <option value="Daman and Diu">Daman and Diu</option>
              <option value="Delhi">Delhi</option>
              <option value="Lakshadweep">Lakshadweep</option>
              <option value="Puducherry">Puducherry</option>
              <option value="Goa">Goa</option>
              <option value="Gujarat">Gujarat</option>
              <option value="Haryana">Haryana</option>
              <option value="Himachal Pradesh">Himachal Pradesh</option>
              <option value="Jammu and Kashmir">Jammu and Kashmir</option>
              <option value="Jharkhand">Jharkhand</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Kerala">Kerala</option>
              <option value="Madhya Pradesh">Madhya Pradesh</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Manipur">Manipur</option>
              <option value="Meghalaya">Meghalaya</option>
              <option value="Mizoram">Mizoram</option>
              <option value="Nagaland">Nagaland</option>
              <option value="Odisha">Odisha</option>
              <option value="Punjab">Punjab</option>
              <option value="Rajasthan">Rajasthan</option>
              <option value="Sikkim">Sikkim</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
              <option value="Telangana">Telangana</option>
              <option value="Tripura">Tripura</option>
              <option value="Uttar Pradesh">Uttar Pradesh</option>
              <option value="Uttarakhand">Uttarakhand</option>
              <option value="West Bengal">West Bengal</option>
            </select>
            <h2> City</h2>
            <input
              placeholder="City"
              value={detail.city}
              name="city"
              className=" fields"
              type="text"
              size="50"
              onChange={handleChange}
            />
          </div>
          <div className="left_side">
            <h2> Candidate Name</h2>
            <input
              value={detail.candidateName}
              name="candidateName"
              placeholder="Name"
              className="fields"
              type="text"
              size="50"
              onChange={handleChange}
            />
            <h2> Aadhaar Number</h2>
            <input
              placeholder="Aadhaar Number"
              value={detail.adharNumber}
              name="adharNumber"
              className="fields"
              type="integer"
              maxLength="12"
              size="50"
              onChange={handleChange}
            />
            <h2> Age</h2>
            <input
              placeholder="Age"
              name="age"
              className="fields"
              value={detail.age}
              type="integer"
              size="50"
              maxLength="3"
              onChange={handleChange}
            />
            <h2> Sex</h2>
            <select
              id="sex"
              className="drop"
              value={detail.sex}
              name="sex"
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Others">Others</option>
            </select>

            <h2> Date Of Birth</h2>
            <input
              className="button1"
              type="date"
              value={detail.dob}
              name="dob"
              size="50"
              onChange={handleChange}
            />
          </div>

          <div>
            <input
              className="Proceed"
              size="50"
              type="submit"
              value="Proceed to scan fingerprint"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Newvoter;
