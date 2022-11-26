import "./App.css";
import ContactForm from "./Components/ContactForm";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import CrudApp from "./Components/CrudApp";
import Modals from "./Components/Modals";
import Error404 from "./Components/Error404";
import CrudAPI from "./Components/CrudAPI";
import HomePage from "./Components/HomePage";
import Gif from "./Images/opener-loading.gif";

function App() {
  return (
    <Router>
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-3 font-Roboto rounded-b-full dark:bg-gray-900 drop-shadow-lg">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <Link to="/" className="flex items-center">
            <img src={Gif} className="h-10 mr-3 sm:h-16" alt="My Experience" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              ReactExp
            </span>
          </Link>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 text-md md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li className=" ease-in duration-200 hover:bg-neutral-300 text-neutral-400 hover:text-slate-700 py-1 px-4 mx-1 rounded-xl active:bg-slate-800">
                <Link
                  to="/crudapp"
                  className="block py-2 pl-3 pr-4 md:p-0 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                  aria-current="page"
                >
                  Crud App
                </Link>
              </li>
              <li className=" ease-in duration-200 hover:bg-neutral-300 text-neutral-400 hover:text-slate-700 py-1 px-4 mx-1 rounded-xl active:bg-slate-800">
                <Link
                  to="/crudapi"
                  className="block py-2 pl-3 pr-4 md:p-0 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                  aria-current="page"
                >
                  Crud API
                </Link>
              </li>
              <li className=" ease-in duration-200 hover:bg-neutral-300 text-neutral-400 hover:text-slate-700 py-1 px-4 mx-1 rounded-xl active:bg-slate-800">
                <Link
                  to="/contactform"
                  className="block py-2 pl-3 pr-4 md:p-0 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                >
                  Contact Form
                </Link>
              </li>
              <li className=" ease-in duration-200 hover:bg-neutral-300 text-neutral-400 hover:text-slate-700 py-1 px-4 mx-1 rounded-xl active:bg-slate-800">
                <Link
                  to="/modals"
                  className="block py-2 pl-3 pr-4 md:p-0 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                >
                  Modals
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/crudapp" element={<CrudApp />} />
        <Route path="/crudapi" element={<CrudAPI />} />
        <Route path="/contactform" element={<ContactForm />} />
        <Route path="/modals" element={<Modals />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
}

export default App;
