import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Language, translations } from "@/i18n/translations";
import { useLanguage } from "@/contexts/language-context";

const languageFlags = {
  fr: "🇫🇷",
  en: "🇬🇧"
};

export function LanguageSwitcher() {
  const { currentLanguage, setLanguage } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="px-2">
          {languageFlags[currentLanguage]}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="overflow-hidden w-[150px]"
        sideOffset={8}
      >
        {Object.keys(translations).map((lang) => (
          <DropdownMenuItem
            key={lang}
            onClick={() => setLanguage(lang as Language)}
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