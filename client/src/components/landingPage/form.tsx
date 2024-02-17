import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, Card, Typography } from '@material-ui/core';
import { MailOutline as MailOutlineIcon } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(3),
    backgroundColor: theme.palette.primary.light,
  },
  card: {
    width: '50%',
    padding: theme.spacing(3),
    backgroundColor: 'white',
    boxShadow: theme.shadows[5],
  },
  textField: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  button: {
    width: '100%',
    marginTop: theme.spacing(2),
  },
}));

const ContactForm = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <Typography variant="h5" component="h3">
          Contact Us
        </Typography>
        <TextField
          className={classes.textField}
          label="Name"
          variant="outlined"
        />
        <TextField
          className={classes.textField}
          label="Email"
          variant="outlined"
        />
        <TextField
          className={classes.textField}
          label="Message"
          variant="outlined"
          multiline
          rows={4}
        />
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          startIcon={<MailOutlineIcon />}
        >
          Submit
        </Button>
      </Card>
    </div>
  );
};

export default ContactForm;
