import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { Switch, Route } from "wouter";
import { AuthProvider } from "./hooks/use-auth";
import { LanguageProvider } from "./contexts/language-context";
import { ProtectedRoute } from "./lib/protected-route";

// Public Pages
import LandingPage from "@/pages/landing-page";
import AboutPage from "@/pages/about-page";
import ContactPage from "@/pages/contact-page";
import FaqPage from "@/pages/faq-page";
import LoginPage from "@/pages/login-page";
import RegisterPage from "@/pages/register-page";
import NotFound from "@/pages/not-found";

// Private Pages
import DashboardPage from "@/pages/dashboard-page";

function Router() {
  return (
    <Switch>
      {/* Public Routes */}
      <Route path="/" component={LandingPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/faq" component={FaqPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />

      {/* Protected Routes - Only the main dashboard for now */}
      <ProtectedRoute path="/dashboard" component={DashboardPage} />

      {/* 404 Route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <AuthProvider>
          <Router />
          <Toaster />
        </AuthProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
}

export default App;