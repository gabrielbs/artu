import { Sign, Block, Gate, SpeechListener, Goal } from '../core/tile/type'
import { Direction } from '../math/rotation'
import { LevelConfiguration } from '../core/level_configuration'

export const Chapter03: LevelConfiguration[] = [
  {
    name: 'chapter_03_level_001',
    label: 'Invasão hacker',
    availableInstructions: ['move', 'turn_right', 'turn_left', 'read', 'say_memory'],
    startPosition: { x: 4, y: 0 },
    startDirection: Direction.SOUTH,
    width: 5,
    height: 6,
    tiles: [
      new Block({x: 0, y: 0}),
      new Block({x: 0, y: 4}),
      new Goal({x: 0, y: 5}),
      new Block({x: 1, y: 0}),
      new Sign({x: 1, y: 2}, 'senha_secreta'),
      new Block({x: 1, y: 4}),
      new Block({x: 2, y: 0}),
      new Block({x: 2, y: 4}),
      new Gate({x: 2, y: 5}, 'gate-1'),
      new Block({x: 3, y: 0}),
      new Block({x: 3, y: 1}),
      new Block({x: 3, y: 3}),
      new Block({x: 3, y: 4}),
      new SpeechListener({x: 3, y: 5}, 'Qual é a senha?', 'senha_secreta', 'gate-1'),
    ]
  },
  {
    name: 'chapter_03_level_002',
    label: 'O poder da escolha',
    availableInstructions: ['move', 'turn_right', 'turn_left', 'read', 'say_memory'],
    startPosition: { x: 0, y: 1 },
    startDirection: Direction.EAST,
    width: 5,
    height: 5,
    tiles: [
      new Block({x: 0, y: 0}),
      new Block({x: 0, y: 3}),
      new Block({x: 0, y: 4}),
      new Sign({x: 1, y: 0}, 'vermelhos'),
      new Block({x: 1, y: 3}),
      new Block({x: 1, y: 4}),
      new SpeechListener({x: 2, y: 2}, 'Qual é a cor dos meus olhos?', 'azuis', 'gate-1'),
      new Gate({x: 2, y: 3}, 'gate-1', 'horizontal'),
      new Sign({x: 3, y: 0}, 'azuis'),
      new Block({x: 3, y: 3}),
      new Block({x: 4, y: 0}),
      new Block({x: 4, y: 3}),
      new Goal({x: 4, y: 4}),
    ]
  },
  {
    name: 'chapter_03_level_003',
    label: 'Cozinha',
    availableInstructions: ['move', 'turn_right', 'turn_left', 'read', 'say_memory'],
    startPosition: { x: 2, y: 2 },
    startDirection: Direction.WEST,
    width: 5,
    height: 5,
    tiles: [
      new Block({x: 0, y: 3}),
      new Block({x: 0, y: 4}),
      new Sign({x: 1, y: 0}, 'brigadeiro'),
      new Block({x: 1, y: 1}),
      new Block({x: 1, y: 3}),
      new Block({x: 1, y: 4}),
      new Block({x: 2, y: 1}),
      new Block({x: 2, y: 3}),
      new Goal({x: 2, y: 4}),
      new Sign({x: 3, y: 0}, 'alho'),
      new Block({x: 3, y: 1}),
      new Block({x: 3, y: 2}),
      new Block({x: 3, y: 3}),
      new Gate({x: 3, y: 4}, 'gate-2'),
      new SpeechListener({x: 4, y: 1}, 'Tempero?', 'alho', 'gate-1'),
      new Gate({x: 4, y: 2}, 'gate-1', 'horizontal'),
      new SpeechListener({x: 4, y: 4}, 'Sobremesa?', 'brigadeiro', 'gate-2'),
    ]
  }
]
