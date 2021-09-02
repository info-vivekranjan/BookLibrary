import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Library() {
  const [data, setData] = useState([]);

  const getData = () => {
    return axios
      .get("http://localhost:5000/library")
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log("finally data fetched");
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>Library</h1>
      {data.map((item) => {
        return (
          <div>
            <Link to={item._id}>{item.bookname}</Link>
          </div>
        );
      })}
    </div>
  );
}

export { Library };
