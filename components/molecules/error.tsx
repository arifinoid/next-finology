import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type ErrorComponentProps = {
  error: string | null;
  refetch: () => Promise<void>;
};

const ErrorComponent = ({ error, refetch }: ErrorComponentProps) => (
  <div className="min-h-screen bg-background flex items-center justify-center">
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-destructive">Error</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-muted-foreground">{error}</p>
        <Button onClick={refetch} className="w-full">
          Try Again
        </Button>
      </CardContent>
    </Card>
  </div>
);

export default ErrorComponent;
