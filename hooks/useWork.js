import { firebase } from "../firebase";
import {
  collection,
  getFirestore,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import React from "react";
const db = getFirestore();
function useWork() {
  const [works, setWorks] = React.useState([]);
  React.useEffect(() => {
    const q = query(collection(db, "works"));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const work = [];
      querySnapshot.forEach((doc) => {
        work.push(doc.data());
      });
      setWorks(work);
    });

    return () => unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return works;
}

export default useWork;
