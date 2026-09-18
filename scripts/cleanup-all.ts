import { db } from '../src/lib/db';
async function main() {
  // cron seed 的脏进度数据（含空 subjectId 与本轮 seed 的有效格式假数据——演示库保持零状态）
  const lp = await db.learningProgress.deleteMany({});
  console.log('LearningProgress deleted:', lp.count);
  // 测试期间复习评分记录
  const fr = await db.flashcardReview.deleteMany({});
  console.log('FlashCardReview deleted:', fr.count);
  // 其他表检查
  console.log('QuizAttempt:', await db.quizAttempt.count());
  console.log('Note:', await db.note.count());
  await db.$disconnect();
}
main();
