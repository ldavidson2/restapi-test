import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Message() {
  const [result, setresult] = useState(null);
  const message = async () => {
    try {
      let res = await axios.get("https://wr564a0aw3.execute-api.us-east-2.amazonaws.com/staging");
      let result = res.data;
      setresult(result);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    message();
  }, []);
  return (
    <div>
      <h1>Results:</h1>
      {result}
    </div>
  );
}
