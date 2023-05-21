import Sidebar from './layouts/Sidebar';
import { Route, Routes } from 'react-router-dom';
import { pages } from './constants/pages';

function App() {
  const user = true;
  if (user) {
    return (
      <div className="flex h-screen overflow-hidden">
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
