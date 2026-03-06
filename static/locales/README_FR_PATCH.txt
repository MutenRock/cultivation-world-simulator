FR Patch (starter) for cultivation-world-simulator (WebMode build)

This archive adds a new locale folder: static/locales/fr-FR (same structure as en-US).
- Most strings are copied from en-US (English fallback)
- Key small modules have been translated to French:
  modules/common.po, cultivation.po, single_choice.po, option_a.po, option_b.po,
  execution_results.po, simulator.po, stage.po, essence_type.po, death_reasons.po,
  direction_names.po, labels.po, realm.po, gender.po, alignment.po, ui.po

Install:
1) Copy the folder `fr-FR` next to `en-US` inside your app's locales directory.
   - In WebMode build: `static/locales/`
2) In your game/app settings, switch locale to `fr-FR` if supported (or set env/param accordingly).

Note: LC_MESSAGES/*.mo are currently copied from en-US (English) to keep compatibility.
If you want full French for the gettext-powered backend strings, you will need to translate
`LC_MESSAGES/messages.po` and `LC_MESSAGES/game_configs.po` then compile to .mo.
