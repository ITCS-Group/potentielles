import { useAuth } from "@/hooks/use-auth";
import { useQuery } from "@tanstack/react-query";
import { Project, Activity, UserRole } from "@shared/schema";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLanguage } from "@/contexts/language-context";
import { RootLayout } from "@/components/layout/root-layout";
import { Loader2 } from "lucide-react";

export default function DashboardPage() {
  const { user } = useAuth();
  const { t } = useLanguage();

  const { data: projects, isLoading: projectsLoading } = useQuery<Project[]>({
    queryKey: ["/api/projects", user?.id],
  });

  const { data: activities, isLoading: activitiesLoading } = useQuery<
    Activity[]
  >({
    queryKey: ["/api/activities"],
  });

  if (projectsLoading || activitiesLoading) {
    return (
      <RootLayout>
        <div className="flex items-center justify-center min-h-screen">
          <Loader2 className="h-8 w-8 animate-spin" />
        </div>
      </RootLayout>
    );
  }

  return (
    <RootLayout>
      <div className="min-h-screen bg-gray-50 p-8 padding-8rems">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">{t.dashboard.overview}</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>{t.dashboard.projects}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Projets en cours: {projects?.length || 0}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>{t.dashboard.activities}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Activités récentes: {activities?.length || 0}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </RootLayout>
  );
}
