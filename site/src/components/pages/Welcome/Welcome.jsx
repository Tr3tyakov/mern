import { Container } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import { useStyles } from './style';
import { Link } from 'react-router-dom';

function Welcome() {
  const classes = useStyles();

  return (
    <Container maxWidth="md">
      <Box
        marginTop="80px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column">
        <Typography variant="h1" color="primary">
          Skylar
        </Typography>
        <Box>
          <Typography align="left" variant="h6" color="primary">
            Покупай только у нас
          </Typography>
        </Box>
      </Box>
      <Box marginTop="20px" display="flex" justifyContent="center">
        <Link to="/Add order" className={classes.link}>
          <Button variant="contained" color="primary" endIcon={<ArrowRightAltIcon />}>
            Перейти к категориям
          </Button>
        </Link>
      </Box>
    </Container>
  );
}

export default Welcome;
