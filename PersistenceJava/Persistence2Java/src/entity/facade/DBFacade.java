/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package entity.facade;

import entity.*;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.Query;

/**
 *
 * @author Michael
 */
public class DBFacade {
    EntityManagerFactory emf = Persistence.createEntityManagerFactory("Persistence2JavaPU");
    
    EntityManager em = emf.createEntityManager();
    
    public void addPerson(Person p){
        em.getTransaction().begin();
        em.persist(p);
        em.getTransaction().commit();
    }
    
    public void updatePerson(Person p){
        em.getTransaction().begin();
        em.merge(p);
        em.getTransaction().commit();
    }
    
    public Person findPerson(String name){
        Query query = em.createQuery("SELECT p FROM Person p WHERE p.firstName='"+name+"'");
        List resultList = query.getResultList();
        System.out.println(resultList);
        Person p = Person.class.cast(resultList.get(0));
        return p;
    }
}
