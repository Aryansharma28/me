export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[--color-subtle] bg-white/70 backdrop-blur-md">
      <nav className="grid h-14 w-full grid-cols-3 items-center px-6 md:px-8">
        <div aria-hidden />

        <ul className="flex items-center justify-center gap-6 text-sm text-muted">
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

        <div className="flex justify-end">
          <a
            href="https://cal.com/aryan-sharma-mwdtuc/20-mins"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-1.5 rounded-full bg-foreground px-3.5 py-1.5 text-xs font-medium text-background shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[--color-muted] hover:shadow-md"
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
