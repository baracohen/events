import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CloudOutlined, SecurityOutlined, SettingsOutlined } from '@material-ui/icons';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    height: 500,
  },
  media: {
    height: 140,
  },
});

export function Services() {
  const classes = useStyles();

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://dummyimage.com/300x200/000/fff"
                title="Service 1"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Service 1
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Description of Service 1 goes here.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://dummyimage.com/300x200/000/fff"
                title="Service 2"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Service 2
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Description of Service 2 goes here.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://dummyimage.com/300x200/000/fff"
                title="Service 3"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Service 3
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Description of Service 3 goes here.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}


export default Services;

