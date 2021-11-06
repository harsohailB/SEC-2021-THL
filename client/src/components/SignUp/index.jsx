import {
  Box,
  Button,
  CircularProgress,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
  Snackbar
} from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
}));

const defaultFormUser = {
  username: "",
  name: "",
  password: "",
  age: "",
  description: ""
};

const SignUp = () => {
  const classes = useStyles();

  const [user] = useContext(UserContext);
  const history = useHistory();

  // State Management
  const [formUser, setFormUser] = useState(defaultFormUser);
  const [loading, setLoading] = useState(false);
  const [displayAlert, setDisplayAlert] = useState(false);

  const hasErrors = () => {
    return (
      formUser.username.length === 0 ||
      formUser.name.length === 0 ||
      formUser.password.length === 0 ||
      formUser.age.length === 0 ||
      formUser.description.length === 0
    );
  };

  const onFormChange = (event) => {
    setFormUser({
      ...formUser,
      [event.target.name]: event.target.value
    });
  };

  const submitForm = (event) => {
    event.preventDefault();
    if (!hasErrors()) {
      setLoading(true);
    }
  };

  return user ? (
    <Container component="main" maxWidth="sm" marginTop="20%">
      <Box m={5} pt={2}></Box>
      <center>
        <Typography variant="h3" color="textPrimary">
          You are already logged in!
        </Typography>
      </center>
    </Container>
  ) : (
    <Container component="main" maxWidth="sm" marginTop="20%">
      <Box m={5} pt={2}></Box>
      <center>
        <Typography variant="h3" color="textPrimary">
          Sign Up
        </Typography>
      </center>
      <div className={classes.paper}>
        <form
          className={classes.form}
          noValidate
          paddingTop={10}
          onSubmit={submitForm}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                autoFocus
                value={formUser.username}
                onChange={onFormChange}
                error={formUser.username.length === 0}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={onFormChange}
                error={formUser.password.length === 0}
              />
            </Grid>
          </Grid>

          <Box m={1} pt={2}></Box>

          {loading ? (
            <center>
              <CircularProgress color="primary" />
            </center>
          ) : (
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
            </Button>
          )}
          <Box m={1} pt={1}></Box>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/login" variant="body1">
                Already signed up? Sign in here
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>

      {/* Error Alert */}
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={displayAlert}
        autoHideDuration={5000}
        onClose={() => setDisplayAlert(false)}
      >
        <Alert variant="filled" severity="error">
          Error: Failed to sign up. Please try again!
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default SignUp;
