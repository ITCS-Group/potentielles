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

// Private Pages - Entrepreneur
import DashboardPage from "@/pages/dashboard-page";
import ProjectsPage from "@/pages/projects/projects-page";
import NewProjectPage from "@/pages/projects/new-project-page";
import SurveysPage from "@/pages/surveys/surveys-page";
import ResourcesPage from "@/pages/resources-page";
import ProfilePage from "@/pages/profile-page";

// Private Pages - APIP Admin
import AdminDashboardPage from "@/pages/admin/dashboard-page";
import UserManagementPage from "@/pages/admin/users-page";
import ProjectReviewPage from "@/pages/admin/projects-page";
import AdminSurveysPage from "@/pages/admin/surveys-page";
import AnalyticsPage from "@/pages/admin/analytics-page";
import SettingsPage from "@/pages/admin/settings-page";

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

      {/* Protected Routes - Entrepreneur */}
      <ProtectedRoute path="/dashboard" component={DashboardPage} />
      <ProtectedRoute path="/projects" component={ProjectsPage} />
      <ProtectedRoute path="/projects/new" component={NewProjectPage} />
      <ProtectedRoute path="/surveys" component={SurveysPage} />
      <ProtectedRoute path="/resources" component={ResourcesPage} />
      <ProtectedRoute path="/profile" component={ProfilePage} />

      {/* APIP Admin Routes */}
      <ProtectedRoute path="/admin" component={AdminDashboardPage} />
      <ProtectedRoute path="/admin/users" component={UserManagementPage} />
      <ProtectedRoute path="/admin/projects" component={ProjectReviewPage} />
      <ProtectedRoute path="/admin/surveys" component={AdminSurveysPage} />
      <ProtectedRoute path="/admin/reports" component={AnalyticsPage} />
      <ProtectedRoute path="/admin/settings" component={SettingsPage} />

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