import { useLanguage } from "@/contexts/language-context";
import { RootLayout } from "@/components/layout/root-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ChatPage() {
  const { t } = useLanguage();

  return (
    <RootLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 padding-8rems">
        <h1 className="text-3xl font-bold mb-8">{t.mentors.chat}</h1>
        <Card>
          <CardHeader>
            <CardTitle>{t.mentors.communication}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">{t.mentors.messagePreview}</p>
          </CardContent>
        </Card>
      </div>
    </RootLayout>
  );
}
