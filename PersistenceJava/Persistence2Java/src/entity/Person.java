/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package entity;

import java.io.Serializable;
import java.util.Date;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Temporal;
import javax.persistence.Transient;

/**
 *
 * @author Michael
 */
@Entity
@Inheritance(strategy = InheritanceType.JOINED)
public class Person implements Serializable {
    @ManyToOne(cascade = CascadeType.ALL)
    private Person supervisedBy;
    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    private String firstName;
    private String lastName;
    @Temporal(javax.persistence.TemporalType.DATE)
    private Date birthDate;
    @Transient
    private int age;
    private boolean isMarried;
    
    @OneToMany(mappedBy = "supervisedBy")
    private List<Person> supervisorFor;

    public Person(){}
    public Person(Person supervisedBy, Integer id, String firstName, String lastName, Date birthDate, int age, boolean isMarried, List<Person> supervisorFor) {
        this.supervisedBy = supervisedBy;
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate;
        this.age = age;
        this.isMarried = isMarried;
        this.supervisorFor = supervisorFor;
    }

    public Person getSupervisedBy() {
        return supervisedBy;
    }

    public void setSupervisedBy(Person supervisedBy) {
        this.supervisedBy = supervisedBy;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public Date getBirthDate() {
        return birthDate;
    }

    public void setBirthDate(Date birthDate) {
        this.birthDate = birthDate;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public boolean isIsMarried() {
        return isMarried;
    }

    public void setIsMarried(boolean isMarried) {
        this.isMarried = isMarried;
    }

    public List<Person> getSupervisorFor() {
        return supervisorFor;
    }

    public void setSupervisorFor(List<Person> supervisorFor) {
        this.supervisorFor = supervisorFor;
    }
    
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (id != null ? id.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Person)) {
            return false;
        }
        Person other = (Person) object;
        if ((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "entity.Person[ id=" + id + " ]";
    }
    
}
