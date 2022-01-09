import axios from "axios"
import React, { useState, useEffect } from "react"

function ResultPage() {
    const [result, setResult] = useState("")

    const ResultsPage = () => {
        useEffect(() => {
        axios.get('http://localhost:5000/search').then(res => res.json()).then(
            result => {
                setResult(result)
                console.log(result)
            }
        )
        })
    }




    return(
        <div className="body">
            <h1 className="home-title title-result">Sleep Search</h1>
            <h3 className="sub-result">Ask any sleep questions here</h3>
            <div className="result-wrapper">
            <div className="result-container">
                <p className="result-paragraph"></p>
            </div>
            </div>
        </div>
    )
}

export default ResultPage