import { Formik } from "formik";
import * as yup from "yup";
import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import FormSection1 from "./form-section-1";
import FormSection2 from "./form-section-2";
import Alert from "react-bootstrap/Alert";

const schema = yup.object({
  taxYear: yup.string().required(),
  yourIncome: yup
    .string()
    .required()
    .typeError("Please enter a valid number")
    .test(
      "Is positive?",
      "The number must be greater than 0!",
      (value) => value > 0
    ),
  yourSpouseIncome: yup
    .string()
    .required()
    .typeError("Please enter a valid number")
    .test(
      "Is positive?",
      "The number must be greater than 0!",
      (value) => value > 0
    ),
});

const currencyFormat = (num) => {
  return "$" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
};

const Infinity = Math.pow(10, 1000);
const taxSlabs = {
  2022: {
    standardDeduction: {
      jointly: 25900,
      separately: 12950,
    },
    jointly: [
      {
        min: 0,
        max: 20550,
        rate: 0.1,
      },
      {
        min: 20551,
        max: 83550,
        rate: 0.12,
      },
      {
        min: 83551,
        max: 178150,
        rate: 0.22,
      },
      {
        min: 178151,
        max: 340100,
        rate: 0.24,
      },
      {
        min: 340101,
        max: 431900,
        rate: 0.32,
      },
      {
        min: 431901,
        max: Infinity,
        rate: 0.35,
      },
    ],
    separately: [
      {
        min: 0,
        max: 10275,
        rate: 0.1,
      },
      {
        min: 10276,
        max: 41775,
        rate: 0.12,
      },
      {
        min: 41776,
        max: 89075,
        rate: 0.22,
      },
      {
        min: 89076,
        max: 170050,
        rate: 0.24,
      },
      {
        min: 170051,
        max: 215950,
        rate: 0.32,
      },
      {
        min: 215951,
        max: Infinity,
        rate: 0.35,
      },
    ],
  },
  2023: {
    standardDeduction: {
      jointly: 27700,
      separately: 13850,
    },
    jointly: [
      {
        min: 0,
        max: 22000,
        rate: 0.1,
      },
      {
        min: 22001,
        max: 89450,
        rate: 0.12,
      },
      {
        min: 89451,
        max: 190750,
        rate: 0.22,
      },
      {
        min: 190751,
        max: 364200,
        rate: 0.24,
      },
      {
        min: 364201,
        max: 462500,
        rate: 0.32,
      },
      {
        min: 462501,
        max: Infinity,
        rate: 0.35,
      },
    ],
    separately: [
      {
        min: 0,
        max: 11000,
        rate: 0.1,
      },
      {
        min: 111001,
        max: 44725,
        rate: 0.12,
      },
      {
        min: 44726,
        max: 95375,
        rate: 0.22,
      },
      {
        min: 95376,
        max: 182100,
        rate: 0.24,
      },
      {
        min: 182101,
        max: 231250,
        rate: 0.32,
      },
      {
        min: 231251,
        max: Infinity,
        rate: 0.35,
      },
    ],
  },
};

const calculateTax = (taxYear, yourIncome, yourWifeIncome) => {
  let totalTaxJointly = 0;
  let totalTaxSeparately = 0;
  let totalIncome = yourIncome + yourWifeIncome;
  let standardDeductionJointly = taxSlabs[taxYear].standardDeduction.jointly;
  let taxSlabJointly = taxSlabs[taxYear].jointly;

  totalIncome -= standardDeductionJointly;

  for (let i = 0; i < taxSlabJointly.length; i++) {
    if (
      totalIncome > taxSlabJointly[i].min &&
      totalIncome <= taxSlabJointly[i].max
    ) {
      totalTaxJointly = totalIncome * taxSlabJointly[i].rate;
      break;
    }
  }
  const yourTaxSeparately = calculateTaxSeparately(taxYear, yourIncome);
  const yourSpouseTaxSeparately = calculateTaxSeparately(
    taxYear,
    yourWifeIncome
  );

  totalTaxSeparately = yourTaxSeparately + yourSpouseTaxSeparately;
  return {
    totalTaxJointly: Math.round(totalTaxJointly),
    totalTaxSeparately: Math.round(totalTaxSeparately),
  };
};

const calculateTaxSeparately = (taxYear, actualIncome) => {
  let taxSeparately = 0;
  let standardDeductionSeparately =
    taxSlabs[taxYear].standardDeduction.separately;
  let taxSlabSeparately = taxSlabs[taxYear].separately;

  let income = actualIncome - standardDeductionSeparately;

  for (let i = 0; i < taxSlabSeparately.length; i++) {
    if (
      income > taxSlabSeparately[i].min &&
      income <= taxSlabSeparately[i].max
    ) {
      taxSeparately = income * taxSlabSeparately[i].rate;
    }
  }
  return taxSeparately;
};

function FormExample() {
  const [show, setShow] = useState(false);
  const [totalTax, setTotalTax] = useState({
    totalTaxJointly: 0,
    totalTaxSeparately: 0,
  });
  return (
    <Container className="p-3">
      <Row>
        <Col xs={12} md={8}>
          <Formik
            validationSchema={schema}
            onSubmit={(values, { setSubmitting }) => {
              let { totalTaxJointly, totalTaxSeparately } = calculateTax(
                values.taxYear,
                values.yourIncome,
                values.yourSpouseIncome
              );
              setTotalTax({ totalTaxJointly, totalTaxSeparately });
              setShow(true);
              setSubmitting(false);
            }}
            initialValues={{
              yourIncome: 0,
              yourSpouseIncome: 0,
              taxYear: undefined,
            }}
          >
            {({
              handleSubmit,
              handleChange,
              values,
              errors,
              isValid,
              isSubmitting,
            }) => (
              <Container>
                <Form noValidate onSubmit={handleSubmit}>
                  <Row>
                    <Col>
                      <FormSection1 />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormSection2 />
                    </Col>
                  </Row>
                  <Container className="p-3">
                    <Row>
                      <Col>
                        <Button
                          disabled={!isValid || isSubmitting}
                          variant="success"
                          as="input"
                          size="lg"
                          type="submit"
                          value="Submit"
                        />
                      </Col>
                    </Row>
                  </Container>
                  <Col>
                    {show && (
                      <Alert
                        variant="info"
                        onClose={() => setShow(false)}
                        dismissible
                      >
                        <Alert.Heading>
                          {totalTax.totalTaxJointly >
                          totalTax.totalTaxSeparately
                            ? `You better file your taxes Separately`
                            : totalTax.totalTaxJointly <
                              totalTax.totalTaxSeparately
                            ? `You better file your taxes Jointly`
                            : `Either way you pay same amount`}
                        </Alert.Heading>
                        <p>
                          If you file jointly, your total tax will be:
                          <h6>{currencyFormat(totalTax.totalTaxJointly)}</h6>
                          If you file separately, your total tax will be:
                          <h6>{currencyFormat(totalTax.totalTaxSeparately)}</h6>
                        </p>
                      </Alert>
                    )}
                  </Col>
                  {/* <Col>
                <pre style={{ margin: "0 auto" }}>
                  {JSON.stringify(
                    { ...values, ...errors, isValid, isSubmitting },
                    null,
                    2
                  )}
                </pre>
              </Col> */}
                </Form>
              </Container>
            )}
          </Formik>
        </Col>
      </Row>
    </Container>
  );
}

export default FormExample;
