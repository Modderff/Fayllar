import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
    getDatabase,
    ref,
    get,
    runTransaction
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

async function getKey() {

    document.getElementById("key").innerHTML = "Kuting...";

    const snap = await get(ref(db, "keys"));

    if (!snap.exists()) {
        document.getElementById("key").innerHTML = "Key topilmadi";
        return;
    }

    const keys = snap.val();

    for (const id in keys) {

        const keyRef = ref(db, "keys/" + id);

        const result = await runTransaction(keyRef, (data) => {

            if (data == null) return data;

            if (data.used === false) {
                data.used = true;
                return data;
            }

            return;
        });

        if (result.committed) {
            document.getElementById("key").innerHTML = result.snapshot.val().key;
            return;
        }
    }

    document.getElementById("key").innerHTML = "Key qolmagan";
}

window.onload = getKey;
