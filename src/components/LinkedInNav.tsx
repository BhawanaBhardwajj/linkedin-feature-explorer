import { Home, Users, Briefcase, MessageSquare, Bell, User, Grid3x3, Megaphone, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const LinkedInNav = () => {
  const navItems = [
    { icon: Home, label: "Home", active: false },
    { icon: Users, label: "My Network", active: false, badge: 12 },
    { icon: Briefcase, label: "Jobs", active: true, badge: 2 },
    { icon: MessageSquare, label: "Messaging", active: false },
    { icon: Bell, label: "Notifications", active: false, badge: 5 },
    { icon: User, label: "Me", active: false },
    { icon: Grid3x3, label: "For Business", active: false },
    { icon: Megaphone, label: "Advertise", active: false },
  ];

  return (
    <nav className="bg-card border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex items-center justify-between h-[52px]">
          {/* Logo and Search */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-linkedin rounded flex items-center justify-center">
              <span className="text-white font-bold text-lg">in</span>
            </div>
            <div className="relative hidden md:block">
              <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="I'm looking for..." 
                className="w-[280px] pl-8 h-8 bg-accent/50 border-none"
              />
            </div>
          </div>

          {/* Navigation Items */}
          <div className="flex items-center">
            {navItems.map((item, index) => (
              <Button
                key={index}
                variant="ghost"
                className={`flex flex-col items-center justify-center gap-0.5 h-[52px] px-3 hover:bg-transparent relative ${
                  item.active 
                    ? "text-foreground border-b-2 border-linkedin" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <div className="relative">
                  <item.icon className="h-5 w-5" />
                  {item.badge && (
                    <Badge 
                      variant="destructive" 
                      className="absolute -top-1 -right-2 h-4 min-w-4 px-1 text-[10px] flex items-center justify-center"
                    >
                      {item.badge}
                    </Badge>
                  )}
                </div>
                <span className="text-[10px] hidden lg:block">{item.label}</span>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default LinkedInNav;
