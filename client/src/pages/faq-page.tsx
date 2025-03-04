import { useLanguage } from "@/contexts/language-context";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FaqPage() {
  const { t } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Card>
        <CardContent className="pt-6">
          <h1 className="text-4xl font-bold mb-8">{t.faq.title}</h1>
          <p className="text-lg text-gray-600 mb-8">
            {t.faq.description}
          </p>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Comment puis-je créer un compte ?
              </AccordionTrigger>
              <AccordionContent>
                Cliquez sur le bouton "S'inscrire" en haut à droite de la page d'accueil. Remplissez le formulaire avec vos informations et choisissez votre rôle.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                Quels sont les différents rôles sur la plateforme ?
              </AccordionTrigger>
              <AccordionContent>
                La plateforme propose différents rôles : Entrepreneure, APIP, Organisation de soutien, et Donateur. Chaque rôle a des fonctionnalités spécifiques adaptées à ses besoins.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}