// Day 6
const os = require("os")

function getOs() {
  const data = {}
  const cpus = os.cpus();
  data.userName = os.userInfo().username
  data.model = cpus[0].model;
  data.speed = cpus[0].speed + 'GHz';
  data.uptime = (os.uptime() / 3600000).toFixed(2) + "Hr";
  data.arch = os.arch();
  data.totalRAM = (os.totalmem() / (1024 * 1024 * 1024)).toFixed(2) + "GB";
  data.freeRAM = (os.freemem() / (1024 * 1024 * 1024)).toFixed(2) + "GB";
  data.homeDirectory = os.homedir();
  data.hostname = os.hostname();
  data.OsVersion = os.version();
  data.IPAddress = getIPAddress();
  data.platform = os.platform();
  data.release = os.release();
  data.defaultTempDir = os.tmpdir();
  data.OsType = os.type()
  console.log(data);
}

console.time('bunch-of-stuff');
let total = 0;
for (let index = 0; index < 1000000000; index++) {
  ++total;
}
getOs();
console.timeEnd('bunch-of-stuff');

function getIPAddress() {
  var interfaces = os.networkInterfaces();
  for (var devName in interfaces) {
    var iface = interfaces[devName];

    for (var i = 0; i < iface.length; i++) {
      var alias = iface[i];
      if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal)
        return alias.address;
    }
  }
  return '0.0.0.0';
}