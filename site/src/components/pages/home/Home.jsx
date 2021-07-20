import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../header/Header';
import { Drawer, List, ListItem, ListItemText } from '@material-ui/core';
import SortTitle from './SortTitle';
const titles = ['Обзор', 'История', 'Добавить заказ', 'Ассортимент'];

function Home() {
  const [currentPage, setCurrentPage] = React.useState('Ассортимент');
  const useStyles = makeStyles((theme) => ({
    drawer: {
      width: '180px',
      flexShrink: 0,
    },
    list: {
      top: '90px',
    },
    flex: {
      margin: '102px 0 0 0',
      display: 'flex',
    },
  }));

  const classes = useStyles();
  return (
    <>
      <Header />
      <div className={classes.flex}>
        <Drawer variant="permanent" className={classes.drawer}>
          <List className={classes.list}>
            {titles.map((element, index) => {
              return (
                <ListItem button key={index}>
                  <ListItemText
                    primary={element}
                    onClick={(e) => setCurrentPage(e.target.innerHTML)}
                  />
                </ListItem>
              );
            })}
          </List>
        </Drawer>
        <SortTitle page={currentPage} />
      </div>
    </>
  );
}

export default Home;
