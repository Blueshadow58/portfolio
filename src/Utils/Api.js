import { collection, getDocs } from "firebase/firestore";
import { db } from "./apiConfig";

async function getProyects() {
  try {
    const querySnapshot = await getDocs(collection(db, "proyects"));
    const data = [];
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      // console.log(doc.id, " => ", doc.data());
      data.push(doc.data());
    });

    return data;
  } catch (error) {
    console.error(error);
  }
}

export { getProyects };
