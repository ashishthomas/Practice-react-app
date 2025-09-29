import { useState } from "react";
import { useFormik } from "formik";
import { Container, Row, Col } from "react-bootstrap"; // Import necessary Bootstrap components
import * as Yup from "yup";
import ButtonComponent from "./ButtonComponent";

function Register() {
  const [formValues, setFormValues] = useState([]); // State to store all form submissions.
  const [selectedIndex, setSelectedIndex] = useState(null); // State to track the index of the entry being edited.

  const initialValue = {
    name: "",
    email: "",
    password: "",
  };

  // defining form validation rules using Yup.
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email().required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
  });

  const handleFormSubmit = (values) => {
    console.log(selectedIndex);
    if (selectedIndex !== null) {
      formValues.splice(selectedIndex, 1, values); // update the existing entry
      // formValues[selectedIndex] = values;
      // setFormValues([...updateddata, values]);
      formikDetails.resetForm();
      setSelectedIndex(null);
    } else {
      setFormValues([...formValues, values]); // Add a new entry
    }
    formikDetails.resetForm(); // reset the form
  };

  const formikDetails = useFormik({
    // Initialize, validationschema and onSubmit using the Formik hook for form handling.
    initialValues: initialValue,
    validationSchema: validationSchema,
    onSubmit: handleFormSubmit,
  });

  const handleDelete = (ind) => {
    const DeleteData = formValues.filter((_, index) => ind !== index); //  Filter out the entry to be deleted.
    setFormValues(DeleteData);
    alert("Data deleted successfully");
  };

  const handleEdit = (ind) => {
    console.log(ind);
    setSelectedIndex(ind); // Set the selected index to the index of the entry being edited.
    const selectedData = formValues[ind]; // Get the selected entry data.
    formikDetails.setFieldValue("name", selectedData.name);
    formikDetails.setFieldValue("email", selectedData.email);
    formikDetails.setFieldValue("password", selectedData.password);
  };

  return (
    <Container className="mt-5 p-3 shadow-lg">
      <h1 className="text-center">CRUD Operation</h1>
      <h2 className="text-center">
        {selectedIndex != null ? "Update the DATA Field" : "Add the DATA Field"}{" "}
        {/* Display a message based on whether an entry is being edited or not. */}
      </h2>
      <form onSubmit={formikDetails.handleSubmit} autoComplete="on">
        <Row className="justify-content-center mt-4">
          <Col md={6} className="text-center">
            <label className="form-label">Name:</label>
            <input
              type="text"
              name="name"
              className="form-control"
              onChange={formikDetails.handleChange} // Add onChange event handler
              onBlur={formikDetails.handleBlur} // Add onBlur event handler
              value={formikDetails.values.name}
            />
            {formikDetails.errors.name && formikDetails.touched.name && (
              <div className="text-danger">{formikDetails.errors.name}</div>
            )}
          </Col>
        </Row>
        <Row className="justify-content-center mt-3">
          <Col md={6} className="text-center">
            <label className="form-label">Email:</label>
            <input
              type="text"
              name="email"
              className="form-control"
              onChange={formikDetails.handleChange}
              onBlur={formikDetails.handleBlur}
              value={formikDetails.values.email}
            />
            {formikDetails.errors.email && formikDetails.touched.email && (
              <div className="text-danger">{formikDetails.errors.email}</div>
            )}
          </Col>
        </Row>
        <Row className="justify-content-center mt-3">
          <Col md={6} className="text-center">
            <label className="form-label">Password:</label>
            <input
              type="text"
              name="password"
              className="form-control"
              onChange={formikDetails.handleChange}
              onBlur={formikDetails.handleBlur}
              value={formikDetails.values.password}
            />
            {formikDetails.errors.password &&
              formikDetails.touched.password && (
                <div className="text-danger">
                  {formikDetails.errors.password}
                </div>
              )}
          </Col>
        </Row>
        <Row className="justify-content-center mt-4">
          <Col md={6} className="text-center">
            {/* <Button type="submit" variant="primary" className="w-100">
              {selectedIndex !== null ? "Update" : "Submit"}
            </Button> */}
            <ButtonComponent
              btnName={selectedIndex !== null ? "Update" : "Submit"}
              variant="primary"
              onclick={formikDetails.handleSubmit}
            />
          </Col>
        </Row>
      </form>
      <div className="mt-4">
        {formValues.length > 0 &&
          formValues.map((ele, ind) => (
            <div
              key={ind}
              className="bg-success text-light p-2 m-2 text-center"
            >
              <h3>{ele.name}</h3>
              <h5>{ele.email}</h5>
              {/* <Button
                variant="danger"
                className="m-2"
                onClick={() => handleDelete(ind)}
              >
                Delete
              </Button> */}

              <ButtonComponent
                btnName="Delete"
                variant="danger"
                onclick={() => handleDelete(ind)}
              />
              {/* <Button variant="warning" onClick={() => handleEdit(ind)}>
                Update
              </Button> */}

              <ButtonComponent
                btnName="Update"
                variant="warning"
                onclick={() => handleEdit(ind)}
              />
            </div>
          ))}
      </div>
    </Container>
  );
}

export default Register;
