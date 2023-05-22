import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import Voting from '../pages/Voting';
import Applications from '../pages/Applications';

export const pages = {
  userPages: {
    dashboard: {
      title: 'Dashboard',
      path: '/',
      element: <Dashboard />,
      icon: 'fa-home'
    },
    profile: {
      title: 'Profile',
      path: '/',
      //  element: <Profile />,
      icon: 'fa-user'
    },
    voting: {
      title: 'Voting',
      path: '/voting',
      element: <Voting />,
      icon: 'fa-person-booth'
    },
    applications: {
      title: 'Applications',
      path: '/applications',
      element: <Applications />,
      icon: 'fa-paperclip'
    },
    logout: {
      title: 'Logout',
      path: '',
      icon: 'fa-arrow-right-from-bracket'
    }
  },
  adminPages: {},
  otherPages: {
    login: {
      title: 'Login',
      path: '/',
      element: <Login />,
      icon: 'fa-home'
    }
  }
};
