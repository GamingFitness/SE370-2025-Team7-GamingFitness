package  com.example.servingwebcontent;

import java.util.HashMap;

public class WorkoutProgram{
/*
Workout program is a hashmap, this is to represent the week and a list of exercises some one could have. For reference:
Example syntax 
Routine.put("")


variables
Day is a enum representing the week
Rotuutine is a hashmap containing exercises mapped to different days to represent the user's weekly routine.
 */
 enum Day { //representing the week
        SUNDAY, MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY
    }
HashMap<Day, Exercise> Routine;

}
