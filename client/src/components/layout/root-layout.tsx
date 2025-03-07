import { useState } from "react";
import { LanguageSwitcher } from "@/components/language-switcher";
import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";
import {
  LogOut,
  Menu,
  User,
  Settings,
  X,
  Home,
  Info,
  HelpCircle,
  PhoneCall,
  Layout,
  FileText,
  FolderPlus,
  ClipboardList,
  BookOpen,
} from "lucide-react";
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
                  className="flex items-center justify-center w-10 h-10"
                >
                  {isSidebarOpen ? (
                    <X className="h-5 w-5" />
                  ) : (
                    <Menu className="h-5 w-5" />
                  )}
                </Button>
              )}
              <div className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 text-transparent bg-clip-text">
                <a href="/">
                  <img
                    src="/logos/poten.png"
                    alt="Potenti'Elles"
                    className="w-full h-full object-contain width-img"
                  />
                </a>
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
                        {t.common.home}
                      </Button>
                      <Button
                        variant="ghost"
                        onClick={() => setLocation("/about")}
                        className="px-3 transition-colors"
                      >
                        {t.common.about}
                      </Button>
                      <Button
                        variant="ghost"
                        onClick={() => setLocation("/faq")}
                        className="px-3 transition-colors"
                      >
                        {t.common.faq}
                      </Button>
                      <Button
                        variant="ghost"
                        onClick={() => setLocation("/contact")}
                        className="px-3 transition-colors"
                      >
                        {t.common.contact}
                      </Button>
                    </nav>
                  </div>
                </>
              )}

              <LanguageSwitcher />

              {!user ? (
                <>
                  <div className="hidden md:flex items-center gap-2">
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
                  {/* Mobile menu for non-authenticated users */}
                  <div className="md:hidden">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <Menu className="h-5 w-5" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
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
                        <DropdownMenuItem
                          onClick={() => setLocation("/contact")}
                        >
                          <PhoneCall className="mr-2 h-4 w-4" />
                          {t.common.contact}
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setLocation("/login")}>
                          <LogOut className="mr-2 h-4 w-4" rotate={180} />
                          {t.common.login}
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => setLocation("/register")}
                        >
                          <User className="mr-2 h-4 w-4" />
                          {t.common.register}
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </>
              ) : (
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

      {/* Sidebar for authenticated users */}
      {user && (
        <>
          {/* Overlay */}
          <div
            className={`fixed inset-0 bg-black/50 z-30 md:hidden transition-opacity duration-200 ${
              isSidebarOpen
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}
            onClick={() => setIsSidebarOpen(false)}
            aria-hidden="true"
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
                <Layout className="h-5 w-5" />
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
                <FileText className="h-5 w-5" />
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
                <FolderPlus className="h-5 w-5" />
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
                <ClipboardList className="h-5 w-5" />
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
                <BookOpen className="h-5 w-5" />
                {t.dashboard.resources}
              </Button>
            </nav>
          </aside>
        </>
      )}

      {/* Main Content */}
      <main>{children}</main>
    </div>
  );
}
