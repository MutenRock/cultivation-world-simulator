# Msgid Comparison Across Locales (zh-CN, en-US, zh-TW)

## 1. File Coverage Summary

- Files in all 3 locales: 55
- Files in 2 locales only: 1
- Files in 1 locale only: 13

### Files missing in some locales
- `modules/misc.po`: present in [zh-CN, zh-TW], missing in [en-US]

### Files in only one locale
- `game_configs_modules/misc.po`: only in en-US
- `modules/condition_translation.po`: only in en-US
- `modules/decision_description.po`: only in en-US
- `modules/default_values.po`: only in en-US
- `modules/event_content.po`: only in en-US
- `modules/execution_results.po`: only in en-US
- `modules/formatted_strings.po`: only in en-US
- `modules/item_verbs.po`: only in en-US
- `modules/option_a.po`: only in en-US
- `modules/option_b.po`: only in en-US
- `modules/scene_setting.po`: only in en-US
- `modules/separators.po`: only in en-US
- `modules/story_generation_text.po`: only in en-US

## 2. Msgid Differences (within files present in multiple locales)

Found 8 file(s) with differing msgids.

### `game_configs_modules/world_info.po`
- **Missing in:** en-US (16 msgid(s))
  - `WORLD_INFO_ACTION_TITLE`
  - `WORLD_INFO_AUCTION_TITLE`
  - `WORLD_INFO_BATTLE_TITLE`
  - `WORLD_INFO_CULTIVATION_TITLE`
  - `WORLD_INFO_DEATH_TITLE`
  - `WORLD_INFO_EQUIPMENT_AND_ELIXIR_TITLE`
  - `WORLD_INFO_INTRO_TITLE`
  - `WORLD_INFO_LIFESPAN_TITLE`
  - `WORLD_INFO_REALM_TITLE`
  - `WORLD_INFO_REGION_TITLE`
  - `WORLD_INFO_ROOT_TITLE`
  - `WORLD_INFO_SECRET_REALM_TITLE`
  - `WORLD_INFO_SECT_TITLE`
  - `WORLD_INFO_SHOPPING_TITLE`
  - `WORLD_INFO_SPIRIT_STONE_TITLE`
  - `WORLD_INFO_WORLD_QI_TITLE`

### `modules/action.po`
- **Missing in:** zh-CN, zh-TW (35 msgid(s))
  - `appearance_10_desc_female`
  - `appearance_10_desc_male`
  - `appearance_10_name`
  - `appearance_1_desc_female`
  - `appearance_1_desc_male`
  - `appearance_1_name`
  - `appearance_2_desc_female`
  - `appearance_2_desc_male`
  - `appearance_2_name`
  - `appearance_3_desc_female`
  - `appearance_3_desc_male`
  - `appearance_3_name`
  - `appearance_4_desc_female`
  - `appearance_4_desc_male`
  - `appearance_4_name`
  - `appearance_5_desc_female`
  - `appearance_5_desc_male`
  - `appearance_5_name`
  - `appearance_6_desc_female`
  - `appearance_6_desc_male`
  - `appearance_6_name`
  - `appearance_7_desc_female`
  - `appearance_7_desc_male`
  - `appearance_7_name`
  - `appearance_8_desc_female`
  - `appearance_8_desc_male`
  - `appearance_8_name`
  - `appearance_9_desc_female`
  - `appearance_9_desc_male`
  - `appearance_9_name`
  - `comma_separator`
  - `semicolon_separator`
  - `{label}: {names}`
  - `{root_name} ({elements})`
  - `{sect} {rank}`

### `modules/fortune.po`
- **Missing in:** zh-CN, zh-TW (12 msgid(s))
  - `But you already have『{auxiliary_name}』.`
  - `But you already have『{weapon_name}』.`
  - `This conflicts with your current technique『{technique_nam...`
  - `Comprehended technique『{technique_name}』, {exchange_text}`
  - `Discovered auxiliary『{auxiliary_name}』, {exchange_text}`
  - `Discovered weapon『{weapon_name}』, {exchange_text}`
  - `You comprehended an upper-grade technique『{technique_name...`
  - `You discovered a {realm} auxiliary『{auxiliary_name}』in yo...`
  - `You discovered a {realm} weapon『{weapon_name}』in your for...`
  - `{avatar_name} became disciple of {master_name}`
  - `{avatar_name} gained {exp_gain} cultivation experience`
  - `{avatar_name} obtained {amount} spirit stones`

### `modules/labels.po`
- **Missing in:** zh-CN, zh-TW (6 msgid(s))
  - `【Related Avatars Information】`
  - `item_label_auxiliary`
  - `item_label_elixir`
  - `item_label_technique`
  - `item_label_weapon`
  - `【Auction Items Information】`

### `modules/relation.po`
- **Missing in:** en-US, zh-TW (13 msgid(s))
  - `grand_child`
  - `grand_parent`
  - `martial_grandchild`
  - `martial_grandmaster`
  - `martial_sibling`
  - `relation_granddaughter`
  - `relation_grandfather`
  - `relation_grandmother`
  - `relation_grandson`
  - `relation_martial_older_brother`
  - `relation_martial_older_sister`
  - `relation_martial_younger_brother`
  - `relation_martial_younger_sister`

### `modules/root_element.po`
- **Missing in:** zh-CN, zh-TW (40 msgid(s))
  - `(Alignment: {alignment}, Style: {style}, Headquarters: {h...`
  - `(Unknown technique)`
  - `Current World Phenomenon`
  - `Drops: {materials}`
  - `History`
  - `Unknown character`
  - `When alignment is {align}`
  - `When using {weapon_type}`
  - `Wilderness`
  - `[{name}] ({realm})`
  - `action_thinking`
  - `battle`
  - `date_format_year_month`
  - `old_age`
  - `phenomenon_format`
  - `relation_rule_apprentice_add`
  - `relation_rule_apprentice_cancel`
  - `relation_rule_cancel_title`
  - `relation_rule_enemy_add`
  - `relation_rule_enemy_cancel`
  - `relation_rule_establish_title`
  - `relation_rule_friend_add`
  - `relation_rule_friend_cancel`
  - `relation_rule_lovers_add`
  - `relation_rule_lovers_cancel`
  - `relation_rule_master_add`
  - `relation_rule_master_cancel`
  - `sect_headquarters_desc_format`
  - `serious_injury`
  - `{alignment}: {description}`
  - `{name} ({attribute}) {grade}`
  - `{name} ({attribute}) {grade} {desc}{effect}`
  - `{name} ({attribute}·{grade})`
  - `{name} ({desc}{effect})`
  - `{name} ({realm})`
  - `{name} ({type}·{realm}, {desc}){effect}`
  - `{name} has ascended to a cultivator.`
  - `{name}: {desc} ({realm})`
  - `{realm} {stage} (Level {level}) {status}`
  - `{realm} {stage} (Level {level}). At bottleneck: {status}`

### `modules/sect.po`
- **Missing in:** en-US (75 msgid(s))
  - `(Alignment: {alignment}, Style: {style}, Headquarters: {h...`
  - `(Unknown technique)`
  - `Current World Phenomenon`
  - `Drops: {materials}`
  - `History`
  - `Unknown character`
  - `When alignment is {align}`
  - `When using {weapon_type}`
  - `Wilderness`
  - `[{name}] ({realm})`
  - `action_thinking`
  - `appearance_10_desc_female`
  - `appearance_10_desc_male`
  - `appearance_10_name`
  - `appearance_1_desc_female`
  - `appearance_1_desc_male`
  - `appearance_1_name`
  - `appearance_2_desc_female`
  - `appearance_2_desc_male`
  - `appearance_2_name`
  - `appearance_3_desc_female`
  - `appearance_3_desc_male`
  - `appearance_3_name`
  - `appearance_4_desc_female`
  - `appearance_4_desc_male`
  - `appearance_4_name`
  - `appearance_5_desc_female`
  - `appearance_5_desc_male`
  - `appearance_5_name`
  - `appearance_6_desc_female`
  - `appearance_6_desc_male`
  - `appearance_6_name`
  - `appearance_7_desc_female`
  - `appearance_7_desc_male`
  - `appearance_7_name`
  - `appearance_8_desc_female`
  - `appearance_8_desc_male`
  - `appearance_8_name`
  - `appearance_9_desc_female`
  - `appearance_9_desc_male`
  - `appearance_9_name`
  - `battle`
  - `comma_separator`
  - `date_format_year_month`
  - `old_age`
  - `phenomenon_format`
  - `relation_rule_apprentice_add`
  - `relation_rule_apprentice_cancel`
  - `relation_rule_cancel_title`
  - `relation_rule_enemy_add`
  - `relation_rule_enemy_cancel`
  - `relation_rule_establish_title`
  - `relation_rule_friend_add`
  - `relation_rule_friend_cancel`
  - `relation_rule_lovers_add`
  - `relation_rule_lovers_cancel`
  - `relation_rule_master_add`
  - `relation_rule_master_cancel`
  - `sect_headquarters_desc_format`
  - `semicolon_separator`
  - `serious_injury`
  - `{alignment}: {description}`
  - `{label}: {names}`
  - `{name} ({attribute}) {grade}`
  - `{name} ({attribute}) {grade} {desc}{effect}`
  - `{name} ({attribute}·{grade})`
  - `{name} ({desc}{effect})`
  - `{name} ({realm})`
  - `{name} ({type}·{realm}, {desc}){effect}`
  - `{name} has ascended to a cultivator.`
  - `{name}: {desc} ({realm})`
  - `{realm} {stage} (Level {level}) {status}`
  - `{realm} {stage} (Level {level}). At bottleneck: {status}`
  - `{root_name} ({elements})`
  - `{sect} {rank}`

### `modules/story_styles.po`
- **Missing in:** zh-CN (13 msgid(s))
  - `grand_child`
  - `grand_parent`
  - `martial_grandchild`
  - `martial_grandmaster`
  - `martial_sibling`
  - `relation_granddaughter`
  - `relation_grandfather`
  - `relation_grandmother`
  - `relation_grandson`
  - `relation_martial_older_brother`
  - `relation_martial_older_sister`
  - `relation_martial_younger_brother`
  - `relation_martial_younger_sister`

## 3. Action Plan

To align msgids across locales:

1. **Add missing .po files**: Create the missing locale files for files listed in §1.
2. **Add missing msgids**: For each msgid listed in §2, add the entry to the locale(s) where it is missing.
   - Copy the msgid and add an appropriate msgstr (or empty msgstr for placeholder).
