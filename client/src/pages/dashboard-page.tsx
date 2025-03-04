import { useAuth } from "@/hooks/use-auth";
import { useQuery } from "@tanstack/react-query";
import { Project, Activity, UserRole } from "@shared/schema";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLanguage } from "@/contexts/language-context";
import { SurveyBuilder } from "@/components/survey-builder";
import { ActivityTimeline } from "@/components/activity-timeline";
import {
  BarChart,
  LineChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Loader2 } from "lucide-react";

export default function DashboardPage() {
  const { user } = useAuth();
  const { t } = useLanguage();

  const { data: projects, isLoading: projectsLoading } = useQuery<Project[]>({
    queryKey: ["/api/projects", user?.id],
  });

  const { data: activities, isLoading: activitiesLoading } = useQuery<Activity[]>({
    queryKey: ["/api/activities"],
  });

  if (projectsLoading || activitiesLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  const metrics = {
    projectProgress: [
      { month: "Jan", completed: 4, ongoing: 6 },
      { month: "Feb", completed: 6, ongoing: 8 },
      { month: "Mar", completed: 8, ongoing: 5 },
      { month: "Apr", completed: 10, ongoing: 4 },
    ],
    activityTrend: [
      { date: "Week 1", count: 10 },
      { date: "Week 2", count: 15 },
      { date: "Week 3", count: 12 },
      { date: "Week 4", count: 20 },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">{t.dashboard.overview}</h1>

        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList>
            <TabsTrigger value="overview">{t.dashboard.overview}</TabsTrigger>
            <TabsTrigger value="metrics">{t.dashboard.metrics}</TabsTrigger>
            {user?.role === UserRole.SupportOrg && (
              <TabsTrigger value="surveys">{t.dashboard.surveys}</TabsTrigger>
            )}
          </TabsList>

          <TabsContent value="overview">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>{t.dashboard.projects}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={metrics.projectProgress}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="completed" fill="#4ade80" name="Completed" />
                      <Bar dataKey="ongoing" fill="#60a5fa" name="Ongoing" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>{t.dashboard.activities}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={metrics.activityTrend}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                      <Line
                        type="monotone"
                        dataKey="count"
                        stroke="#8b5cf6"
                        name="Activities"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle>{t.dashboard.activities}</CardTitle>
              </CardHeader>
              <CardContent>
                <ActivityTimeline activities={activities || []} />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="metrics">
            {/* Additional metrics and charts can be added here */}
          </TabsContent>

          {user?.role === UserRole.SupportOrg && (
            <TabsContent value="surveys">
              <SurveyBuilder />
            </TabsContent>
          )}
        </Tabs>
      </div>
    </div>
  );
}