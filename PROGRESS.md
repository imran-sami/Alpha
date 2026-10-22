# ALPHA - redesign progress

Goal: pages look like the reference pictures; app icon and all functionality unchanged.

## Pages - ALL DONE
- [x] Home (header, Start card, categories, stats, hourly timeline)
- [x] Vault (storage rings/treemap/bubbles/bars, quick overview, 9 category tiles, search)
- [x] Category pages (drop zone, files list, select mode + bottom bar, three-dots menu)
- [x] Settings dialog (left tabs, profile, language dropdown, theme spheres, time format, location, Security row, Save changes)

## Themes - DONE
- [x] Light themes (Pearl, Sky, Mint, Peach, Lavender): every page re-coloured with bright glass cards and dark readable text (sidebar, header, cards, charts, drop zone, file rows, Settings)
- [x] Dark themes (ALPHA Night, Sunset, etc.) keep the neon dark look
- [x] Settings theme row is one line like the reference (selected theme first), "More" shows the rest

## Notes / deviations
- Visual layer only: <style id="alpha-skin"> + <script id="alpha-skin-js"> at the end of index.html
- Category page: reference "Save" -> "Move to..." (ALPHA saves uploads instantly); "Max 100 MB" -> "No size limit"
- Vault: "Folders"/"Hidden files" tiles show In trash / Persistent storage (no such features in ALPHA)
- Settings: Location row is display-only; bell button from the references is not included
- Service-worker cache bumped to v31

## Lock screen redesign - DONE
- Neon-glass unlock screen matching the reference (gradient-edged glass card, ringed logo, pill fields with icons, eye + clear buttons, gradient Unlock button, link rows, footer)
- Visual layer only: <style id="alpha-lock-skin"> + <script id="alpha-lock-skin-js"> at the end of index.html. App emblem, ids, handlers, PIN/password/pattern logic, lockout, sign-in and recovery are untouched
- Lock screen stays dark neon in every theme
- Service-worker cache bumped to v33

## Theme sync - DONE
- Lock screen now follows the selected theme: light themes (Pearl, Sky, Mint, Peach, Lavender) get a bright glass lock screen with dark text; dark themes keep the neon look re-coloured to the theme
- <style id="alpha-theme-fix"> + <script id="alpha-theme-sync-js"> at the end of index.html re-tint the skin and lock stylesheets (OKLCH hue rotation, lightness kept so contrast is kept) whenever the theme changes. ALPHA Night is the reference palette; category colours are never shifted
- Early <head> script sets data-t/data-theme before first paint (no dark/light flash)
- Readability fixes: gradient buttons (Start, Upload, Save changes) darkened, muted text darkened on light themes
- Service-worker cache bumped to v34

## Insights redesign - DONE
- Insights page now uses neon-glass cards matching the reference (gradient icon tile, count badge, title, "View details", round arrow button, coloured glow art, "Smarter files. Better you." banner, full-width Productivity card)
- Visual layer only: <style id="alpha-insights-skin"> + <script id="alpha-insights-skin-js"> at the end of index.html. Tiles stay the same buttons with data-k and the same click handlers; detail charts are untouched. App icon unchanged
- Works in dark and light themes
- Service-worker cache bumped to v35

## Mobile audit & fixes - DONE
- Tested 320 / 360 / 390 / 430 px: every page, Settings, Insights detail popups, Vault with files, all 9 category pages, Calendar, Quotes
- Fixed: Insights title wrapping next to banner (banner shrinks, hidden under 340px); Settings tab strip clipped with no hint (now fades + snaps); Vault slightly wider than screen at 320px; Vault header text squeezed by 112px reserved padding; long file names collapsing to one letter per line; "Files" heading / "Select items" wrapping
- Visual layer only: <style id="alpha-mobile-fixes"> at the end of index.html
- Service-worker cache bumped to v36

## Lock screen: no box - DONE
- Removed the rectangular glass card/border around the lock form; logo, fields, Unlock button, 3 option rows (Sign In, Recover, Reset) and footer now sit directly on the screen in one aligned column (mobile + PC)
- Visual layer only: <style id="alpha-lock-open"> at the end of index.html. Handlers/ids/logic untouched
- Service-worker cache bumped to v37
