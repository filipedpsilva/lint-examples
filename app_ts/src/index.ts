declare const coolStuff: any;

/**
 * cool interface
 */
interface User {
  name: string;
  id: number;
}

/**
 * cool class
 */
class UserAccount {
  name: string;
  id: number;
  private coolString: string;
  
  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
  
 public show_id() {
   let value: any = "Name: " + this.name + ", ID: " + this.id;
   console.log(value);
 }
}

const user: User = new UserAccount('Murphy', 1);