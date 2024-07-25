"use client";
import React, { useState } from "react";
import ResultCard from "./ResultCard";

const Results = ({ resultss }) => {
  return (
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4 w-full">
      {resultss.length > 0 ? ( // Check if results have data before mapping
        resultss.map((result) => <ResultCard key={result.id} result={result} />)
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default Results;
