import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { translations } from "@/i18n/translations";
import { RootLayout } from "@/components/layout/root-layout";

export default function LandingPage() {
  const [, setLocation] = useLocation();
  const t = translations.fr; // Default to French for landing page

  return (
    <RootLayout>
      <div 
        className="w-full h-96 bg-cover bg-center relative"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1542744094-24638eff58bb')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-bold text-white mb-4">
                {t.common.welcome}
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Join our platform dedicated to supporting and empowering female
                entrepreneurs in Guinea. Track your progress, connect with support
                organizations, and grow your business.
              </p>
              <Button size="lg" onClick={() => setLocation("/auth")}>
                {t.common.login}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <main>
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold mb-4">Project Management</h3>
              <p className="text-gray-600">
                Track and manage your business projects with ease
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold mb-4">Support Network</h3>
              <p className="text-gray-600">
                Connect with mentors and support organizations
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold mb-4">Progress Tracking</h3>
              <p className="text-gray-600">
                Monitor your business growth and achievements
              </p>
            </div>
          </div>
        </div>
      </main>
    </RootLayout>
  );
}