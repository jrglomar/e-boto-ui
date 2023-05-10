import React, { useState } from "react";
import { Button, Header, Icon, Modal, Form, Table } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const initialFormData = { title: "", description: "", status: "", dateEnd: "" };

const ElectionPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const [data, setData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => {
    setIsOpen(false);
    setEditIndex(null);
    setErrorMessage("");
    setSubmitted(false);
  };

  const handleInputChange = (event) => {
    const { title, value } = event.target;
    setFormData({ ...formData, [title]: value });
  };

  const handleFormSubmit = () => {
    if (
      formData.title == "" ||
      formData.description == "" ||
      formData.status == "" ||
      formData.dateEnd == ""
    ) {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    if (editIndex === null) {
      setData([...data, formData]);
      setFormData(initialFormData);
    } else {
      setData([
        ...data.slice(0, editIndex),
        formData,
        ...data.slice(editIndex + 1),
      ]);
    }

    console.log(data);
    handleClose();
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setFormData(data[index]);
    handleOpen();
  };

  const handleDelete = (index) => {
    setData([...data.slice(0, index), ...data.slice(index + 1)]);
  };
  return (
    <div>
      <Header as="h2" icon textAlign="center">
        <Icon title="users" circular />
        <Header.Content>E-BOTO</Header.Content>
      </Header>
      <Button color="green" onClick={handleOpen}>
        <Icon title="add user" />
        Add Election
      </Button>
      <Modal open={isOpen} onClose={handleClose}>
        <Modal.Header>Add Election</Modal.Header>
        <Modal.Content>
          <Form onSubmit={handleFormSubmit}>
            <Form.Field>
              <label>Title</label>
              <input
                placeholder="Title"
                title="title"
                value={formData.title}
                onChange={handleInputChange}
              />
              {submitted && !formData.title && (
                <div style={{ color: "red" }}>Name is required</div>
              )}
            </Form.Field>
            <Form.Field>
              <label>Description</label>
              <input
                placeholder="description"
                title="description"
                value={formData.description}
                onChange={handleInputChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Status</label>
              <input
                placeholder="status"
                title="status"
                value={formData.status}
                onChange={handleInputChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Date End</label>
              <input
                placeholder="Date End"
                title="dateEnd"
                value={formData.dateEnd}
                onChange={handleInputChange}
              />
            </Form.Field>
            <Button
              type="submit"
              color="green"
              onClick={handleFormSubmit}
              value="add"
            >
              <Icon title="checkmark" />
              Add
            </Button>
            <Button onClick={handleClose} value="cancel">
              <Icon title="remove" />
              Cancel
            </Button>
          </Form>
        </Modal.Content>
      </Modal>

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
          {data.map((user, index) => (
            <Table.Row key={index}>
              <Table.Cell>{user.title}</Table.Cell>
              <Table.Cell>{user.description}</Table.Cell>
              <Table.Cell>{user.status}</Table.Cell>
              <Table.Cell>{user.dateEnd}</Table.Cell>
              <Table.Cell>
                {/* <Button color="blue" onClick={() => handleEdit(index)}>
                  <Icon title="view" />
                  View
                </Button> */}
                <Button color="blue" onClick={() => handleEdit(index)}>
                  <Icon title="edit" />
                  Edit
                </Button>
                <Button color="red" onClick={() => handleDelete(index)}>
                  <Icon title="trash" />
                  Delete
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};
export default ElectionPage;
