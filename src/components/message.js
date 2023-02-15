import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "awsconfig" from "./aws-exports";
import Amplify from "aws-amplify";
import { API } from "aws-amplify";

Amplify.configure(awsconfig);
API.configure(awsconfig);

const myAPI = "testapi";
const path = "/items";

export default function Message() {
  const [result, setresult] = useState(null);
  const message = async () => {
    try {
      let res = await API.get(myAPI, path, {});
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
