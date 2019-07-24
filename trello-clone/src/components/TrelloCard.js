import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';



const useStyles = makeStyles({
    card: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

  const styles = {
      cardContainer : {
          marginBottom : 8
      }
  };

const TrelloCard = ({text}) => {
  const classes = useStyles();
    return (
        <Card className={classes.card} style = {styles.cardContainer}>
        <CardContent>
          <Typography gutterBottom>{text}</Typography>
        </CardContent> 
        </Card>
      );
}

export default TrelloCard;