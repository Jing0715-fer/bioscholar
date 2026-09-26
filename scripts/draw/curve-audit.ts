// 45-b 补充：curve() 归一化坐标越界审计（只读，不写任何文件）
// monkey-patch B.prototype.curve，在内存中生成全部场景时截获 v/u 越界调用
import { B } from './lib'

const hits: Array<{ ax: number; ay: number; aw: number; ah: number; bad: string; pts0: string }> = []
const origCurve = B.prototype.curve
;(B.prototype.curve as (ax: number, ay: number, aw: number, ah: number, pts: Array<[number, number]>, ...rest: unknown[]) => unknown) = function (ax: number, ay: number, aw: number, ah: number, pts: Array<[number, number]>, ...rest: unknown[]) {
  // 「绝对像素」调用约定（aw=ah=1）不适用归一化检查
  if (!(aw === 1 && ah === 1)) {
    for (const [fx, fy] of pts) {
      if (fx < -0.02 || fx > 1.02 || fy < -0.02 || fy > 1.02) {
        hits.push({
          ax, ay, aw, ah,
          bad: `(${fx}, ${fy})`,
          pts0: `(${pts[0][0]}, ${pts[0][1]})…(${pts[pts.length - 1][0]}, ${pts[pts.length - 1][1]}) n=${pts.length}`,
        })
        break
      }
    }
  }
  return origCurve.call(this, ax, ay, aw, ah, pts, ...rest)
}

const SUBJ = ['bc', 'mb', 'cb', 'bp', 'mi', 'im', 'ne', 'bi', 'vi', 'sb', 'xc', 'em']
for (const subj of SUBJ) {
  for (const idx of ['index', 'index-2']) {
    try { await import(`./scenes/${subj}/${idx}.ts`) } catch { /* 无该登记表 */ }
  }
}

console.log(`curve-audit：越界调用 ${hits.length} 处`)
for (const h of hits) {
  console.log(`  axis(${h.ax},${h.ay},${h.aw}×${h.ah}) badPt=${h.bad} pts=${h.pts0}`)
}
