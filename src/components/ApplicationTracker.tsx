import { useState } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ApplicationCard from "./ApplicationCard";

const ApplicationTracker = () => {
  const [showPremiumBanner, setShowPremiumBanner] = useState(true);

  const stats = [
    { label: "Total Applications", count: 21, color: "text-foreground" },
    { label: "In Review", count: 6, color: "text-info" },
    { label: "Interview", count: 6, color: "text-linkedin" },
    { label: "Offers", count: 2, color: "text-success" },
  ];

  const applications = [
    {
      title: "Product Manager Intern",
      company: "Google",
      location: "Mountain View, CA",
      status: "In Review" as const,
      appliedDate: "Oct 12",
      recruiterName: "Sarah Johnson",
      recruiterSeed: "Sarah Johnson",
      progress: 40,
      companySeed: "Google",
    },
    {
      title: "Technical PM",
      company: "Microsoft",
      location: "Redmond, WA",
      status: "Interview" as const,
      appliedDate: "Oct 10",
      recruiterName: "Michael Chen",
      recruiterSeed: "Michael Chen",
      progress: 65,
      companySeed: "Microsoft",
    },
    {
      title: "Product Operations",
      company: "Adobe",
      location: "San Jose, CA",
      status: "Offer" as const,
      appliedDate: "Sep 25",
      recruiterName: "Emily Davis",
      recruiterSeed: "Emily Davis",
      progress: 100,
      companySeed: "Adobe",
    },
    {
      title: "Product Analyst",
      company: "Amazon",
      location: "Seattle, WA",
      status: "Rejected" as const,
      appliedDate: "Sep 18",
      recruiterName: "James Wilson",
      recruiterSeed: "James Wilson",
      progress: 25,
      companySeed: "Amazon",
    },
  ];

  return (
    <main className="flex-1 max-w-[900px]">
      {/* Premium Banner */}
      {showPremiumBanner && (
        <div className="bg-linkedin-light border border-linkedin/20 rounded-lg p-4 mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-warning rounded-full flex items-center justify-center">
              <span className="text-white text-sm">👑</span>
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">
                See where you get <span className="font-semibold">3× more recruiter responses</span> (Premium)
              </p>
              <Button variant="link" className="h-auto p-0 text-linkedin text-xs">
                Learn more
              </Button>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="h-6 w-6"
            onClick={() => setShowPremiumBanner(false)}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      )}

      {/* Header */}
      <div className="mb-4">
        <h1 className="text-2xl font-semibold mb-4">Application Tracker</h1>
        
        {/* Search and Filters */}
        <div className="flex gap-2 mb-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search by company, role, or status..." 
              className="pl-9"
            />
          </div>
          <Button variant="outline" className="gap-2">
            <SlidersHorizontal className="h-4 w-4" />
            Filters
          </Button>
        </div>

        {/* Status Filter */}
        <div className="flex gap-2">
          <Badge 
            variant="secondary" 
            className="bg-linkedin text-white hover:bg-linkedin-hover cursor-pointer px-4 py-1.5"
          >
            All Status
          </Badge>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-card border border-border rounded-lg p-4 text-center">
            <div className={`text-3xl font-bold ${stat.color} mb-1`}>{stat.count}</div>
            <div className="text-xs text-muted-foreground">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Applications List */}
      <div className="space-y-4">
        {applications.map((app, index) => (
          <ApplicationCard key={index} {...app} />
        ))}
      </div>
    </main>
  );
};

export default ApplicationTracker;
