import { useAuth } from "@/hooks/use-auth";
import { UserRole } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LanguageSwitcher } from "@/components/language-switcher";
import { useLocation } from "wouter";
import { translations } from "@/i18n/translations";
import {
  BarChart3,
  ClipboardList,
  FileText,
  LogOut,
  Users,
} from "lucide-react";

export default function HomePage() {
  const { user, logoutMutation } = useAuth();
  const [, setLocation] = useLocation();
  const t = translations[user?.language || "fr"];

  const roleBasedCards = {
    [UserRole.Entrepreneur]: [
      {
        title: t.dashboard.projects,
        description: "View and manage your business projects",
        icon: <FileText className="h-6 w-6" />,
        image: "https://images.unsplash.com/photo-1573798484153-da43eda898f6",
        path: "/dashboard",
      },
      {
        title: t.dashboard.surveys,
        description: "Complete surveys and assessments",
        icon: <ClipboardList className="h-6 w-6" />,
        image: "https://images.unsplash.com/photo-1705242431246-e99952d509a5",
        path: "/surveys",
      },
    ],
    [UserRole.APIP]: [
      {
        title: t.dashboard.overview,
        description: "Monitor entrepreneur progress",
        icon: <BarChart3 className="h-6 w-6" />,
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
        path: "/dashboard",
      },
      {
        title: "Entrepreneurs",
        description: "View registered entrepreneurs",
        icon: <Users className="h-6 w-6" />,
        image: "https://images.unsplash.com/photo-1487546331507-fcf8a5d27ab3",
        path: "/entrepreneurs",
      },
    ],
    [UserRole.SupportOrg]: [
      {
        title: "Support Dashboard",
        description: "View assigned entrepreneurs",
        icon: <Users className="h-6 w-6" />,
        image: "https://images.unsplash.com/photo-1474888505161-1ace11ae3d81",
        path: "/dashboard",
      },
      {
        title: t.surveys.create,
        description: "Create assessment surveys",
        icon: <ClipboardList className="h-6 w-6" />,
        image: "https://images.unsplash.com/photo-1659018966825-43297e655ccf",
        path: "/surveys/create",
      },
    ],
    [UserRole.Donor]: [
      {
        title: "Impact Overview",
        description: "View program impact metrics",
        icon: <BarChart3 className="h-6 w-6" />,
        image: "https://images.unsplash.com/photo-1634807010323-4309f645e5a4",
        path: "/dashboard",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">
            {t.common.welcome}
          </h1>
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
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {user &&
            roleBasedCards[user.role].map((card, index) => (
              <Card
                key={index}
                className="cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => setLocation(card.path)}
              >
                <CardHeader className="flex flex-row items-center gap-4">
                  {card.icon}
                  <CardTitle>{card.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div
                    className="w-full h-32 bg-cover bg-center rounded-md mb-4"
                    style={{ backgroundImage: `url(${card.image})` }}
                  />
                  <p className="text-sm text-gray-600">{card.description}</p>
                </CardContent>
              </Card>
            ))}
        </div>
      </main>
    </div>
  );
}
