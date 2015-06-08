/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package REST;

import com.google.gson.Gson;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Produces;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import todo.Todo;
import todo.TodoList;

/**
 * REST Web Service
 *
 * @author Michael
 */
@Path("todos")
public class APIResource {

    
    //  TodoList is singleton
    private TodoList list = TodoList.getInstance();
    private Gson gson = new Gson();
    
    @Context
    private UriInfo context;

    /**
     * Creates a new instance of APIResource
     */
    public APIResource() {
        
        
    }

    /**
     * Retrieves representation of an instance of REST.APIResource
     * @return an instance of java.lang.String
     */
    @GET
    @Produces("application/json")
    public String getJson() {
        //TODO return proper representation object
        return gson.toJson(list.getList());
    }

    @POST
    @Produces("application/json")
    @Consumes(MediaType.APPLICATION_JSON)
    public String addTodo(String todoDescription){
        
        System.out.println(todoDescription);
        Todo newTodo = gson.fromJson(todoDescription, Todo.class);
        newTodo.setId(list.getSize()+1);
        list.addTodo(newTodo);
        System.out.println(list.getSize());
        System.out.println(newTodo);
        return gson.toJson(list.getList());
    }
    
    @DELETE
    @Path("{id}")
    @Produces("text/plain")
    public String deleteTodo(@PathParam("id")int id){
        
        list.deleteTodo(id);
        return "Todo should be deleted now";
    }
}
