import { Form, Button } from "react-bootstrap";
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
              placeholder="Try to ask something !"
              onChange={(e) => handleChange(e)}
            />
          </Form.Group>
          <Button className="Link btn-answer" variant="success" type="submit">
            <Link to={`/search?q=${searchQuery}`} className="Link">
              Answer
            </Link>
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default SearchBar;
