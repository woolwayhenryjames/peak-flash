import { Goal, Users, Zap } from "lucide-react";
import { NavLink } from "react-router";
import { cn } from "~/lib/utils";

interface SidebarItem {
  label: string;
  href: string;
  icon: React.ReactNode;
}

const sidebarItems: SidebarItem[] = [
  {
    label: "Campaigns",
    href: "/admin/campaigns",
    icon: <Goal aria-hidden="true" className="h-5 w-5" />,
  },
  {
    label: "Users",
    href: "/admin/users",
    icon: <Users aria-hidden="true" className="h-5 w-5" />,
  },
  {
    label: "Flash",
    href: "/admin/flash",
    icon: <Zap aria-hidden="true" className="h-5 w-5" />,
  },
];

export function AdminSidebar() {
  return (
    <aside className="w-64 border-gray-700 border-r bg-black">
      <div className="p-6">
        <h2 className="mb-8 font-bold text-white text-xl">Admin Dashboard</h2>

        <nav className="space-y-2">
          {sidebarItems.map((item) => (
            <NavLink
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-3 rounded-lg px-4 py-3 font-medium transition-colors",
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-gray-300 hover:bg-gray-800 hover:text-white"
                )
              }
              key={item.href}
              to={item.href}
            >
              {item.icon}
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </aside>
  );
}
