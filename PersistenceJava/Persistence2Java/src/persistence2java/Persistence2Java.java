/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package persistence2java;

import javax.persistence.Persistence;

/**
 *
 * @author Michael
 */
public class Persistence2Java {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        Persistence.generateSchema("Persistence2JavaPU", null);
    }
    
}
