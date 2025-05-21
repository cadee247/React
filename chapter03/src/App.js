import { GiCard5Spades } from "react-icons/gi";
import { TbArrowBigLeftLineFilled } from "react-icons/tb";
import { VscHeartFilled } from "react-icons/vsc";
import { VscGithub } from "react-icons/vsc";
import { MdAudiotrack } from "react-icons/md";

import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import Rating from './Rating';

class App extends Component {
  render() {
    const ratings = [1, 2, 3, 4, 5];

    return (
      <div>
        <h2>Ratings Table</h2>
        
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Rating</th>
              <th>Random Icons</th> {/*  Column for Icons */}
            </tr>
          </thead>
          <tbody>
            {ratings.map((rating, index) => (
              <tr key={index}>
                <td>{index + 1}</td> {/*  Auto Numbering */}
                <td><Rating rating={rating} /></td> {/*  Displays Rating */}

                {/*  Conditionally Display Icons for Specific Rows */}
                <td>
                  {index === 0 ? <MdAudiotrack /> : null}
                  {index === 1 ? <VscGithub /> : null}
                  {index === 2 ? <VscHeartFilled /> : null}
                  {index === 3 ? <TbArrowBigLeftLineFilled /> : null}
                  {index === 4 ? <GiCard5Spades /> : null}
                </td>

              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default App;