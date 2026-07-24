# Nexora Design System & Section Breakdown

This is an original implementation that takes only the reference's *design language*—dark editorial SaaS, lime-accented grid, oversized type, thin-line cards, and a focused two-column information rhythm. Copy, product identity, imagery, and interaction design are new.

## Foundations

### Colour and atmosphere

| Token | Value | Use |
| --- | --- | --- |
| Ink | `#060806` | Page canvas |
| Panel | `#0E110F` / `#141816` | Elevated surfaces |
| Acid | `#C6ED52` | Primary action, emphasis, active iconography |
| White | `#F5F6F1` | Headings and high-emphasis copy |
| Muted | `#A9AEA4` | Secondary information |
| Line | `rgba(234,241,223,.22)` | Quiet 1px dividers and card borders |

The background uses a low-opacity 52px grid, an acid radial bloom in the upper-right, and a faint olive bloom lower-left. That gives depth without making the content harder to scan. Hover feedback is a 2px lift with a restrained acid glow.

### Type and rhythm

`Manrope` is the primary geometric sans; `DM Mono` adds a precise, operational feel to labels. Display type scales from 43px to 78px with `-.075em` tracking and `~1.0` line-height. Body is 10–15px at 1.45–1.5. The desktop shell is 1140px, with 24px page gutters (14px on mobile), 14–16px card gaps, and section breaks of 44–75px. The layout collapses at 760px; the two-column stat grid only becomes one column under 410px.

### Reusable components

| Component | Construction and behaviour |
| --- | --- |
| Navigation | 64px translucent bordered bar, 10px radius; desktop links give way to an accessible disclosure menu on mobile. |
| Button | 38px minimum height, 7px radius, 12px bold text, acid filled primary and dark outlined secondary; keyboard outline and lift hover. |
| Search | 54px field with icon, named label, submitted live status, and responsive full-width action. |
| Metric card | 1px line, 11px radius, 20–26px padding; large acid stat, label, and anchored explanatory detail. |
| Feature card | Large responsive content card with original CSS orbital artwork instead of copied photography. It has a gradient readability scrim, label, CTA, and avatar group. |
| Eyebrow / avatar group | Compact utility components that reinforce provenance and community while holding hierarchy below headings. |

All controls preserve visible focus styles, semantic landmarks, real form labels, adequate dark-theme contrast, and motion that is non-essential and brief.

## Section implementation notes

### 1. Navigation

**Purpose:** establish product identity, wayfinding, and one clear conversion path. **Layout:** centered 1140px shell, brand left, four links centered, session and action right. **Visual hierarchy:** neutral links defer to the acid-filled CTA. **Spacing:** 15px inner left, 10px right, 35px link gap. **Responsive:** links become a labelled menu button below 760px. **Why it works:** its lightly frosted surface separates navigation from the grid while keeping the page visually open.

Implemented in `app/page.tsx` as `nav`, `Button`, and the controlled mobile menu; the matching sizing, border and hover rules are in `app/globals.css`.

### 2. Hero and search

**Purpose:** explain value immediately and turn vague intent into a productive next step. **Layout:** narrow centered content column, badge → large headline → two-line support copy → search. **Typography:** 43–78px heavy display, with only the key phrase acid. **Spacing:** 27px from badge to headline; 18px to copy; 26px to search. **Responsive:** display scales with `clamp`; search wraps CTA underneath on small screens. **Interaction:** form updates an aria-live status; controls receive high-contrast focus. **Why it works:** the search turns a marketing promise into a tangible action.

Implemented as the `hero` section and controlled `query/message` form state.

### 3. Discovery showcase

**Purpose:** move from aspiration to credibility and a concrete service offer. **Layout:** 0.96/1.04 desktop split inside a quiet framed container. The left half is a two-column metric grid with a full-width manifesto. The right is one large feature card. **Cards:** 11px radius, 1px low-contrast border, no heavy shadow. **Image placement:** original procedural orbital artwork is positioned right/top beneath a deliberate dark scrim. **CTA:** sits below support copy, then reinforced by a footer row of avatars. **Responsive:** outer split becomes a single stack under 760px. **Why it works:** varied card density makes scanning feel editorial rather than dashboard-like.

Implemented with `MetricCard` and the `showcase`, `stats`, `manifesto`, and `feature-card` styles.

### 4. Social proof

**Purpose:** provide trust without interrupting the visual cadence. **Layout:** slim centered strip with mono label above four varied wordmarks. **Spacing:** 44px top and 68px bottom. **Responsive:** wordmarks wrap, then use a two-column grid. **Why it works:** subdued contrast lets proof add reassurance while preserving the CTA hierarchy.

Implemented as the `proof` section with original placeholder partners.

### 5. Closing CTA and footer

**Purpose:** give the page a final decision point, then provide a compact exit. **Layout:** a large left headline and action aligned to its baseline; footer is a 68px three-part line. **Colour:** repeated acid action creates a consistent conversion language. **Responsive:** CTA stacks and footer wraps cleanly. **Why it works:** generous whitespace makes the final invitation feel intentional rather than urgent.

Implemented as `closing` and `footer`, with a semantic back-to-top link.
