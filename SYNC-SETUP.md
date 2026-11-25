# Turning on cloud sync for bloom ☁️

Sync lets the same planner open on your phone, laptop and tablet. It uses
**Firebase** (Google's free app backend). Setup takes about 10 minutes and is
only done once. Anyone who uses bloom can then sign in and get their own
private, synced planner.

The free "Spark" plan is plenty: 1 GB of storage, 50,000 reads and 20,000
writes per day. No card is needed.

---

## 1. Create the project

1. Go to <https://console.firebase.google.com> and sign in with your Google account.
2. Click **Create a project** (or **Add project**). Name it `bloom`.
3. Google Analytics: switch it **off** (bloom doesn't need it). Click **Create project**.

## 2. Switch on sign-in

1. In the left menu: **Build → Authentication → Get started**.
2. Under **Sign-in method**, click **Google** → **Enable**, choose your support
   email, and **Save**.
3. Click **Add new provider → Email/Password** → enable the first switch
   (**Email/Password**) → **Save**.
   *(Email sign-in is the backup for iPhone home-screen apps, where Google's
   sign-in window sometimes won't open.)*

## 3. Allow your website to sign people in

1. Still in Authentication, open the **Settings** tab → **Authorized domains**.
2. Click **Add domain** and enter: `kritikarohra175.github.io`
   (`localhost` is already on the list, which is used for testing.)

## 4. Create the database

1. Left menu: **Build → Firestore Database → Create database**.
2. Location: pick one close to you (for India, **asia-south1 (Mumbai)**).
   This can't be changed later.
3. Choose **Start in production mode** → **Create**.

## 5. Lock the database so people only see their own planner

1. In Firestore, open the **Rules** tab.
2. Delete what's there and paste in everything from the `firestore.rules`
   file in this folder.
3. Click **Publish**.

## 6. Connect bloom to your project

1. Click the ⚙️ gear (top left) → **Project settings**.
2. Scroll to **Your apps** → click the **`</>`** (Web) icon.
3. Nickname: `bloom web`. Leave "Firebase Hosting" unticked. Click **Register app**.
4. You'll see a block of code with `const firebaseConfig = { ... }`.
   Copy just the `{ ... }` part.
5. Open `firebase-config.js` in this folder and replace `null` with it, so it reads:

   ```js
   window.BLOOM_FIREBASE_CONFIG = {
     apiKey: "AIza...",
     authDomain: "bloom-xxxx.firebaseapp.com",
     projectId: "bloom-xxxx",
     storageBucket: "bloom-xxxx.firebasestorage.app",
     messagingSenderId: "...",
     appId: "..."
   };
   ```

   These values are **not** secret. Firebase web configs are designed to be
   public, and the rules from step 5 are what keep everyone's data private.

6. Commit and push to GitHub. Within a minute or two, **🎨 customise** will
   show a new **☁️ sync** tab.

---

## Using it

- Open **🎨 customise → ☁️ sync** and sign in with Google (or email). Do the same
  on your other devices with the **same account**.
- Whatever is already on each device is **merged** on first sign-in, so nothing
  is thrown away.
- Edits save on the device first, then sync in the background, usually within
  a couple of seconds. Offline edits sync when you're back online.
- If the same field is edited on two devices before they sync, the newer edit
  wins. Different fields, days and list items are always merged.
- Not synced (they stay per-device): reminder times, a running focus timer, and
  the sound on/off setting.
- **Reset** while signed in erases the planner on all your devices. Download a
  backup first if unsure.

## If something goes wrong

The sync tab shows a plain-language message. The most common ones:

| Message | Fix |
|---|---|
| "this website isn't on the Firebase authorized domains list" | Step 3 |
| "this sign-in method isn't switched on in Firebase" | Step 2 |
| "the cloud refused access" | Step 5: make sure the rules were **published** |
| "your browser blocked the sign-in window" | Allow pop-ups, or use email sign-in |
