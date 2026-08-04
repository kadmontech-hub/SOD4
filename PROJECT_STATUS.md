# SØD Ecosystem — Project Status

## Release

**Visual MVP V3.0.2 — Canonical Panoramic Hub**

## Change scope

The application remains functionally identical to V3.0.1. The main Hub now uses the approved panorama supplied by the founder. The four visible portals are functional and the rest of the ecosystem remains available through the existing navigation.

## Hub source

- Original reference: `https://i.imgur.com/qqAwrcx.png`
- Local production asset: `public/assets/hub/hub-main-360.png`
- Included in the repository to avoid external-host or Content Security Policy failures.

## Reliability

- Startup fallback is visible before JavaScript mounts.
- Runtime bootstrap errors show recovery actions instead of a black screen.
- Service worker cache version: `sod-shell-v3.0.2`.
