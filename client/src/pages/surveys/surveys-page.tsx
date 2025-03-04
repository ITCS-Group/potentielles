import { useAuth } from "@/hooks/use-auth";
import { useLanguage } from "@/contexts/language-context";
import { RootLayout } from "@/components/layout/root-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SurveysPage() {
  const { t } = useLanguage();

  return (
    <RootLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold mb-8">{t.dashboard.surveys}</h1>
        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>{t.surveys.businessTitle}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                {t.surveys.businessDescription}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </RootLayout>
  );
}