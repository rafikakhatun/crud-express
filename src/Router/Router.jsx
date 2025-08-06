import {
  createBrowserRouter
} from "react-router-dom";
import Registration from "../components/Registration";
import Dashboard from "../components/Dashboard";

const Router = createBrowserRouter([

    {
        path :"/",
        element : <Registration></Registration>

    },

    {
        path : "/dashboard",
        element:<Dashboard></Dashboard>
    },

    {
        path:"/backRegistrationForm",
        element:<Registration></Registration>

    }
])


export default Router;