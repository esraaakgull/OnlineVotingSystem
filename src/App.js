import Sidebar from './layouts/Sidebar';
import { Route, Routes } from 'react-router-dom';
import { pages } from './constants/pages';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { useContext } from 'react';
import UserContext from './contexts/UserContext';

function App() {
  const userContext = useContext(UserContext);
  const user = userContext.user;
  if (user) {
    // user pages
    const pagesToDisplay = { ...pages.userPages, ...pages.commonPages };
    //const pagesToDisplay = { ...pages.adminPages, ...pages.commonPages };

    return (
      <div className="flex overflow-hidden">
        <ToastContainer />
         <Sidebar /> 
        <Routes>
          {Object.keys(pagesToDisplay).map((page, index) => (
            <Route
              exact
              path={pagesToDisplay[page].path}
              element={pagesToDisplay[page].element}
              key={`userPages${index}`}
            />
          ))}
        </Routes>
      </div>
    );
  } else {
    return (
      <div>
        <ToastContainer />
        <Routes>
          <Route exact path={pages.login.path} element={pages.login.element} />
        </Routes>
      </div>
    );
  }
}

export default App;
