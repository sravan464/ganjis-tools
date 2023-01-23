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
        <option value="2022">2022 (Files in 2023)</option>
        <option value="2023">2023 (Files in 2024)</option>
      </FormSelectField>
    </Container>
  );
};

export default FormSection2;
