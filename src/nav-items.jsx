import { Home, User, Briefcase } from "lucide-react";
import Index from "./pages/Index.jsx";
import About from "./pages/About.jsx";
import Work from "./pages/Work.jsx";

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "About",
    to: "/about",
    icon: <User className="h-4 w-4" />,
    page: <About />,
  },
  {
    title: "Work",
    to: "/work",
    icon: <Briefcase className="h-4 w-4" />,
    page: <Work />,
  },
];