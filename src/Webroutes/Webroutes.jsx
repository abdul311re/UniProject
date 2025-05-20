// src/Routes/Webroute.jsx
import  { Suspense, lazy } from 'react';
import { Routes, Route , Navigate  } from 'react-router-dom';
const Dashboard = lazy(() => import('../Pages/Dashboared.jsx'));
const Employees = lazy(() => import('../Pages/Employees.jsx'));
const Sales = lazy(() => import('../Pages/Sales.jsx'));
const Form = lazy(() => import('../Pages/Form.jsx'));
const Projects = lazy(() => import('../Pages/Projects.jsx'));
const Calender = lazy(() => import('../Pages/Calender.jsx'));
const Account = lazy(() => import('../Components/Projects/Tabs.jsx'));

const WebRoutes = () => {

  return (
    <Suspense
      fallback={
        <div className="d-flex justify-content-center">
          <div className="loadingio-spinner-ripple-9yaj8a57f0u">
            <div className="ldio-24eutxqm1o1">
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      }
    >
      <Routes>

        <Route exact path="/" element={<Dashboard/>} />
        <Route exact path="/Employees" element={<Employees/>} />
        <Route exact path="/Sales" element={<Sales/>} />
        <Route exact path="/Form" element={<Form/>} />
        <Route exact path="/Calender" element={<Calender/>} />
        <Route exact path="/Projects" element={<Projects/>} />
        <Route exact path="/Account" element={<Account/>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
);
};

export default WebRoutes;
