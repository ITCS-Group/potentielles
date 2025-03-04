import { useEffect } from "react";
import { useLocation } from "wouter";
import { useAuth } from "@/hooks/use-auth";
import { UserRole } from "@shared/schema";
import { useLanguage } from "@/contexts/language-context";
import { cn } from "@/lib/utils";
import {
  BarChart3,
  FileText,
  ClipboardList,
  Users,
  Settings,
  MessageSquare,
  BookOpen,
  User,
  X,
  Home,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

type MenuItem = {
  label: string;
  icon: JSX.Element;
  path: string;
  hideWhenLoggedIn?: boolean;
};

type RoleBasedMenus = {
  [key in UserRole]: MenuItem[];
};

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const { user } = useAuth();
  const [, setLocation] = useLocation();
  const { t } = useLanguage();

  const baseMenuItems = [
    {
      label: t.common.welcome,
      icon: <Home className="h-5 w-5" />,
      path: "/",
      hideWhenLoggedIn: true,
    },
  ];

  const roleBasedMenus: RoleBasedMenus = {
    [UserRole.Entrepreneur]: [
      {
        label: t.dashboard.overview,
        icon: <Home className="h-5 w-5" />,
        path: "/dashboard",
      },
      {
        label: t.dashboard.projects,
        icon: <FileText className="h-5 w-5" />,
        path: "/projects",
      },
      {
        label: t.common.newProject,
        icon: <FileText className="h-5 w-5" />,
        path: "/projects/new",
      },
      {
        label: t.dashboard.surveys,
        icon: <ClipboardList className="h-5 w-5" />,
        path: "/surveys",
      },
      {
        label: t.dashboard.resources,
        icon: <BookOpen className="h-5 w-5" />,
        path: "/resources",
      },
      {
        label: t.common.profile,
        icon: <User className="h-5 w-5" />,
        path: "/profile",
      },
    ],
    [UserRole.APIP]: [
      {
        label: t.dashboard.overview,
        icon: <Home className="h-5 w-5" />,
        path: "/admin",
      },
      {
        label: t.admin.users,
        icon: <Users className="h-5 w-5" />,
        path: "/admin/users",
      },
      {
        label: t.admin.projects,
        icon: <FileText className="h-5 w-5" />,
        path: "/admin/projects",
      },
      {
        label: t.admin.surveys,
        icon: <ClipboardList className="h-5 w-5" />,
        path: "/admin/surveys",
      },
      {
        label: t.admin.analytics,
        icon: <BarChart3 className="h-5 w-5" />,
        path: "/admin/reports",
      },
      {
        label: t.admin.settings,
        icon: <Settings className="h-5 w-5" />,
        path: "/admin/settings",
      },
    ],
    [UserRole.SupportOrg]: [
      {
        label: t.dashboard.overview,
        icon: <Home className="h-5 w-5" />,
        path: "/mentors",
      },
      {
        label: t.mentors.mentees,
        icon: <Users className="h-5 w-5" />,
        path: "/mentors/mentees",
      },
      {
        label: t.mentors.chat,
        icon: <MessageSquare className="h-5 w-5" />,
        path: "/mentors/chat",
      },
    ],
    [UserRole.Donor]: [
      {
        label: t.dashboard.overview,
        icon: <Home className="h-5 w-5" />,
        path: "/donors",
      },
      {
        label: t.donors.reports,
        icon: <BarChart3 className="h-5 w-5" />,
        path: "/donors/reports",
      },
      {
        label: t.donors.success,
        icon: <FileText className="h-5 w-5" />,
        path: "/donors/success",
      },
    ],
  };

  const [location] = useLocation();
  useEffect(() => {
    if (window.innerWidth < 768) {
      onClose();
    }
  }, [location, onClose]);

  if (!user) return null;

  const menuItems = [...baseMenuItems, ...(roleBasedMenus[user.role as UserRole] || [])];

  const handleNavigation = (path: string) => {
    setLocation(path);
    onClose();
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-black/50 z-30 md:hidden transition-opacity duration-200",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-0 left-0 z-40 h-full w-64 bg-white shadow-lg transform transition-transform duration-200 ease-in-out md:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="p-4 flex justify-between items-center border-b">
          <h2 className="text-xl font-semibold">{t.common.menu}</h2>
          <Button variant="ghost" size="icon" onClick={onClose} className="md:hidden">
            <X className="h-5 w-5" />
          </Button>
        </div>

        <nav className="p-4 space-y-2">
          {menuItems
            .filter(item => !item.hideWhenLoggedIn || !user)
            .map((item, index) => (
              <Button
                key={index}
                variant="ghost"
                className="w-full justify-start gap-3"
                onClick={() => handleNavigation(item.path)}
              >
                {item.icon}
                {item.label}
              </Button>
            ))}
        </nav>
      </aside>
    </>
  );
}