import { Bookmark, Briefcase, BarChart3, GraduationCap, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";

const LeftSidebar = () => {
  const menuItems = [
    { icon: Bookmark, label: "My Items", count: null, divider: false },
    { icon: Briefcase, label: "My jobs", count: 21, active: true, divider: false },
    { icon: BarChart3, label: "Application Tracker", count: null, active: true, divider: false },
    { icon: BarChart3, label: "Application Insights", count: null, divider: true },
    { icon: GraduationCap, label: "My learning", count: 4, divider: false },
    { icon: Headphones, label: "Service requests", count: 2, divider: false },
    { icon: Bookmark, label: "Saved posts and articles", count: 6, divider: false },
  ];

  return (
    <aside className="w-[280px] hidden lg:block">
      <div className="bg-card rounded-lg border border-border overflow-hidden sticky top-[68px]">
        <div className="p-3">
          {menuItems.map((item, index) => (
            <div key={index}>
              <Button
                variant="ghost"
                className={`w-full justify-start gap-2 mb-1 h-9 ${
                  item.active 
                    ? "bg-accent text-linkedin font-medium" 
                    : "text-muted-foreground hover:bg-accent hover:text-foreground"
                }`}
              >
                <item.icon className="h-4 w-4" />
                <span className="flex-1 text-left text-sm">{item.label}</span>
                {item.count !== null && (
                  <span className="text-xs text-muted-foreground">{item.count}</span>
                )}
              </Button>
              {item.divider && <div className="h-px bg-border my-2" />}
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default LeftSidebar;
