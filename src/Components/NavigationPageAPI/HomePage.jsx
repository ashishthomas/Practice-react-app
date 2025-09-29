import { useState, useEffect } from "react";
import {
  Container,
  Table,
  Button,
  Modal,
  TextField,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
} from "@mui/material";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

function HomePage() {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState([]);
  const [data1, setData1] = useState({}); // state to store logged in details
  const [selectedIndex, setSelectedIndex] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers();
    fetchLoginData();
  }, []);

  useEffect(() => {
    // useEffect to update the formik values when data1 changes
    if (data1 && Object.keys(data1).length > 0) {
      formik.setValues({
        firstName: data1.firstName || "", // setting the default values of formik
        lastName: data1.lastName || "",
        age: data1.age || "",
        gmail: data1.gmail || "",
      });
    }
  }, [data1, formik]);

  const fetchUsers = async () => {
    try {
      const response = await fetch(
        "https://node-crud-r1pa.onrender.com/user/getAllUsers",
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        }
      );
      const result = await response.json();
      console.log("Response:", result);
      setData(result.data || []);
      if (response.ok) {
        alert(result.message);
      } else {
        alert("Failed to submit the form. Please try again.");
      }
    } catch (error) {
      alert("An error occurred. Please try again later.");
      console.error("Error fetching data:", error);
    }
  };

  const fetchLoginData = async () => {
    //----------------------------> function to fetch logged in user details
    try {
      const response = await fetch(
        "https://node-crud-r1pa.onrender.com/user/getUserData",
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        }
      );
      const result = await response.json();
      console.log("Response:", result);
      setData1(result.data || {}); // -------------------------> updating the state with logged in user details
    } catch (error) {
      alert("An error occurred. Please try again later.");
      console.error("Error fetching data:", error);
    }
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    age: Yup.number()
      .required("Age is required")
      .positive("Age must be positive")
      .integer("Age must be an integer"),
    gmail: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      age: "",
      gmail: "",
    },
    validationSchema,
    onSubmit: (values) => {
      if (selectedIndex !== null) {
        const updatedUsers = [...data];
        updatedUsers[selectedIndex] = values;
        setData(updatedUsers);
        setSelectedIndex(null);
      } else {
        setData([...data, values]);
      }
      setShowModal(false);
    },
  });

  const handleEdit = (index) => {
    setSelectedIndex(index);
    formik.setValues(data[index]);
    setShowModal(true);
  };

  const handleDelete = (index) => {
    setData(data.filter((_, ind) => ind !== index));
  };

  const handleLogout = () => {
    navigate("/Login");
  };

  return (
    <Container className="mt-5 p-4 shadow-lg rounded bg-light">
      <div className="d-flex justify-content-end mb-3">
        <FaUserCircle
          size={40}
          onClick={() => {
            if (data1) {
              formik.setValues({
                firstName: data1.firstName || "",
                lastName: data1.lastName || "",
                age: data1.age || "",
                gmail: data1.gmail || "",
              });
            }
            setShowModal(true);
          }}
          style={{ cursor: "pointer" }}
        />
      </div>
      <h2 className="text-center mb-4">User List</h2>
      <Table>
        <TableHead className="bg-primary">
          <TableRow style={{ color: "white" }}>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((user, index) => (
            <TableRow key={user._id || user.id || index}>
              <TableCell>{user.firstName}</TableCell>
              <TableCell>{user.lastName}</TableCell>
              <TableCell>{user.age}</TableCell>
              <TableCell>{user.gmail}</TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  color="warning"
                  className="me-2"
                  onClick={() => handleEdit(index)}
                >
                  Update
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* User Details Modal */}
      <Modal open={showModal} onClose={() => setShowModal(false)}>
        <div
          style={{
            padding: 20,
            backgroundColor: "white",
            margin: "auto",
            width: "50%",
            marginTop: "10%",
          }}
        >
          <h2>User Details</h2>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              fullWidth
              label="First Name"
              margin="dense"
              {...formik.getFieldProps("firstName")}
              error={
                formik.touched.firstName && Boolean(formik.errors.firstName)
              }
              helperText={formik.touched.firstName && formik.errors.firstName}
            />
            <TextField
              fullWidth
              label="Last Name"
              margin="dense"
              {...formik.getFieldProps("lastName")}
              error={formik.touched.lastName && Boolean(formik.errors.lastName)}
              helperText={formik.touched.lastName && formik.errors.lastName}
            />
            <TextField
              fullWidth
              type="number"
              label="Age"
              margin="dense"
              {...formik.getFieldProps("age")}
              error={formik.touched.age && Boolean(formik.errors.age)}
              helperText={formik.touched.age && formik.errors.age}
            />
            <TextField
              fullWidth
              label="Email"
              margin="dense"
              {...formik.getFieldProps("gmail")}
              error={formik.touched.gmail && Boolean(formik.errors.gmail)}
              helperText={formik.touched.gmail && formik.errors.gmail}
            />
            <Button
              variant="contained"
              color="primary"
              type="submit"
              style={{ marginTop: 10 }}
            >
              Save
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => setShowModal(false)}
              style={{ marginTop: 10, marginLeft: 10 }}
            >
              Close
            </Button>
            <Button
              variant="contained"
              color="error"
              style={{ marginTop: 10, marginLeft: 10 }}
              onClick={handleLogout}
            >
              Logout
            </Button>
          </form>
        </div>
      </Modal>
    </Container>
  );
}

export default HomePage;
