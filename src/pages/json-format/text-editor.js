import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import {
  Button,
  FormControl,
  FormGroup,
  Alert,
  Container,
  Row,
} from "react-bootstrap";

import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const TextEditor = () => {
  const [jsonText, setJsonText] = useState("");
  const [formattedJson, setFormattedJson] = useState("");
  const [error, setError] = useState("");

  const handleFormatJson = (jsonText) => {
    try {
      const json = JSON.parse(jsonText);
      setFormattedJson(JSON.stringify(json, null, 2));
    } catch (err) {
      setError(err.message);
    }
  };

  const handleCopyJson = () => {
    navigator.clipboard.writeText(formattedJson);
    setError("");
  };

  return (
    <Formik
      initialValues={{ jsonText: "" }}
      validationSchema={Yup.object({
        jsonText: Yup.string().required("Required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setJsonText(values.jsonText);
        handleFormatJson(values.jsonText);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Container>
          <Form className="p-3">
            <Row>
              <FormGroup className="pl-0">
                <Field
                  as={FormControl}
                  name="jsonText"
                  placeholder="Enter JSON text here"
                  rows={10}
                  cols={110}
                  component="textarea"
                />
              </FormGroup>
              <Button
                size="md"
                variant="outline-primary"
                type="submit"
                disabled={isSubmitting}
              >
                Format JSON
              </Button>
            </Row>
            <Row>
              <br />
              <hr />
            </Row>
            <Row>
              {formattedJson && (
                <>
                  <pre>
                    <Button
                      size="md"
                      variant="outline-dark"
                      onClick={handleCopyJson}
                    >
                      Copy
                    </Button>
                    <SyntaxHighlighter language="json" style={a11yDark}>
                      {formattedJson}
                    </SyntaxHighlighter>
                  </pre>
                </>
              )}
              {error && <Alert variant="danger">{error}</Alert>}
            </Row>
          </Form>
        </Container>
      )}
    </Formik>
  );
};

export default TextEditor;
