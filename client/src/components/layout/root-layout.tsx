import { LanguageSwitcher } from "@/components/language-switcher";
import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";
import { LogOut, Home } from "lucide-react";
import { translations } from "@/i18n/translations";
import { useLocation } from "wouter";

interface RootLayoutProps {
  children: React.ReactNode;
}

export function RootLayout({ children }: RootLayoutProps) {
  const { user, logoutMutation } = useAuth();
  const [, setLocation] = useLocation();
  const t = translations[user?.language || "fr"];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setLocation("/")}
            >
              <Home className="h-5 w-5" />
            </Button>
            <h1 className="text-2xl font-bold text-gray-900">
              {t.common.welcome}
            </h1>
          </div>
          {user && (
            <div className="flex items-center gap-4">
              <LanguageSwitcher />
              <Button
                variant="ghost"
                onClick={() => logoutMutation.mutate()}
                disabled={logoutMutation.isPending}
              >
                <LogOut className="h-4 w-4 mr-2" />
                {t.common.logout}
              </Button>
            </div>
          )}
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
}