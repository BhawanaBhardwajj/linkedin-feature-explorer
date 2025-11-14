import LinkedInNav from "@/components/LinkedInNav";
import LeftSidebar from "@/components/LeftSidebar";
import ApplicationTracker from "@/components/ApplicationTracker";
import InsightsPanel from "@/components/InsightsPanel";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <LinkedInNav />
      <div className="max-w-[1600px] mx-auto px-4 py-4">
        <div className="flex gap-4">
          <LeftSidebar />
          <ApplicationTracker />
          <InsightsPanel />
        </div>
      </div>
    </div>
  );
};

export default Index;
