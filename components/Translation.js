import { useRouter } from "next/dist/client/router";
import az from "../locales/az";
import en from "../locales/en";
import ru from "../locales/ru";

const t = (key) => {
  let transword;
  const router = useRouter();

  const checkLangWord = (word) => {
    if (word != undefined) {
      transword = word;
    } else {
      transword = en[key];
    }
  };

  switch (router.locale) {
    case "en":
      transword = en[key];
      break;
    case "az":
      checkLangWord(az[key]);
      break;
    case "ru":
      checkLangWord(ru[key]);
      break;
    default:
      return (transword = en[key]);
  }
  return transword;
};

export default t;
