import { Home, Users, Briefcase, MessageSquare, Bell, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const LinkedInNav = () => {
  const navItems = [
    { icon: Home, label: "Home", active: false },
    { icon: Users, label: "My Network", active: false, badge: 12 },
    { icon: Briefcase, label: "Jobs", active: true },
    { icon: MessageSquare, label: "Messaging", active: false },
    { icon: Bell, label: "Notifications", active: false, badge: 5 },
  ];

  return (
    <nav className="bg-card border-b border-border sticky top-0 z-50">
      <div className="max-w-[1128px] mx-auto px-6">
        <div className="flex items-center h-[52px] gap-2">
          {/* Logo */}
          <div className="flex items-center gap-2 min-w-[300px]">
            <div className="w-[34px] h-[34px] bg-linkedin rounded flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-sm">in</span>
            </div>
            
            {/* Search */}
            <div className="relative flex-1 max-w-[280px]">
              <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-[14px] w-[14px] text-muted-foreground" />
              <Input 
                placeholder="Search" 
                className="w-full pl-8 h-[34px] bg-accent/30 border-none text-sm placeholder:text-muted-foreground/70 focus-visible:bg-accent/50"
              />
            </div>
          </div>

          {/* Navigation Items */}
          <div className="flex items-center flex-1 justify-end">
            {navItems.map((item, index) => (
              <Button
                key={index}
                variant="ghost"
                className={`flex flex-col items-center justify-center gap-0 h-[52px] px-4 hover:bg-transparent relative rounded-none group ${
                  item.active 
                    ? "text-foreground" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <div className="relative mb-0.5">
                  <item.icon className="h-6 w-6" strokeWidth={1.5} />
                  {item.badge && (
                    <Badge 
                      variant="destructive" 
                      className="absolute -top-1.5 -right-2 h-[18px] min-w-[18px] px-1 text-[11px] flex items-center justify-center rounded-full font-normal"
                    >
                      {item.badge}
                    </Badge>
                  )}
                </div>
                <span className="text-[12px] leading-none">{item.label}</span>
                {item.active && (
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-foreground" />
                )}
              </Button>
            ))}
            
            {/* Me with Avatar */}
            <Button
              variant="ghost"
              className="flex flex-col items-center justify-center gap-0 h-[52px] px-4 hover:bg-transparent relative rounded-none group text-muted-foreground hover:text-foreground"
            >
              <Avatar className="h-6 w-6 mb-0.5">
                <AvatarFallback className="bg-muted text-[10px]">ME</AvatarFallback>
              </Avatar>
              <span className="text-[12px] leading-none">Me</span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default LinkedInNav;
