import axios from "axios";
import React, { useEffect, useState } from "react";
import "./home.css";
const Home = () => {
  const [data, setData] = useState(0);
  const [votes, setVotes] = useState(0);
  const [data_points, setData_point] = useState({
    candidateName: "",
    adharNumber: 0,
    created_at: "",
    dob: "",
    age: 0,
  });
  const [data_points2, setData_point2] = useState({
    candidateName: "",
    adharNumber: 0,
    created_at: "",
    dob: "",
    age: 0,
  });
  const [data_points3, setData_point3] = useState({
    candidateName: "",
    adharNumber: 0,
    created_at: "",
    dob: "",
    age: 0,
  });

  useEffect(() => {
    axios.get(`http://localhost:5000/api/v0/registeredusers`).then((res) => {
      // console.log(res);
      const x = res.data.count;
      setData(x);
    });

    axios.get(`http://localhost:5000/api/v0/getvotes`).then((res) => {
      // console.log(res);
      const nVotes = res.data.count;
      setVotes(nVotes);
    });
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/v0/recentregistrations`)
      .then((res) => {
        // console.log(res);
        // console.log(res.data.data[1]);
        const t = res.data.data[0];
        const r = res.data.data[1];
        const s = res.data.data[2];
        setData_point({
          candidateName: t.candidatename,
          adharNumber: t.adharnumber,
          dob: t.dob,
          age: t.age,
          created_at: t.created_at,
        });
        setData_point2({
          candidateName: r.candidatename,
          adharNumber: r.adharnumber,
          dob: r.dob,
          age: r.age,
          created_at: r.created_at,
        });
        setData_point3({
          candidateName: s.candidatename,
          adharNumber: s.adharnumber,
          dob: s.dob,
          age: s.age,
          created_at: s.created_at,
        });
      });
  });

  return (
    <div className="HomePage">
      <div className="Heading">DashBoard</div>
      <hr className="h_line" />
      <div className="flexbox">
        <div className="items">
          <div className="top_middle">Total Voters in the region</div>
          <div className="data">1000</div>
        </div>
        <div className="items">
          <div className="top_middle">Registered voters</div>
          <div className="data">{data}</div>
        </div>
        <div className="items">
          <div className="top_middle">Votes casted</div>
          <div className="data">{votes}</div>
        </div>
      </div>

      <div className="Recents">
        <h2>Recent Registrations</h2>
        <hr className="h_line" />
        <div className="table_heading">
          <span>Aadhaar ID</span>
          <span>Name</span>
          <span>Age</span>
          <span>Date Of Birth</span>
          <span>Date Registered</span>
        </div>
        <hr className="h_line" />
        <div className="entries1">
          <span> {data_points.adharNumber}</span>
          <span> {data_points.candidateName}</span>
          <span> {data_points.age}</span>
          <span> {data_points.dob}</span>
          <span> {data_points.created_at}</span>
        </div>
        <div className="entries1">
          <span> {data_points2.adharNumber}</span>
          <span> {data_points2.candidateName}</span>
          <span> {data_points2.age}</span>
          <span> {data_points2.dob}</span>
          <span> {data_points2.created_at}</span>
        </div>
        <div className="entries1">
          <span> {data_points3.adharNumber}</span>
          <span> {data_points3.candidateName}</span>
          <span> {data_points3.age}</span>
          <span> {data_points3.dob}</span>
          <span> {data_points3.created_at}</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
