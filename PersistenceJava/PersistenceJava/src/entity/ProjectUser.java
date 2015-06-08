/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package entity;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Temporal;

/**
 *
 * @author Michael
 */
@Entity
public class ProjectUser implements Serializable {
    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    @ManyToMany(cascade = CascadeType.ALL)
    private List<Project> projects = new ArrayList();
    
    private String userName;
    private String email;
    @Temporal(javax.persistence.TemporalType.DATE)
    private Date created;

    public ProjectUser() {
    }

    public ProjectUser(String userName, String email) {
        this.userName = userName;
        this.email = email;
        created = new Date();
    }

    public ProjectUser(Integer id, String userName, String email, Date created) {
        this.id = id;
        this.userName = userName;
        this.email = email;
        this.created = created;
    }
    
    public void addProject(Project p){
        projects.add(p);
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
        if (!(object instanceof ProjectUser)) {
            return false;
        }
        ProjectUser other = (ProjectUser) object;
        if ((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id))) {
            return false;
        }
        return true;
    }

    public List<Project> getProjects() {
        return projects;
    }

    public void setProjects(List<Project> projects) {
        this.projects = projects;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Date getCreated() {
        return created;
    }

    public void setCreated(Date created) {
        this.created = created;
    }

    @Override
    public String toString() {
        return "entity.ProjectUser[ id=" + id + " ]";
    }
    
}
