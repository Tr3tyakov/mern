import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import AssessmentIcon from '@material-ui/icons/Assessment';
import AddIcon from '@material-ui/icons/Add';
import ListIcon from '@material-ui/icons/List';
import { NavLink as Link } from 'react-router-dom';

const titles = [
  { title: 'Обзор', link: 'categories', img: <AssessmentIcon /> },
  { title: 'История', link: 'history', img: <AccessTimeIcon /> },
  { title: 'Добавить заказ', link: 'Add order', img: <AddIcon /> },
  { title: 'Ассортимент', link: 'assortment', img: <ListIcon /> },
];

const useStyles = makeStyles({
  drawer: {
    width: '280px',
    flexShrink: 0,
  },
  list: {
    top: '90px',
  },
  flex: {
    margin: '102px 0 0 0',
    display: 'flex',
  },
  link: {
    textDecoration: 'none',
    color: 'black',
  },
});

function Home() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.flex}>
        <Drawer variant="permanent" className={classes.drawer}>
          <List className={classes.list}>
            {titles.map((element, index) => {
              return (
                <Link to={`/${element.link}`} className={classes.link}>
                  <ListItem button key={index}>
                    <ListItemIcon>{element.img}</ListItemIcon>

                    <ListItemText primary={element.title} />
                  </ListItem>
                </Link>
              );
            })}
          </List>
        </Drawer>
      </div>
    </>
  );
}

export default Home;
