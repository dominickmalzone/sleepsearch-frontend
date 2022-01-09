import { Form, Button } from "react-bootstrap";
import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
function SearchBar() {
  const [searchQuery, setsearchQuery] = useState();

  const handleChange = async (e) => {
    setsearchQuery(e.target.value);
  };

  return (
    <div className="body">
      <div className="form-wrapper">
        <Form className="search-form">
          <Form.Group className="mb-3 search-bar" controlId="formBasicEmail">
            <Form.Control
              name="data"
              placeholder="How do I know if I have a sleep disorder?"
              onChange={(e) => handleChange(e)}
            />
          </Form.Group>
          <Button className="Link btn-answer" variant="success" type="submit">
            <Link to={`/results?q=${searchQuery}`} className="Link">
              Answer
            </Link>
          </Button>
        </Form>
      </div>
    </div>
  );
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
