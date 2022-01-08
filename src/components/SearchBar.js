import { Form, Button } from "react-bootstrap"
import axios from "axios"
import React, {useState} from "react"
import { Link } from "react-router-dom"
function SearchBar() {
    function handleSubmit(e){
        e.preventDefault();
        var formData = new FormData(e.target);
        var data = formData.get("data");
        console.log('Your input value is: ' + data);
        window.location.href = "http://localhost:5000/search?data=" + data;
    }
    return(
        <div className="body">
            <div className="form-wrapper">
            <Form className="search-form" onSubmit={handleSubmit}>
                <Form.Group className="mb-3 search-bar" controlId="formBasicEmail">
                        <Form.Control name="data" placeholder="How do I achieve this?"/>
                </Form.Group>
                <Button className="Link btn-answer" variant="success" type="submit">Answer</Button>
            </Form>
            </div>
        </div>
    )
}

export default SearchBar;


// COMMENTS

    // function handleFormSubmit(e) {
    //     e.preventDefault();
    //     console.log(this.state);
    //     axios({
    //         method:'post',
    //         url:"http://localhost:5000/search",
    //         headers: {'content-type': 'application/json'},
    //         data:this.state
    //     })
    //     .then(result => {
    //         this.setState({results:result.data});
    //         console.log(result.data);
    //     })
    //     .catch(error=> {
    //         console.log(error);
    //     })
    // }
        // }
        // const searchEngine = () => {
        // let userSearch = {
        //     data: search
        // }
        // if (search !== "") {
        //     axios
        //       .post("http://localhost:5000/search", userSearch)
              
        //       .then(function (response) {
        //         console.log(response);
        //         //Perform action based on response
        //       })
        //       .catch(function (error) {
        //         console.log(error);
        //         //Perform action based on error
        // })
        // } else {
        //     alert("The search query cannot be empty")
        // }}
    // const [search, setSearch] = useState("")
    // let state = {
    //     data: search
    // }

