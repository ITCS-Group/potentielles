import { RootLayout } from "@/components/layout/root-layout";
import { useLanguage } from "@/contexts/language-context";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Building2, Wallet, Globe, Clock } from "lucide-react";

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <RootLayout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Card>
          <CardContent className="pt-6">
            <h1 className="text-4xl font-bold mb-8">{t.contact.title}</h1>
            <p className="text-lg text-gray-600 mb-8">
              {t.contact.description}
            </p>

            {/* APIP Contact Information */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Building2 className="h-6 w-6 text-primary" />
                {t.contact.apip.title}
              </h2>
              <div className="space-y-4 ml-8">
                <div className="flex items-center gap-4">
                  <MapPin className="h-5 w-5 text-primary" />
                  <p className="text-lg">{t.contact.apip.address}</p>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="h-5 w-5 text-primary" />
                  <p className="text-lg">{t.contact.apip.phone}</p>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="h-5 w-5 text-primary" />
                  <p className="text-lg">{t.contact.apip.email}</p>
                </div>
                <div className="flex items-center gap-4">
                  <Globe className="h-5 w-5 text-primary" />
                  <p className="text-lg">
                    <a 
                      href={t.contact.apip.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      {t.contact.apip.website}
                    </a>
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <Clock className="h-5 w-5 text-primary" />
                  <p className="text-lg">{t.contact.apip.officeHours}</p>
                </div>
              </div>
            </div>

            {/* EU Delegation Contact Information */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Building2 className="h-6 w-6 text-primary" />
                {t.contact.euDelegation.title}
              </h2>
              <div className="space-y-4 ml-8">
                <div className="flex items-center gap-4">
                  <MapPin className="h-5 w-5 text-primary" />
                  <p className="text-lg">{t.contact.euDelegation.address}</p>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="h-5 w-5 text-primary" />
                  <p className="text-lg">{t.contact.euDelegation.phone}</p>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="h-5 w-5 text-primary" />
                  <p className="text-lg">{t.contact.euDelegation.email}</p>
                </div>
                <div className="flex items-center gap-4">
                  <Globe className="h-5 w-5 text-primary" />
                  <p className="text-lg">
                    <a 
                      href={t.contact.euDelegation.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      {t.contact.euDelegation.website}
                    </a>
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <Clock className="h-5 w-5 text-primary" />
                  <p className="text-lg">{t.contact.euDelegation.officeHours}</p>
                </div>
              </div>
            </div>

            {/* AFD Contact Information */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Wallet className="h-6 w-6 text-primary" />
                {t.contact.afd.title}
              </h2>
              <div className="space-y-4 ml-8">
                <div className="flex items-center gap-4">
                  <MapPin className="h-5 w-5 text-primary" />
                  <p className="text-lg">{t.contact.afd.address}</p>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="h-5 w-5 text-primary" />
                  <p className="text-lg">{t.contact.afd.phone}</p>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="h-5 w-5 text-primary" />
                  <p className="text-lg">{t.contact.afd.email}</p>
                </div>
                <div className="flex items-center gap-4">
                  <Globe className="h-5 w-5 text-primary" />
                  <p className="text-lg">
                    <a 
                      href={t.contact.afd.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      {t.contact.afd.website}
                    </a>
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <Clock className="h-5 w-5 text-primary" />
                  <p className="text-lg">{t.contact.afd.officeHours}</p>
                </div>
              </div>
            </div>

            {/* Map will be embedded here */}
            <div className="w-full h-96 bg-gray-100 rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3924.4454636144386!2d-13.720748825439271!3d9.516387181496134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xf1cd8592fc93bb3%3A0x9a4e64ca285b7dd1!2sAPIp%20Guinea!5e0!3m2!1sfr!2sgn!4v1709580634174!5m2!1sfr!2sgn"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation de l'APIP"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </RootLayout>
  );
}