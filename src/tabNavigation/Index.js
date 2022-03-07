import React, { useEffect, useState } from "react";
import { GetLocalData } from "../services/LocalStorage";
import Guest from "./Guest";
import Home from "./Home";

const Index = () => {
  const [hasToken, setHasToken] = useState();

  useEffect(async () => {
    const data = await GetLocalData("token");
    setHasToken(data);
  }, []);

  if (hasToken === null) return <Guest />;
  return <Home />;
};

export default Index;
