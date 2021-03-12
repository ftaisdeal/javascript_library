import { sayBye, test } from "./export";
import { sayHi as sayHello } from "./export"; // imports can be renamed during import

sayHello("Firinn");
sayBye("Firinn");
console.log(test);
