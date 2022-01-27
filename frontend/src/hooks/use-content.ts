import { useContext, useEffect, useState } from "react";
import { FirebaseContext } from "../context/firebase";
import { collection, getDocs } from "firebase/firestore";

const useContent = (target: string) => {
  const [content, setContent] = useState<any>([]);
  const { firestore } = useContext(FirebaseContext);

  useEffect(() => {
    const getData = async () => {
      if (firestore != null) {
        const querySnapshot = await getDocs(collection(firestore, target));
        const allContent = querySnapshot.docs.map((contentObj) => ({
          ...contentObj.data(),
          docId: contentObj.id,
        }));

        setContent(allContent);
      }
    };

    getData();
  }, [firestore, target]);
  return { [target]: content };
};

export default useContent;
