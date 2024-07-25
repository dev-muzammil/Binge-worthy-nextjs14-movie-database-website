"use client";
import { Button } from "@chakra-ui/react";
import React, { useEffect } from "react";

const error = ({ error, reset }) => {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return <div className="text-center mt-10">
    <h1>Something Went Wrong. Please Try Again Later!</h1>
    <Button onClick={() => reset()}>Try Again</Button>
  </div>;
};

export default error;
