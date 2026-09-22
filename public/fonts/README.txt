Licensed brand fonts
====================

DevinExplained ships with open fallbacks (Geist Variable, Geist Mono
Variable, Source Serif 4 Variable). The real brand faces — NB
International Pro (neo-grotesque) and STK Bureau Serif (book serif) —
are commercial and are NOT included.

If you hold a licence:

1. Copy the .woff2 files into this folder, using these names:

     NBInternationalPro-Light.woff2        (300)
     NBInternationalPro-Regular.woff2      (400)
     NBInternationalPro-Medium.woff2       (500)
     NBInternationalPro-Bold.woff2         (700)
     STKBureauSerif-Light.woff2            (300)
     STKBureauSerif-Regular.woff2          (400)
     STKBureauSerif-RegularItalic.woff2    (400 italic)
     STKBureauSerif-Semibold.woff2         (600)

2. Open src/themes/fonts-licensed.css and uncomment the @font-face
   blocks. The theme variables already reference
   'NB International Pro' and 'STK Bureau Serif' first, so the fonts
   take over everywhere with no other code change.

3. Rebuild (pnpm build) or restart the dev server.
