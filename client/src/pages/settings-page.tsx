import { useLanguage } from "@/contexts/language-context";
import { RootLayout } from "@/components/layout/root-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SettingsPage() {
  const { t } = useLanguage();

  return (
    <RootLayout>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card>
          <CardHeader>
            <CardTitle>{t.admin.settingsTitle}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">{t.admin.settingsDesc}</p>
          </CardContent>
        </Card>
      </div>
    </RootLayout>
  );
}
