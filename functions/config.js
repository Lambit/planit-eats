require("dotenv").config();
require("colors");

const SECRET_KEY = process.env.SECRET_KEY || 'secret-dev';
const STRIPE_PUB_KEY = process.env.SECRET_KEY || 'pubKey';
const WEB_SIG = process.env.WEB_SIG || "siggggg";
const WEB_HOOK = process.env.WEB_HOOK || "siggggg";
const BASE_URL = process.env.BASE_URL;


console.log("DB Config: --------- ----------".america);
console.log("SECRET_KEY:".red, SECRET_KEY);
console.log("STRIPE_PUB_KEY:".zebra, STRIPE_PUB_KEY);
console.log("SIGGGGGGG:".zebra, WEB_SIG);
console.log("HOOOOOKKKKK:".rainbow, WEB_HOOK);
console.log("--------- ------- -------".rainbow);
console.log("--------- ------- -------".trap);

module.exports = {
    SECRET_KEY,
    STRIPE_PUB_KEY,
    WEB_SIG,
    WEB_HOOK,
    BASE_URL,
  };