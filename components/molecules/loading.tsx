import { Loader2 } from "lucide-react";

type StateOverlayProps = { loading?: boolean; message?: string };

const StateOverlay = ({ loading, message }: StateOverlayProps) => {
  if (!loading && !message) return null;
  return (
    <div className="min-h-[40vh] grid place-items-center">
      <div className="flex flex-col items-center gap-3 text-center">
        {loading ? <Loader2 className="h-8 w-8 animate-spin" /> : null}
        {message ? <p className="text-muted-foreground">{message}</p> : null}
      </div>
    </div>
  );
};

const LoadingComponent = () => (
  <div className="min-h-screen bg-background flex items-center justify-center">
    <StateOverlay loading message="Loading users..." />
  </div>
);

export default LoadingComponent;
