import React from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

const ContactPage = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: (values) => {
      const mailtoLink = `mailto:?subject=Contact from ${values.name}&body=${values.message}%0D%0A%0D%0AFrom: ${values.email}`;
      window.location.href = mailtoLink;
    },
  });

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Card sx={{ p: 3, boxShadow: 3, borderRadius: 2 }}>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            Contact Us
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              fullWidth
              label="Name"
              margin="normal"
              {...formik.getFieldProps("name")}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
            <TextField
              fullWidth
              label="Email"
              margin="normal"
              {...formik.getFieldProps("email")}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              fullWidth
              label="Message"
              margin="normal"
              multiline
              rows={4}
              {...formik.getFieldProps("message")}
              error={formik.touched.message && Boolean(formik.errors.message)}
              helperText={formik.touched.message && formik.errors.message}
            />
            <Button
              variant="contained"
              color="primary"
              type="submit"
              sx={{ mt: 2, width: "100%" }}
            >
              Send Message
            </Button>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ContactPage;
