import ThemeToggle from "./theme-toggle";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[--color-subtle] bg-background/70 backdrop-blur-md">
      <nav className="flex h-14 w-full items-center justify-between gap-3 px-4 sm:px-6 md:grid md:grid-cols-3 md:px-8">
        <div aria-hidden className="hidden md:block" />

        <ul className="flex items-center gap-4 text-sm text-muted sm:gap-6 md:justify-center">
          <li>
            <a
              href="#work"
              className="link-underline hover:text-foreground transition-colors"
            >
              Work
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="link-underline hover:text-foreground transition-colors"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="link-underline hover:text-foreground transition-colors"
            >
              Contact
            </a>
          </li>
        </ul>

        <div className="flex flex-shrink-0 items-center justify-end gap-1 sm:gap-2">
          <ThemeToggle />
          <a
            href="https://cal.com/aryan-sharma-mwdtuc/20-mins"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-foreground px-3 py-1.5 text-xs font-medium text-background shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[--color-muted] hover:shadow-md sm:px-3.5"
          >
            Book a call
            <span
              aria-hidden
              className="inline-block transition-transform duration-200 group-hover:translate-x-0.5"
            >
              →
            </span>
          </a>
        </div>
      </nav>
    </header>
  );
}
