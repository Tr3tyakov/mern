import Divider from '@material-ui/core/Divider';
import { Drawer, List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import AssessmentIcon from '@material-ui/icons/Assessment';
import AddIcon from '@material-ui/icons/Add';
import ListIcon from '@material-ui/icons/List';
import { NavLink as Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
const titles = [
  { title: 'История', link: 'history', img: <AccessTimeIcon /> },
  { title: 'Добавить заказ', link: 'Add order', img: <AddIcon /> },
  { title: 'Ассортимент', link: 'assortment', img: <ListIcon /> },
];

function ModalDrawer({ setCloseDrawer, openDrawer, classes }) {
  return (
    <>
      <div className={classes.flex}>
        <Drawer variant="persistent" open={openDrawer} className={classes.drawer}>
          <div>
            <IconButton
              edge="start"
              color="inherit"
              className={classes.menuButton}
              onClick={setCloseDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <List className={classes.list}>
            {titles.map((element) => (
              <Link
                to={`/${element.link}`}
                className={classes.link}
                key={element.title}
                onClick={setCloseDrawer}>
                <ListItem button>
                  <ListItemIcon>{element.img}</ListItemIcon>
                  <ListItemText primary={element.title} />
                </ListItem>
              </Link>
            ))}
          </List>
        </Drawer>
      </div>
    </>
  );
}
export default ModalDrawer;
