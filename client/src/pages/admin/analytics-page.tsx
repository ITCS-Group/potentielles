import { useLanguage } from "@/contexts/language-context";
import { RootLayout } from "@/components/layout/root-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AnalyticsPage() {
  const { t } = useLanguage();

  return (
    <RootLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold mb-8">{t.admin.analytics}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Statistiques Utilisateurs</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Analyse de l'engagement des utilisateurs et des tendances.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Performance des Projets</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Métriques de réussite et impact des projets.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </RootLayout>
  );
}
