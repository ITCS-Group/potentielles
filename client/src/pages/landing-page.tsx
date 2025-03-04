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
            <div className="flex flex-col items-center gap-4 mb-8">
              <div className="flex items-center justify-center gap-2 text-primary">
                <MapPin className="h-6 w-6" />
                <span className="text-xl font-semibold">
                  APIP - Agence de Promotion des Investissements Privés
                </span>
              </div>
              {/* Carte avec marqueur */}
              <div className="w-full max-w-3xl h-64 rounded-lg overflow-hidden border border-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.904484742846!2d-13.720721!3d9.535194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xf1cd9de6a42c3a7%3A0x6d7f1b0f1b0f1b0f!2sAPIP%20-%20Agence%20de%20Promotion%20des%20Investissements%20Priv%C3%A9s!5e0!3m2!1sfr!2sgn!4v1620000000000!5m2!1sfr!2sgn"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
              <p className="text-xl text-gray-600 max-w-3xl">
                {t.landing.impactDesc}
              </p>
            </div>
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