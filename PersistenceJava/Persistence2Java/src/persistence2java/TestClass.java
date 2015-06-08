/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package persistence2java;

import entity.*;
import entity.facade.DBFacade;
import java.util.Date;

/**
 *
 * @author Michael
 */
public class TestClass {
    public static void main(String[] args) {
        
        DBFacade facade = new DBFacade();
        
        Employee e = new Employee();
        e.setAge(30);
        e.setBirthDate(new Date(1985, 1, 20));
        e.setFirstName("Employeename");
        e.setIsMarried(false);
        e.setLastName("eLastName");
        e.setSoSecNr(12345);
        e.setTaxClass("A");
        e.setWage(321);
        
        Student s1 = new Student();
        s1.setAge(18);
        s1.setBirthDate(new Date(1996,6,8));
        s1.setFirstName("Studetn1");
        s1.setIsMarried(false);
        s1.setLastName("SomeLastName");
        
        facade.addPerson(e);
        facade.addPerson(s1);
        
        
        
        
        s1.setSupervisedBy(e);
        facade.updatePerson(s1);
        
        Student s2 = new Student();
        s2.setAge(18);
        s2.setBirthDate(new Date(1996,6,8));
        s2.setFirstName("Studetn2");
        s2.setIsMarried(false);
        s2.setLastName("Some22222");
        s2.setSupervisedBy(e);
        
        facade.addPerson(s2);
        
        Person foundPerson = facade.findPerson("Studetn1");
        System.out.println("Found person: " + foundPerson.getFirstName());
    }
}
