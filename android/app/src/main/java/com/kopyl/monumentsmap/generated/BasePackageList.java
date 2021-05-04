package com.kopyl.monumentsmap.generated;

import java.util.Arrays;
import java.util.List;
import org.unimodules.core.interfaces.Package;

public class BasePackageList {
  public List<Package> getPackageList() {
    return Arrays.<Package>asList(
        new expo.modules.constants.ConstantsPackage(),
        new expo.modules.localization.LocalizationPackage(),
        new expo.modules.location.LocationPackage(),
        new expo.modules.splashscreen.SplashScreenPackage()
    );
  }
}
