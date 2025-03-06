import { useAuth } from "@/hooks/use-auth";
import { useLanguage } from "@/contexts/language-context";
import { RootLayout } from "@/components/layout/root-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { SurveyBuilder } from "@/components/survey-builder";

export default function SurveysPage() {
  const { t } = useLanguage();

  return (
    <RootLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 padding-8rems">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">{t.surveys.title}</h1>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            {t.surveys.newSurvey}
          </Button>
        </div>

        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>{t.surveys.businessTitle}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                {t.surveys.businessDescription}
              </p>
              <Button variant="outline">{t.surveys.submit}</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </RootLayout>
  );
}
