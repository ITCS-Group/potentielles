import { useAuth } from "@/hooks/use-auth";
import { UserRole } from "@shared/schema";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLocation } from "wouter";
import { useLanguage } from "@/contexts/language-context";
import { RootLayout } from "@/components/layout/root-layout";
import {
  BarChart3,
  ClipboardList,
  FileText,
  Users,
} from "lucide-react";

type CardInfo = {
  title: string;
  description: string;
  icon: JSX.Element;
  image: string;
  path: string;
};

type RoleBasedCards = {
  [UserRole.Entrepreneur]: CardInfo[];
  [UserRole.APIP]: CardInfo[];
  [UserRole.SupportOrg]: CardInfo[];
  [UserRole.Donor]: CardInfo[];
};

export default function HomePage() {
  const { user } = useAuth();
  const [, setLocation] = useLocation();
  const { t } = useLanguage();

  const roleBasedCards: RoleBasedCards = {
    [UserRole.Entrepreneur]: [
      {
        title: t.dashboard.projects,
        description: t.features.projectManagementDesc,
        icon: <FileText className="h-6 w-6" />,
        image: "https://images.unsplash.com/photo-1573798484153-da43eda898f6",
        path: "/dashboard",
      },
      {
        title: t.dashboard.surveys,
        description: t.features.supportDesc,
        icon: <ClipboardList className="h-6 w-6" />,
        image: "https://images.unsplash.com/photo-1705242431246-e99952d509a5",
        path: "/surveys",
      },
    ],
    [UserRole.APIP]: [
      {
        title: t.dashboard.overview,
        description: t.features.progress,
        icon: <BarChart3 className="h-6 w-6" />,
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
        path: "/admin",
      },
      {
        title: t.roles.entrepreneur,
        description: t.features.support,
        icon: <Users className="h-6 w-6" />,
        image: "https://images.unsplash.com/photo-1487546331507-fcf8a5d27ab3",
        path: "/admin/users",
      },
    ],
    [UserRole.SupportOrg]: [
      {
        title: t.dashboard.overview,
        description: t.features.support,
        icon: <Users className="h-6 w-6" />,
        image: "https://images.unsplash.com/photo-1474888505161-1ace11ae3d81",
        path: "/mentors",
      },
      {
        title: t.dashboard.surveys,
        description: t.features.progressDesc,
        icon: <ClipboardList className="h-6 w-6" />,
        image: "https://images.unsplash.com/photo-1659018966825-43297e655ccf",
        path: "/mentors/mentees",
      },
    ],
    [UserRole.Donor]: [
      {
        title: t.dashboard.overview,
        description: t.features.progress,
        icon: <BarChart3 className="h-6 w-6" />,
        image: "https://images.unsplash.com/photo-1634807010323-4309f645e5a4",
        path: "/donors",
      },
    ],
  };

  return (
    <RootLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {user &&
            roleBasedCards[user.role].map((card, idx) => (
              <Card
                key={idx}
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
      </div>
    </RootLayout>
  );
}