/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package facade;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import entity.*;
import java.util.List;
import javax.persistence.Query;

/**
 *
 * @author Michael
 */
public class DBFacade {
    /**
     *
     *  Ikke meget errorhandling eller retur værdier
     *  Det ville være lettere hvis f-eks ProjectUser objekt blev returneret efter oprettelse for lettere adgang til id etc.
     */
    private EntityManagerFactory emf = Persistence.createEntityManagerFactory("PersistenceJavaPU");
    private EntityManager em = emf.createEntityManager();
    
    public void createUser(String name, String email){
        ProjectUser u = new ProjectUser(name, email);
        
        em.getTransaction().begin();
        em.persist(u);
        em.getTransaction().commit();
    }
    public ProjectUser getUser(int id){
        ProjectUser found = em.find(ProjectUser.class, id);
        return found;
    }
    public List<ProjectUser> getAllUsers(){
        List<ProjectUser> users;
        Query query = em.createQuery("SELECT p FROM ProjectUser p");
        users = query.getResultList();
        return users;
    }
    public void addProjectToUser(ProjectUser pu, Project p){
        pu.addProject(p);
        em.getTransaction().begin();
        em.merge(pu);
        em.getTransaction().commit();
    }
}
