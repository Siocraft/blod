import { firebaseStorage } from "@config";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { ErrorReporting } from "../Errors";

export const uploadImageAsync = async (uri: string, id?: string) => {
  if (!id || !uri) return null;

  const blob: Blob = await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = () => {
      resolve(xhr.response);
    };
    xhr.onerror = function (e) {
      ErrorReporting(e);
      reject(new TypeError("Network request failed"));
    };
    xhr.responseType = "blob";
    xhr.open("GET", uri, true);
    xhr.send(null);
  });

  const fileRef = ref(firebaseStorage, "images/" + id);

  await uploadBytesResumable(fileRef, blob);

  // @ts-expect-error - This is a bug in the firebase types
  blob.close();

  return await getDownloadURL(fileRef);
};
