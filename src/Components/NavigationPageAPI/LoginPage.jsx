import { useState } from "react";
import { useFormik } from "formik";
import {
  Button,
  TextField,
  Container,
  Typography,
  Box,
  Paper,
  Grid,
} from "@mui/material";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [formData, setFormData] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    gmail: Yup.string()
      .email("Invalid email format")
      .required("Gmail is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
  });

  const saveData = async (payload) => {
    try {
      const response = await fetch(
        "https://node-crud-r1pa.onrender.com/login",
        {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );
      const result = await response.json();
      if (response.ok) {
        alert(result.message);
        navigate("/home");
      } else {
        alert("Failed to login. Please try again.");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  const handleFormSubmit = (values) => {
    if (selectedIndex !== null) {
      const updatedData = [...formData];
      updatedData[selectedIndex] = values;
      setFormData(updatedData);
      setSelectedIndex(null);
    } else {
      saveData(values);
      setFormData([...formData, values]);
    }
    formik.resetForm();
  };

  const formik = useFormik({
    initialValues: { gmail: "", password: "" },
    validationSchema,
    onSubmit: handleFormSubmit,
  });

  return (
    <Container maxWidth="sm">
      <Paper
        elevation={6}
        sx={{ padding: 4, marginTop: 5, textAlign: "center", borderRadius: 3 }}
      >
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          {selectedIndex !== null ? "Edit Login Data" : "Login Form"}
        </Typography>
        <Box component="form" onSubmit={formik.handleSubmit} noValidate>
          <TextField
            fullWidth
            margin="normal"
            label="Gmail"
            name="gmail"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.gmail}
            error={formik.touched.gmail && Boolean(formik.errors.gmail)}
            helperText={formik.touched.gmail && formik.errors.gmail}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 2, width: "100%" }}
          >
            {selectedIndex !== null ? "Update" : "Submit"}
          </Button>
        </Box>
      </Paper>

      <Grid container spacing={2} sx={{ mt: 3 }}>
        {formData.map((ele, index) => (
          <Grid item xs={12} key={index}>
            <Paper
              elevation={3}
              sx={{ padding: 2, borderRadius: 2, backgroundColor: "#e3f2fd" }}
            >
              <Typography variant="subtitle1" fontWeight="bold">
                {ele.gmail}
              </Typography>
              <Typography variant="body2">{ele.password}</Typography>
              <Box
                sx={{ mt: 1, display: "flex", justifyContent: "space-between" }}
              >
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() =>
                    setFormData(formData.filter((_, ind) => ind !== index))
                  }
                >
                  Delete
                </Button>
                <Button
                  variant="outlined"
                  color="warning"
                  onClick={() => {
                    setSelectedIndex(index);
                    formik.setValues(ele);
                  }}
                >
                  Edit
                </Button>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default LoginPage;
