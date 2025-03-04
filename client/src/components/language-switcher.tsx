import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";
import { translations, Language, DEFAULT_LANGUAGE } from "@/i18n/translations";
import { useQuery, useMutation } from "@tanstack/react-query";
import { apiRequest, queryClient } from "@/lib/queryClient";

const languageFlags = {
  fr: "🇫🇷",
  en: "🇬🇧"
};

export function LanguageSwitcher() {
  const { data: currentLanguage } = useQuery<Language>({
    queryKey: ["/api/user/language"],
    initialData: DEFAULT_LANGUAGE,
  });

  const setLanguageMutation = useMutation({
    mutationFn: async (language: Language) => {
      if (!localStorage.getItem('selectedLanguage')) {
        localStorage.setItem('selectedLanguage', DEFAULT_LANGUAGE);
      }
      localStorage.setItem('selectedLanguage', language);
      await apiRequest("POST", "/api/user/language", { language });
      return language;
    },
    onSuccess: (language) => {
      queryClient.setQueryData(["/api/user/language"], language);
      // Force a page reload to update all translations
      window.location.reload();
    },
  });

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="flex items-center gap-2">
          <Globe className="h-4 w-4" />
          <span>{languageFlags[currentLanguage as Language]}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {Object.keys(translations).map((lang) => (
          <DropdownMenuItem
            key={lang}
            onClick={() => setLanguageMutation.mutate(lang as Language)}
            className="flex items-center gap-2"
          >
            <span>{languageFlags[lang as Language]}</span>
            {lang === "en" ? "English" : "Français"}
            {currentLanguage === lang && " ✓"}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}