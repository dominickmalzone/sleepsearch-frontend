// import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
function ResultPage() {
  const [result, setResult] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const SERVER_URL = "http://localhost:5000";

  const runSearchQuery = (searchPhrase) => {
    console.log("runSearchQuery");
    try {
      fetch(`${SERVER_URL}/search?data=${searchPhrase}`)
        .then((response) => response.json())
        .then((data) => {
          console.log(`Results here ${data}`);
          setResult(data);
        });
    } catch (e) {
      alert("Something went wrong: ", e);
    }
  };

  useEffect(() => {
    console.log("UseEffect from Results Page");
    let searchTerm = searchParams.get("q");
    console.log("Calling search api with phrase: ", searchTerm);
    runSearchQuery(searchTerm);

    setResult(
      `Here is where the results will be for your search: ${searchTerm}`
    );
  }, []);

  const ResultsPage = () => {};

  return (
    <div className="body">
      <h1 className="home-title title-result">Sleep Search</h1>
      <h3 className="sub-result">Ask any sleep questions here</h3>
      <div className="result-wrapper">
        <div className="result-container">
          <p className="result-paragraph">
            result:
            {result}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ResultPage;
