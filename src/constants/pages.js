import Home from '../pages/home/Home';
import Login from '../pages/Login';

export const pages = {
  userPages: {
    home: {
      title: 'Anasayfa',
      path: '/',
      element: <Home />,
      icon: 'fa-home'
    },
    login: {
      title: 'Giriş Yap',
      path: '/login',
      element: <Login />,
      icon: 'fa-user'
    }
  },
  adminPages: {},
  otherPages: {}
};
