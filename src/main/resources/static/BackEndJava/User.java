import java.util.Scanner;


public class User {
  private String email;
  private String password;
  private String username;
  private int EnduranceInfo = 0;
  private int CardioInfo = 0;
  private int BodyBuildingInfo = 0;
  private int YogaInfo = 0;
  private int PowerLiftingInfo = 0;
  private String MeditationTime = "00:00:00";
  private int total_points = 0;
  Scanner Object = new Scanner(System.in); //For user input

  //Constructor
  public User() {
    email = "Random";
    password = "Random";
    username = "No username";
  } //end of constructor

  //This function allows the user to check their progress
  //on a variety of exercises.
  public void check_progress() {
    System.out.print("Number of laps: ");
    System.out.println(this.getEndurance());
    System.out.print("Number of lifts: ");
    System.out.println(this.getBodyBuildData());
    System.out.print("Number of squats: ");
    System.out.println(this.getPowerLiftData());
    System.out.print("Meditation Time: ");
    System.out.println(this.getMeditationTime());
    System.out.print("Yoga Info: ");
    System.out.println(this.getYogaInfo());
    System.out.print("Cardio Info: ");
    System.out.println(this.getCardio());
    System.out.print("Total points: ");
    System.out.println(this.getPoints());
  } //end of function

  //This function allows the user to change their email address
  public void change_email() {
    System.out.println("Enter a new email address");
    String new_email = Object.nextLine();
    email = new_email;
  } //end of function

  //This function allows the user to change their password
  public void change_password() {
    System.out.println("Enter a new password");
    String new_password = Object.nextLine();
    password = new_password; //Changes the user's password
  } //end of function

  //This function allows the user to change their username
  public void change_username() {
    System.out.println("Enter a new username");
    String new_username = Object.nextLine();
    username = new_username; //Changes the username
  } //end of function

  //This function returns the Endurance Info
  public int getEndurance() {
    return EnduranceInfo;
  } //end of function

  //This function returns the Body Building Data
  public int getBodyBuildData() {
    return BodyBuildingInfo;
  } //end of function

  //This function returns the Power Lifting Data
  public int getPowerLiftData() {
    return PowerLiftingInfo;
  } //end of function

  //This function returns the Meditation Time
  public String getMeditationTime() {
    return MeditationTime;
  } //end of function

  //This function returns the Yoga Info
  public int getYogaInfo() {
    return YogaInfo;
  } //end of function
  
  //This function returns the Cardio Info
  public int getCardio() {
    return CardioInfo;
  } //end of function

  //This function returns the total points
  public int getPoints() {
    return total_points;
 } //end of function
  
  //The user can enter their Endurance data
  public void EnterEndurance(int meters) {
    EnduranceInfo = meters;
  } //end of function

  //The user can enter their Body Building data
  public void EnterBodyBuild(int data) {
    BodyBuildingInfo = data;
  } //end of function

  //The user can enter their Power Lifting data
  public void EnterPowerLift(int data) {
    PowerLiftingInfo = data;
  } //end of function

  //The user can enter the amount of time they meditated
  public void EnterMeditationTime(String time) {
    MeditationTime = time;
  } //end of function

  //The user can enter their Cardio data
  public void EnterCardio(int data) {
    CardioInfo = data;
  }

  //Returns the email address
  public String getEmail() {
    return email;
  } //end of function

  //Returns the password
  public String getPassword() {
    return password;
  } //end of function

  //Returns the username
  public String getUsername() {
    return username;
  } //end of function
  
  /*public void PurchaseCosmetics() {
    
  }

  public void selectMode() {
    
  }*/

  
}
