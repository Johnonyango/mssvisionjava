package com.systech.mss.seurity;


import javax.crypto.spec.SecretKeySpec;
import java.security.Key;

public class SimpleKeyGenerator implements KeyGenerator {

  // ======================================
  // =          Business methods          =
  // ======================================

  @Override
  public Key generateKey() {
    String keyString = "$YSt3(hFm*!";
    return new SecretKeySpec(keyString.getBytes(), 0, keyString.getBytes().length, "DES");
  }
}
