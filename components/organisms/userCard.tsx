import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { User } from "@/types";
import InfoRow from "@/components/molecules/infoRow";
import { MapPin, Building, Phone, Globe, Mail } from "lucide-react";
import { toHttps } from "@/lib/utils";

type UserCardProps = { user: User };

export default function UserCard({ user }: UserCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="text-lg">{user.name}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <InfoRow
          icon={<Mail className="h-4 w-4 text-muted-foreground" />}
          label="Email"
          value={user.email}
        />
        <InfoRow
          icon={<MapPin className="h-4 w-4 text-muted-foreground" />}
          label="City"
          value={user.address.city}
        />
        <InfoRow
          icon={<Building className="h-4 w-4 text-muted-foreground" />}
          label="Company"
          value={user.company.name}
        />
        <InfoRow
          icon={<Phone className="h-4 w-4 text-muted-foreground" />}
          label="Phone"
          value={user.phone}
        />
        <div className="flex items-center gap-2 text-sm">
          <Globe className="h-4 w-4 text-muted-foreground" />
          <span className="text-muted-foreground">Website:</span>
          <a
            href={toHttps(user.website)}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-primary hover:underline"
          >
            {user.website}
          </a>
        </div>
      </CardContent>
    </Card>
  );
}
