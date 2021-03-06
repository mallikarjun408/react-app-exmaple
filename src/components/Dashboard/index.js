import React, { useEffect, useState } from 'react'
import './dashboard.css'
import headernews from '../../assets/images/header_breakingnews.jpg'
import avtar from '../../assets/images/avtar.png'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Home, Person, Category, Subject, Language, ContentCut, Dashboard } from '@mui/icons-material'
import CategoryScreen from '../CategoryScreen';
import LanguagesScreen from '../LanguagesScreen';
import SubCategoriesScreen from '../SubCategoriesScreen';
import ReportersScreen from '../ReportersScreen';
import HomeScreen from '../HomeScreen';
import NewsContentsScreen from '../NewsContentsScreen';
import { useNavigate } from 'react-router-dom';
import AlertDialog from '../Utils/confirmAlert';


import history from '../../router/history';
//import { useHistory } from 'react-router-dom';


const menuItems = [
  { item: 'Dashboard', icon: Home },
  { item: 'Reporters', icon: Person },
  { item: 'Languages', icon: Language },
  { item: 'Category', icon: Dashboard },
  { item: 'SubCategory', icon: Category },
  { item: 'News Content', icon: ContentCut }]

export default function DashboardScreen() {

  const listItemSelected = {
    color: 'red',
  }

  const [screenName, setScreenName] = useState('Dashboard');
  const [showLogout, setLogout] = useState(false)
  let navigate = useNavigate();
  //const history = useHistory();

  useEffect(() => {
    const isAuth = sessionStorage.getItem("isAuthenticated")
    if(isAuth !== "true" || isAuth == undefined || isAuth == null){
      history.push('/');
      navigate('/')
    }
    window.history.pushState(null, document.title, window.location.href);
    window.addEventListener('popstate', function (event) {
      window.history.pushState(null, document.title, window.location.href);
    }, [screenName]);

    console.log('Dashboard loading......')
  })


  const onTapRenderScreen = () => {
    switch (screenName) {
      case 'Dashboard':
        return <HomeScreen />
      case 'Reporters':
        return <ReportersScreen />
      case 'Languages':
        return <LanguagesScreen />
      case 'Category':
        return <CategoryScreen />
      case 'SubCategory':
        return <SubCategoriesScreen />
      case 'News Content':
        return <NewsContentsScreen />
      default:
        return <HomeScreen />
    }

  }

  const renderListItems = () => {
    const listItems = menuItems.map((item) =>
      <div key={item.item}><ListItem key={item.item} className={screenName == item.item ? 'listItemSelectedColor' : 'listItemColor'} disablePadding key={item.item}>
        <ListItemButton onClick={() => { setScreenName(item.item); }}>
          <ListItemIcon>
            <item.icon />
          </ListItemIcon>
          <ListItemText primary={item.item} />
        </ListItemButton>
      </ListItem>
        <Divider />
      </div>
    );
    return (
      <List>
        {listItems}
      </List>
    )
  }

  const onBtnPress = (val) => {
    setLogout(false)
    if (val) {
      history.push('/')
      navigate('/')
      sessionStorage.clear();
    }

  }
  return (

    <div>
      <header className='header border-bottom-0'>
        <img className='floatLeft' src={headernews} alt="HeaderNews" />
        <div className='floatheaderRight'>
          <Person className='header_profileIcon' onClick={() => { setLogout(true) }} />
        </div>
      </header>
      <div style={{ display: 'flex', flexDirection: 'row', flex: 1 }}>
        <div style={{ display: 'flex', flexDirection: 'column', flex: 2, backgroundColor: '#FAF9F6', height: '100vh', borderColor: 'red', borderWidth: 1 }}>
          {renderListItems()}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', flex: 8, backgroundColor: 'white', height: '100vh' }}>
          {onTapRenderScreen()}
        </div>
      </div>
      <AlertDialog showAlert={showLogout} title={"Logout"} desc={"user will logout and redirects to Login Page"} btnHandle={onBtnPress} />
    </div>
  )
}