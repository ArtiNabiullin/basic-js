const { NotImplementedError } = require("../lib");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  const commandName = [];
  members.forEach((value) => {
    if (typeof value === "string") {
      const letters = value.trim().slice(0, 1).toUpperCase();
      commandName.push(letters);
    }
  });
  return commandName.sort().join("");
}

module.exports = {
  createDreamTeam,
};
