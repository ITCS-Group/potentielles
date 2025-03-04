import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { RootLayout } from "@/components/layout/root-layout";
import { useLanguage } from "@/contexts/language-context";
import { MapPin } from "lucide-react";

export default function LandingPage() {
  const [, setLocation] = useLocation();
  const { t } = useLanguage();

  return (
    <RootLayout>
      <div className="relative w-full min-h-[600px]">
        {/* Image de fond */}
        <div className="absolute inset-0">
          <img 
            src="/images/entrepreneur.jpg"
            alt="Femme entrepreneure en Guinée"
            className="w-full h-full object-cover"
          />
          {/* Overlay sombre pour la lisibilité */}
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Contenu */}
        <div className="relative z-10 h-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-2xl">
              <h1 className="text-5xl font-bold text-white mb-6">
                {t.common.welcome}
              </h1>
              <p className="text-xl text-white mb-8 leading-relaxed">
                {t.landing.heroText}
              </p>
              <Button 
                size="lg" 
                variant="secondary"
                className="text-lg px-8 py-6 bg-white text-primary hover:bg-white/90"
                onClick={() => setLocation("/register")}
              >
                {t.landing.joinButton}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <main className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t.landing.impact}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              <span className="flex items-center justify-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                APIP - Agence de Promotion des Investissements Privés
              </span>
              {t.landing.impactDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <h3 className="text-lg font-semibold mb-4">{t.features.projectManagement}</h3>
              <p className="text-gray-600">
                {t.features.projectManagementDesc}
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <h3 className="text-lg font-semibold mb-4">{t.features.support}</h3>
              <p className="text-gray-600">
                {t.features.supportDesc}
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <h3 className="text-lg font-semibold mb-4">{t.features.progress}</h3>
              <p className="text-gray-600">
                {t.features.progressDesc}
              </p>
            </div>
          </div>

          <div className="mt-16 bg-gray-50 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-gray-600">{t.landing.stats.entrepreneurs}</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-gray-600">{t.landing.stats.projects}</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">15</div>
                <div className="text-gray-600">{t.landing.stats.regions}</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </RootLayout>
  );
}