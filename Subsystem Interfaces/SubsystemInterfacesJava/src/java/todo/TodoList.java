/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package todo;

import java.util.ArrayList;

/**
 *
 * @author Michael
 */
public class TodoList {
    
    private ArrayList<Todo> todoList = new ArrayList();
    private static TodoList instance = null;
    
    private TodoList(){
        Todo t1 = new Todo(1, "Make Java API");
        Todo t2 = new Todo(2, "Make Node API");
        todoList.add(t1);
        todoList.add(t2);
    }
    public static TodoList getInstance(){
    
        if(instance==null){
            instance = new TodoList();
        }
        return instance;
    }
    
    public synchronized int getSize(){
        
        return todoList.size();
    }
    public synchronized ArrayList<Todo> getList(){
        return todoList;
    }
    public synchronized void addTodo(Todo newTodo){
    
        todoList.add(newTodo);
    }
    public synchronized void deleteTodo(int id){
    
        for(Todo td : todoList){
            
            if(td.getID()==id){
                todoList.remove(td);
            }
        }
    }
}
