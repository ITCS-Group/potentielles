import { useLanguage } from "@/contexts/language-context";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { RootLayout } from "@/components/layout/root-layout";

export default function FaqPage() {
  const { t } = useLanguage();

  return (
    <RootLayout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 padding-8rems">
        <Card>
          <CardContent className="pt-6">
            <h1 className="text-4xl font-bold mb-8">{t.faq.title}</h1>
            <p className="text-lg text-gray-600 mb-8">{t.faq.description}</p>
            <Accordion type="single" collapsible className="space-y-4">
              {/* Inscription et Profils */}
              <AccordionItem value="item-1">
                <AccordionTrigger>{t.faq.questions.account}</AccordionTrigger>
                <AccordionContent>
                  {t.faq.questions.accountAnswer}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>{t.faq.questions.roles}</AccordionTrigger>
                <AccordionContent>
                  {t.faq.questions.rolesAnswer}
                </AccordionContent>
              </AccordionItem>

              {/* Accompagnement */}
              <AccordionItem value="item-3">
                <AccordionTrigger>{t.faq.questions.support}</AccordionTrigger>
                <AccordionContent>
                  {t.faq.questions.supportAnswer}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>{t.faq.questions.mentoring}</AccordionTrigger>
                <AccordionContent>
                  {t.faq.questions.mentoringAnswer}
                </AccordionContent>
              </AccordionItem>

              {/* Formation et Ressources */}
              <AccordionItem value="item-5">
                <AccordionTrigger>{t.faq.questions.resources}</AccordionTrigger>
                <AccordionContent>
                  {t.faq.questions.resourcesAnswer}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger>{t.faq.questions.training}</AccordionTrigger>
                <AccordionContent>
                  {t.faq.questions.trainingAnswer}
                </AccordionContent>
              </AccordionItem>

              {/* Support Technique */}
              <AccordionItem value="item-7">
                <AccordionTrigger>{t.faq.questions.technical}</AccordionTrigger>
                <AccordionContent>
                  {t.faq.questions.technicalAnswer}
                </AccordionContent>
              </AccordionItem>

              {/* Confidentialité */}
              <AccordionItem value="item-8">
                <AccordionTrigger>{t.faq.questions.privacy}</AccordionTrigger>
                <AccordionContent>
                  {t.faq.questions.privacyAnswer}
                </AccordionContent>
              </AccordionItem>

              {/* Partenariats */}
              <AccordionItem value="item-9">
                <AccordionTrigger>{t.faq.questions.partners}</AccordionTrigger>
                <AccordionContent>
                  {t.faq.questions.partnersAnswer}
                </AccordionContent>
              </AccordionItem>

              {/* Financement */}
              <AccordionItem value="item-10">
                <AccordionTrigger>{t.faq.questions.funding}</AccordionTrigger>
                <AccordionContent>
                  {t.faq.questions.fundingAnswer}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </RootLayout>
  );
}
