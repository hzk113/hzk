const gameData = {
  schemaVersion: 1,
  title: 'おこしてますだ',
  titleNeedsReview: false,
  stage: {
    id: 'home-lv1',
    level: 1,
    name: 'おうち',
    characterOrder: ['haruma', 'futa', 'mama', 'hazuki', 'papa'],
  },
  settings: {
    inventoryCapacity: 20,
    consumeNormalItemOnUse: true,
    consumeNeutralItemOnUse: true,
    allowDuplicateItems: true,
    specialExtraWakeChance: 0.2,
    specialExtraWakeMaxCount: 1,
    bonusWakeGrantsReward: false,
    defaultHardMode: false,
    saveKey: 'okoshite-masuda-save-v1',
  },
  actions: [
    { id: 'poke', label: 'つんつん', caption: '指でちょんちょん' },
    { id: 'tickle', label: 'こちょこちょ', caption: 'くすぐってみる' },
    { id: 'pat', label: 'とんとん', caption: 'やさしくたたく' },
    { id: 'flutter', label: 'バタバタ', caption: 'まわりでさわぐ' },
    { id: 'random', label: 'おまかせ', caption: '4つからランダム' },
  ],
  characters: [
    {
      id: 'haruma',
      order: 1,
      displayName: 'はるま',
      avatarImage: './assets/avatars/no1.png',
      profileHints: ['⚽ あそぶのすき', '💤 ねおきは気分しだい'],
      successActionPatterns: [['tickle'], ['poke', 'poke']],
      angerActionPatterns: [['pat', 'pat'], ['flutter', 'flutter', 'flutter']],
      effectiveNormalItemIds: [6, 8, 15, 14, 23, 30, 29, 28],
      badNormalItemIds: [27, 24],
      reward: { pool: 'normal', count: 1 },
    },
    {
      id: 'futa',
      order: 2,
      displayName: 'ふうた',
      avatarImage: './assets/avatars/no2.png',
      profileHints: ['📺 音に反応', '🧸 おもちゃが好き'],
      successActionPatterns: [['tickle', 'tickle', 'tickle'], ['poke', 'tickle']],
      angerActionPatterns: [['pat', 'pat'], ['poke', 'poke']],
      effectiveNormalItemIds: [5, 4, 1, 17, 18, 20, 22],
      badNormalItemIds: [28, 11],
      reward: { pool: 'normal', count: 2 },
    },
    {
      id: 'mama',
      order: 3,
      displayName: 'ママ',
      avatarImage: './assets/avatars/no3.png',
      profileHints: ['🍞 においに強い', '🌬 風が気になる'],
      successActionPatterns: [['poke', 'poke', 'flutter']],
      angerActionPatterns: [['poke', 'flutter']],
      effectiveNormalItemIds: [1, 2, 26, 13, 14, 24],
      badNormalItemIds: [15, 4, 10],
      reward: { pool: 'normal', count: 3 },
    },
    {
      id: 'hazuki',
      order: 4,
      displayName: 'はづき',
      avatarImage: './assets/avatars/no4.png',
      profileHints: ['🎻 音がヒント', '🧊 ひんやり注意'],
      successActionPatterns: [['tickle', 'pat', 'tickle', 'pat']],
      angerActionPatterns: [['flutter', 'flutter'], ['pat', 'pat']],
      effectiveNormalItemIds: [3, 7, 10, 19, 20],
      badNormalItemIds: [11, 5, 21, 22, 23],
      reward: { pool: 'normal', count: 4 },
    },
    {
      id: 'papa',
      order: 5,
      displayName: 'パパ',
      avatarImage: './assets/avatars/no5.png',
      profileHints: ['☕ コーヒーが鍵', '🪄 スペシャルに強い'],
      successActionPatterns: [['poke', 'poke', 'pat', 'pat', 'poke', 'flutter']],
      angerActionPatterns: [['tickle'], ['poke', 'poke', 'poke'], ['pat', 'pat', 'pat', 'flutter']],
      effectiveNormalItemIds: [9, 25],
      badNormalItemIds: [13, 1, 6, 18, 19, 29, 24],
      reward: { pool: 'special', count: 1 },
    },
  ],
  normalItems: [
    { id: 1, name: 'にゃんにゃんアラーム', needsReview: false },
    { id: 2, name: 'やきたてのパン', needsReview: false },
    { id: 3, name: 'ヴァイオリンの音色', needsReview: false },
    { id: 4, name: 'キラキラライト', needsReview: false },
    { id: 5, name: 'テレビの音', needsReview: false },
    { id: 6, name: 'でんきのリモコン', needsReview: false },
    { id: 7, name: 'おたまとフライパン', needsReview: false },
    { id: 8, name: 'ぬいぐるみ', needsReview: false },
    { id: 9, name: 'いれたてのコーヒー', needsReview: false },
    { id: 10, name: '笛', needsReview: false },
    { id: 11, name: 'せんぷうき', needsReview: false },
    { id: 12, name: 'アイスリング', needsReview: false },
    { id: 13, name: 'とうがらし', needsReview: true },
    { id: 14, name: 'アロマスプレー', needsReview: false },
    { id: 15, name: '大きな声', needsReview: false },
    { id: 16, name: 'iPad', needsReview: false },
    { id: 17, name: 'おもちゃ', needsReview: false },
    { id: 18, name: 'レモンパワー', needsReview: false },
    { id: 19, name: 'やかん', needsReview: false },
    { id: 20, name: 'ぬれたタオル', needsReview: false },
    { id: 21, name: '氷の玉', needsReview: false },
    { id: 22, name: 'ねこじゃらし', needsReview: true },
    { id: 23, name: 'ボール', needsReview: false },
    { id: 24, name: 'スリッパ', needsReview: false },
    { id: 25, name: 'ステッキ', needsReview: false },
    { id: 26, name: 'クーラー', needsReview: false },
    { id: 27, name: 'おにのでんわ', needsReview: false },
    { id: 28, name: 'ブーメラン', needsReview: false },
    { id: 29, name: 'しりとり', needsReview: true },
    { id: 30, name: 'おこしロボット', needsReview: false },
  ],
  specialItems: [
    { id: 'A', name: 'ばあばからのでんわ', needsReview: true, wakeMode: 'target-plus-chance' },
    { id: 'B', name: 'まほうのプロジェクター', needsReview: false, wakeMode: 'target-plus-chance' },
    { id: 'C', name: 'スペシャルエナジードリンク', needsReview: false, wakeMode: 'target-plus-chance' },
    { id: 'D', name: 'へんしんシュークリーム', needsReview: false, wakeMode: 'target-plus-chance' },
    { id: 'E', name: 'にじいろのトランペット', needsReview: false, wakeMode: 'target-plus-chance' },
    { id: 'F', name: 'おこしてクリスタル', needsReview: false, wakeMode: 'all-sleeping' },
    { id: 'G', name: 'しあわせクローバー', needsReview: true, wakeMode: 'all-sleeping' },
  ],
}

const sleepingFaces = {
  sleeping: '😴',
  reacting: '😯',
  awake: '😊',
  angry: '😠',
}

const faceImageDefaults = {
  sleeping: './assets/faces/sleeping.png',
  reacting: './assets/faces/reacting.png',
  angry: './assets/faces/angry.png',
  awake: './assets/faces/awake.png',
}

function renderItemIcon(item) {
  if (!item) {
    return ''
  }

  if (item.type === 'special') {
    return `
      <img class="item-icon-image" src="./assets/items/special-${item.id}.png" alt="ID.${item.id}" loading="lazy" decoding="async" onerror="this.onerror=null;this.replaceWith(document.createTextNode('✨'));" />
    `
  }

  const imagePath = `./assets/items/no${item.id}.png`
  return `
    <img class="item-icon-image" src="${imagePath}" alt="No.${item.id}" loading="lazy" decoding="async" onerror="this.onerror=null;this.replaceWith(document.createTextNode('📦'));" />
  `
}

function renderCharacterAvatar(character, isAwake = false) {
  const characterNo = Number.isInteger(character.order) ? character.order : 0
  const characterAwakePath = characterNo > 0 ? `./assets/faces/no${characterNo}-awake.png` : faceImageDefaults.awake
  const characterSleepingPath = characterNo > 0 ? `./assets/faces/no${characterNo}-sleeping.png` : faceImageDefaults.sleeping

  if (isAwake) {
    return `
      <img class="character-avatar-image" src="${characterAwakePath}" alt="${character.displayName}" loading="lazy" decoding="async" onerror="this.onerror=null;if(this.src.endsWith('${faceImageDefaults.awake.replace('./', '')}')){this.replaceWith(document.createTextNode('${sleepingFaces.awake}'));}else{this.src='${faceImageDefaults.awake}';}" />
    `
  }

  return `
    <img class="character-avatar-image" src="${characterSleepingPath}" alt="${character.displayName}" loading="lazy" decoding="async" onerror="this.onerror=null;if(this.src.endsWith('${faceImageDefaults.sleeping.replace('./', '')}')){this.replaceWith(document.createTextNode('${sleepingFaces.sleeping}'));}else{this.src='${faceImageDefaults.sleeping}';}" />
  `
}

function renderStateFace(character, challengeState) {
  const fallback = sleepingFaces[challengeState] || sleepingFaces.sleeping
  const defaultPath = faceImageDefaults[challengeState] || faceImageDefaults.sleeping
  const characterNo = Number.isInteger(character.order) ? character.order : 0
  const stateKey = challengeState || 'sleeping'
  const characterPath = characterNo > 0 ? `./assets/faces/no${characterNo}-${stateKey}.png` : defaultPath
  return `
    <img class="character-face-image" src="${characterPath}" alt="${renderStateLabel(challengeState)}" loading="eager" decoding="async" onerror="this.onerror=null;if(this.src.endsWith('${defaultPath.replace('./', '')}')){this.replaceWith(document.createTextNode('${fallback}'));}else{this.src='${defaultPath}';}" />
  `
}

const saveStorage = {
  load() {
    try {
      const raw = window.localStorage.getItem(gameData.settings.saveKey)
      if (!raw) {
        return null
      }

      const parsed = JSON.parse(raw)
      if (!parsed || parsed.schemaVersion !== gameData.schemaVersion) {
        return null
      }

      return parsed
    } catch (error) {
      console.warn('save load failed', error)
      return null
    }
  },

  save(currentState) {
    try {
      const payload = {
        schemaVersion: gameData.schemaVersion,
        state: {
          screen: currentState.screen,
          challengeCharacterId: currentState.challengeCharacterId,
          challengeState: currentState.challengeState,
          hardMode: currentState.hardMode,
          hintCount: currentState.hintCount,
          inputHistory: currentState.inputHistory,
          reactionMessage: currentState.reactionMessage,
          selectedItemIndex: currentState.selectedItemIndex,
          isItemOverlayOpen: false,
          isZukanOverlayOpen: false,
          lastRewards: currentState.lastRewards,
          allAwakeLucky: currentState.allAwakeLucky,
          discoveredNormalItemIds: currentState.discoveredNormalItemIds,
          discoveredSpecialItemIds: currentState.discoveredSpecialItemIds,
          characters: currentState.characters,
          inventory: currentState.inventory,
        },
      }

      window.localStorage.setItem(gameData.settings.saveKey, JSON.stringify(payload))
    } catch (error) {
      console.warn('save write failed', error)
    }
  },

  clear() {
    try {
      window.localStorage.removeItem(gameData.settings.saveKey)
    } catch (error) {
      console.warn('save clear failed', error)
    }
  },
}

const state = {
  screen: 'title',
  challengeCharacterId: null,
  challengeState: 'sleeping',
  hardMode: false,
  hintCount: 0,
  inputHistory: [],
  reactionMessage: 'おきてー！',
  selectedItemIndex: null,
  itemListScrollTop: 0,
  isItemOverlayOpen: false,
  isZukanOverlayOpen: false,
  lastRewards: [],
  allAwakeLucky: false,
  discoveredNormalItemIds: buildStarterInventory()
    .filter((item) => item.type === 'normal')
    .map((item) => item.id),
  discoveredSpecialItemIds: [],
  characters: gameData.characters.map((character, index) => ({
    id: character.id,
    isAwake: false,
    isInitiallyCleared: false,
    clearCount: 0,
    isLocked: index !== 0,
  })),
  inventory: normalizeInventoryEntries(buildStarterInventory()),
}

hydrateStateFromSave()

function buildStarterInventory() {
  return []
}

function compareInventoryItems(left, right) {
  if (left.type !== right.type) {
    return left.type === 'normal' ? -1 : 1
  }

  if (left.type === 'normal') {
    return left.id - right.id
  }

  return String(left.id).localeCompare(String(right.id))
}

function normalizeInventoryEntries(items = []) {
  const validSpecialIds = new Set(gameData.specialItems.map((item) => item.id))
  const merged = new Map()

  items.forEach((item) => {
    if (!item || (item.type !== 'normal' && item.type !== 'special')) {
      return
    }

    if (item.type === 'normal' && !Number.isInteger(item.id)) {
      return
    }

    if (item.type === 'special' && (typeof item.id !== 'string' || !validSpecialIds.has(item.id))) {
      return
    }

    const count = Number.isInteger(item.count) && item.count > 0 ? item.count : 1
    const key = `${item.type}:${item.id}`
    const current = merged.get(key)

    if (current) {
      current.count += count
      return
    }

    merged.set(key, { type: item.type, id: item.id, count })
  })

  return Array.from(merged.values()).sort(compareInventoryItems)
}

function addItemsToInventory(items = []) {
  state.inventory = normalizeInventoryEntries(state.inventory.concat(items))
}

function getInventoryTotalCount() {
  return state.inventory.reduce((total, item) => total + (Number.isInteger(item.count) ? item.count : 1), 0)
}

function hasInventoryChangedFromStarter() {
  const starterInventory = normalizeInventoryEntries(buildStarterInventory())
  if (starterInventory.length !== state.inventory.length) {
    return true
  }

  return starterInventory.some((starterItem, index) => {
    const currentItem = state.inventory[index]
    return !currentItem
      || starterItem.type !== currentItem.type
      || starterItem.id !== currentItem.id
      || starterItem.count !== currentItem.count
  })
}

function buildDefaultDiscoveredNormalItemIds() {
  return buildStarterInventory()
    .filter((item) => item.type === 'normal')
    .map((item) => item.id)
}

function mergeDiscoveredNormalItemIds(baseIds, items = []) {
  const merged = new Set(baseIds)
  items.forEach((item) => {
    if (item && item.type === 'normal' && Number.isInteger(item.id)) {
      merged.add(item.id)
    }
  })
  return Array.from(merged).sort((a, b) => a - b)
}

function mergeDiscoveredSpecialItemIds(baseIds, items = []) {
  const validIds = new Set(gameData.specialItems.map((item) => item.id))
  const merged = new Set(baseIds)
  items.forEach((item) => {
    if (item && item.type === 'special' && typeof item.id === 'string' && validIds.has(item.id)) {
      merged.add(item.id)
    }
  })
  return Array.from(merged).sort((a, b) => a.localeCompare(b))
}

function hydrateStateFromSave() {
  const saved = saveStorage.load()
  if (!saved || !saved.state) {
    return
  }

  const savedState = saved.state
  state.screen = typeof savedState.screen === 'string' ? savedState.screen : 'title'
  state.challengeCharacterId = typeof savedState.challengeCharacterId === 'string' ? savedState.challengeCharacterId : null
  state.challengeState = typeof savedState.challengeState === 'string' ? savedState.challengeState : 'sleeping'
  state.hardMode = Boolean(savedState.hardMode)
  state.hintCount = Number.isInteger(savedState.hintCount) ? savedState.hintCount : 0
  state.inputHistory = Array.isArray(savedState.inputHistory) ? savedState.inputHistory : []
  state.reactionMessage = typeof savedState.reactionMessage === 'string' ? savedState.reactionMessage : 'おきてー！'
  state.selectedItemIndex = Number.isInteger(savedState.selectedItemIndex) ? savedState.selectedItemIndex : null
  state.isItemOverlayOpen = false
  state.isZukanOverlayOpen = false
  state.lastRewards = Array.isArray(savedState.lastRewards) ? savedState.lastRewards : []
  state.allAwakeLucky = Boolean(savedState.allAwakeLucky)

  const savedDiscovered = Array.isArray(savedState.discoveredNormalItemIds)
    ? savedState.discoveredNormalItemIds.filter((id) => Number.isInteger(id) && id >= 1 && id <= gameData.normalItems.length)
    : []
  state.discoveredNormalItemIds = mergeDiscoveredNormalItemIds(
    buildDefaultDiscoveredNormalItemIds(),
    savedDiscovered.map((id) => ({ type: 'normal', id })),
  )

  const validSpecialIds = new Set(gameData.specialItems.map((item) => item.id))
  const savedSpecialDiscovered = Array.isArray(savedState.discoveredSpecialItemIds)
    ? savedState.discoveredSpecialItemIds.filter((id) => typeof id === 'string' && validSpecialIds.has(id))
    : []
  state.discoveredSpecialItemIds = mergeDiscoveredSpecialItemIds(
    [],
    savedSpecialDiscovered.map((id) => ({ type: 'special', id })),
  )

  if (Array.isArray(savedState.characters) && savedState.characters.length === gameData.characters.length) {
    state.characters = savedState.characters.map((character, index) => ({
      id: gameData.characters[index].id,
      isAwake: Boolean(character.isAwake),
      isInitiallyCleared: Boolean(character.isInitiallyCleared),
      clearCount: Number.isInteger(character.clearCount) && character.clearCount > 0
        ? character.clearCount
        : (Boolean(character.isInitiallyCleared) ? 1 : 0),
      isLocked: Boolean(character.isLocked),
    }))
  }

  if (Array.isArray(savedState.inventory)) {
    state.inventory = normalizeInventoryEntries(savedState.inventory)
  }

  if (state.selectedItemIndex !== null && (state.selectedItemIndex < 0 || state.selectedItemIndex >= state.inventory.length)) {
    state.selectedItemIndex = null
  }

  state.discoveredNormalItemIds = mergeDiscoveredNormalItemIds(state.discoveredNormalItemIds, state.inventory)
  state.discoveredNormalItemIds = mergeDiscoveredNormalItemIds(state.discoveredNormalItemIds, state.lastRewards)
  state.discoveredSpecialItemIds = mergeDiscoveredSpecialItemIds(state.discoveredSpecialItemIds, state.inventory)
  state.discoveredSpecialItemIds = mergeDiscoveredSpecialItemIds(state.discoveredSpecialItemIds, state.lastRewards)
}

function getCharacterState(characterId) {
  return state.characters.find((character) => character.id === characterId)
}

function getCharacter(characterId) {
  return gameData.characters.find((character) => character.id === characterId)
}

function getAction(actionId) {
  return gameData.actions.find((action) => action.id === actionId)
}

function getItemData(item) {
  if (!item) {
    return null
  }

  if (item.type === 'special') {
    return gameData.specialItems.find((special) => special.id === item.id) || null
  }

  return gameData.normalItems.find((normal) => normal.id === item.id) || null
}

function getUnlockedSleepingCharacters() {
  return state.characters.filter((characterState) => !characterState.isLocked && !characterState.isAwake)
}

function getUnlockedCharacters() {
  return state.characters.filter((characterState) => !characterState.isLocked)
}

function renderClearCountLabel(clearCount) {
  if (!Number.isInteger(clearCount) || clearCount <= 0) {
    return ''
  }

  if (clearCount === 1) {
    return '初回クリア'
  }

  return `${clearCount}回クリア`
}

function randomBaseAction() {
  const baseActions = ['poke', 'tickle', 'pat', 'flutter']
  return baseActions[Math.floor(Math.random() * baseActions.length)]
}

function matchesPatternAtEnd(history, pattern) {
  if (history.length < pattern.length) {
    return false
  }

  const tail = history.slice(history.length - pattern.length)
  return tail.every((actionId, index) => actionId === pattern[index])
}

function startsWithPatternPrefix(history, pattern) {
  if (history.length > pattern.length) {
    return false
  }

  return history.every((actionId, index) => actionId === pattern[index])
}

function trimToBestSuffix(history, patterns) {
  for (let length = history.length; length >= 1; length -= 1) {
    const suffix = history.slice(-length)
    const hasPrefix = patterns.some((pattern) => startsWithPatternPrefix(suffix, pattern))
    if (hasPrefix) {
      return suffix
    }
  }
  return []
}

function judgeInput(history, successPatterns, angerPatterns) {
  for (const pattern of successPatterns) {
    if (matchesPatternAtEnd(history, pattern)) {
      return { result: 'success', trimmedHistory: history }
    }
  }

  for (const pattern of angerPatterns) {
    if (matchesPatternAtEnd(history, pattern)) {
      return { result: 'anger', trimmedHistory: history }
    }
  }

  const allPatterns = successPatterns.concat(angerPatterns)
  const trimmedHistory = trimToBestSuffix(history, allPatterns)

  if (trimmedHistory.length > 0) {
    return { result: 'continue', trimmedHistory }
  }

  return { result: 'invalid', trimmedHistory: [] }
}

function buildRewards(character) {
  if (character.reward.pool === 'special') {
    return [pickRandomSpecialItem()]
  }

  const rewards = []
  for (let index = 0; index < character.reward.count; index += 1) {
    rewards.push(pickRandomNormalItem())
  }
  return rewards
}

function recordDiscoveredItems(items = []) {
  state.discoveredNormalItemIds = mergeDiscoveredNormalItemIds(state.discoveredNormalItemIds, items)
  state.discoveredSpecialItemIds = mergeDiscoveredSpecialItemIds(state.discoveredSpecialItemIds, items)
}

function pickRandomNormalItem() {
  const item = gameData.normalItems[Math.floor(Math.random() * gameData.normalItems.length)]
  return { type: 'normal', id: item.id }
}

function pickRandomSpecialItem() {
  const item = gameData.specialItems[Math.floor(Math.random() * gameData.specialItems.length)]
  return { type: 'special', id: item.id }
}

function useSelectedItem() {
  if (state.selectedItemIndex === null || state.challengeCharacterId === null) {
    return
  }

  const inventoryItem = state.inventory[state.selectedItemIndex]
  if (!inventoryItem) {
    return
  }

  const character = getCharacter(state.challengeCharacterId)
  if (!character) {
    return
  }

  let result = 'neutral'
  if (inventoryItem.type === 'special') {
    result = 'success'
  } else if (character.effectiveNormalItemIds.includes(inventoryItem.id)) {
    result = 'success'
  } else if (character.badNormalItemIds.includes(inventoryItem.id)) {
    result = 'anger'
  }

  if (inventoryItem.count > 1) {
    inventoryItem.count -= 1
  } else {
    state.inventory.splice(state.selectedItemIndex, 1)
  }
  state.selectedItemIndex = null
  state.isItemOverlayOpen = false

  if (result === 'success') {
    state.challengeState = 'awake'
    state.reactionMessage = 'アイテムがきいた。おきた！'
    finishChallenge(true)
    return
  }

  if (result === 'anger') {
    state.challengeState = 'angry'
    state.reactionMessage = 'それはいやだったみたい。おこった！'
    finishChallenge(false)
    return
  }

  state.challengeState = 'reacting'
  state.reactionMessage = 'ちょっと反応したけど、まだねむいみたい。'
  render()
}

function discardSelectedItem() {
  if (state.selectedItemIndex === null) {
    return
  }

  const inventoryItem = state.inventory[state.selectedItemIndex]
  if (!inventoryItem) {
    return
  }

  if (inventoryItem.count > 1) {
    inventoryItem.count -= 1
  } else {
    state.inventory.splice(state.selectedItemIndex, 1)
  }
  state.selectedItemIndex = null
  state.isItemOverlayOpen = false
  state.reactionMessage = 'アイテムをしまいなおした。'
  render()
}

function finishChallenge(success) {
  const characterState = getCharacterState(state.challengeCharacterId)
  const character = getCharacter(state.challengeCharacterId)
  if (!characterState || !character) {
    return
  }

  if (success) {
    const previousClearCount = Number.isInteger(characterState.clearCount) ? characterState.clearCount : 0
    characterState.clearCount = previousClearCount + 1
    characterState.isAwake = true
    characterState.isInitiallyCleared = characterState.clearCount > 0
    unlockNextCharacter(character.order)
    state.lastRewards = buildRewards(character)
    recordDiscoveredItems(state.lastRewards)
    addItemsToInventory(state.lastRewards)

    if (state.characters.every((entry) => entry.isAwake)) {
      state.screen = 'all-awake'
    } else {
      state.screen = 'clear'
    }
  } else {
    state.lastRewards = []
    state.screen = 'game-over'
  }

  render()
}

function unlockNextCharacter(order) {
  const nextCharacter = state.characters.find((entry) => {
    const character = getCharacter(entry.id)
    return character && character.order === order + 1
  })

  if (nextCharacter) {
    nextCharacter.isLocked = false
  }
}

function startChallenge(characterId) {
  state.challengeCharacterId = characterId
  state.challengeState = 'sleeping'
  state.hintCount = 0
  state.inputHistory = []
  state.selectedItemIndex = null
  state.isItemOverlayOpen = false
  state.reactionMessage = 'おきてー！'
  state.screen = 'game'
  render()
}

function handleAction(actionId) {
  const character = getCharacter(state.challengeCharacterId)
  if (!character) {
    return
  }

  const actualActionId = actionId === 'random' ? randomBaseAction() : actionId
  const nextHistory = state.inputHistory.concat(actualActionId)
  const judgment = judgeInput(nextHistory, character.successActionPatterns, character.angerActionPatterns)

  state.inputHistory = judgment.trimmedHistory

  if (judgment.result === 'success') {
    state.challengeState = 'awake'
    state.reactionMessage = `${getAction(actualActionId).label} がきいた。おきた！`
    finishChallenge(true)
    return
  }

  if (judgment.result === 'anger') {
    state.challengeState = 'angry'
    state.reactionMessage = `${getAction(actualActionId).label} でおこった！`
    finishChallenge(false)
    return
  }

  if (judgment.result === 'invalid') {
    state.challengeState = 'sleeping'
    state.reactionMessage = `${getAction(actualActionId).label} には反応なし…`
    render()
    return
  }

  state.challengeState = 'reacting'
  state.reactionMessage = `「${getAction(actualActionId).label}」で ちょっと動いた！`
  render()
}

function showHint() {
  const character = getCharacter(state.challengeCharacterId)
  if (!character) {
    return
  }

  if (state.hardMode) {
    state.reactionMessage = 'むずかしさをOFFにするとヒントが見られるよ。'
    render()
    return
  }

  state.hintCount += 1
  const firstPattern = character.successActionPatterns[0]

  if (state.hintCount === 1) {
    state.reactionMessage = `ヒント: せいこうパターンは ${firstPattern.length} 回だよ。`
  } else if (state.hintCount === 2) {
    state.reactionMessage = `ヒント: 最初は「${getAction(firstPattern[0]).label}」だよ。`
  } else {
    state.reactionMessage = `ヒント: ${firstPattern.map((actionId) => getAction(actionId).label).join(' → ')}`
  }
  render()
}

function restartChallenge() {
  if (!state.challengeCharacterId) {
    return
  }
  startChallenge(state.challengeCharacterId)
}

function resetSession() {
  state.characters.forEach((characterState, index) => {
    characterState.isAwake = false
    characterState.clearCount = Number.isInteger(characterState.clearCount) ? characterState.clearCount : 0
    characterState.isInitiallyCleared = characterState.clearCount > 0
    characterState.isLocked = false
  })
  state.screen = 'selection'
  state.challengeCharacterId = null
  state.challengeState = 'sleeping'
  state.inputHistory = []
  state.selectedItemIndex = null
  state.isItemOverlayOpen = false
  state.isZukanOverlayOpen = false
  state.lastRewards = []
  state.reactionMessage = 'おきてー！'
  render()
}

function clearSaveAndReset() {
  saveStorage.clear()
  state.screen = 'title'
  state.challengeCharacterId = null
  state.challengeState = 'sleeping'
  state.hardMode = false
  state.hintCount = 0
  state.inputHistory = []
  state.reactionMessage = 'おきてー！'
  state.selectedItemIndex = null
  state.isItemOverlayOpen = false
  state.isZukanOverlayOpen = false
  state.lastRewards = []
  state.allAwakeLucky = false
  state.discoveredNormalItemIds = buildDefaultDiscoveredNormalItemIds()
  state.discoveredSpecialItemIds = []
  state.characters = gameData.characters.map((character, index) => ({
    id: character.id,
    isAwake: false,
    isInitiallyCleared: false,
    clearCount: 0,
    isLocked: index !== 0,
  }))
  state.inventory = normalizeInventoryEntries(buildStarterInventory())
  render()
}

function selectRandomCharacter() {
  const candidates = getUnlockedSleepingCharacters()
  if (candidates.length === 0) {
    return
  }

  const picked = candidates[Math.floor(Math.random() * candidates.length)]
  startChallenge(picked.id)
}

function renderTitleScreen() {
  return `
    <section class="screen title-screen ${state.screen === 'title' ? 'is-active' : ''}">
      <div class="title-card panel">
        <div class="title-kicker">みんなおこせ！</div>
        <h1 class="game-title">${gameData.title}</h1>
        <div class="title-hero-wrap">
          <img class="title-hero-image" src="./assets/title/family-cheer.png" alt="ますだファミリー" loading="eager" decoding="async" onerror="this.style.display='none';" />
        </div>
        ${gameData.titleNeedsReview ? '<div class="review-badge">タイトル表記は要確認のまま保持</div>' : ''}
        <div class="menu-grid">
          <button class="sketch-button" data-action="goto-selection">はじめる</button>
          <button class="ghost-button" data-action="continue-game" ${hasProgress() ? '' : 'disabled'}>つづきから</button>
          <button class="ghost-button" data-action="goto-howto">あそびかた</button>
          <button class="ghost-button" data-action="clear-save" ${hasProgress() ? '' : 'disabled'}>データをけす</button>
        </div>
        <div class="title-version">Ver 0.11.3</div>
      </div>
    </section>
  `
}

function renderHowtoScreen() {
  return `
    <section class="screen result-screen ${state.screen === 'howto' ? 'is-active' : ''}">
      <div class="howto-card panel">
        <h2 class="result-title">あそびかた</h2>
        <div class="howto-steps">
          <div class="howto-step panel">
            <strong>1. キャラをえらぶ</strong>
            <p>せんたく画面で起こしたい人をえらびます。</p>
          </div>
          <div class="howto-step panel">
            <strong>2. こうどうをためす</strong>
            <p>つんつん、こちょこちょ、とんとん、バタバタを順番に試します。</p>
          </div>
          <div class="howto-step panel">
            <strong>3. ヒントをつかう</strong>
            <p>わからない時は「？ ヒント」で正解の手がかりを見ます。</p>
          </div>
          <div class="howto-step panel">
            <strong>4. アイテムでおたすけ</strong>
            <p>アイテムを使うと起きることがあります。No順で整理して使えます。</p>
          </div>
          <div class="howto-step panel">
            <strong>5. みんな起こしてクリア</strong>
            <p>5人ぜんいん起こせたらクリア。あつめたアイテムも見てみよう。</p>
          </div>
        </div>
        <div class="footer-actions panel">
          <button class="sketch-button" data-action="goto-selection">せんたくがめんへ</button>
          <button class="ghost-button" data-action="goto-title">タイトルへ</button>
        </div>
      </div>
    </section>
  `
}

function renderSelectionScreen() {
  const allAwake = state.characters.every((character) => character.isAwake)
  const canRandomPick = getUnlockedSleepingCharacters().length > 0

  return `
    <section class="screen ${state.screen === 'selection' ? 'is-active' : ''}">
      <div class="selection-layout">
        <div class="top-bar">
          <div class="top-bar-main">
            <div class="stage-label">Lv${gameData.stage.level} ${gameData.stage.name}</div>
            <p class="stage-description">ますだファミリーがねむっているので、5人ぜんいんをおこそう！<br>ぜんいんおこせたら、アイテムをあつめてみてね</p>
          </div>
          <div class="top-bar-actions">
            <button class="ghost-button" data-action="open-zukan">アイテムずかん</button>
            <button class="ghost-button" data-action="goto-title">タイトルへ</button>
          </div>
        </div>
        <div class="character-grid">
          ${gameData.characters.map((character) => {
            const characterState = getCharacterState(character.id)
            const cardClasses = ['character-card', 'panel']
            let stamp = ''
            if (characterState.isLocked) {
              cardClasses.push('is-locked')
              stamp = '<div class="stamp locked-stamp">🔒</div>'
            } else if (characterState.isAwake) {
              cardClasses.push('is-awake')
              stamp = '<div class="stamp awake-stamp">おきた！</div>'
            } else {
              cardClasses.push('is-sleeping')
            }
            if (!characterState.isLocked && !characterState.isAwake && state.characters.findIndex((entry) => entry.id === character.id) === getUnlockedSleepingCharacters().findIndex((entry) => entry.id === character.id)) {
              cardClasses.push('is-current')
            }

            return `
              <article class="${cardClasses.join(' ')}" data-character-id="${character.id}">
                <div class="character-number">No.${character.order}</div>
                ${stamp}
                ${characterState.clearCount > 0 ? `<div class="stamp cleared-stamp">${renderClearCountLabel(characterState.clearCount)}</div>` : ''}
                <div class="character-avatar">${renderCharacterAvatar(character, characterState.isAwake)}</div>
                <h3 class="character-name">${character.displayName}</h3>
                <div class="character-hints">
                  ${character.profileHints.map((hint) => `<span class="hint-doodle">${hint}</span>`).join('')}
                </div>
              </article>
            `
          }).join('')}
          <article class="character-card panel ${canRandomPick ? 'is-sleeping' : 'is-locked'}" ${canRandomPick ? 'data-action="random-character"' : ''}>
            <div class="character-number">???</div>
            <div class="character-avatar">🎲</div>
            <h3 class="character-name">おまかせ</h3>
            <div class="character-hints">
              <span class="hint-doodle">${canRandomPick ? 'ねている人からランダム' : 'ぜんいんおきてるよ'}</span>
            </div>
          </article>
        </div>
        ${allAwake ? '<div class="footer-actions panel"><button class="sketch-button" data-action="reset-session">もう一度遊ぶ</button></div>' : ''}
      </div>
      ${renderZukanOverlay()}
    </section>
  `
}

function renderZukanOverlay() {
  const discovered = new Set(state.discoveredNormalItemIds)
  const discoveredSpecial = new Set(state.discoveredSpecialItemIds)
  const totalDiscovered = state.discoveredNormalItemIds.length + state.discoveredSpecialItemIds.length
  const totalItems = gameData.normalItems.length + gameData.specialItems.length
  return `
    <div class="overlay ${state.isZukanOverlayOpen ? 'is-active' : ''}" id="zukan-overlay">
      <div class="dialog zukan-dialog panel">
        <div class="toolbox-header">
          <div>
            <h2 class="toolbox-title">アイテムずかん</h2>
            <p class="toolbox-caption">${totalDiscovered} / ${totalItems} を発見</p>
          </div>
          <button class="ghost-button" data-action="close-zukan">とじる</button>
        </div>
        <div class="zukan-scroll">
          <h3 class="zukan-section-title">通常アイテム</h3>
          <div class="zukan-grid">
            ${gameData.normalItems.map((item) => {
              const isDiscovered = discovered.has(item.id)
              const itemView = isDiscovered
                ? `<img class="item-icon-image" src="./assets/items/no${item.id}.png" alt="No.${item.id}" loading="lazy" decoding="async" onerror="this.onerror=null;this.replaceWith(document.createTextNode('📦'));" />`
                : '<span class="zukan-unknown">？</span>'
              const itemName = isDiscovered ? item.name : '？？？？'
              return `
                <div class="zukan-card panel ${isDiscovered ? 'is-known' : 'is-unknown'}">
                  <div class="zukan-icon">${itemView}</div>
                  <div class="zukan-no">No.${item.id}</div>
                  <div class="zukan-name">${itemName}</div>
                </div>
              `
            }).join('')}
          </div>
          <h3 class="zukan-section-title">スペシャルアイテム</h3>
          <div class="zukan-grid zukan-grid-special">
            ${gameData.specialItems.map((item) => {
              const isDiscovered = discoveredSpecial.has(item.id)
              const itemView = isDiscovered
                ? `<img class="item-icon-image" src="./assets/items/special-${item.id}.png" alt="ID.${item.id}" loading="lazy" decoding="async" onerror="this.onerror=null;this.replaceWith(document.createTextNode('✨'));" />`
                : '<span class="zukan-unknown">？</span>'
              const itemName = isDiscovered ? item.name : '？？？？'
              return `
                <div class="zukan-card panel ${isDiscovered ? 'is-known' : 'is-unknown'}">
                  <div class="zukan-icon">${itemView}</div>
                  <div class="zukan-no">ID.${item.id}</div>
                  <div class="zukan-name">${itemName}</div>
                </div>
              `
            }).join('')}
          </div>
        </div>
      </div>
    </div>
  `
}

function renderGameScreen() {
  const character = getCharacter(state.challengeCharacterId)
  const selectedItem = state.selectedItemIndex === null ? null : state.inventory[state.selectedItemIndex]
  const selectedItemData = getItemData(selectedItem)
  const firstPattern = character ? character.successActionPatterns[0] : []

  if (!character) {
    return '<section class="screen"></section>'
  }

  return `
    <section class="screen game-screen ${state.screen === 'game' ? 'is-active' : ''}">
      <div class="game-layout">
        <div class="game-main info-column">
          <div class="name-row">
            <button class="ghost-button" data-action="back-to-selection">もどる</button>
            <div class="name-box panel">${character.displayName}</div>
          </div>
          <div class="character-sheet panel">
            <div class="big-character">
              <div class="bed-illustration">
                <div class="character-face">${renderStateFace(character, state.challengeState)}</div>
              </div>
              <div class="character-state-label">${renderStateLabel(state.challengeState)}</div>
            </div>
          </div>
          <div class="info-stack">
            <div class="hint-box panel">
              <div class="section-label">ヒント</div>
              <div class="hint-copy">${state.hardMode ? 'むずかしさON中。ヒントはOFFで見られるよ。' : renderHintSummary(character, firstPattern)}</div>
              <div class="hint-tags">
                ${character.profileHints.map((hint) => `<span class="hint-doodle">${hint}</span>`).join('')}
              </div>
            </div>
            <div class="reaction-box panel">
              <div>${state.reactionMessage}</div>
              <div class="reaction-sub">入力の順番と回数が大事</div>
            </div>
            <div class="history-box panel ${state.hardMode ? 'hidden' : ''}">
              <strong>入力履歴</strong>
              <div class="history-list">
                ${state.inputHistory.length === 0 ? '<span class="muted-text">まだ入力なし</span>' : state.inputHistory.map((actionId) => `<span class="history-pill">${getAction(actionId).label}</span>`).join('')}
              </div>
            </div>
          </div>
        </div>
        <div class="game-side control-column">
          <div class="controls-panel panel">
            <div class="settings-box control-toolbar">
              <button class="icon-button" data-action="show-hint">？ ヒント</button>
              <button class="toggle-chip" data-action="toggle-hard-mode">むずかしさ ${state.hardMode ? 'ON' : 'OFF'}</button>
              <button class="ghost-button item-launch-button" data-action="open-items">アイテム ${getInventoryTotalCount()}</button>
            </div>
            <div class="action-grid">
              ${gameData.actions.map((action) => `
                <button class="action-button ${action.id === 'random' ? 'is-random' : ''}" data-action-id="${action.id}">
                  <span class="action-title">${action.label}</span>
                  <span class="action-sub">${action.caption}</span>
                </button>
              `).join('')}
            </div>
            <div class="control-help">
              <div class="control-help-card panel">
                <div class="section-label">操作メモ</div>
                <p class="muted-text">右のボタンで起こし方を試して、必要ならアイテムを開いて使います。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      ${renderItemOverlay(selectedItem, selectedItemData)}
    </section>
  `
}

function renderHintSummary(character, firstPattern) {
  if (state.hintCount <= 0) {
    return `${character.displayName}が起きそうな方法をためしてみよう。`
  }
  if (state.hintCount === 1) {
    return `せいこうパターンは ${firstPattern.length} 回だよ。`
  }
  if (state.hintCount === 2) {
    return `最初は「${getAction(firstPattern[0]).label}」だよ。`
  }
  return firstPattern.map((actionId) => getAction(actionId).label).join(' → ')
}

function renderItemOverlay(selectedItem, selectedItemData) {
  const itemPreview = selectedItem
    ? (selectedItem.type === 'special'
      ? `<img class="item-inspector-preview-image" src="./assets/items/special-${selectedItem.id}.png" alt="ID.${selectedItem.id}" loading="lazy" decoding="async" onerror="this.onerror=null;this.replaceWith(document.createTextNode('✨'));" />`
      : `<img class="item-inspector-preview-image" src="./assets/items/no${selectedItem.id}.png" alt="No.${selectedItem.id}" loading="lazy" decoding="async" onerror="this.onerror=null;this.replaceWith(document.createTextNode('📦'));" />`)
    : '<span class="item-inspector-preview-fallback">？</span>'

  return `
    <div class="overlay ${state.isItemOverlayOpen ? 'is-active' : ''}" id="item-overlay">
      <div class="dialog item-dialog panel">
        <div class="toolbox-header">
          <div>
            <h2 class="toolbox-title">アイテム</h2>
            <p class="toolbox-caption">${getInventoryTotalCount()}個 / ${state.inventory.length}種類</p>
          </div>
          <button class="ghost-button" data-action="close-items">とじる</button>
        </div>
        <div class="item-overlay-layout">
          <div class="toolbox-panel panel compact-panel">
            <div class="item-grid">
              ${state.inventory.map((item, index) => {
                const note = item.type === 'special' ? item.id : `No.${item.id}`
                const countLabel = ` x${item.count}`
                return `
                  <button class="item-slot ${state.selectedItemIndex === index ? 'is-selected' : ''}" data-item-index="${index}">
                    <span class="item-slot-inner">
                      <span class="item-icon">${renderItemIcon(item)}</span>
                      <span>${note}${countLabel}</span>
                    </span>
                  </button>
                `
              }).join('')}
            </div>
          </div>
          <div class="item-inspector panel compact-panel">
            <h3 class="item-inspector-name">${selectedItemData ? selectedItemData.name : 'アイテムをえらんでね'}</h3>
            <div class="item-inspector-preview panel">${itemPreview}</div>
            <p class="muted-text">${selectedItemData ? `${selectedItem.type === 'special' ? 'スペシャルアイテム' : '通常アイテム'} / ${selectedItem.count}個` : 'アイテムの名前とメモをここに表示します。'}</p>
            ${selectedItemData && selectedItemData.needsReview ? '<span class="item-inspector-note">名称は要確認</span>' : ''}
            <div class="item-actions">
              <button class="item-action-button use" data-action="use-item" ${selectedItemData ? '' : 'disabled'}>つかう</button>
              <button class="item-action-button trash" data-action="discard-item" ${selectedItemData ? '' : 'disabled'}>しまう</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
}

function renderClearScreen() {
  const character = getCharacter(state.challengeCharacterId)
  return `
    <section class="screen result-screen ${state.screen === 'clear' ? 'is-active' : ''}">
      <div class="result-card panel">
        <div class="result-emoji">${character ? renderStateFace(character, 'awake') : sleepingFaces.awake}</div>
        <h2 class="result-title">${character ? character.displayName : ''}がおきた！</h2>
        <p>もらったアイテム</p>
        <div class="reward-grid">
          ${state.lastRewards.map((reward) => {
            const itemData = getItemData(reward)
            return `<div class="reward-card"><div class="reward-icon">${renderItemIcon(reward)}</div><strong>${itemData ? itemData.name : ''}</strong></div>`
          }).join('')}
        </div>
        <div class="footer-actions panel">
          <button class="sketch-button" data-action="goto-selection">せんたくがめんへ</button>
        </div>
      </div>
    </section>
  `
}

function renderGameOverScreen() {
  const character = getCharacter(state.challengeCharacterId)
  return `
    <section class="screen result-screen ${state.screen === 'game-over' ? 'is-active' : ''}">
      <div class="result-card panel">
        <div class="result-emoji">${character ? renderStateFace(character, 'angry') : sleepingFaces.angry}</div>
        <h2 class="result-title">${character ? character.displayName : ''}がおこった！</h2>
        <p>正解はまだ内緒。もう一度ためしてみよう。</p>
        <div class="footer-actions panel">
          <button class="sketch-button" data-action="restart-challenge">もう一度</button>
          <button class="ghost-button" data-action="goto-selection">せんたくがめんへ</button>
        </div>
      </div>
    </section>
  `
}

function renderAllAwakeScreen() {
  return `
    <section class="screen result-screen ${state.screen === 'all-awake' ? 'is-active' : ''}">
      <div class="result-card panel">
        <div class="result-emoji">🌞</div>
        <h2 class="result-title">みんなおきた！</h2>
        <p>Phase 1 はここまで。5人ぜんいん起こせたよ。</p>
        <div class="family-grid">
          ${gameData.characters.map((character) => `
            <div class="family-card">
              <div class="family-avatar">${renderCharacterAvatar(character, true)}</div>
              <strong>${character.displayName}</strong>
            </div>
          `).join('')}
        </div>
        <div class="footer-actions panel">
          <button class="sketch-button" data-action="reset-session">もう一度遊ぶ</button>
          <button class="ghost-button" data-action="goto-title">タイトルへ</button>
        </div>
      </div>
    </section>
  `
}

function renderStateLabel(challengeState) {
  if (challengeState === 'awake') {
    return 'おきた！'
  }
  if (challengeState === 'angry') {
    return 'おこった！'
  }
  if (challengeState === 'reacting') {
    return 'ちょっと反応！'
  }
  return 'ぐっすり ねている'
}

function renderDialog() {
  return `
    <div class="overlay" id="back-dialog">
      <div class="dialog panel">
        <h2 class="dialog-title">もどる？</h2>
        <p>この挑戦はいったん終わるけど、起こした人の状態はそのままだよ。</p>
        <div class="dialog-buttons">
          <button class="sketch-button" data-action="confirm-back">せんたくがめんへ</button>
          <button class="ghost-button" data-action="close-dialog">まだつづける</button>
        </div>
      </div>
    </div>
  `
}

function render() {
  const app = document.getElementById('app')
  app.innerHTML = `
    <main class="app-shell">
      ${renderTitleScreen()}
      ${renderHowtoScreen()}
      ${renderSelectionScreen()}
      ${renderGameScreen()}
      ${renderClearScreen()}
      ${renderGameOverScreen()}
      ${renderAllAwakeScreen()}
      ${renderDialog()}
    </main>
  `

  const title = app.querySelector('.title-card .game-title')
  const heroImage = app.querySelector('.title-card .title-hero-image')
  if (title && heroImage) {
    heroImage.style.setProperty('--title-max-width', `${Math.ceil(title.getBoundingClientRect().width)}px`)
  }

  const itemListPanel = app.querySelector('.item-dialog .toolbox-panel')
  if (itemListPanel && Number.isFinite(state.itemListScrollTop)) {
    itemListPanel.scrollTop = state.itemListScrollTop
  }

  saveStorage.save(state)
  bindEvents()
}

function hasProgress() {
  return state.characters.some((character) => character.isAwake || character.isInitiallyCleared) || hasInventoryChangedFromStarter()
}

function bindEvents() {
  document.querySelector('[data-action="goto-selection"]')?.addEventListener('click', () => {
    state.screen = 'selection'
    render()
  })

  document.querySelectorAll('[data-action="goto-selection"]').forEach((button) => {
    button.addEventListener('click', () => {
      state.screen = 'selection'
      render()
    })
  })

  document.querySelectorAll('[data-action="goto-title"]').forEach((button) => {
    button.addEventListener('click', () => {
      state.screen = 'title'
      render()
    })
  })

  document.querySelector('[data-action="goto-howto"]')?.addEventListener('click', () => {
    state.screen = 'howto'
    render()
  })

  document.querySelector('[data-action="open-zukan"]')?.addEventListener('click', () => {
    state.isZukanOverlayOpen = true
    render()
  })

  document.querySelector('[data-action="close-zukan"]')?.addEventListener('click', () => {
    state.isZukanOverlayOpen = false
    render()
  })

  document.querySelector('[data-action="open-items"]')?.addEventListener('click', () => {
    const currentItemListPanel = document.querySelector('.item-dialog .toolbox-panel')
    state.itemListScrollTop = currentItemListPanel ? currentItemListPanel.scrollTop : 0
    state.isItemOverlayOpen = true
    render()
  })

  document.querySelector('[data-action="close-items"]')?.addEventListener('click', () => {
    const currentItemListPanel = document.querySelector('.item-dialog .toolbox-panel')
    state.itemListScrollTop = currentItemListPanel ? currentItemListPanel.scrollTop : 0
    state.isItemOverlayOpen = false
    render()
  })

  document.querySelector('[data-action="continue-game"]')?.addEventListener('click', () => {
    state.screen = state.challengeCharacterId ? 'game' : 'selection'
    render()
  })

  document.querySelector('[data-action="clear-save"]')?.addEventListener('click', () => {
    const shouldClear = window.confirm('セーブデータをけしてもいいですか？')
    if (!shouldClear) {
      return
    }
    clearSaveAndReset()
  })

  document.querySelectorAll('[data-character-id]').forEach((card) => {
    card.addEventListener('click', () => {
      const characterId = card.getAttribute('data-character-id')
      const characterState = getCharacterState(characterId)
      if (!characterState || characterState.isLocked) {
        return
      }
      startChallenge(characterId)
    })
  })

  document.querySelector('[data-action="random-character"]')?.addEventListener('click', () => {
    selectRandomCharacter()
  })

  document.querySelectorAll('[data-action-id]').forEach((button) => {
    button.addEventListener('click', () => {
      handleAction(button.getAttribute('data-action-id'))
    })
  })

  document.querySelector('[data-action="show-hint"]')?.addEventListener('click', () => {
    showHint()
  })

  document.querySelector('[data-action="toggle-hard-mode"]')?.addEventListener('click', () => {
    state.hardMode = !state.hardMode
    render()
  })

  document.querySelector('[data-action="back-to-selection"]')?.addEventListener('click', () => {
    document.getElementById('back-dialog').classList.add('is-active')
  })

  document.querySelector('[data-action="close-dialog"]')?.addEventListener('click', () => {
    document.getElementById('back-dialog').classList.remove('is-active')
  })

  document.querySelector('[data-action="confirm-back"]')?.addEventListener('click', () => {
    document.getElementById('back-dialog').classList.remove('is-active')
    state.screen = 'selection'
    render()
  })

  document.querySelectorAll('[data-item-index]').forEach((button) => {
    button.addEventListener('click', () => {
      const currentItemListPanel = document.querySelector('.item-dialog .toolbox-panel')
      state.itemListScrollTop = currentItemListPanel ? currentItemListPanel.scrollTop : 0
      const index = Number(button.getAttribute('data-item-index'))
      state.selectedItemIndex = index
      state.isItemOverlayOpen = true
      render()
    })
  })

  document.querySelector('[data-action="use-item"]')?.addEventListener('click', () => {
    useSelectedItem()
  })

  document.querySelector('[data-action="discard-item"]')?.addEventListener('click', () => {
    discardSelectedItem()
  })

  document.querySelector('[data-action="restart-challenge"]')?.addEventListener('click', () => {
    restartChallenge()
  })

  document.querySelectorAll('[data-action="reset-session"]').forEach((button) => {
    button.addEventListener('click', () => {
      resetSession()
    })
  })
}

function registerServiceWorker() {
  if (!('serviceWorker' in navigator)) {
    return
  }

  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch((error) => {
      console.warn('Service worker registration failed:', error)
    })
  })
}

registerServiceWorker()
render()
