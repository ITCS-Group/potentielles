import { LanguageSwitcher } from "@/components/language-switcher";
import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";
import { LogOut, Home, Menu, User, Settings, Users, Info, HelpCircle, PhoneCall } from "lucide-react";
import { useLocation } from "wouter";
import { useLanguage } from "@/contexts/language-context";
import { Sidebar } from "./sidebar";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { UserRole } from "@shared/schema";

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
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
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

            <div className="flex items-center gap-2">
              {!user && (
                <>
                  {/* Desktop menu */}
                  <div className="hidden md:flex items-center">
                    <nav className="flex items-center space-x-1">
                      <Button 
                        variant="ghost" 
                        onClick={() => setLocation("/")}
                        className="px-3 transition-colors"
                      >
                        <Home className="mr-2 h-4 w-4" />
                        {t.common.home}
                      </Button>
                      <Button 
                        variant="ghost"
                        onClick={() => setLocation("/about")}
                        className="px-3 transition-colors"
                      >
                        <Info className="mr-2 h-4 w-4" />
                        {t.common.about}
                      </Button>
                      <Button 
                        variant="ghost"
                        onClick={() => setLocation("/faq")}
                        className="px-3 transition-colors"
                      >
                        <HelpCircle className="mr-2 h-4 w-4" />
                        {t.common.faq}
                      </Button>
                      <Button 
                        variant="ghost"
                        onClick={() => setLocation("/contact")}
                        className="px-3 transition-colors"
                      >
                        <PhoneCall className="mr-2 h-4 w-4" />
                        {t.common.contact}
                      </Button>
                      <div className="flex items-center ml-2 space-x-1">
                        <LanguageSwitcher />
                        <Button 
                          variant="ghost"
                          onClick={() => setLocation("/login")}
                          className="px-3 transition-colors"
                        >
                          {t.common.login}
                        </Button>
                        <Button 
                          variant="default"
                          onClick={() => setLocation("/register")}
                          className="px-3"
                        >
                          {t.common.register}
                        </Button>
                      </div>
                    </nav>
                  </div>
                </>
              )}

              {user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <User className="h-5 w-5" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => setLocation("/profile")}>
                      <User className="mr-2 h-4 w-4" />
                      {t.common.userMenu.profile}
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
              ) : (
                /* Mobile menu */
                <div className="md:hidden flex items-center gap-2">
                  <LanguageSwitcher />
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <Menu className="h-5 w-5" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-56">
                      <DropdownMenuItem onClick={() => setLocation("/")}>
                        <Home className="mr-2 h-4 w-4" />
                        {t.common.home}
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setLocation("/about")}>
                        <Info className="mr-2 h-4 w-4" />
                        {t.common.about}
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setLocation("/faq")}>
                        <HelpCircle className="mr-2 h-4 w-4" />
                        {t.common.faq}
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setLocation("/contact")}>
                        <PhoneCall className="mr-2 h-4 w-4" />
                        {t.common.contact}
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setLocation("/login")}>
                        <LogOut className="mr-2 h-4 w-4" rotate={180} />
                        {t.common.login}
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setLocation("/register")}>
                        <User className="mr-2 h-4 w-4" />
                        {t.common.register}
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              )}
            </div>
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