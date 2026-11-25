/* bloom — Firebase connection for cloud sync
   ──────────────────────────────────────────
   Paste your project's config here (see SYNC-SETUP.md, step 6).
   While this is null, sync stays switched off and the "☁️ sync" tab is hidden.

   These values are not secret: Firebase web configs are meant to be public.
   Your data is protected by the security rules in firestore.rules. */

window.BLOOM_FIREBASE_CONFIG = null;

/* Example of what it should look like once filled in:

window.BLOOM_FIREBASE_CONFIG = {
  apiKey: "AIza...",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project",
  storageBucket: "your-project.firebasestorage.app",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abc123"
};
*/
