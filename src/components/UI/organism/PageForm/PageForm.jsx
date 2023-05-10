import React, { useState } from "react";
import { Header, Icon, Button, Modal } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { ElectionForm, ElectionTable } from "../../molecules";
import templateData from "./mocks/templateData.json";

const initialFormData = { title: "", description: "", status: "", dateEnd: "" };
const PageForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState(initialFormData);
  const [data, setData] = useState(templateData);
  const [viewIndex, setViewIndex] = useState(false);

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

  const handleInputChange = (event) => {
    const { title, value } = event.target;
    setFormData({ ...formData, [title]: value });
  };

  const handleOpen = () => setIsOpen(true);

  const handleClose = () => {
    setIsOpen(false);
    setEditIndex(null);
    setErrorMessage("");
    setSubmitted(false);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setFormData(data[index]);
    setViewIndex(false);
    handleOpen();
  };

  const handleDelete = (index) => {
    setData([...data.slice(0, index), ...data.slice(index + 1)]);
  };

  const handleView = (index) => {
    setFormData(data[index]);
    setEditIndex(false);
    setViewIndex(true);
    handleOpen();
  };

  return (
    <>
      <Header as="h2" icon textAlign="center">
        <Icon title="users" circular />
        <Header.Content>E-BOTO</Header.Content>
      </Header>
      <Button color="green" onClick={() => handleOpen()}>
        <Icon title="add user" />
        Add Election
      </Button>

      <Modal open={isOpen} onClose={() => handleClose()}>
        {!viewIndex ? (
          <Modal.Header>Edit Election</Modal.Header>
        ) : (
          <Modal.Header>View Election</Modal.Header>
        )}
        <Modal.Content>
          <ElectionForm
            editIndex={editIndex}
            errorMessage={errorMessage}
            formData={formData}
            handleClose={handleClose}
            handleFormSubmit={handleFormSubmit}
            handleInputChange={handleInputChange}
            handleView={handleView}
            setErrorMessage={setErrorMessage}
            submitted={submitted}
            viewIndex={viewIndex}
            setViewIndex={setViewIndex}
          />
        </Modal.Content>
      </Modal>
      <ElectionTable
        data={data}
        formData={formData}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        handleInputChange={handleInputChange}
        handleView={handleView}
        templateData={templateData}
      />
    </>
  );
};

export default PageForm;
