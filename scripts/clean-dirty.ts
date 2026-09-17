import { db } from '../src/lib/db';
async function main() {
  const dirty = await db.learningProgress.count({ where: { subjectId: '' } });
  console.log('dirty empty-subjectId rows:', dirty);
  if (dirty > 0) {
    const r = await db.learningProgress.deleteMany({ where: { subjectId: '' } });
    console.log('deleted:', r.count);
  }
  console.log('remaining LearningProgress:', await db.learningProgress.count());
  await db.$disconnect();
}
main();
