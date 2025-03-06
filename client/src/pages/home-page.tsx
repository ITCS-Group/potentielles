import { useAuth } from "@/hooks/use-auth";
import { UserRole } from "@shared/schema";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLocation } from "wouter";
import { useLanguage } from "@/contexts/language-context";
import { RootLayout } from "@/components/layout/root-layout";
import { BarChart3, ClipboardList, FileText, Users } from "lucide-react";

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
        image: "https://images.unsplash.com/photo-1593062096033-9a26b09da705",
        path: "/dashboard",
      },
      {
        title: t.dashboard.surveys,
        description: t.features.supportDesc,
        icon: <ClipboardList className="h-6 w-6" />,
        image: "https://images.unsplash.com/photo-1578091436046-7e8f3da2d2e9",
        path: "/surveys",
      },
    ],
    [UserRole.APIP]: [
      {
        title: t.dashboard.overview,
        description: t.features.progress,
        icon: <BarChart3 className="h-6 w-6" />,
        image: "https://images.unsplash.com/photo-1532126321328-4530e72d5440",
        path: "/admin",
      },
      {
        title: t.roles.entrepreneur,
        description: t.features.support,
        icon: <Users className="h-6 w-6" />,
        image: "https://images.unsplash.com/photo-1607619662634-3ac55ec0e216",
        path: "/admin/users",
      },
    ],
    [UserRole.SupportOrg]: [
      {
        title: t.dashboard.overview,
        description: t.features.support,
        icon: <Users className="h-6 w-6" />,
        image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca",
        path: "/mentors",
      },
      {
        title: t.dashboard.surveys,
        description: t.features.progressDesc,
        icon: <ClipboardList className="h-6 w-6" />,
        image: "https://images.unsplash.com/photo-1574010498536-019bdb95e84c",
        path: "/mentors/mentees",
      },
    ],
    [UserRole.Donor]: [
      {
        title: t.dashboard.overview,
        description: t.features.progress,
        icon: <BarChart3 className="h-6 w-6" />,
        image: "https://images.unsplash.com/photo-1544654803-b69140b285a1",
        path: "/donors",
      },
    ],
  };

  return (
    <RootLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 padding-8rems">
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
