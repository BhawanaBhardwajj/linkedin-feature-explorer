import { Button } from "@/components/ui/button";
import { TrendingUp, FileText, Clock } from "lucide-react";

const InsightsPanel = () => {
  const insights = [
    {
      icon: TrendingUp,
      text: "You get the fastest recruiter responses from FinTech roles.",
      color: "text-success",
    },
    {
      icon: FileText,
      text: "6 applications currently in review (29% of total).",
      color: "text-info",
    },
    {
      icon: Clock,
      text: "You've applied to 15 jobs this month — 5 in Interview stage.",
      color: "text-linkedin",
    },
  ];

  return (
    <aside className="w-[320px] hidden xl:block">
      <div className="bg-card rounded-lg border border-border overflow-hidden sticky top-[68px]">
        <div className="p-4 border-b border-border">
          <h2 className="font-semibold">Application Insights</h2>
        </div>
        <div className="p-4 space-y-4">
          {insights.map((insight, index) => (
            <div key={index} className="flex gap-3">
              <div className={`${insight.color} mt-0.5`}>
                <insight.icon className="h-5 w-5" />
              </div>
              <p className="text-sm text-foreground">{insight.text}</p>
            </div>
          ))}
          <Button className="w-full bg-linkedin hover:bg-linkedin-hover text-white">
            View Application Insights →
          </Button>
        </div>
      </div>
    </aside>
  );
};

export default InsightsPanel;
