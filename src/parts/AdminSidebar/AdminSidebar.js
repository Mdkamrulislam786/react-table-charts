import styles from "./AdminSidebar.module.css";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import PersonIcon from "@material-ui/icons/Person";
import RecentActorsIcon from "@material-ui/icons/RecentActors";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import WorkIcon from "@material-ui/icons/Work";
import PaymentIcon from "@material-ui/icons/Payment";
import WarningIcon from "@material-ui/icons/Warning";
import SettingsIcon from "@material-ui/icons/Settings";
import { Link } from "react-router-dom";
const adminNavs = [
  {
    logo: <DashboardIcon className="mr-5 " fontSize="small" />,
    text: "Home",
    link: "/react-table",
  },
  {
    logo: <RecentActorsIcon className="mr-5" fontSize="small" />,
    text: "User Control",
    link: "/charts",
  },
  {
    logo: <PersonIcon className="mr-5" fontSize="small" />,
    text: "Value Generator",
    link: "/charts",
  },
  {
    logo: <PersonOutlineIcon className="mr-5" fontSize="small" />,
    text: "Value Seeker",
    link: "/charts",
  },
  {
    logo: <WorkIcon className="mr-5" fontSize="small" />,
    text: "Job Aprovals",
    link: "/charts",
  },
  {
    logo: <PaymentIcon className="mr-5" fontSize="small" />,
    text: "Payment",
    link: "/charts",
  },
  {
    logo: <WarningIcon className="mr-5" fontSize="small" />,
    text: "Reports",
    link: "/charts",
  },
  {
    logo: <SettingsIcon className="mr-5" fontSize="small" />,
    text: "Settings",
    link: "/charts",
  },
];

const AdminSidebar = () => {
  return (
    <div className={styles.adminDashboard__sidebarLeft}>
      {/* navs */}
      <div className={styles.adminDashboard__navwrapper}>
        {adminNavs.map((nav, i) => (
          <Link
            to={nav.link}
            key={i}
            className={styles.adminDashboard__navitem}
          >
            {nav.logo} <span>{nav.text}</span>
          </Link>
        ))}
      </div>
      {/* bottom */}
      <div className={styles.adminDashboard__sidebarLeftBottom}>
        <div className={styles.adminDashboard__sidebarLeft_logout}>
          <ExitToAppIcon className="mr-5" fontSize="small" />
          <Link to="/admin/login">Logout</Link>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
