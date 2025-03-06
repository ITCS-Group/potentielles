import { useAuth } from "@/hooks/use-auth";
import { useLanguage } from "@/contexts/language-context";
import { RootLayout } from "@/components/layout/root-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export default function ProfilePage() {
  const { user } = useAuth();
  const { t } = useLanguage();

  const form = useForm({
    defaultValues: {
      name: user?.name || "",
      email: user?.email || "",
    },
  });

  return (
    <RootLayout>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 padding-8rems">
        <Card>
          <CardHeader>
            <CardTitle>{t.common.profile}</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t.common.fullName}</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t.common.email}</FormLabel>
                      <FormControl>
                        <Input {...field} type="email" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full">
                  {t.common.save}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </RootLayout>
  );
}
