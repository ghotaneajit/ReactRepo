import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
export default function DashBorad()
{
    return (
        <div>
                 <ul>
                 <li><Link to = "Profile">Profile</Link></li> 
                 <li> <Link to = "Setting">Settings</Link> </li>   
                </ul>   
                
                             

                <h1>This is DashBorad</h1>

                <Outlet/>
        </div>
    )
}