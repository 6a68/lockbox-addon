const mockLogin = {
  guid: "{33535344-9cdb-8c4a-ae10-5849d0a2f04a}",
  timeCreated: 1546291981955,
  timeLastUsed: 1546291981955,
  timePasswordChanged: 1546291981955,
  timesUsed: 1,
  hostname: "https://example.com",
  httpRealm: null,
  formSubmitURL: "https://example.com",
  usernameField: "username",
  passwordField: "password",
  username: "creativeusername",
  password: "p455w0rd",
};

// Returns a function that logs to a DOM element.
const getLogger = (id) => {
  return (result) => {
    let target = document.querySelector(`#${id}-results`);
    target.textContent = result instanceof Error ? result.toString() : JSON.stringify(result);
  };
};

document.querySelector("#get").addEventListener("click", () => {
  const log = getLogger("get");
  browser.experiments.logins.get(mockLogin.guid).
    then(log, log);
});
document.querySelector("#get-all").addEventListener("click", () => {
  const log = getLogger("get-all");
  browser.experiments.logins.getAll().
    then(log, log);
});
document.querySelector("#add").addEventListener("click", () => {
  const log = getLogger("add");
  browser.experiments.logins.add(mockLogin).
    then(log, log);
});
document.querySelector("#remove").addEventListener("click", () => {
  const log = getLogger("remove");
  browser.experiments.logins.remove(mockLogin.guid).
    then(log, log);
});
document.querySelector("#update").addEventListener("click", () => {
  const log = getLogger("update");
  const loginUpdates = {
    guid: mockLogin.guid,
    username: "updated",
  };
  browser.experiments.logins.update(loginUpdates).
    then(log, log);
});
document.querySelector("#touch").addEventListener("click", () => {
  const log = getLogger("touch");
  browser.experiments.logins.touch(mockLogin.guid).
    then(log, log);
});
