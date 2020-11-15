import React from "react";
import * as Localization from "expo-localization";
import i18n from "i18n-js";
import en from "../locate/en.json";
import uk from "../locate/uk.json";
import ru from "../locate/ru.json";
import pl from "../locate/pl.json";
import { getSupportedCultureByLocale } from "../helpers/locate-helpers";

export const LocateContext = React.createContext();

const LocateProvider = ({ children }) => {
  i18n.translations = {
    en,
    uk,
    ru,
    pl,
  };

  i18n.locale = Localization.locale;
  i18n.fallbacks = true;
  i18n.defaultLocale = "en-GB";

  const contextValue = {
    t: i18n.t,
    locale: i18n.locale,
    culture: getSupportedCultureByLocale(Localization.locale)
  };

  return (
    <LocateContext.Provider value={contextValue}>
      {children}
    </LocateContext.Provider>
  );
};

export default LocateProvider;
