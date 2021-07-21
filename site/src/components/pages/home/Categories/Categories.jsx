import React from 'react';
import { IconButton, CardHeader, Card, CardMedia } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { makeStyles } from '@material-ui/core/styles';

function Categories() {
  const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 265,
      margin: '6px',
    },
    media: {
      height: '200px',
      width: '200px',
      objectFit: 'contain',
    },
    cardWrap: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '10px',
    },
    avatar: {
      backgroundColor: 'red',
    },
    products: {
      display: 'flex',
      flexWrap: 'wrap',
    },
  }));

  const classes = useStyles();
  return (
    <div className={classes.products}>
      <Card className={classes.root}>
        <CardHeader
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <div className={classes.cardWrap}>
          <CardMedia
            className={classes.media}
            image="https://pmdn.sokolov.io/pics/10/DF/481AE34C6D7DFE877F10081C0C48.jpg"
          />
        </div>
      </Card>
    </div>
  );
}

export default Categories;
