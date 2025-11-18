import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
      <h1 className="text-4xl font-bold mb-4">Welcome to My App</h1>

      <p className="text-lg text-muted-foreground mb-6">
        This is the home page built with React + Vite + Shadcn UI.
      </p>

      <div className="flex gap-4">
        <Link to="/login">
          <Button>Login</Button>
        </Link>

        <Link to="/signup">
          <Button variant="outline">Sign Up</Button>
        </Link>
      </div>
    </div>
  );
}
