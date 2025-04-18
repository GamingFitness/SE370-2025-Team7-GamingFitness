public class Main {
  public static void main(String[] args) {
    User player = new User();
    player.change_email();
    player.change_password();
    player.change_username();
    player.check_progress();
    System.out.println(player.getEmail());
    System.out.println(player.getPassword());
    System.out.println(player.getEmail());
  }
}
