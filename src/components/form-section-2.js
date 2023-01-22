import React from "react";
import { Col, Container } from "react-bootstrap";
import FormSelectField from "../shared-components/form-select-field";

const FormSection2 = () => {
  return (
    <Container>
      <FormSelectField
        as={Col}
        sm="4"
        controlId="validationFormik03"
        label="taxYear"
        type="text"
        name="taxYear"
      >
        <option value="">Select a year</option>
        <option>2022</option>
        <option>2023</option>
      </FormSelectField>
    </Container>
  );
};

export default FormSection2;
