import React from "react";
import { Button } from "./styles/button.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Table } from "./styles/table.style";

const DataItem = ({ data, onEdit, onDelete }) => (
  <Table striped bordered hover variant="dark">
    <thead>
      <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Phone</th>
        <th>Notes</th>
      </tr>
    </thead>
    <tbody>
      {data.map((user) => (
        <tr key={user.name}>
          <td>{user.name}</td>
          <td>{user.age}</td>
          <td>{user.phone}</td>
          <td>{user.notes[0]}</td>[{user.notes.length}]
          <td>
            <Button backgroundColor="#005bc0" onClick={() => onEdit(user)}>
              <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
            </Button>
            <Button backgroundColor="#FF0000" onClick={() => onDelete(user)}>
              <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
            </Button>
          </td>
        </tr>
      ))}
    </tbody>
  </Table>
);

export default DataItem;
