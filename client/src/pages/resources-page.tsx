import { useLanguage } from "@/contexts/language-context";
import { RootLayout } from "@/components/layout/root-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, FileText, Video } from "lucide-react";

export default function ResourcesPage() {
  const { t } = useLanguage();

  const resources = [
    {
      title: t.resources.entrepreneurshipGuide.title,
      description: t.resources.entrepreneurshipGuide.description,
      icon: <BookOpen className="h-6 w-6" />,
    },
    {
      title: t.resources.documentTemplates.title,
      description: t.resources.documentTemplates.description,
      icon: <FileText className="h-6 w-6" />,
    },
    {
      title: t.resources.videoTraining.title,
      description: t.resources.videoTraining.description,
      icon: <Video className="h-6 w-6" />,
    },
  ];

  return (
    <RootLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold mb-8">{t.resources.title}</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource, index) => (
            <Card key={index} className="cursor-pointer hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4">
                  {resource.icon}
                  <CardTitle>{resource.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{resource.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </RootLayout>
  );
}