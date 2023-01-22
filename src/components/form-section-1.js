import React from "react";
import { Col } from "react-bootstrap";
import FormTextField from "../shared-components/form-text-field";

const FormSection1 = () => {
  return (
    <>
      <FormTextField
        as={Col}
        sm="4"
        controlId="validationFormik01"
        label="Your Total Income"
        type="number"
        name="yourIncome"
      />

      <FormTextField
        as={Col}
        sm="4"
        controlId="validationFormik02"
        label="Your Spouse Total Income"
        type="number"
        name="yourSpouseIncome"
      />
    </>
  );
};
export default FormSection1;
