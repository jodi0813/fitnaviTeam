// 將 src/data/coachSeedData.js 的教練資料匯入 Firestore「coaches」collection
// 執行方式：node scripts/seedCoaches.mjs
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { coachSeedData } from "../src/data/coachSeedData.js";
import { nutritionistSeedData } from "../src/data/nutritionistSeedData.js";

// 與 src/firebase.js 相同的設定（不含 analytics，因為 Node 環境沒有 window）
const firebaseConfig = {
  apiKey: "AIzaSyAD0Wfqw3U0NbDwVnw5thqwWdSR_Jw4724",
  authDomain: "fitnavi-team.firebaseapp.com",
  projectId: "fitnavi-team",
  storageBucket: "fitnavi-team.firebasestorage.app",
  messagingSenderId: "852176680468",
  appId: "1:852176680468:web:1c4df390ef5ab8f7301901",
};

// firestore.rules 規定寫入需登入，這裡沿用專案既有的測試教練帳號登入後再寫入
// 如需更換帳號，設定環境變數 SEED_EMAIL / SEED_PASSWORD
const SEED_EMAIL = process.env.SEED_EMAIL || "coach@gmail.com";
const SEED_PASSWORD = process.env.SEED_PASSWORD || "123456";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

async function seedCollection(collectionName, items) {
  console.log(`準備匯入 ${items.length} 筆資料到 ${collectionName}...`);
  for (const item of items) {
    const { id, ...data } = item;
    await setDoc(doc(db, collectionName, id), data);
    console.log(`✔ 已寫入 ${collectionName}：${item.name}`);
  }
}

async function seed() {
  console.log(`使用 ${SEED_EMAIL} 登入...`);
  await signInWithEmailAndPassword(auth, SEED_EMAIL, SEED_PASSWORD);

  await seedCollection("coaches", coachSeedData);
  await seedCollection("nutritionists", nutritionistSeedData);

  console.log("匯入完成！");
  process.exit(0);
}

seed().catch((err) => {
  console.error("匯入失敗：", err.code || "", err.message || err);
  process.exit(1);
});
