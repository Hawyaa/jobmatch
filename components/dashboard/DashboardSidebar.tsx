import Link from "next/link";
import {
  LayoutDashboard,
  User,
  FileText,
  Search,
  Bookmark,
  History,
  Settings,
} from "lucide-react";


const menu = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Profile",
    href: "/profile",
    icon: User,
  },
  {
    name: "CV Upload",
    href: "/cv",
    icon: FileText,
  },
  {
    name: "Find Jobs",
    href: "/jobs",
    icon: Search,
  },
  {
    name: "Saved Jobs",
    href: "/saved-jobs",
    icon: Bookmark,
  },
  {
    name: "History",
    href: "/history",
    icon: History,
  },
  {
    name: "Settings",
    href: "/settings",
    icon: Settings,
  },
];


export default function DashboardSidebar() {

  return (

    <aside className="hidden min-h-screen w-72 border-r border-bronze/30 bg-burgundy p-6 lg:block">


      {/* Logo */}

      <h2 className="text-2xl font-bold text-cream">
        JobMatch
      </h2>


      <p className="mt-2 text-sm text-cream/60">
        AI Career Assistant
      </p>



      {/* Menu */}

      <nav className="mt-10 space-y-2">


        {menu.map((item)=>{

          const Icon = item.icon;


          return (

            <Link
              key={item.name}
              href={item.href}
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-cream/80 transition hover:bg-white/10 hover:text-bronze"
            >

              <Icon size={20}/>

              {item.name}

            </Link>

          );

        })}


      </nav>


    </aside>

  );
}