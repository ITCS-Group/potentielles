import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";
import { translations, Language } from "@/i18n/translations";
import { useQuery, useMutation } from "@tanstack/react-query";
import { apiRequest, queryClient } from "@/lib/queryClient";

export function LanguageSwitcher() {
  const { data: currentLanguage } = useQuery<Language>({
    queryKey: ["/api/user/language"],
  });

  const setLanguageMutation = useMutation({
    mutationFn: async (language: Language) => {
      await apiRequest("POST", "/api/user/language", { language });
      return language;
    },
    onSuccess: (language) => {
      queryClient.setQueryData(["/api/user/language"], language);
    },
  });

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Globe className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {Object.keys(translations).map((lang) => (
          <DropdownMenuItem
            key={lang}
            onClick={() => setLanguageMutation.mutate(lang as Language)}
          >
            {lang === "en" ? "English" : "Français"}
            {currentLanguage === lang && " ✓"}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
