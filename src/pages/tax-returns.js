import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Select, FormLabel } from "react-bootstrap";
import FormExample from "../components/form-example";

const TaxReturns = () => {
  // const yearSchema = Yup.object().shape({
  //   taxYear: Yup.string().required("Please select a tax year"),
  // });

  // const incomeSchema = Yup.object().shape({
  //   yourIncome: Yup.number()
  //     .required("Please enter your income")
  //     .positive("Please enter a positive number")
  //     .typeError("Please enter a valid number"),
  //   yourWifeIncome: Yup.number()
  //     .required("Please enter your wife income")
  //     .positive("Please enter a positive number")
  //     .typeError("Please enter a valid number"),
  // });

  // const taxSlabs = {
  //   2022: [
  //     {
  //       min: 0,
  //       max: 180000,
  //       rate: 0.1,
  //     },
  //     {
  //       min: 180001,
  //       max: 300000,
  //       rate: 0.12,
  //     },
  //     {
  //       min: 300001,
  //       max: Infinity,
  //       rate: 0.22,
  //     },
  //   ],
  //   2023: [
  //     {
  //       min: 0,
  //       max: 200000,
  //       rate: 0.1,
  //     },
  //     {
  //       min: 200001,
  //       max: 350000,
  //       rate: 0.12,
  //     },
  //     {
  //       min: 350001,
  //       max: Infinity,
  //       rate: 0.22,
  //     },
  //   ],
  // };

  // const calculateTax = (taxYear, yourIncome, yourWifeIncome) => {
  //   let totalTaxJointly = 0;
  //   let totalTaxSeparately = 0;
  //   let totalIncome = yourIncome + yourWifeIncome;
  //   let taxSlab = taxSlabs[taxYear];

  //   for (let i = 0; i < taxSlab.length; i++) {
  //     if (totalIncome > taxSlab[i].min && totalIncome <= taxSlab[i].max) {
  //       totalTaxJointly += (totalIncome - taxSlab[i].min) * taxSlab[i].rate;
  //       break;
  //     } else {
  //       totalTaxJointly += (taxSlab[i].max - taxSlab[i].min) * taxSlab[i].rate;
  //     }
  //   }

  //   for (let i = 0; i < taxSlab.length; i++) {
  //     if (yourIncome > taxSlab[i].min && yourIncome <= taxSlab[i].max) {
  //       totalTaxSeparately += (yourIncome - taxSlab[i].min) * taxSlab[i].rate;
  //       break;
  //     } else {
  //       totalTaxSeparately +=
  //         (taxSlab[i].max - taxSlab[i].min) * taxSlab[i].rate;
  //     }
  //   }
  //   return { totalTaxJointly, totalTaxSeparately };
  // };

  return (
    <>
      <FormExample />
    </>
    // <Formik
    //   initialValues={{
    //     taxYear: "",
    //     yourIncome: "",
    //     yourWifeIncome: "",
    //   }}
    //   validationSchema={yearSchema.concat(incomeSchema)}
    //   onSubmit={(values, { setSubmitting }) => {
    //     setTimeout(() => {
    //       let { totalTaxJointly, totalTaxSeparately } = calculateTax(
    //         values.taxYear,
    //         values.yourIncome,
    //         values.yourWifeIncome
    //       );
    //       alert(
    //         `If you file jointly, your total tax will be: $${totalTaxJointly} If you file separately, your total tax will be: $${totalTaxSeparately}`
    //       );
    //       setSubmitting(false);
    //     }, 400);
    //   }}
    // >
    //   {({ isSubmitting, errors }) => (
    //     <Form>
    //       <div className="form-group">
    //         <FormLabel>Tax Year</FormLabel>
    //         <Field name="taxYear">
    //           <option value="">Select</option>
    //           <option value="2022">2022</option>
    //           <option value="2023">2023</option>
    //         </Field>
    //         {errors.taxYear && (
    //           <div className="text-danger">{errors.taxYear}</div>
    //         )}
    //       </div>
    //       <div className="form-group">
    //         <FormLabel>Your Income (USD)</FormLabel>
    //         <Field
    //           type="text"
    //           name="yourIncome"
    //           className={`form-control ${
    //             errors.yourIncome ? "is-invalid" : ""
    //           }`}
    //         />
    //         {errors.yourIncome && (
    //           <div className="text-danger">{errors.yourIncome}</div>
    //         )}
    //       </div>
    //       <div className="form-group">
    //         <FormLabel>Your Wife Income (USD)</FormLabel>
    //         <Field
    //           type="text"
    //           name="yourWifeIncome"
    //           className={`form-control ${
    //             errors.yourWifeIncome ? "is-invalid" : ""
    //           }`}
    //         />
    //         {errors.yourWifeIncome && (
    //           <div className="text-danger">{errors.yourWifeIncome}</div>
    //         )}
    //       </div>
    //       <button
    //         type="submit"
    //         className="btn btn-primary"
    //         disabled={isSubmitting}
    //       >
    //         Calculate Taxes
    //       </button>
    //     </Form>
    //   )}
    // </Formik>
  );
};

export default TaxReturns;

// export default TaxReturns;
