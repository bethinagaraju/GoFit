import { auth } from "./firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile} from "firebase/auth";


/////////////////////////////////////
export const signUp = async (email, password, displayName) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Update display name
    await updateProfile(user, {
      displayName: displayName,
    });

 

    console.log("User created:", user);
    console.log("Display Name set:", displayName);

    return true;
  } catch (error) {
    console.error("Error signing up:", error.message);
    return false;
  }
};




const signIn = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
     console.log("User signed in:------------------------------------------------------>", userCredential.user);
     console.log("User signed in:------------------------------------------------------>", userCredential.user.displayName);
     return userCredential;

  } catch (error) {
    console.error("Error signing in:", error.message);
  }
};

export { signIn };

