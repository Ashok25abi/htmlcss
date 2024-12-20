let myArray = ["eat", "sleep", "code"];
const mydata = {
  name: "Ashok",
  hobbies: ["eat", "sleep", "code"],
  logName: function () {
    console.log(this.name);
  },
};

sessionStorage.setItem("mydatas",JSON.stringify(mydata));
const sessionitem=JSON.parse(sessionStorage.getItem("mydatas",mydata));
console.log(sessionitem);
