//Tue Sep 03 2024 06:47:47 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const axios = require("axios");
async function xuqi(_0x4215a4) {
  try {
    const _0x54080c = "http://124.223.17.33:13600/renewal17",
      _0x34c132 = {
        "content-type": "application/json"
      },
      _0x3fa65f = {
        "elmdata": _0x4215a4
      },
      _0xcbc16c = await axios.post(_0x54080c, _0x3fa65f, {
        "headers": _0x34c132,
        "timeout": 60000
      });
    return _0xcbc16c.data.msg;
  } catch (_0x178b60) {
    return "⚠️续期接口可能g了";
  }
}
async function main() {
  const _0x3614bd = process.env.elmck.split("&");
  console.log("😋获取到" + _0x3614bd.length + "个账号\n\n");
  for (const _0x451291 of _0x3614bd) {
    console.log("👤[账号" + (_0x3614bd.indexOf(_0x451291) + 1) + "]", end = "");
    console.log(await xuqi(_0x451291));
  }
}
main();