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

## Storage = 100 GB + stable location - DONE
- Storage is now a fixed 100 GB. Used = real size of all files in the vault (incl. trash, excl. avatar); Free = 100 GB - used; % shown with proper precision. Rings, legend, "Total storage" detail, old meter and the upload space check all use the same numbers (no more browser/device quota or "other site data")
- Location: read once, cached in localStorage ('alpha.loc'); never changes while the app is in use, no repeated permission prompts (denied is remembered). Home clock no longer rewrites the location/date text every second
- Service-worker cache bumped to v38

## Vault storage: one place, light & minimal - DONE
- Root cause of the duplicate charts: skinVault() built the Storage card (with its own Rings/Treemap/Bubbles/Bars switch) AND three always-on panels (Treemap, Bubbles, Bars) under it. The three panels and their fill code are removed, so each chart exists only once and the switch is the only way to change it
- Removed the leftover "Device storage" row/legend/bar entry and the duplicate legend and hint lines
- Subtitle + thin bar show used of 100 GB; Quick overview and category tiles restyled flat (theme variables, works in dark + light + mobile)
- Visual layer only: <style id="alpha-vault-minimal"> at the end of index.html
- Service-worker cache bumped to v39

## Vault: new compact diagrams - DONE
- The four chart views (Rings / Treemap / Bubbles / Bars) are replaced by four new compact shapes, all 220x120: Gauge (half-circle), Dots (100 dots = 100% of the files), Columns (rounded pills) and Meter (stacked capsule + 0-100 GB scale). Default is Gauge
- Storage card is ~230px tall (was 300+); Quick overview tiles are compact; clicking any shape still opens the same category detail
- Visual layer only (skinVault viz functions + <style id="alpha-vault-minimal">). Service-worker cache bumped to v40

## Vault: Orbit / Tide / Bloom / Flow diagrams - DONE
- Replaced Gauge/Dots/Columns/Meter with four new minimal shapes (220x120): Orbit (thin rings + planets), Tide (drifting layered waves; respects reduced-motion), Bloom (petal flower), Flow (ribbons splitting the vault into file types). Default = Orbit
- Category list is capped at ~5 rows and scrolls, so the card stays compact with many file types. Click on any shape still opens the same category details
- Service-worker cache bumped to v41

## Vault: signature diagrams - DONE
- Replaced Orbit/Tide/Bloom/Flow with four new 240x150 shapes: Dial (vault door: ticking bezel, category arcs on the lock ring, spoked wheel + keyhole), Hive (61-cell honeycomb, each file type owns a spiral of cells), Towers (isometric glass skyline, height = size, % labels), Stars (constellation, vault = sun, star size = share). Default = Dial
- Hover highlights a whole category; click still opens the category details. Animations respect reduced-motion; works in dark + light themes
- Service-worker cache bumped to v42

## Files actions: Google Files style - DONE
- Whole file-actions system rebuilt on the Google Files pattern (new module <style id="alpha-gf-css"> + <script id="alpha-gf-js"> at the end of index.html; 2 tiny hooks in the old selection script: paint() calls window.__gfSync, and window.__gfSel exports the selection helpers)
- Confirm box (the Cancel/Confirm popup) -> Material dialog (title, text, Cancel / Delete|Erase|Confirm text buttons)
- Selection mode: top app bar (X, "N selected", Select all, Share, Trash, 3-dot). Trash page: Restore / Delete forever. Old bottom bar hidden for files
- Row 3-dot (and right-click) -> bottom sheet: Open, Share, Copy to, Move to, Rename, Star, Info, Save to device, Edit text, Move to trash
- Copy to / Move to -> full-screen destination picker with "Copy here / Move here" bar and progress snackbar
- Snackbar with Undo for trash, move, copy, restore. Permanent delete asks first
- Rename dialog (name preselected, duplicate + illegal-character check), Info sheet, Starred files + Starred filter
- Sort by sheet (Name / Modified / Size / Type, asc/desc), List/Grid toggle, empty states (files, trash, no results); choices remembered
- Image/video/audio viewer: pinch zoom, double-tap zoom, mouse-wheel zoom, +/- buttons, drag to pan, swipe / arrow keys for next-previous, tap to hide bars, top bar Share / Trash / Info menu
- Keyboard: Esc, Ctrl+A, Delete. Android back button closes sheet / viewer / selection first (alpha-native.js)
- Service-worker cache bumped to v50

## Vault: Files by Google rebuild - DONE
- Old Vault UI (Dial/Hive/Towers/Stars, Quick overview, category tiles) replaced by a Files-by-Google style module: <style id="alpha-gv-css"> + <script id="alpha-gv-js"> at the end of index.html. Data layer (IndexedDB, encryption, categories, trash, starred) unchanged
- Home: search pill, Recent, Categories, Collections (Favorites, Trash), Storage; category list/grid, sort, selection mode, row sheet, rename, copy/move picker, snackbar+Undo, Trash, Favorites, search, viewer
- Removed: storage diagrams, Quick overview, "New file" button, pinch-zoom viewer (tap-to-zoom now). Text files still editable from the menu
- Service-worker cache bumped to v51

## Vault storage page - DONE
- Vault home Storage = one option row; tap opens a Storage page (Overview gauge + stats, Categories donut, Treemap, Bubbles, Largest files bars, Activity columns). Cache v58

## Vault storage page: Files by Google style - DONE
- Storage page restyled like Files by Google (Material 3): app bar, filter chips, rounded cards, pill buttons, category icons, Google wording. Tabs: Overview, Categories, Large files, Activity (Treemap and Bubbles removed)

## Recent page, no floating Add session, splash + logos - DONE
- Vault home: "Recent" is its own row; tapping opens a Recent page (Files by Google style: app bar, category chips, list/grid, newest first, same selection/menus)
- "Add session" floating button removed everywhere (Home card header button + menu items instead); floating items can no longer sit above the lock screen
- Native Android: adaptive launcher icon + dark splash without icon (scripts/patch-android.sh); first screen is now the in-app ALPHA intro
- Header "ALPHA" wordmark now shows on small phones too; intro/lock logo enlarged

## v2: system-bar insets + PDF / Notepad++ / Slides viewers - DONE
- Insets: MainActivity (written by scripts/patch-android.sh) -> window.AlphaInsets -> --sa-* CSS variables; all env(safe-area-inset-*) replaced
- New files: alpha-viewers.js (UI kit + PDF), alpha-editor.js (text/code), alpha-slides.js (presentations), vendor/pdf.min.js + pdf.worker.min.js
- Tested: tokenizer/encodings (node), generated .pptx opens in python-pptx and round-trips, jsdom smoke test of editor/create/save/slides (27 checks)
- NOT tested on a real device / APK build (no Android SDK in the authoring environment)

## Layout fix v1 - DONE
- <style id="alpha-layout-fix"> before the viewer scripts in index.html: full-screen layers (.av viewers, Slides editor, #rdr, .gf-ov, .gv-ov) stop above the system navigation bar; tile/heading text wraps with padding; home greeting/More no longer overlap; Slides thumbnail strip no longer clipped. Service-worker cache v52.

## Profile photo + focus goal fixes - DONE
- Top-right profile icon now only shows the profile picture (full view, back to close). Settings is still in the menu drawer.
- Settings: "Profile photo" row removed; tapping the avatar adds/changes the photo (saved at once); "Remove photo" pill button appears under the name when a photo exists.
- Focus goal page: "Save" button no longer wraps onto two lines.
