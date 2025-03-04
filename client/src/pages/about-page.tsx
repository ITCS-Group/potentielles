import { RootLayout } from "@/components/layout/root-layout";
import { useLanguage } from "@/contexts/language-context";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <RootLayout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Card>
          <CardContent className="pt-6">
            <h1 className="text-4xl font-bold mb-8">{t.about.title}</h1>
            <div className="prose prose-lg">
              <p className="text-lg text-gray-600 mb-6">
                {t.about.description}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </RootLayout>
  );
}