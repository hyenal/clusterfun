export class Config {
  type: string
  media: string
  columns: string[]
  title?: string
  x?: string
  y?: string
  color?: string
  size?: string
  symbol?: string
  bounding_box?: string
  colors?: string[]

  constructor (
    type: string,
    media: string,
    columns: string[],
    title?: string,
    x?: string,
    y?: string,
    color?: string,
    size?: string,
    symbol?: string,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    bounding_box?: string,
    colors?: string[]
  ) {
    this.type = type
    this.media = media
    this.columns = columns
    this.title = title
    this.x = x
    this.y = y
    this.color = color
    this.size = size
    this.symbol = symbol
    this.bounding_box = bounding_box
    this.colors = colors
  }
}
