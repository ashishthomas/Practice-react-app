import { useState } from "react";
import { useFormik } from "formik";
import {
  Button,
  Container,
  TextField,
  Typography,
  Grid,
  Paper,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

function RegistrationPage() {
  const [formData, setFormData] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    age: Yup.number().required("Age is required").positive().integer(),
    gmail: Yup.string().email("Invalid email").required("Gmail is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
  });

  const saveData = async (payload) => {
    console.log("Sending Payload:", payload);

    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        "https://node-crud-r1pa.onrender.com/user/createUser",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(payload),
        }
      );
      const result = await response.json();
      console.log("Response:", result);
      if (response.ok) {
        alert(result.message);
        navigate("/login");
      } else {
        alert("Failed to submit the form. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      age: "",
      gmail: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      if (selectedIndex !== null) {
        const updatedData = [...formData];
        updatedData[selectedIndex] = values;
        setFormData(updatedData);
        setSelectedIndex(null);
      } else {
        saveData(values);
        setFormData([...formData, values]);
      }
      resetForm();
    },
  });

  const handleEditData = (index) => {
    setSelectedIndex(index);
    formik.setValues(formData[index]);
  };

  const handleDeleteData = (index) => {
    setFormData(formData.filter((_, i) => i !== index));
  };

  const getInputType = (field) => {
    if (field === "password") return "password";
    if (field === "age") return "number";
    return "text";
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ p: 4, mt: 5 }}>
        <Typography variant="h5" align="center" gutterBottom>
          {selectedIndex !== null ? "Edit Your Details" : "Registeration Form"}
        </Typography>
        <form onSubmit={formik.handleSubmit} autoComplete="on">
          <Grid container spacing={2}>
            {["firstName", "lastName", "age", "gmail", "password"].map(
              (name) => (
                <Grid item xs={12} key={name}>
                  <TextField
                    fullWidth
                    label={name.charAt(0).toUpperCase() + name.slice(1)}
                    type={getInputType(name)}
                    name={name}
                    value={formik.values[name]}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched[name] && Boolean(formik.errors[name])}
                    helperText={formik.touched[name] && formik.errors[name]}
                  />
                </Grid>
              )
            )}
            <Grid item xs={12}>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                type="submit"
              >
                {selectedIndex !== null ? "Update Details" : "Register"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>

      {formData.length > 0 && (
        <Paper elevation={3} sx={{ p: 4, mt: 3 }}>
          <Typography variant="h6" align="center">
            Registered Users
          </Typography>
          {formData.map((user, index) => (
            <Paper key={user._id} sx={{ p: 2, mt: 2 }}>
              <Typography>
                <strong>Name:</strong> {user.firstName} {user.lastName}
              </Typography>
              <Typography>
                <strong>Age:</strong> {user.age}
              </Typography>
              <Typography>
                <strong>Email:</strong> {user.gmail}
              </Typography>
              <Grid container spacing={2} mt={1}>
                <Grid item xs={6}>
                  <Button
                    fullWidth
                    variant="contained"
                    color="warning"
                    onClick={() => handleEditData(index)}
                  >
                    Edit
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button
                    fullWidth
                    variant="contained"
                    color="error"
                    onClick={() => handleDeleteData(index)}
                  >
                    Delete
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          ))}
        </Paper>
      )}
    </Container>
  );
}

export default RegistrationPage;
