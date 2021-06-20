package com.systech.mss;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class Test {
    public static void main(String[] args) {
        try {
            Date d = new SimpleDateFormat("dd-MM-yyyy").parse("01-06-2021");
            System.out.println(d);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        String[] a={"ree","ert"};
        System.out.println(a);
    }
}
