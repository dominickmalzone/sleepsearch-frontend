import axios from "axios"

function ResultPage() {
    const resultPage = () => {
        axios.get('http://localhost:5000/search').then(response => {
            console.log("this is search: " + response)
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