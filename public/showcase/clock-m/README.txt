Clock-M showcase screenshots
============================

Folder layout (note: I renamed "showcase des" -> "des" and "showcase mob" -> "mob"
so the URLs have no spaces — drop future files into these folders):

  des/   desktop screenshots (landscape, 2940x1912) — shown on wider screens
  mob/   mobile screenshots  (portrait,  758x1640)  — shown on phone-sized screens

Still missing (currently rendered as labelled placeholder tiles):

  1. Native mobile app  (the React Native companion app)  — tall bento tile
  2. AI assistant chat                                     — small tile
  3. File storage view                                     — small tile

When you have them, add the files and update the matching entries in:
  src/app/content/showcase/clockM.ts   (the `screenshots` array)
— fill in `srcDesktop` (and `srcMobile` if you have a portrait shot) on the
entries that currently have neither; the placeholder disappears automatically.

Each screenshot entry there also has a `size` field that controls its bento
tile: "hero" (4x3), "tall" (2x3), "wide" (3x2), "small" (2x2). Tiles are laid
out in array order, and each band must sum to 6 columns to pack without gaps.
