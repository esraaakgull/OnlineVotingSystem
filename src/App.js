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
    return (
      <div className="flex overflow-hidden">
        <ToastContainer />
        <Sidebar />
        <Routes>
          {Object.keys(pages.userPages).map((page, index) => (
            <Route
              exact
              path={pages.userPages[page].path}
              element={pages.userPages[page].element}
              key={`otherPages${index}`}
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
          <Route
            exact
            path={pages.otherPages.login.path}
            element={pages.otherPages.login.element}
          />
        </Routes>
      </div>
    );
  }
}

export default App;
