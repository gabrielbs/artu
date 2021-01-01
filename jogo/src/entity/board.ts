import { Entity } from './entity'

export class Board extends Entity {
  constructor(
    private width: number,
    private height: number,
  ) { super("board") }

  protected elementStyle() {
    return {
      width: `${this.width}px`,
      height: `${this.height}px`
    }
  }
}
