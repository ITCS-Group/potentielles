import { RootLayout } from "@/components/layout/root-layout";
import { useLanguage } from "@/contexts/language-context";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Card>
        <CardContent className="pt-6">
          <h1 className="text-4xl font-bold mb-8">{t.contact.title}</h1>
          <p className="text-lg text-gray-600 mb-8">
            {t.contact.description}
          </p>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Mail className="h-6 w-6 text-primary" />
              <p className="text-lg">{t.contact.email}</p>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="h-6 w-6 text-primary" />
              <p className="text-lg">{t.contact.phone}</p>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="h-6 w-6 text-primary" />
              <p className="text-lg">{t.contact.address}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}