import { useAuth } from "@/hooks/use-auth";
import { useLanguage } from "@/contexts/language-context";
import { RootLayout } from "@/components/layout/root-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { User } from "@shared/schema";
import { Loader2 } from "lucide-react";

export default function UserManagementPage() {
  const { t } = useLanguage();

  const { data: users, isLoading } = useQuery<User[]>({
    queryKey: ["/api/users"],
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
        <h1 className="text-3xl font-bold mb-8">{t.admin.users}</h1>
        <div className="grid gap-6">
          {users?.map((user) => (
            <Card key={user.id}>
              <CardHeader>
                <CardTitle>{user.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{t.common.role}: {t.roles[user.role]}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </RootLayout>
  );
}