Clock-M showcase screenshots
============================

Folder layout (note: I renamed "showcase des" -> "des" and "showcase mob" -> "mob"
so the URLs have no spaces — drop future files into these folders):

  des/     desktop screenshots (landscape, 2940x1912) — shown on wider screens
  mob/     mobile screenshots  (portrait,  758x1640)  — shown on phone-sized screens
  rn-ai/   React Native app + AI assistant shots:
             native-app.png    portrait phone (timer screen) — bento "tall" tile,
                                also the skewed phone overlay on the homepage card
             native-app-2.png  spare phone shot (workspace switcher) — unused
             ai-assistant.png  AI chat with a streamed response — bento "wide" tile
             ai-prompt.png     AI chat with only the prompt (no response) — unused

The native-app and AI tiles are now filled. The former "File storage" placeholder
tile was removed from the bento grid.

To add more entries, update src/app/content/showcase/clockM.ts (the `screenshots`
array). Fill `srcDesktop` (and `srcMobile` if you have a portrait shot); an entry
with neither renders as a labelled placeholder tile.

Each screenshot entry has a `size` field that controls its bento tile:
"hero" (4x3), "tall" (2x3), "wide" (3x2), "small" (2x2). Tiles are laid out in
array order, and each band must sum to 6 columns to pack without gaps.
