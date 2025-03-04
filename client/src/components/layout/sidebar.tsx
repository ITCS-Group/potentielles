import { useState, useEffect } from "react";
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
  showWhenLoggedIn?: boolean;
};

type RoleBasedMenus = {
  [UserRole.Entrepreneur]: MenuItem[];
  [UserRole.APIP]: MenuItem[];
  [UserRole.SupportOrg]: MenuItem[];
  [UserRole.Donor]: MenuItem[];
};

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const { user } = useAuth();
  const [, setLocation] = useLocation();
  const { t } = useLanguage();

  const roleBasedMenus: RoleBasedMenus = {
    [UserRole.Entrepreneur]: [
      {
        label: t.dashboard.overview,
        icon: <Home className="h-5 w-5" />,
        path: "/dashboard",
        showWhenLoggedIn: true,
      },
      {
        label: t.dashboard.projects,
        icon: <FileText className="h-5 w-5" />,
        path: "/projects",
        showWhenLoggedIn: true,
      },
      {
        label: t.common.newProject,
        icon: <FileText className="h-5 w-5" />,
        path: "/projects/new",
        showWhenLoggedIn: true,
      },
      {
        label: t.dashboard.surveys,
        icon: <ClipboardList className="h-5 w-5" />,
        path: "/surveys",
        showWhenLoggedIn: true,
      },
      {
        label: t.dashboard.resources,
        icon: <BookOpen className="h-5 w-5" />,
        path: "/resources",
        showWhenLoggedIn: true,
      },
      {
        label: t.common.profile,
        icon: <User className="h-5 w-5" />,
        path: "/profile",
        showWhenLoggedIn: true,
      },
    ],
    [UserRole.APIP]: [
      {
        label: t.dashboard.overview,
        icon: <Home className="h-5 w-5" />,
        path: "/admin",
        showWhenLoggedIn: true,
      },
      {
        label: t.admin.users,
        icon: <Users className="h-5 w-5" />,
        path: "/admin/users",
        showWhenLoggedIn: true,
      },
      {
        label: t.admin.projects,
        icon: <FileText className="h-5 w-5" />,
        path: "/admin/projects",
        showWhenLoggedIn: true,
      },
      {
        label: t.admin.surveys,
        icon: <ClipboardList className="h-5 w-5" />,
        path: "/admin/surveys",
        showWhenLoggedIn: true,
      },
      {
        label: t.admin.analytics,
        icon: <BarChart3 className="h-5 w-5" />,
        path: "/admin/reports",
        showWhenLoggedIn: true,
      },
      {
        label: t.admin.settings,
        icon: <Settings className="h-5 w-5" />,
        path: "/admin/settings",
        showWhenLoggedIn: true,
      },
    ],
    [UserRole.SupportOrg]: [
      {
        label: t.dashboard.overview,
        icon: <Home className="h-5 w-5" />,
        path: "/mentors",
        showWhenLoggedIn: true,
      },
      {
        label: t.mentors.mentees,
        icon: <Users className="h-5 w-5" />,
        path: "/mentors/mentees",
        showWhenLoggedIn: true,
      },
      {
        label: t.mentors.chat,
        icon: <MessageSquare className="h-5 w-5" />,
        path: "/mentors/chat",
        showWhenLoggedIn: true,
      },
    ],
    [UserRole.Donor]: [
      {
        label: t.dashboard.overview,
        icon: <Home className="h-5 w-5" />,
        path: "/donors",
        showWhenLoggedIn: true,
      },
      {
        label: t.donors.reports,
        icon: <BarChart3 className="h-5 w-5" />,
        path: "/donors/reports",
        showWhenLoggedIn: true,
      },
      {
        label: t.donors.success,
        icon: <FileText className="h-5 w-5" />,
        path: "/donors/success",
        showWhenLoggedIn: true,
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

  return (
    <>
      <div
        className={cn(
          "fixed inset-0 bg-black/50 z-40 lg:hidden",
          isOpen ? "block" : "hidden"
        )}
        onClick={onClose}
      />

      <div
        className={cn(
          "fixed top-0 left-0 z-50 h-full w-64 bg-white shadow-lg transform transition-transform duration-200 ease-in-out",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="p-4 flex justify-between items-center border-b">
          <h2 className="text-xl font-semibold">{t.common.menu}</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        <nav className="p-4 space-y-2">
          {roleBasedMenus[user.role]
            .filter((item) => !item.showWhenLoggedIn || user)
            .map((item) => (
              <Button
                key={item.path}
                variant="ghost"
                className="w-full justify-start gap-3"
                onClick={() => setLocation(item.path)}
              >
                {item.icon}
                {item.label}
              </Button>
            ))}
        </nav>
      </div>
    </>
  );
}