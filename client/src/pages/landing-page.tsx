import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { translations } from "@/i18n/translations";

export default function LandingPage() {
  const [, setLocation] = useLocation();
  const t = translations.fr; // Default to French for landing page

  return (
    <div className="min-h-screen">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Potenti'Elles</h1>
          <div className="flex gap-4">
            <Button onClick={() => setLocation("/auth")}>
              {t.common.login}
            </Button>
          </div>
        </div>
      </header>

      <main>
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              {t.common.welcome}
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join our platform dedicated to supporting and empowering female
              entrepreneurs in Guinea. Track your progress, connect with support
              organizations, and grow your business.
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" onClick={() => setLocation("/auth")}>
                {t.common.login}
              </Button>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature sections */}
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
    </div>
  );
}
