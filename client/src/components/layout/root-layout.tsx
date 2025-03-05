import { useState } from "react";
import { LanguageSwitcher } from "@/components/language-switcher";
import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";
import { LogOut, Menu, User, Settings, X } from "lucide-react";
import { useLocation } from "wouter";
import { useLanguage } from "@/contexts/language-context";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface RootLayoutProps {
  children: React.ReactNode;
}

export function RootLayout({ children }: RootLayoutProps) {
  const { user, logoutMutation } = useAuth();
  const [, setLocation] = useLocation();
  const { t } = useLanguage();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLogout = () => {
    logoutMutation.mutate(undefined);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-20 w-full">
        <div className="px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              {user && (
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                  className="block"
                >
                  {isSidebarOpen ? (
                    <X className="h-5 w-5" />
                  ) : (
                    <Menu className="h-5 w-5" />
                  )}
                </Button>
              )}
              <div className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 text-transparent bg-clip-text">
                Potenti'Elles
              </div>
            </div>

            <div className="flex items-center gap-2">
              <LanguageSwitcher />
              {user && (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <User className="h-5 w-5" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => setLocation("/profile")}>
                      <User className="mr-2 h-4 w-4" />
                      {t.common.profile}
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setLocation("/settings")}>
                      <Settings className="mr-2 h-4 w-4" />
                      {t.common.userMenu.settings}
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={handleLogout}>
                      <LogOut className="mr-2 h-4 w-4" />
                      {t.common.userMenu.logout}
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar */}
      {user && (
        <>
          {/* Overlay */}
          <div
            className={`fixed inset-0 bg-black/50 z-30 transition-opacity duration-200 ${
              isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            onClick={() => setIsSidebarOpen(false)}
          />

          {/* Sidebar */}
          <aside
            className={`fixed top-0 left-0 z-40 h-full w-64 bg-white shadow-lg transform transition-transform duration-200 ease-in-out mt-14 ${
              isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <nav className="p-4 space-y-2">
              <Button
                variant="ghost"
                className="w-full justify-start gap-3"
                onClick={() => {
                  setLocation("/dashboard");
                  setIsSidebarOpen(false);
                }}
              >
                {t.dashboard.overview}
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start gap-3"
                onClick={() => {
                  setLocation("/projects");
                  setIsSidebarOpen(false);
                }}
              >
                {t.dashboard.projects}
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start gap-3"
                onClick={() => {
                  setLocation("/projects/new");
                  setIsSidebarOpen(false);
                }}
              >
                {t.common.newProject}
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start gap-3"
                onClick={() => {
                  setLocation("/surveys");
                  setIsSidebarOpen(false);
                }}
              >
                {t.dashboard.surveys}
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start gap-3"
                onClick={() => {
                  setLocation("/resources");
                  setIsSidebarOpen(false);
                }}
              >
                {t.dashboard.resources}
              </Button>
            </nav>
          </aside>
        </>
      )}

      {/* Main Content */}
      <main className="pt-16 px-4">
        {children}
      </main>
    </div>
  );
}