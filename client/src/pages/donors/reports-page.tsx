import { useLanguage } from "@/contexts/language-context";
import { RootLayout } from "@/components/layout/root-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ReportsPage() {
  const { t } = useLanguage();

  return (
    <RootLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold mb-8">{t.donors.reports}</h1>
        <Card>
          <CardHeader>
            <CardTitle>Project Impact Reports</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Les rapports d'impact détaillés seront disponibles ici.
            </p>
          </CardContent>
        </Card>
      </div>
    </RootLayout>
  );
}
