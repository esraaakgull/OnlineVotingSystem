import logo from '../assets/images/iyte.png';
import { useContext, useState } from 'react';
import { showSuccessNotification, showWarningNotification } from '../helpers/toasts';
import UserContext from '../contexts/UserContext';

const Login = () => {
  const userContext = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    if (!email || !password) {
      showWarningNotification("Please don't pass empty any required field");
      return;
    }
    const res = await userContext.login(email, password);
    if (!res) {
      showWarningNotification('Login Unsuccessful. Please check your password or email');
      return;
    }
    showSuccessNotification('Login is successful.');
  };

  return (
    <div className="bg-red-500">
      <div className="min-h-screen flex items-center justify-center">
        <div className="max-w-xl w-full mx-auto">
          <div className="bg-white shadow-md rounded px-8 py-6">
            <div className="flex justify-center items-center mb-4">
              <img src={logo} alt="logo" className="w-20 h-20" />
              <div>
                <h3 className="text-lg font-bold text-gray-700">Online Voting System</h3>
                <p className="text-gray-500">Please enter your credentials to login.</p>
              </div>
            </div>
            <h2 className="text-2xl text-center mb-4">Login</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                  E-mail
                </label>
                <input
                  className="border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                  id="email"
                  type="email"
                  placeholder="E-mail"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="Enter your password">
                  Password
                </label>
                <div className="relative">
                  <input
                    className="border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  type="button"
                  onClick={handleSubmit}>
                  Log In
                </button>
                <a
                  className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                  href="https://obs.iyte.edu.tr/">
                  Forgot Password?
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
