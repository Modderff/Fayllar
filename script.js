import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getDatabase,
  ref,
  get,
  update
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyBagTt_GKxzKzUiIj8dIVZu-gPM9-EHDUo",
  authDomain: "planning-with-ai-7f474.firebaseapp.com",
  databaseURL: "https://planning-with-ai-7f474-default-rtdb.firebaseio.com",
  projectId: "planning-with-ai-7f474",
  storageBucket: "planning-with-ai-7f474.firebasestorage.app",
  messagingSenderId: "730296215902",
  appId: "1:730296215902:web:ef0487d2ac628724e947cf"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

window.getKey = async function () {

    const snapshot = await get(ref(db, "keys"));

    if (!snapshot.exists()) {
        document.getElementById("key").innerHTML = "Key topilmadi";
        return;
    }

    const keys = snapshot.val();

    for (const id in keys) {

        const item = keys[id];

        if (item.used === false) {

            document.getElementById("key").innerHTML = item.key;

            await update(ref(db, "keys/" + id), {
                used: true
            });

            return;
        }

    }

    document.getElementById("key").innerHTML = "Key qolmagan";

}
