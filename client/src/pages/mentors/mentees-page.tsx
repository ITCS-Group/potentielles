import { useAuth } from "@/hooks/use-auth";
import { useLanguage } from "@/contexts/language-context";
import { RootLayout } from "@/components/layout/root-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { User } from "@shared/schema";
import { Loader2 } from "lucide-react";

export default function MenteesPage() {
  const { t } = useLanguage();

  const { data: mentees, isLoading } = useQuery<User[]>({
    queryKey: ["/api/mentees"],
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
        <h1 className="text-3xl font-bold mb-8">{t.mentors.mentees}</h1>
        <div className="grid gap-6">
          {mentees?.map((mentee) => (
            <Card key={mentee.id}>
              <CardHeader>
                <CardTitle>{mentee.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{mentee.email}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </RootLayout>
  );
}
