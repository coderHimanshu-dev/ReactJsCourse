// Interface for a user object
interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

// Object implementing the interface
const user: User = {
  id: 1,
  name: "John Doe",
  email: "john@example.com",
  isActive: true,
};

// Function accepting an interface type
function printUser(user: User): void {
  console.log(`ID: ${user.id}`);
  console.log(`Name: ${user.name}`);
  console.log(`Email: ${user.email}`);
  console.log(`Active: ${user.isActive}`);
}

// Class implementing the interface
class Admin implements User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;

  constructor(id: number, name: string, email: string, isActive: boolean) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.isActive = isActive;
  }

  showDetails(): void {
    printUser(this);
  }
}

const admin = new Admin(2, "Jane Smith", "jane@example.com", true);
printUser(user);
admin.showDetails();
