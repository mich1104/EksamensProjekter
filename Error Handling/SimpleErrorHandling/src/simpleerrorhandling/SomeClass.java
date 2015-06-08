/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package simpleerrorhandling;

import simpleerrorhandling.Exceptions.CheckedException;
import simpleerrorhandling.Exceptions.UncheckedException;

/**
 *
 * @author Michael
 */
public class SomeClass {
    
    public void methodChecked() throws CheckedException{
        System.out.println("Checked method");
    }
    public void methodUnchecked() throws UncheckedException{
        System.out.println("Unchecked method");
    }
}
