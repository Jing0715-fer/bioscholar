// 生理学自绘插图登记表（44 系列；四个批次聚合）
import part1 from './part1'
import part2 from './part2'
import part3 from './part3'
import part4 from './part4'

const scenes: Record<string, string> = {
  ...part1,
  ...part2,
  ...part3,
  ...part4,
}
export default scenes
