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
                  {t.faq.questions.account}
                </AccordionTrigger>
                <AccordionContent>
                  {t.faq.questions.accountAnswer}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  {t.faq.questions.roles}
                </AccordionTrigger>
                <AccordionContent>
                  {t.faq.questions.rolesAnswer}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </RootLayout>
  );
}