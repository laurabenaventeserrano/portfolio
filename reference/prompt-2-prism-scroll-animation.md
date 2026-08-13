# Scroll-driven prism animation — spec for Claude Code

The prism band (the rainbow bar in the story hero and in the site header) is the brand's
one moving element. It represents a white beam of light being refracted: complexity in,
full spectrum out. On the site it is driven by **scroll position**, not by a timer.

## The two states

- **Closed (beam)** — a narrow vertical white core, `10px` wide, `#FFFDF8`,
  `box-shadow: 0 0 40px 8px rgba(255,253,248,0.55)`, `filter: blur(1px)`. No colour visible.
- **Open (spectrum)** — the full band, `border-radius:999px`, carrying:
  `linear-gradient(90deg, rgba(12,10,11,0) 0%, #313CAA 12%, #587FDD 26%, #92C5E0 38%, #D9E3AB 50%, #F7CF77 62%, #E98C5E 72%, #DC4969 85%, #A63488 95%, rgba(12,10,11,0) 100%)`

## Markup

Two stacked elements in one relatively-positioned wrapper, both centred:

```html
<div class="prism" aria-hidden="true">
  <span class="prism__band"></span>  <!-- spectrum, scaleX driven -->
  <span class="prism__core"></span>  <!-- white beam, opacity driven -->
</div>
```

Both children use `transform-origin: center` and only ever animate `transform`,
`opacity` and `filter` — never `width`, `left` or `background-position`.

**Do not add a `background-size:200%` drift to the band.** The gradient wraps and visually
breaks into two blobs.

## Scroll mapping

Let `p` = 0→1, the normalised progress of the hero section through the viewport:
`p = clamp(0, 1, (scrollY - sectionTop + viewportHeight) / (viewportHeight + sectionHeight))`,
or simply the section's own `IntersectionObserver` / `animation-timeline: view()` progress.

Drive the animation from `p` on a `0 → 0.5 → 1` curve, easing `cubic-bezier(.6,0,.25,1)`:

| p | Band | Core |
|---|---|---|
| 0.00 | `scaleX(0.04)`, `blur(3px) saturate(1.8)` | `opacity:1`, `scaleY(1)` |
| 0.50 | `scaleX(1)`, `blur(18px) saturate(1.3)` | `opacity:0.12`, `scaleY(0.86)` |
| 0.82 | `scaleX(1.03)`, `blur(22px) saturate(1.2)` | `opacity:0.06`, `scaleY(0.9)` |
| 1.00 | `scaleX(0.04)`, `blur(3px) saturate(1.8)` | `opacity:1`, `scaleY(1)` |

So the beam splits open as the section scrolls in, holds the full spectrum while it owns
the viewport, and recombines into the beam as it scrolls out. Scrolling back up plays it
in reverse — the state is a pure function of `p`, never a triggered one-shot.

## Preferred implementation

Native scroll-driven animations where supported:

```css
@keyframes prismBand {
  0%   { transform: scaleX(0.04); filter: blur(3px) saturate(1.8); }
  50%  { transform: scaleX(1);    filter: blur(18px) saturate(1.3); }
  82%  { transform: scaleX(1.03); filter: blur(22px) saturate(1.2); }
  100% { transform: scaleX(0.04); filter: blur(3px) saturate(1.8); }
}
@keyframes prismCore {
  0%   { opacity: 1;    transform: scaleY(1); }
  50%  { opacity: 0.12; transform: scaleY(0.86); }
  82%  { opacity: 0.06; transform: scaleY(0.9); }
  100% { opacity: 1;    transform: scaleY(1); }
}
.prism__band {
  animation: prismBand linear both;
  animation-timeline: view();
  animation-range: entry 0% exit 100%;
}
.prism__core {
  animation: prismCore linear both;
  animation-timeline: view();
  animation-range: entry 0% exit 100%;
}
```

Fallback for browsers without `animation-timeline`: one `IntersectionObserver` +
a throttled `requestAnimationFrame` scroll handler that writes `p` to a CSS custom
property `--p` on the wrapper and interpolates the same four keyframes in JS.
Never attach an unthrottled `scroll` listener.

## Rules

- Duration is scroll, not time. If you ever need a time-based fallback (header logo on
  load, hover), use **7s** with `cubic-bezier(.6,0,.25,1)` — never faster; the dispersion
  must feel physical.
- `prefers-reduced-motion: reduce` → render the open spectrum band statically, no core,
  no scroll binding.
- The prism is decorative: `aria-hidden="true"`, never a link, never carries meaning
  that isn't also in text.
- One prism per viewport. Don't stack the animation on several bands at once.
- Same gradient, same stop order, everywhere. Never recolour or reverse it.
