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
        className="w-full h-96 bg-cover bg-center relative"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1604871000636-074fa5117945')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-bold text-white mb-4">
                {t.common.welcome}
              </h1>
              <p className="text-xl text-white/90 mb-8">
                {t.landing.heroText}
              </p>
              <Button size="lg" onClick={() => setLocation("/auth?tab=register")}>
                {t.landing.joinButton}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <main>
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold mb-4">{t.features.projectManagement}</h3>
              <p className="text-gray-600">
                {t.features.projectManagementDesc}
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold mb-4">{t.features.support}</h3>
              <p className="text-gray-600">
                {t.features.supportDesc}
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold mb-4">{t.features.progress}</h3>
              <p className="text-gray-600">
                {t.features.progressDesc}
              </p>
            </div>
          </div>
        </div>
      </main>
    </RootLayout>
  );
}