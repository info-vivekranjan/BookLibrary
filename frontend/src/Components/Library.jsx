import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./Css/Library.module.css";

function Library() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getData = () => {
    setLoading(true);

    return axios
      .get("http://localhost:5000/library")
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
        setLoading(false);
      })
      .finally(() => {
        setError(false);
        setLoading(false);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>Library</h1>
      {loading ? (
        <h3>Loading...</h3>
      ) : error ? (
        <h3>Somehting went wrong...</h3>
      ) : (
        <>
          <div className={styles.libraryCont}>
            {data.map((item) => {
              return (
                <div key={item._id} className={styles.eachLibrary}>
                  <Link className={styles.bookLink} to={item._id}>
                    {item.bookname}
                  </Link>
                  <div className={styles.bookImg}>
                    <img src={item.imgUrl} alt={item.bookname} />
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

export { Library };
