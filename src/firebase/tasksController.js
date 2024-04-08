import { db } from "."
import { addDoc, collection } from "firebase/firestore"

export const addTask = task => {
    return addDoc(collection(db, "tasks"), task);
}