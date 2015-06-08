/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package persistencejava;

import entity.*;
import facade.DBFacade;
import java.util.Date;
import java.util.List;

/**
 *
 * @author Michael
 */
public class TestClass {
    public static void main(String[] args) {
        DBFacade facade = new DBFacade();
        facade.createUser("Michael","email@email.dk");
        List<ProjectUser> list = facade.getAllUsers();
        for(ProjectUser p:list){
            System.out.println(p.getUserName() + ", id: " + p.getId());
        }
        int id = list.get(0).getId();
        ProjectUser p = facade.getUser(id);
        System.out.println("Get single user by id: "+p.getUserName() + ", id: " + p.getId());
        
        Project proj = new Project();
        proj.setCreated(new Date());
        proj.setName("TestProject");
        proj.setDescription("Mit nye projekt");
        
        facade.addProjectToUser(p, proj);
        p = facade.getUser(id);
        Project returnedProject = p.getProjects().get(0);
        System.out.println("User: "+p.getUserName()+"'s projects: "+returnedProject.getName());
    }
}
