import { useAuth } from "@/hooks/use-auth";
import { useLanguage } from "@/contexts/language-context";
import { RootLayout } from "@/components/layout/root-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { User, Project } from "@shared/schema";
import { Loader2 } from "lucide-react";

export default function AdminDashboardPage() {
  const { t } = useLanguage();
  const { user } = useAuth();

  const { data: users, isLoading: usersLoading } = useQuery<User[]>({
    queryKey: ["/api/users"],
  });

  const { data: projects, isLoading: projectsLoading } = useQuery<Project[]>({
    queryKey: ["/api/projects"],
  });

  if (usersLoading || projectsLoading) {
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 padding-8rems">
        <h1 className="text-3xl font-bold mb-8">{t.dashboard.overview}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>{t.admin.users}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                {t.admin.userCount}: {users?.length || 0}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>{t.admin.projects}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                {t.admin.projectCount}: {projects?.length || 0}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </RootLayout>
  );
}
