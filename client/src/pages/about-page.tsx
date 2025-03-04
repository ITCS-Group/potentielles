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
              <div className="text-lg text-gray-600 space-y-6">
                {/* Context and Project Description */}
                <p className="text-justify">{t.about.description}</p>

                {/* Key Partners Section */}
                <h2 className="text-2xl font-semibold mt-8 mb-4">{t.about.keyPartners}</h2>
                <p className="text-justify">{t.about.funding}</p>
                <p className="text-justify">{t.about.implementation}</p>

                {/* Digital Platform Section */}
                <h2 className="text-2xl font-semibold mt-8 mb-4">{t.about.digitalPlatform}</h2>
                <p className="text-justify">{t.about.platformDescription}</p>
                <p className="text-justify mb-2">{t.about.platformFeatures}</p>
                <ul className="list-none space-y-2 pl-4">
                  <li className="text-justify">{t.about.features.training}</li>
                  <li className="text-justify">{t.about.features.financing}</li>
                  <li className="text-justify">{t.about.features.networking}</li>
                  <li className="text-justify">{t.about.features.professionalization}</li>
                </ul>

                {/* Ecosystem Section */}
                <h2 className="text-2xl font-semibold mt-8 mb-4">{t.about.ecosystem}</h2>
                <p className="text-justify">{t.about.conclusion}</p>


                {/* Partners Logos */}
                <div className="mt-12">
                  <h2 className="text-2xl font-semibold mb-6">{t.about.partners}</h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
                    {/* Logo UE */}
                    <div className="flex flex-col items-center gap-2">
                      <img 
                        src="/logos/eu-logo.svg" 
                        alt="Union Européenne" 
                        className="h-20 w-auto"
                      />
                      <span className="text-sm text-gray-600">Union Européenne</span>
                    </div>

                    {/* Logo AFD */}
                    <div className="flex flex-col items-center gap-2">
                      <img 
                        src="/logos/afd-logo.svg" 
                        alt="Agence Française de Développement" 
                        className="h-20 w-auto"
                      />
                      <span className="text-sm text-gray-600">AFD</span>
                    </div>

                    {/* Logo APIP */}
                    <div className="flex flex-col items-center gap-2">
                      <img 
                        src="/logos/apip-logo.svg" 
                        alt="APIP Guinée" 
                        className="h-20 w-auto"
                      />
                      <span className="text-sm text-gray-600">APIP</span>
                    </div>

                    {/* Logo Ministère du Commerce */}
                    <div className="flex flex-col items-center gap-2">
                      <img 
                        src="/logos/commerce-guinea-logo.svg" 
                        alt="Ministère du Commerce de Guinée" 
                        className="h-20 w-auto"
                      />
                      <span className="text-sm text-gray-600">Ministère du Commerce</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </RootLayout>
  );
}