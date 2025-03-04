import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { RootLayout } from "@/components/layout/root-layout";
import { useLanguage } from "@/contexts/language-context";

export default function LandingPage() {
  const [, setLocation] = useLocation();
  const { t } = useLanguage();

  return (
    <RootLayout>
      <div 
        className="w-full h-[600px] bg-cover bg-center relative"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1583407733101-dea598185a86?ixlib=rb-4.0.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl">
              <h1 className="text-5xl font-bold text-white mb-6">
                {t.common.welcome}
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                {t.landing.heroText}
              </p>
              <Button 
                size="lg" 
                variant="secondary"
                className="text-lg px-8 py-6"
                onClick={() => setLocation("/auth?tab=register")}
              >
                {t.landing.joinButton}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <main>
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Notre Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nous accompagnons les femmes entrepreneures guinéennes dans leur développement professionnel
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
                <div className="text-gray-600">Entrepreneures accompagnées</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-gray-600">Projets financés</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">15</div>
                <div className="text-gray-600">Régions couvertes</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </RootLayout>
  );
}