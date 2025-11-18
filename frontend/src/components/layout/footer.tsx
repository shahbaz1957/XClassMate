export default function Footer() {
  return (
    <footer className="border-t py-4 mt-10 bg-background">
      <div className="container mx-auto text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} MyApp. All rights reserved.
      </div>
    </footer>
  );
}
