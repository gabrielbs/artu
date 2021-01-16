import { LevelConfiguration } from '../core/level_configuration'
import { Goal } from '../core/tile/type'

export const Level01: LevelConfiguration = {
  name: 'level_01',
  label: 'Nível 1',
  availableInstructions: ['move'],
  width: 3,
  height: 1,
  tiles: [
    new Goal({x: 2, y: 0})
  ]
}
