package  com.example.servingwebcontent;

import java.util.HashMap;
import java.util.List;

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
HashMap<Day, List<Exercise>> Routine; //hashmap with a list


//this function will get a exercise on a specific day at a given index
public Exercise getExercise(Day day, int index){
    if (Routine != null && !Routine.isEmpty())
        return Routine.get(day).get(index); //returning requested exercise
    else return null;
}
//this function will set a new exercise on a given day at a specific index
public void setExercise(Day day, int index, Exercise exercise){
 if (Routine != null && !Routine.isEmpty())
     Routine.get(day).set(index, exercise); //at key set at index new exercise
 
  
}
}
