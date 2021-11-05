import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import styled from "styled-components";

const Container = styled.div`
  margin: 0 20%;
`;

const Title = styled.div`
  border: 1px solid black;
  width: 100%;
  padding: 0.6rem 0;

  :hover {
    cursor: pointer;
  }
`;

function Character(props) {
  const [show, setShow] = useState(false);
  const { obj } = props;

  return (
    <Container>
      <Title
        onClick={() => {
          setShow(!show);
        }}
      >
        {obj.name}
      </Title>
      {show ? (
        <ul>
          <li>
            <span>Birth Year</span>
            {obj.birth_year}
          </li>
          <br />
          <li>
            <span>Gender</span>
            {obj.gender}
          </li>
          <br />
          <li>
            <span>Height</span>
            {obj.height}
          </li>
          <br />
          <li>
            <span>Hair Color</span>
            {obj.hair_color}
          </li>
          <br />
          <li>
            <span>Eye Color</span>
            {obj.eye_color}
          </li>
          <br />
        </ul>
      ) : null}
    </Container>
  );
}

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people")
      .then((resp) => {
        console.log(resp.data);
        setData(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {data.map((obj) => (
        <Character obj={obj} key={obj.name} />
      ))}
    </div>
  );
};

export default App;
