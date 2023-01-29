import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import {
  Alert,
  Button,
  Container,
  FormControl,
  FormGroup,
} from "react-bootstrap";
import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const jsonToInterface = (json, interfaceName = "IRoot") => {
  let interfaceString = "";
  const interfaces = {};
  Object.keys(json).forEach((key) => {
    const value = json[key];
    let type = typeof value;
    let newInterfaceName = `I${key.charAt(0).toUpperCase()}${key.slice(1)}`;
    if (Array.isArray(value)) {
      if (typeof value[0] === "object") {
        type = `${newInterfaceName}[]`;
        interfaces[newInterfaceName] = jsonToInterface(
          value[0],
          newInterfaceName
        );
      } else {
        type = `${typeof value[0]}[]`;
      }
    } else if (value instanceof Object) {
      type = newInterfaceName;
      interfaces[newInterfaceName] = jsonToInterface(value, newInterfaceName);
    }
    interfaceString += `  ${key}: ${type};\n`;
  });
  interfaces[
    interfaceName
  ] = `export interface ${interfaceName} {\n${interfaceString}}`;
  let interfacesString = Object.values(interfaces).join("\n\n");
  return interfacesString;
};

const JsonToInterface = () => {
  const handleCopyJson = () => {
    navigator.clipboard.writeText(interfaceString);
    setError("");
  };
  const [jsonText, setJsonText] = useState("");
  const [interfaceString, setInterfaceString] = useState("");
  const [error, setError] = useState("");

  const handleGenerateInterface = (jsonText) => {
    try {
      //    jsonText = jsonText.replace(/\s+/g, "")
      const json = JSON.parse(jsonText);
      setInterfaceString(jsonToInterface(json));
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Formik
      initialValues={{ jsonText: "" }}
      validationSchema={Yup.object({
        jsonText: Yup.string().required("Required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setJsonText(values.jsonText);
        handleGenerateInterface(values.jsonText);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Container className="p-3">
          <Form>
            <FormGroup>
              <Field
                as={FormControl}
                name="jsonText"
                placeholder="Enter JSON text here"
                rows={10}
                cols={100}
                component="textarea"
              />
            </FormGroup>
            <Button type="submit" disabled={isSubmitting}>
              Generate Interface
            </Button>
            {interfaceString && (
              <pre>
                <Button
                  size="md"
                  variant="outline-dark"
                  onClick={handleCopyJson}
                >
                  Copy
                </Button>
                <SyntaxHighlighter language="json" style={a11yDark}>
                  {interfaceString}
                </SyntaxHighlighter>
              </pre>
            )}
            {error && <Alert variant="danger">{error}</Alert>}
          </Form>
        </Container>
      )}
    </Formik>
  );
};

export default JsonToInterface;
