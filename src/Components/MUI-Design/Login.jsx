import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Container,
  Paper,
  Typography,
  Grid,
} from "@mui/material";

import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { makeStyles } from "@mui/styles";

function Login() {
  const countries = [
    { value: "US", label: "United States" },
    { value: "CA", label: "Canada" },
    { value: "IN", label: "India" },
    { value: "AU", label: "Australia" },
  ];

  // const useStyles = makeStyles((theme) => ({
  //   root: {
  //     display: "flex",
  //     flexDirection: "column",
  //     alignItems: "center",
  //     justifyContent: "center",
  //     height: "100vh",
  //   },
  //   form: {
  //     width: "100%",
  //     maxWidth: "400px",
  //     padding: theme.spacing(2),
  //     border: "1px solid #ccc",
  //     borderRadius: theme.spacing(1),
  //     backgroundColor: "#fff",
  //   },
  //   formTitle: {
  //     textAlign: "center",
  //     marginBottom: theme.spacing(2),
  //   },
  //   formGroup: {
  //     marginBottom: theme.spacing(2),
  //   },
  //   formControl: {
  //     width: "100%",
  //   },
  //   submitButton: {
  //     marginTop: theme.spacing(2),
  //   },
  // }));

  // const classes = useStyles();

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    date: Yup.date().required("Date is required"),
    time: Yup.date().required("Time is required"),
    agree: Yup.boolean().oneOf([true], "You must agree to the terms"),
    country: Yup.string().required("Country is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      date: null,
      time: null,
      agree: false,
      country: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      console.log(values);
      formik.resetForm();
    },
  });

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Container component="main" maxWidth="sm">
        <Paper elevation={3} style={{ padding: "2rem", marginTop: "2rem" }}>
          <Typography variant="h4" align="center" gutterBottom>
            Material UI Form
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            {/* className={classes.form}*/}
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="name"
                  name="name"
                  label="Name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="email"
                  name="email"
                  label="Email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="password"
                  name="password"
                  label="Password"
                  type="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  helperText={formik.touched.password && formik.errors.password}
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12}>
                <DatePicker
                  label="Date"
                  value={formik.values.date}
                  onChange={(value) => formik.setFieldValue("date", value)}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      fullWidth
                      margin="normal"
                      error={formik.touched.date && Boolean(formik.errors.date)}
                      helperText={formik.touched.date && formik.errors.date}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <TimePicker
                  label="Time"
                  value={formik.values.time}
                  onChange={(value) => formik.setFieldValue("time", value)}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      fullWidth
                      margin="normal"
                      error={formik.touched.time && Boolean(formik.errors.time)}
                      helperText={formik.touched.time && formik.errors.time}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth margin="normal">
                  <InputLabel id="country-label">Country</InputLabel>
                  <Select
                    id="country"
                    name="country"
                    value={formik.values.country}
                    label="Country"
                    onChange={formik.handleChange}
                    error={
                      formik.touched.country && Boolean(formik.errors.country)
                    }
                  >
                    {countries.map((country) => (
                      <MenuItem key={country.value} value={country.value}>
                        {country.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <DemoContainer components={["DateCalendar"]}>
                  <DateCalendar />
                </DemoContainer>
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      id="agree"
                      name="agree"
                      checked={formik.values.agree}
                      onChange={formik.handleChange}
                      color="primary"
                    />
                  }
                  label="I agree to the terms and conditions"
                />
                {formik.touched.agree && formik.errors.agree && (
                  <div style={{ color: "red" }}>{formik.errors.agree}</div>
                )}
              </Grid>
              <Grid item xs={12}>
                <Button
                  color="primary"
                  variant="contained"
                  fullWidth
                  type="submit"
                  style={{ marginTop: "20px" }}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
    </LocalizationProvider>
  );
}

export default Login;
