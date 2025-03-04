import { Activity } from "@shared/schema";
import { Card, CardContent } from "@/components/ui/card";
import { formatDistance } from "date-fns";
import { fr, enUS } from "date-fns/locale";
import { FileText, MessageSquare, BarChart2 } from "lucide-react";

const activityIcons = {
  project_update: FileText,
  comment: MessageSquare,
  metric_update: BarChart2,
} as const;

interface ActivityTimelineProps {
  activities: Activity[];
}

export function ActivityTimeline({ activities }: ActivityTimelineProps) {
  const getActivityIcon = (type: string) => {
    const Icon = activityIcons[type as keyof typeof activityIcons] || FileText;
    return <Icon className="h-5 w-5" />;
  };

  return (
    <div className="space-y-4">
      {activities.map((activity) => (
        <Card key={activity.id}>
          <CardContent className="p-4 flex items-start gap-4">
            <div className="flex-shrink-0 p-2 bg-primary/10 rounded-full">
              {getActivityIcon(activity.type)}
            </div>
            <div className="flex-grow">
              <p className="font-medium">{activity.description}</p>
              <time className="text-sm text-gray-500">
                {formatDistance(new Date(activity.timestamp), new Date(), {
                  addSuffix: true,
                  locale: activity.data?.language === "fr" ? fr : enUS,
                })}
              </time>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
