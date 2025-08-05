import {
  createBrowserRouter
} from "react-router-dom";
import Registration from "../components/Registration";

const Router = createBrowserRouter([

    {
        path :"/",
        element : <Registration></Registration>

    }
])


export default Router;