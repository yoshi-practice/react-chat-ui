import React from 'react';
import './Tweet.scss';
import {
  makeStyles
} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function Tweet(props) {
    const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://image.shutterstock.com/image-vector/sample-stamp-square-grunge-sign-260nw-1474408826.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.content}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    // <div className="tweet">
    //   <div className="icon-container">{props.icon}</div>
    //   <div className="body-container">
    //     <div className="status-display">
    //       <span className="display-name">{props.displayName}</span>
    //       <span className="account-name">@{props.accountName}</span>
    //     </div>
    //     <div className="content">{props.content}</div>
    //   </div>
    // </div>
  );
}

export default Tweet;