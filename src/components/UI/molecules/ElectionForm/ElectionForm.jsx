import React from "react";
import { Button, Icon, Form } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const ElectionForm = (props) => {
  return (
    <>
      <Form onSubmit={props.handleFormSubmit}>
        <Form.Field>
          <label>Title</label>
          <input
            disabled={props.viewIndex}
            placeholder="Title"
            title="title"
            value={props.formData.title}
            onChange={props.handleInputChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Description</label>
          <input
            disabled={props.viewIndex}
            placeholder="description"
            title="description"
            value={props.formData.description}
            onChange={props.handleInputChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Status</label>
          <input
            disabled={props.viewIndex}
            placeholder="status"
            title="status"
            value={props.formData.status}
            onChange={props.handleInputChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Date End</label>
          <input
            disabled={props.viewIndex}
            placeholder="Date End"
            title="dateEnd"
            value={props.formData.dateEnd}
            onChange={props.handleInputChange}
          />
        </Form.Field>
        {!props.viewIndex && (
          <Button type="submit" color="green" onClick={props.handleFormSubmit}>
            <Icon title="checkmark" />
            Add
          </Button>
        )}
        <Button onClick={props.handleClose}>
          <Icon title="remove" />
          Cancel
        </Button>
      </Form>
    </>
  );
};

export default ElectionForm;
