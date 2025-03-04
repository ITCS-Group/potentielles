import { LanguageSwitcher } from "@/components/language-switcher";
import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";
import { LogOut, Home, Menu } from "lucide-react";
import { useLocation } from "wouter";
import { useLanguage } from "@/contexts/language-context";
import { Sidebar } from "./sidebar";
import { useState } from "react";

interface RootLayoutProps {
  children: React.ReactNode;
}

export function RootLayout({ children }: RootLayoutProps) {
  const { user, logoutMutation } = useAuth();
  const [, setLocation] = useLocation();
  const { t } = useLanguage();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLogout = () => {
    logoutMutation.mutate(undefined, {
      onSuccess: () => {
        setLocation("/");
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            {user && (
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setIsSidebarOpen(true)}
              >
                <Menu className="h-5 w-5" />
              </Button>
            )}
            <div className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 text-transparent bg-clip-text">
              Potenti'Elles
            </div>
          </div>

          <div className="flex items-center gap-4">
            {!user && (
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setLocation("/")}
              >
                <Home className="h-5 w-5" />
              </Button>
            )}
            <LanguageSwitcher />
            {user ? (
              <Button
                variant="ghost"
                onClick={handleLogout}
                disabled={logoutMutation.isPending}
              >
                <LogOut className="h-4 w-4 mr-2" />
                {t.common.logout}
              </Button>
            ) : (
              <>
                <Button 
                  variant="ghost"
                  onClick={() => setLocation("/login")}
                >
                  {t.common.login}
                </Button>
                <Button 
                  variant="default"
                  onClick={() => setLocation("/register")}
                >
                  {t.common.register}
                </Button>
              </>
            )}
          </div>
        </div>
      </header>

      {user && (
        <Sidebar 
          isOpen={isSidebarOpen} 
          onClose={() => setIsSidebarOpen(false)} 
        />
      )}

      <main>{children}</main>
    </div>
  );
}