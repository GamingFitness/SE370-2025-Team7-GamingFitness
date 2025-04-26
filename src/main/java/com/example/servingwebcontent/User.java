package com.example.servingwebcontent;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table; // this is for the @table annotation to make a custom table with our sql to avoid clobbering standard values
@Entity //entity means this is being stored in our database
@Table(name = "app_user")  // Creating a table name that isn't a reserved keyword

/*
 * This class represents our user. Each user has a id, username, and training style. 
 */
public class User {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private long id; //the user's id
  private String userName; //the user's name
  private String style; //the workout style that a user selects
  public User() {} //constructor!

  //methods
  public String getUserName() {
    return userName;
  }

  public void setUserName(String userName) {
    this.userName = userName;
  }

  public long getId() {
    return id;
  }
 public void setId(long id) {
    this.id = id;
  }
  public long getStyle() {
    return id;
  }
 public void setStyle(String style) {
    this.style=style;
  }



}
