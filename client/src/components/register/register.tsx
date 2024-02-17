import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Container,
  Typography,
  CircularProgress,
} from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Lottie from "lottie-react";
import animationData from "./loginAnimation.json";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { RegisterUser } from "../../apis/register";
import { useForm } from "react-hook-form";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "10px",
      padding: theme.spacing(8),
      boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;",
    },
    form: {
      width: "100%",
      maxWidth: "420px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",

    },
    textField: {
      marginBottom: theme.spacing(2),
    },
    button: {
      marginTop: theme.spacing(2),
    },
  })
);

interface RegisterFormData {
  fullName: string;
  email: string;
  password: string;
}

const Register = () => {
  const classes = useStyles();
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const { register, handleSubmit, formState: { isSubmitting: formIsSubmitting } } = useForm<RegisterFormData>();

  const navigate = useNavigate();

  const onSubmit = async (data: RegisterFormData) => {
    try {
      // disable all fields and show loading indicator

      setIsSubmitting(true);
      
      const isRegistered = await RegisterUser(data.fullName, data.email, data.password);
  
      if (isRegistered) {
        navigate('/Dashboard');
      } else {
        // handle unsuccessful login here
      }
    } catch (error) {
      console.error(error);
      // handle any errors here
    } finally {
      // enable all fields and hide loading indicator
      setIsSubmitting(false);
    }
  };

  return (
<Grid
  container
  sx={{
    justifyContent: 'center',
    alignItems: 'center',
    padding: '16px'
  }}
>
  <Grid item xs={12} md={8} lg={6} sx={{ maxWidth: '70vw' }}>
    <Container className={classes.container}>
      <Box className={classes.form}>
        <Lottie style={{ width: '100%', height: 'auto' }} animationData={animationData} loop={true} />

        <Typography variant="h5">Sign up</Typography>
        <TextField
          className={classes.textField}
          fullWidth
          label="Full name"
          {...register('fullName', { required: true })}
          disabled={isSubmitting}
        />
        <TextField
          className={classes.textField}
          fullWidth
          label="Email"
          {...register('email', { required: true })}
          disabled={isSubmitting}
        />
        <TextField
          className={classes.textField}
          fullWidth
          label="Password"
          type="password"
          {...register('password', { required: true })}
          disabled={isSubmitting}
        />

        {isSubmitting ? (
          <CircularProgress />
        ) : (
          <Button
          className={classes.button}
          variant="contained"
          color="primary"
          onClick={handleSubmit(onSubmit)}
          disabled={isSubmitting}
        >
        Register
        </Button>
        )}
      </Box>
    </Container>
  </Grid>
</Grid>

              );
              };

export default Register;
