// ES6 Fat Arrow Functions

var javascript = {
  name: "JavaScript",
  libraries: ["React", "Angular", "Vue"],
  printLibraries: function () {
    var self = this;
    this.libraries.forEach((a) => console.log(`${self.name} loves ${a}`));
  },
};

javascript.printLibraries();
