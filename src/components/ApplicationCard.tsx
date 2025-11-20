import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FileText, MapPin, Calendar, TrendingUp, Users } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";

interface ApplicationCardProps {
  title: string;
  company: string;
  location: string;
  status: "In Review" | "Interview" | "Offer" | "Rejected";
  appliedDate: string;
  recruiterName: string;
  recruiterSeed: string;
  progress: number;
  companySeed: string;
}

const ApplicationCard = ({
  title,
  company,
  location,
  status,
  appliedDate,
  recruiterName,
  recruiterSeed,
  progress,
  companySeed,
}: ApplicationCardProps) => {
  const statusColors = {
    "In Review": "bg-info/10 text-info border-info/20",
    "Interview": "bg-linkedin/10 text-linkedin border-linkedin/20",
    "Offer": "bg-success/10 text-success border-success/20",
    "Rejected": "bg-muted text-muted-foreground border-border",
  };

  return (
    <div className="bg-card border border-border rounded-lg p-4 hover:shadow-md transition-shadow">
      <div className="flex items-start gap-4">
        {/* Company Icon */}
        <div className="w-12 h-12 bg-muted rounded flex items-center justify-center flex-shrink-0">
          <FileText className="h-6 w-6 text-muted-foreground" />
        </div>

        {/* Main Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-2">
            <div>
              <h3 className="font-semibold text-linkedin hover:underline cursor-pointer">
                {title}
              </h3>
              <p className="text-sm text-foreground">
                {company} • {location}
              </p>
            </div>
            <div className="flex flex-col items-end gap-1">
              <Badge className={`${statusColors[status]} border`}>
                {status}
              </Badge>
              <span className="text-xs text-muted-foreground whitespace-nowrap">
                Applied {appliedDate}
              </span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-muted rounded-full h-1.5 mb-3">
            <div
              className="bg-linkedin h-1.5 rounded-full transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Recruiter and Connections */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground">Recruiter:</span>
                <Avatar className="h-6 w-6">
                  <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${recruiterSeed}`} />
                  <AvatarFallback>{recruiterName[0]}</AvatarFallback>
                </Avatar>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground">People you may know:</span>
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <Avatar key={i} className="h-6 w-6 border-2 border-card">
                      <AvatarImage 
                        src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${companySeed}-${i}`} 
                      />
                      <AvatarFallback>{i}</AvatarFallback>
                    </Avatar>
                  ))}
                  <div className="h-6 w-6 rounded-full bg-muted border-2 border-card flex items-center justify-center">
                    <span className="text-[10px] text-muted-foreground">+5</span>
                  </div>
                </div>
              </div>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm" className="text-linkedin border-linkedin hover:bg-linkedin/5">
                  View Details
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle className="text-2xl">{title}</DialogTitle>
                  <DialogDescription className="text-base">
                    {company} • {location}
                  </DialogDescription>
                </DialogHeader>
                
                <div className="space-y-6 mt-4">
                  {/* Status and Date */}
                  <div className="flex items-center justify-between">
                    <Badge className={`${statusColors[status]} border`}>{status}</Badge>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      Applied {appliedDate}
                    </div>
                  </div>

                  <Separator />

                  {/* Progress */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Application Progress</span>
                      <span className="text-sm text-muted-foreground">{progress}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-linkedin h-2 rounded-full transition-all"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  </div>

                  <Separator />

                  {/* Job Details */}
                  <div className="space-y-4">
                    <h4 className="font-semibold flex items-center gap-2">
                      <TrendingUp className="h-4 w-4" />
                      Job Details
                    </h4>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Location:</span>
                        <p className="flex items-center gap-1 mt-1">
                          <MapPin className="h-3 w-3" />
                          {location}
                        </p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Status:</span>
                        <p className="mt-1">{status}</p>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* Recruiter Info */}
                  <div className="space-y-3">
                    <h4 className="font-semibold flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      Contact Information
                    </h4>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${recruiterSeed}`} />
                        <AvatarFallback>{recruiterName[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{recruiterName}</p>
                        <p className="text-sm text-muted-foreground">Recruiter</p>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-4">
                    <Button className="flex-1 bg-linkedin hover:bg-linkedin/90">
                      Message Recruiter
                    </Button>
                    <Button variant="outline" className="flex-1">
                      Withdraw Application
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationCard;
