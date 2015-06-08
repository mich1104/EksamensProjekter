/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package todo;

/**
 *
 * @author Michael
 */
public class Todo {
    
    private int ID;
    private String todo;
    private boolean completed;

    public Todo(int ID, String todo) {
        this.ID = ID;
        this.todo = todo;
        completed = false;
    }

    public int getID() {
        return ID;
    }

    public String getTodo() {
        return todo;
    }

    public boolean isCompleted() {
        return completed;
    }

    @Override
    public String toString() {
        return "Todo{" + "ID=" + ID + ", todo=" + todo + ", completed=" + completed + '}';
    }
    
    public void setId(int id){
    
        this.ID = id;
    }
}
