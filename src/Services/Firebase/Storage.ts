import { firebaseStorage } from "@config";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { ErrorReporting } from "../Errors";

export const uploadImageAsync = async (uri: string, id: string) => {
  if (!id || !uri) return null;

  const blob: Blob = await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
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

  const fileRef = ref(firebaseStorage, id);
  const result = await uploadBytes(fileRef, blob);

  // @ts-expect-error
  blob.close();

  return await getDownloadURL(fileRef);
};
