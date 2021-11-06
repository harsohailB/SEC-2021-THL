import {
  Box,
  Button,
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
import { LOGIN } from "../../contexts/types";
import { UserContext } from "../../contexts/UserContext";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
}));

const Login = () => {
  const classes = useStyles();

  const [user, dispatchToUser] = useContext(UserContext);
  const history = useHistory();

  const [formUser, setFormUser] = useState({
    username: "",
    password: ""
  });
  const [displayAlert, setDisplayAlert] = useState(false);

  const hasErrors = () => {
    return formUser.username.length === 0 || formUser.password.length === 0;
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
      // loginUser(formUser.username, formUser.password)
      //   .then((fetchedUser) => {
      //     dispatchToUser(fetchedUser);
      //     history.push("/");
      //   })
      //   .catch((err) => {
      //     setDisplayAlert(true);
      //   });
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
          Login
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
                error={formUser.username.length === 0}
                onChange={onFormChange}
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
                error={formUser.password.length === 0}
                onChange={onFormChange}
              />
            </Grid>
          </Grid>
          <Box m={1} pt={2}></Box>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Login
          </Button>
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
          Error: Unable to login with given credentials. Try again!
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Login;
