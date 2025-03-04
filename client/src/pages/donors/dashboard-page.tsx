import { useLanguage } from "@/contexts/language-context";
import { RootLayout } from "@/components/layout/root-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { Project } from "@shared/schema";
import { Loader2 } from "lucide-react";

export default function DonorDashboardPage() {
  const { t } = useLanguage();

  const { data: projects, isLoading } = useQuery<Project[]>({
    queryKey: ["/api/projects"],
  });

  if (isLoading) {
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold mb-8">{t.dashboard.overview}</h1>
        <Card>
          <CardHeader>
            <CardTitle>{t.donors.impactOverview}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{t.donors.totalFunded}: {projects?.length || 0}</p>
          </CardContent>
        </Card>
      </div>
    </RootLayout>
  );
}