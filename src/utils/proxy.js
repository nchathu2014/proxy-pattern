const person = {
  name: "John Doe",
  age: 42,
  nationality: "American"
};

// Crate a proxy object

/* const personProxy = new Proxy(person, {
  get: (obj, key) => {
    //check for existance of properties
    if (!obj[key]) {
      console.error(`${key} property doesn't exists`);
    } else {
      console.log(`The value of ${key} is ${obj[key]}`);
    }
  },
  set: (obj, key, value) => {
    if (key === "name" && typeof value !== "string" && value.length <= 2) {
      console.log(`Sorry, provide a valid name`);
    } else if (key === "age" && typeof value !== "number") {
      console.log(`Sorry, age should be a number`);
    } else if (key === "nationality" && typeof value !== "string") {
      console.log(`Sorry, provide a valid nationality`);
    } else {
      console.log(`Changed ${key} from ${obj[key]} to ${value}`);
      obj[key] = value;
    }
    return true;
  }
}); */

//TODO: Have to do the validation of Keys
const proxyWithReflect = new Proxy(person, {
  get: (obj, key) => {
    console.log(`The value of ${key} is ${Reflect.get(obj, key)}`);
  },
  set: (obj, key, value) => {
    console.log(`Changed ${key} from ${obj[key]} to ${value}`);
    return Reflect.set(obj, key, value);
  }
});

export default proxyWithReflect;
