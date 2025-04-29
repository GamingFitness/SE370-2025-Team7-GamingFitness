package  com.example.servingwebcontent;

import java.util.HashMap;

public class WorkoutProgram{
/*
Workout program uses a HashMap to represent the week and a list of exercises some one could have. For reference:
Example syntax 
Routine.put("Friday", BicepCurl);
 */
 enum Day { //representing the week
        SUNDAY, MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY
    }
HashMap<Day, Exercise> Routine; //this is a representation of the users weekly workout routine.

}
