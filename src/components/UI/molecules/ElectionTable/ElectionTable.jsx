import React, { useState } from "react";
import { Table, Icon, Button } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
const ElectionTable = (props) => {
  return (
    <Table celled striped>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Title</Table.HeaderCell>
          <Table.HeaderCell>Description</Table.HeaderCell>
          <Table.HeaderCell>Status</Table.HeaderCell>
          <Table.HeaderCell>Date End</Table.HeaderCell>
          <Table.HeaderCell>Actions</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {props.data.map((user, templateData) => (
          <Table.Row key={templateData}>
            <Table.Cell>{user.title}</Table.Cell>
            <Table.Cell>{user.description}</Table.Cell>
            <Table.Cell>{user.status}</Table.Cell>
            <Table.Cell>{user.dateEnd}</Table.Cell>
            <Table.Cell>
              <Button
                color="blue"
                onClick={() => props.handleView(templateData)}
              >
                <Icon title="edit" />
                View
              </Button>
              <Button
                color="blue"
                onClick={() => props.handleEdit(templateData)}
              >
                <Icon title="edit" />
                Edit
              </Button>
              <Button
                color="red"
                onClick={() => props.handleDelete(templateData)}
              >
                <Icon title="trash" />
                Delete
              </Button>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

export default ElectionTable;
