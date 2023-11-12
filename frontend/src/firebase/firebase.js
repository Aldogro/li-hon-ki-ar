import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc, updateDoc, deleteDoc, addDoc, query, orderBy } from 'firebase/firestore';
import { deleteObject, getStorage, listAll, ref as storageRef } from 'firebase/storage';
import { getAuth } from 'firebase/auth';
import firebaseConfig from './firebase-config';

export const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const firestore = getFirestore(app)
const storage = getStorage(app);

const addDocToCollection = async (collectionName, doc) => {
    try {
        return await addDoc(collection(firestore, collectionName), doc);
    } catch (error) {
        throw new Error(error);
    }
};

export {
    auth,
    addDocToCollection,
    firestore,
    collection,
    deleteDoc,
    doc,
    orderBy,
    query,
    storage,
    listAll,
    storageRef,
    deleteObject,
    updateDoc,
};
