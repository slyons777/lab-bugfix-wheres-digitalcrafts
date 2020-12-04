const db = require("./db");

function main() {
  const statesWithAnAtlanta = db.statesWithCity("atlanta");
  console.log("\n\nThere is an Atlanta in these states:");
  for (let st of statesWithAnAtlanta) {
    console.log(st);
  }

  console.log("\n\n============================");

  const statesWithAHouston = db.statesWithCity("houston");
  console.log("\n\nThere is a Houston in these states:");
  for (let st of statesWithAHouston) {
    console.log(st);
  }

  // below is what was run originally, error was the incorrect
  // variable name being called in the for statement should have read "Houston"
  // instead of another call to "Atlanta" :

  for (let st of statesWithAnAtlanta) {
    console.log(st);
  }

  console.log("\n\n============================");

  //const statesWithATampa = statesWithCity("tampa");
  //the line above needed "db." added in order to reference the database file
  //corrected with new line below

  const statesWithATampa = db.statesWithCity("tampa");
  console.log("\n\nThere is a Tampa in these states:");
  for (st of statesWithATampa) {
    console.log(st);
  }
}
main(); //changed main to be uncommented so program function main would run
