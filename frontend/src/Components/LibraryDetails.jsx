import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";

function LibraryDetails() {
  const { id } = useParams();
  const [data, setData] = useState("");
  const history = useHistory();

  const getData = () => {
    return axios
      .get(`http://localhost:5000/library/${id}`)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const goBack = () => {
    history.goBack();
  };

  return (
    <div>
      <h1>{data.bookname}</h1>
      <div>
        <h3>Publish Date: {data.publishDate}</h3>
      </div>
      <div>
        <h3>Author: {data.author}</h3>
      </div>
      <div>
        <img src={data.imgUrl} alt={data.imgUrl} />
      </div>
      <div>
        <h4>Pages: {data.pages}</h4>
      </div>
      <div>
        <h3>Langauge: {data.langauge}</h3>
      </div>
      <div>
        <div>
          <h3>Description: </h3>
        </div>
        <div>
          <div>{data.description}</div>
        </div>
      </div>
      <br />
      <button onClick={goBack}>{"<<--"} Go Back</button>
      <br />
      <br />
    </div>
  );
}

export { LibraryDetails };
