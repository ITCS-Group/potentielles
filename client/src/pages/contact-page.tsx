import { RootLayout } from "@/components/layout/root-layout";
import { useLanguage } from "@/contexts/language-context";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Building2, Wallet } from "lucide-react";

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
                APIP (Agence pour la Promotion des Investissements Privés)
              </h2>
              <div className="space-y-4 ml-8">
                <div className="flex items-center gap-4">
                  <MapPin className="h-5 w-5 text-primary" />
                  <p className="text-lg">Immeuble Diamond, Cité Chemins de Fer, Kaloum, Conakry</p>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="h-5 w-5 text-primary" />
                  <p className="text-lg">+224 666 30 34 79</p>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="h-5 w-5 text-primary" />
                  <p className="text-lg">contact@apip.gov.gn</p>
                </div>
              </div>
            </div>

            {/* AFD Contact Information */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Wallet className="h-6 w-6 text-primary" />
                AFD (Agence Française de Développement)
              </h2>
              <div className="space-y-4 ml-8">
                <div className="flex items-center gap-4">
                  <MapPin className="h-5 w-5 text-primary" />
                  <p className="text-lg">Corniche Sud, Cameroun, BP 1516, Conakry</p>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="h-5 w-5 text-primary" />
                  <p className="text-lg">+224 664 35 02 02</p>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="h-5 w-5 text-primary" />
                  <p className="text-lg">afdconakry@afd.fr</p>
                </div>
              </div>
            </div>

            {/* Map will be embedded here */}
            <div className="w-full h-96 bg-gray-100 rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3924.7!2d-13.7!3d9.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOsKwMzAnMDAuMCJOIDEzwrA0MicwMC4wIlc!5e0!3m2!1sfr!2sgn!4v1234567890!5m2!1sfr!2sgn"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </RootLayout>
  );
}