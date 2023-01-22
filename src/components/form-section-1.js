import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import FormTextField from "../shared-components/form-text-field";

const FormSection1 = () => {
  return (
    <>
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <FormTextField
              as={Col}
              sm="4"
              controlId="validationFormik01"
              label="Your Total Income"
              type="number"
              name="yourIncome"
            />
          </Col>
          <Col xs={12} md={6}>
            <FormTextField
              as={Col}
              sm="4"
              controlId="validationFormik02"
              label="Your Spouse Total Income"
              type="number"
              name="yourSpouseIncome"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default FormSection1;
