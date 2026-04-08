# Terminal/CLI Portfolio Redesign — Implementation Plan

## Vision
Transform the portfolio from a conventional dark-blue particles-and-sans-serif site into a **terminal/hacker aesthetic** — green-on-black, monospace everything, CRT scanlines, boot sequences, fake CLI prompts. Inspired by the Encubatorr landing page and the `attention.sh` single-page site.

The result should feel like opening a terminal, not visiting a website — but it still has to *work* as a portfolio: readable, navigable, and fast.

---

## Phase 1 — Foundation & Theme
**Goal:** Swap the entire color palette, typography, and global styles. Every page will look rough/broken after this but the new visual language will be in place.

### Tasks
- [ ] Update `tailwind.config.ts`:
  - Replace color tokens: `primary → #b6ffc4` (body text), `secondary → #008f11` (dim green), `accent → #00ff41` (matrix green), `border → rgba(0,255,65,0.35)`, add `amber: #ffb000`, `terminal-bg: #0a0a0a`
  - Add `fontFamily: { mono: ['JetBrains Mono', 'ui-monospace', 'Menlo', 'Consolas', 'monospace'] }`
  - Add custom keyframes: `blink` (cursor), `scan` (beam), `flicker` (CRT), `glitch` (RGB split)
- [ ] Update `globals.css`:
  - Import JetBrains Mono from Google Fonts (via `@import` or `<link>` in layout)
  - Set `body` background to `#0a0a0a`, font-family to mono stack
  - Add `::selection` styles (green bg, black text)
  - Add CRT scanline overlay (repeating-linear-gradient pseudo-element on body)
  - Add scan beam animation
  - Add `.cursor` utility class (blinking green block)
  - Add `prefers-reduced-motion` media query to disable all animations
- [ ] Update `layout.tsx`:
  - Add Google Fonts `<link>` for JetBrains Mono (weights 400, 500, 700, 800)
  - Remove `particles-background.tsx` import/usage
  - Update metadata title/description
- [ ] Create `src/components/core/matrix-rain.tsx` client component:
  - Canvas-based matrix rain (katakana + code characters like `{}[]<>#$%&*+=`)
  - Fixed position, z-index behind content, ~10-13% opacity
  - Respects `prefers-reduced-motion` (hidden entirely)
  - Port the matrix rain logic from `attention.sh` reference file
  - Handle window resize
- [ ] Add matrix rain to `layout.tsx` in place of particles background
- [ ] Delete `particles-background.tsx`

**Commit after this phase.**

---

## Phase 2 — Navigation & Footer
**Goal:** Replace the current Radix navigation bar and footer with terminal-styled equivalents.

### Tasks
- [ ] Rewrite `navigation-bar.tsx`:
  - Brand: `$ ERIC.ZHANG /` with green glow text-shadow
  - Links styled as file paths: `~/about`, `~/projects`, `~/contact`
  - CTA button: `./hire_me` or `./get_resume` with green border, hover fills green
  - Bottom border: `1px dashed rgba(0,255,65, 0.18)`
  - Mobile: hamburger menu or collapse links into a dropdown
- [ ] Rewrite `footer.tsx`:
  - Monospace, dim green, centered
  - `© 2025 eric_zhang — all_rights_reserved`
  - Social links as terminal-style inline: `[github]` `[linkedin]`
  - Top border: dashed green

**Commit after this phase.**

---

## Phase 3 — Hero Section
**Goal:** The centerpiece. Boot sequence → ASCII title → fake terminal prompt. This is where most of the creative effort goes.

### Tasks
- [ ] Rewrite `hero-section.tsx` as a client component with:
  - **Boot sequence** that types itself out on load (~15ms/char):
    ```
    [  OK  ] booting ericzhang.dev kernel v2.0
    [ INFO ] loading skills... [React, TypeScript, Next.js, Tailwind]
    [ INFO ] initializing projects... 11 found
    [  OK  ] portfolio.render() — READY.
    ```
  - **ASCII art title** "ERIC ZHANG" in large block letters (use `pre` tag)
    - Glitch effect every ~5s (RGB channel split + brief character scramble)
    - Mobile fallback: plain large text below 640px
  - **Subtitle** with blinking cursor: `> forging robust web applications█`
  - **Fake terminal prompt** box:
    - `● ● ●` title bar with `user@portfolio:~`
    - Rotating typewriter text in the prompt line
    - Clickable command buttons: `cd ~/about`, `ls ~/projects`, `cat contact.md`
    - These scroll to / navigate to the relevant sections
  - Remove avatar image (doesn't fit the terminal aesthetic) OR place it very subtly
  - Remove the old Framer Motion stagger animations (replaced by boot sequence)

**Commit after this phase.**

---

## Phase 4 — About Section
**Goal:** Restyle the about page as a terminal window.

### Tasks
- [ ] Rewrite `about/page.tsx`:
  - Wrap in terminal window container (`● ● ●` title bar, `~/about/README.md`)
  - Bio text styled as file content being cat-ed
  - Tech stack: replace icon cards with a terminal-style list
    - `$ ls ~/.skills/` header
    - Skills as monospace bordered badges (green border, green text)
    - Or as a directory listing: `drwxr-xr-x  react/  typescript/  nextjs/  tailwind/`
  - Remove `tech-card.tsx` usage (may keep component for reference or delete)

**Commit after this phase.**

---

## Phase 5 — Projects Section
**Goal:** Project cards become terminal windows.

### Tasks
- [ ] Rewrite `project-card.tsx`:
  - Each card is a terminal window with `● ● ●` bar and project name as filename
  - Project image stays but with a green-tinted overlay or border glow
  - Description in `--text` color (#b6ffc4)
  - Skills as inline code badges: `[React]` `[TypeScript]` `[Tailwind]`
  - Action buttons styled as commands: `./demo →` and `git clone`
  - Hover: border glows brighter, subtle elevation
- [ ] Update `projects/page.tsx`:
  - Section header with typewriter effect: `$ ls ~/projects/`
  - Keep the 3-column grid layout
  - Terminal window wrapper around the whole section

**Commit after this phase.**

---

## Phase 6 — Contact Section
**Goal:** Contact form becomes a terminal input experience.

### Tasks
- [ ] Rewrite `contact-form.tsx` / `contact/page.tsx`:
  - Wrap in terminal window (`~/contact/mail.sh`)
  - Form inputs: green border, transparent bg, monospace placeholder
  - Active input has brighter border + blinking cursor effect
  - Submit button: `$ send_message →` in green, hover fills
  - Success message as terminal output: `[  OK  ] message sent successfully`
  - Social links below as `$ echo $GITHUB` / `$ echo $LINKEDIN`

**Commit after this phase.**

---

## Phase 7 — Animations & Polish Effects
**Goal:** Add the remaining atmospheric layer — scanlines, scroll-triggered typewriters, hover effects. (Matrix rain is already in place from Phase 1.)

### Tasks
- [ ] Add CRT scanline overlay to layout (CSS pseudo-element on body)
- [ ] Add scan beam animation (slow vertical sweep)
- [ ] Add IntersectionObserver-based typewriter effect for section headers
- [ ] Add hover glow states across interactive elements
- [ ] Add subtle CRT flicker animation (very low intensity)
- [ ] Verify all animations are disabled under `prefers-reduced-motion`

**Commit after this phase.**

---

## Phase 8 — Polish & Cleanup
**Goal:** Final refinements, responsiveness, accessibility, dead code removal.

### Tasks
- [ ] Test responsive breakpoints (mobile, tablet, desktop)
  - ASCII title → plain text on small screens
  - Terminal windows full-width on mobile with reduced padding
  - Navigation collapses cleanly
- [ ] Accessibility audit:
  - `aria-hidden` on decorative elements (cursors, scanlines, matrix rain)
  - `aria-live` on boot sequence
  - Keyboard navigation for all interactive elements
  - Sufficient color contrast (green on black passes WCAG AA)
- [ ] Remove unused dependencies if any (particles library, etc.)
- [ ] Remove unused components (`particles-background.tsx`, old UI primitives if unused)
- [ ] Performance check: 60fps animations, no layout thrashing
- [ ] Update project detail pages (`/projects/minesweeper`, `/projects/pakudex`) to match new theme

**Final commit.**

---

## Files Affected (Summary)

| File | Action |
|------|--------|
| `tailwind.config.ts` | Rewrite colors, fonts, keyframes |
| `src/app/globals.css` | Rewrite with terminal theme |
| `src/app/layout.tsx` | Update fonts, swap particles → matrix rain, add CRT overlay |
| `src/app/page.tsx` | Update home page structure |
| `src/components/core/hero-section.tsx` | Full rewrite — boot sequence, ASCII title, prompt |
| `src/components/core/navigation-bar.tsx` | Full rewrite — terminal nav |
| `src/components/core/footer.tsx` | Full rewrite — terminal footer |
| `src/components/core/project-card.tsx` | Full rewrite — terminal window cards |
| `src/components/core/tech-card.tsx` | Remove or repurpose |
| `src/components/core/contact-form.tsx` | Full rewrite — terminal form |
| `src/components/core/particles-background.tsx` | Delete (replaced by matrix rain) |
| `src/components/core/matrix-rain.tsx` | **New** — canvas matrix rain |
| `src/app/about/page.tsx` | Restyle as terminal window |
| `src/app/projects/page.tsx` | Restyle as terminal window |
| `src/app/contact/page.tsx` | Restyle as terminal window |
| `src/app/projects/minesweeper/page.tsx` | Update to match theme |
| `src/app/projects/pakudex/page.tsx` | Update to match theme |

## Key Design Tokens

```
--bg:           #0a0a0a
--green:        #00ff41
--green-dim:    #008f11
--green-darker: #00490a
--amber:        #ffb000
--text:         #b6ffc4
--red:          #ff3b3b
--font:         'JetBrains Mono', ui-monospace, Menlo, Consolas, monospace
```
