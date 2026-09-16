import { biochemistryCh1To3 } from '../../src/data/expansions/biochemistry-ch1-3'
const emojiRe = /[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE0F}\u{1F000}-\u{1F02F}]/u
const htmlRe = /<\/?[a-zA-Z][^>]*>/
const codeFence = /```/
let issues = 0
for (const [id, c] of Object.entries(biochemistryCh1To3)) {
  if (emojiRe.test(c)) { console.log(`${id}: EMOJI`); issues++ }
  if (htmlRe.test(c)) { console.log(`${id}: HTML TAG`); issues++ }
  if (codeFence.test(c)) { console.log(`${id}: CODE FENCE`); issues++ }
  if (/＃|##(?! )/.test(c.replace(/^## /gm, ''))) { /* heading check only */ }
  if (/\n##[# ]/.test(c)) { /* nested headings */ }
  if (/(^|\n)#{3,}/.test(c)) { console.log(`${id}: H3+ heading`); issues++ }
}
// quiz fact spot checks
const all = Object.values(biochemistryCh1To3).join('\n')
const facts: Array<[string, RegExp]> = [
  ['q01 蔗糖双异头碳/α-1⇌β-2', /两个异头碳均参与成键，故无游离异头碳羟基，是非还原糖/],
  ['q01b α-1⇌β-2 记法', /α-1 ⇌ β-2/],
  ['q02 糖原 8~12 分支', /每隔 8~12 个残基/],
  ['q02b 支链淀粉 24~30', /24~30 个残基/],
  ['q03 磷酸化酶→1-磷酸葡萄糖', /直接产物是\*\*1-磷酸葡萄糖\*\*/],
  ['q04 淀粉 α / 纤维素 β-1,4', /β-1,4 糖苷键\*\*连接成长链/],
  ['q04b 人体缺 β-糖苷酶', /人体缺乏水解 β-1,4 键的纤维素酶/],
  ['q05 GAG 表含透明质酸/硫酸软骨素/肝素', /硫酸软骨素 \| 葡糖醛酸 \+ GalNAc/],
  ['q05b 透明质酸不硫酸化', /唯一不硫酸化/],
  ['q06 亚油酸 18:2 Δ9,12 必需', /亚油酸（18:2 Δ9,12）与 α-亚麻酸（18:3 Δ9,12,15）\*\*两种家族母体必须由膳食供给/],
  ['q06b Δ12 Δ15 缺乏', /缺乏 Δ12、Δ15 去饱和酶/],
  ['q07 胆固醇双向调节', /双向调节\*\*使膜流动性在较宽温度范围内保持稳定/],
  ['q08 鞘磷脂不含甘油', /高等动物膜中唯一不含甘油的磷脂/],
  ['q09 PE→H_II 锥形', /磷脂酰乙醇胺（PE）\*\*头部小、链占位大，呈锥形，倾向于形成\*\*倒六角相（H_II 相）/],
  ['q10 PLC→DAG+IP3', /PI\(4,5\)P₂ 经磷脂酶 C 水解产生第二信使 IP₃ 与 DAG/],
  ['q11 必需氨基酸 8 种', /甲缬赖亮异苯色苏/],
  ['q12 碱性氨基酸 pI 公式', /碱性氨基酸 pI = \(pKa₂ \+ pKaR\)\/2/],
  ['q12b Lys 9.74', /9.74/],
  ['q13 肽键部分双键六原子共面', /共处一个平面\*\*，称为\*\*肽平面/],
  ['q14 PITC/PTH', /PTH-氨基酸/],
  ['q14b 50~60 残基', /50~60 个残基/],
  ['q15 胰蛋白酶 Lys/Arg', /胰蛋白酶：Lys、Arg 的 C 端侧切断/],
  ['q15b CNBr Met', /溴化氰（CNBr）：Met 的 C 端侧化学切断/],
  ['q15c 胰凝乳蛋白酶芳香族', /胰凝乳蛋白酶：Phe、Tyr、Trp（大芳香侧链）的 C 端侧切断/],
]
for (const [name, re] of facts) {
  if (!re.test(all)) { console.log(`MISSING FACT: ${name}`); issues++ }
}
console.log(issues === 0 ? 'SCAN CLEAN · quiz facts all present' : `${issues} issues`)
