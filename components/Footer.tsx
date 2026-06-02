export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 mt-12 border-t-2 border-border flex flex-col items-center justify-center text-center">
      <div className="w-12 h-1 bg-border rounded-full mb-6"></div>
      <p className="text-muted-foreground text-sm font-['Space_Grotesk'] tracking-wide">
        &copy; {currentYear} Janindu Malshan. All rights reserved.
      </p>
    </footer>
  );
}
