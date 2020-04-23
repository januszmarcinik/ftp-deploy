const core = require('@actions/core');
const ftpDeploy = require("ftp-deploy");

async function run() {
  try {
    const server = core.getInput('server');
    const user = core.getInput('user');
    const password = core.getInput('password');
    const localRoot = core.getInput('localRoot');

    const config = getConfig(server, user, password, localRoot);

    const ftp = new ftpDeploy();

    ftp.deploy(config)
        .then(res => console.log("finished: ", res))
        .catch(err => console.log(err));
  }
  catch (error) {
    core.setFailed(error.message);
  }
}

run();

function getConfig(server, user, password, localRoot) {
  return {
    user: user,
    password: password,
    host: server,
    port: 21,
    localRoot: localRoot,
    remoteRoot: "/",
    include: ["*"],
    exclude: [],
    deleteRemote: true,
    forcePasv: true
  };
}
