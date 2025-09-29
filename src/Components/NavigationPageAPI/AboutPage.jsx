import {
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const AboutPage = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Card sx={{ p: 3, boxShadow: 3, borderRadius: 2 }}>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            About This Project
          </Typography>
          <Typography variant="body1" paragraph>
            This project is a learning initiative focused on mastering React and
            its ecosystem. It aims to provide hands-on experience with modern
            front-end development techniques.
          </Typography>
          <Typography variant="h6" gutterBottom>
            Key Learning Areas:
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="React Components & Hooks" />
            </ListItem>
            <ListItem>
              <ListItemText primary="State Management (Context API, Redux)" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Material-UI for Styling" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Routing with React Router" />
            </ListItem>
            <ListItem>
              <ListItemText primary="API Integration and Fetching Data" />
            </ListItem>
          </List>
          <Button variant="contained" color="primary" sx={{ mt: 2 }}>
            Learn More
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
};

export default AboutPage;
