export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[--color-subtle] bg-white/70 backdrop-blur-md">
      <nav className="mx-auto flex h-14 max-w-4xl items-center justify-between px-6 md:px-8">
        <a
          href="#top"
          className="text-sm font-medium tracking-tight text-foreground"
        >
          Aryan Sharma <span className="text-muted">&middot;</span> Builder
        </a>

        <ul className="flex items-center gap-5 text-sm text-muted">
          <li className="hidden sm:block">
            <a href="#work" className="link-underline hover:text-foreground transition-colors">
              Work
            </a>
          </li>
          <li className="hidden sm:block">
            <a href="#projects" className="link-underline hover:text-foreground transition-colors">
              Projects
            </a>
          </li>
          <li className="hidden sm:block">
            <a href="#contact" className="link-underline hover:text-foreground transition-colors">
              Contact
            </a>
          </li>
          <li className="hidden sm:block h-4 w-px bg-[--color-subtle]" aria-hidden />
          <li>
            <a
              href="https://calendly.com/aryansharma2k2/aryan-x-15-mins"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-1.5 rounded-full bg-foreground px-3.5 py-1.5 text-xs font-medium text-background transition-colors hover:bg-[--color-muted]"
            >
              Book a call
              <span
                aria-hidden
                className="inline-block transition-transform duration-200 group-hover:translate-x-0.5"
              >
                →
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
