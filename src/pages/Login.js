import logo from '../assets/images/iyte.png';

const Login = () => {
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
                <label className="block text-gray-700 font-bold mb-2" htmlFor="username">
                  Username
                </label>
                <input
                  className="border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                  id="username"
                  type="email"
                  placeholder="E-mail"
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
                    type="password"
                    placeholder="Password"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  type="button">
                  Log In
                </button>
                <a
                  className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                  href="/#">
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
