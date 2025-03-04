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
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const { user } = useAuth();
  const [, setLocation] = useLocation();
  const { t } = useLanguage();

  const roleBasedMenus = {
    [UserRole.Entrepreneur]: [
      {
        label: t.dashboard.projects,
        icon: <FileText className="h-5 w-5" />,
        path: "/projects",
      },
      {
        label: t.dashboard.surveys,
        icon: <ClipboardList className="h-5 w-5" />,
        path: "/surveys",
      },
    ],
    [UserRole.APIP]: [
      {
        label: t.dashboard.overview,
        icon: <BarChart3 className="h-5 w-5" />,
        path: "/dashboard",
      },
      {
        label: t.roles.entrepreneur,
        icon: <Users className="h-5 w-5" />,
        path: "/entrepreneurs",
      },
    ],
    [UserRole.SupportOrg]: [
      {
        label: t.dashboard.overview,
        icon: <BarChart3 className="h-5 w-5" />,
        path: "/dashboard",
      },
      {
        label: t.dashboard.surveys,
        icon: <ClipboardList className="h-5 w-5" />,
        path: "/surveys/create",
      },
    ],
    [UserRole.Donor]: [
      {
        label: t.dashboard.overview,
        icon: <BarChart3 className="h-5 w-5" />,
        path: "/dashboard",
      },
    ],
  };

  // Fermer la sidebar sur les petits écrans lors du changement de page
  const [location] = useLocation();
  useEffect(() => {
    if (window.innerWidth < 768) {
      onClose();
    }
  }, [location, onClose]);

  if (!user) return null;

  return (
    <>
      {/* Overlay sur mobile */}
      <div
        className={cn(
          "fixed inset-0 bg-black/50 z-40 lg:hidden",
          isOpen ? "block" : "hidden"
        )}
        onClick={onClose}
      />

      {/* Sidebar */}
      <div
        className={cn(
          "fixed top-0 left-0 z-50 h-full w-64 bg-white shadow-lg transform transition-transform duration-200 ease-in-out",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="p-4 flex justify-between items-center border-b">
          <h2 className="text-xl font-semibold">Menu</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        <nav className="p-4 space-y-2">
          {roleBasedMenus[user.role].map((item) => (
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
