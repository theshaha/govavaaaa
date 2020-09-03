const http = require("http");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://spam-1-20.glitch.me/`);
}, 280000);

// 50 token dane
//
const Discord = require("discord.js");
const Canvas = require("canvas");
const fs = require("fs");
const cmd = require("node-cmd");
const config = require("./config.json");
const prefix = config.prefix;
const MARS = new Discord.Client();
const MARS2 = new Discord.Client();
const MARS3 = new Discord.Client();
const MARS4 = new Discord.Client();
const MARS5 = new Discord.Client();
const MARS6 = new Discord.Client();
const MARS7 = new Discord.Client();
const MARS8 = new Discord.Client();
const MARS9 = new Discord.Client();
const MARS10 = new Discord.Client();
const MARS11 = new Discord.Client();
const MARS12 = new Discord.Client();
const MARS13 = new Discord.Client();
const MARS14 = new Discord.Client();
const MARS15 = new Discord.Client();
const MARS16 = new Discord.Client();
const MARS17 = new Discord.Client();
const MARS18 = new Discord.Client();
const MARS19 = new Discord.Client();
const MARS20 = new Discord.Client();
const MARS21 = new Discord.Client();
const MARS22 = new Discord.Client();
const MARS23 = new Discord.Client();
const MARS24 = new Discord.Client();
const MARS25 = new Discord.Client();
const MARS26 = new Discord.Client();
const MARS27 = new Discord.Client();
const MARS28 = new Discord.Client();
const MARS29 = new Discord.Client();
const MARS30 = new Discord.Client();
const MARS31 = new Discord.Client();
const MARS32 = new Discord.Client();
const MARS33 = new Discord.Client();
const MARS34 = new Discord.Client();
const MARS35 = new Discord.Client();
const MARS36 = new Discord.Client();
const MARS37 = new Discord.Client();
const MARS38 = new Discord.Client();
const MARS39 = new Discord.Client();
const MARS40 = new Discord.Client();
const MARS41 = new Discord.Client();
const MARS42 = new Discord.Client();
const MARS43 = new Discord.Client();
const MARS44 = new Discord.Client();
const MARS45 = new Discord.Client();
const MARS46 = new Discord.Client();
const MARS47 = new Discord.Client();
const MARS48 = new Discord.Client();
const MARS49 = new Discord.Client();
const MARS50 = new Discord.Client();


const help = `**
       \`\`\`  Main Commands  :   \`\`\`
                  
- ${config.prefix}spam on - لتشغيل الاسبام 
         
- ${config.prefix}spam off - لايقاف الاسبام
         
- ${config.groupnm}[NumberACC] - لاستخدام امر تحويل الفلوس (Say CODE)

- ${config.prefix}react - لضافة ريأكت علي اي رسالة
         
- ${config.prefix}stayvoice - لتثبيت الحسابات في روم صوتي

- ${config.prefix}randomava - لضافة صورة عشوائي لكل حساب
         
- ${config.prefix}join [LINK INVITE] - لـ اضافة الحسابات في اي سيرفر 

- ${config.prefix}friend [ID USER] - لـ ارسال طلبات صداقة بـ الحسابات

- ${config.prefix}dly - لجمع المرتب اليومي من جميع الحسابات 

- ${config.prefix}prof - لظهار جميع معلومات الحسابات في البروبوت

- ${config.prefix}cc - لظهار رصيد الحسابات في البروبوت

         \`\`\` Admin Commands : \`\`\` 
                  
- ${config.prefix}setownerID [ID NEW OWNER] - لـ تغير ايدي الصاحب
                  
- ${config.prefix}setserverID [ID SERVER SPAM] - لـ تحديد سيرفر الاسبام
                  
- ${config.prefix}setchannelID [ID CHANNEL SPAM] - لـ تحديد روم الاسبام
                  
- ${config.prefix}settimeSpam [TIME SPAM] - لتحديد سرعة الاسبام
                  
- ${config.prefix}settimeStop [TIME STOP SPAM] - لتحديد مدة توقف الاسبام بعد تشغيلة
                  
- ${config.prefix}reload - لـ اعادة تشغيل البوت  بعد تغير بيانات JSON (مهم جدا بعد م تستخدم اوامر الادمن)

         
**`;
// dev mars

const err = `** \`\`\`  [ERORR] : لازم تسوي رتبة بـ اسم  \`\`\`
         \`\` Role.Kahrbaa \`\` **`;

// ======= [ settings JSON   ] ======== //
const dinfo = JSON.parse(fs.readFileSync("./data.json", "UTF8"));
MARS.on("message", async msg => {
  if (!msg.guild) return;
  if (msg.author.bot) return;
  if (!dinfo)
    dinfo = {
      // جمــيع الحقوق محفوظة لدي "Kahrbaa"
      owner: config.kahrbaaid,
      serverid: "NONE",
      channelid: "NONE", // كههربا (حسن ياسر)
      timespam: "NONE",
      timestop: "NONE"
    };
  if (msg.content.startsWith(config.prefix + "setownerID")) {
    // كههربا (حسن ياسر)
    if (msg.channel.type == "dm")
      // جمــيع الحقوق محفوظة لدي "Kahrbaa"
      return msg.reply("** لا تستيطع استخدام الامر علي الخاص .. **");
    if (!dinfo.owner.includes(msg.author.id)) return;
    let args = msg.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (!args) return msg.channel.send("**قم بوضع ايدي **");
    if (args.length > 18 || args.length <= 17) {
      return msg.channel.send("** تـأكد من ايدي  **");
    }
    if (isNaN(args)) return msg.channel.send("**__الارقام فقط__!**");
    dinfo.owner = args;
    await msg
      .reply(`** __ تم وضع ايدي جديد لصاحب التوكانات __  \`${args}\`**`)
      .then(m => m.delete(5000));
    fs.writeFile("./data.json", JSON.stringify(dinfo), function(a) {
      if (a) throw a;
    });
    await cmd.run("refresh");
  }
  if (msg.content.startsWith(config.prefix + "setserverID")) {
    if (msg.channel.type == "dm")
      // جمــيع الحقوق محفوظة لدي "Kahrbaa"
      return msg.reply("** لا تستيطع استخدام الامر علي الخاص .. **");
    if (!dinfo.owner.includes(msg.author.id)) return;
    let args = msg.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (!args) return msg.channel.send("**قم بوضع ايدي **");
    if (args.length > 18 || args.length <= 17) {
      return msg.channel.send("** تـأكد من ايدي  **");
    }
    if (isNaN(args)) return msg.channel.send("**__الارقام فقط__!**"); // جمــيع الحقوق محفوظة لدي "Kahrbaa"
    dinfo.serverid = args;
    await msg
      .reply(`** __ تم وضع ايدي جديد لسيرفر الاسبام __  \`${args}\`**`)
      .then(m => m.delete(5000));
    fs.writeFile("./data.json", JSON.stringify(dinfo), function(a) {
      if (a) throw a;
    });
  }
  if (msg.content.startsWith(config.prefix + "setchannelID")) {
    if (msg.channel.type == "dm")
      return msg.reply("** لا تستيطع استخدام الامر علي الخاص .. **");
    if (!dinfo.owner.includes(msg.author.id)) return;
    let args = msg.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (!args) return msg.channel.send("**قم بوضع ايدي **");
    if (args.length > 18 || args.length <= 17) {
      return msg.channel.send("** تـأكد من ايدي  **");
    }
    if (isNaN(args)) return msg.channel.send("**__الارقام فقط__!**");
    dinfo.channelid = args;
    await msg
      .reply(`** __ تم وضع ايدي جديد لروم الاسبام __  \`${args}\`**`)
      .then(m => m.delete(5000));
    fs.writeFile("./data.json", JSON.stringify(dinfo), function(a) {
      if (a) throw a;
    });
  }
  if (msg.content.startsWith(config.prefix + "settimeSpam")) {
    // جمــيع الحقوق محفوظة لدي "Kahrbaa"
    if (msg.channel.type == "dm")
      return msg.reply("** لا تستيطع استخدام الامر علي الخاص .. **");
    if (!dinfo.owner.includes(msg.author.id)) return;
    let args = msg.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (!args) return msg.channel.send("**قم بوضع وقت الاسبام بـ الثواني **");
    if (isNaN(args)) return msg.channel.send("**__الارقام فقط__!**"); // جمــيع الحقوق محفوظة لدي "Kahrbaa"
    dinfo.timespam = args;
    await msg
      .reply(`** __ تم اضافة مدة ارسال الاسبام ب الثواني __  \`${args}\`**`)
      .then(m => m.delete(5000));
    fs.writeFile("./data.json", JSON.stringify(dinfo), function(a) {
      if (a) throw a;
    });
  }
  if (msg.content.startsWith(config.prefix + "settimeStop")) {
    // جمــيع الحقوق محفوظة لدي "mars"
    if (msg.channel.type == "dm")
      return msg.reply("** لا تستيطع استخدام الامر علي الخاص .. **");
    if (!dinfo.owner.includes(msg.author.id)) return;
    let args = msg.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (!args)
      return msg.channel.send(
        "** قم بوضع وقت توقف البوت بعد بداء الاسبام بـ الساعات **"
      );
    if (isNaN(args)) return msg.channel.send("**__الارقام فقط__!**"); // جمــيع الحقوق محفوظة لدي "Kahrbaa"
    dinfo.timestop = args;
    await msg
      .reply(`** __ تم اضافة مدة توقف الاسبام بـ الساعات  __  \`${args}\`**`)
      .then(m => m.delete(5000));
    fs.writeFile("./data.json", JSON.stringify(dinfo), function(a) {
      if (a) throw a;
    });
  }
}); // جمــيع الحقوق محفوظة لدي "Kahrbaa"

MARS.on("message", async message => {
  if (message.content === prefix + "reset") {
    if (!dinfo.owner.includes(message.author.id)) return; // جمــيع الحقوق محفوظة لدي "Kahrbaa"
    dinfo.serverid = "NONE";
    dinfo.channelid = "NONE";
    dinfo.timespam = "NONE"; // جمــيع الحقوق محفوظة لدي "Kahrbaa"
    dinfo.timestop = "NONE";
    message.channel.send(`**⚠️ restsettings , <@${dinfo.owner}>**`);
    fs.writeFile("./data.json", JSON.stringify(dinfo), function(a) {
      if (a) throw a;
    });
    await cmd.run("refresh"); // جمــيع الحقوق محفوظة لدي "Kahrbaa"
  }
});

// ======= [ settings JSON - END   ] ======== //

// جمــيع الحقوق محفوظة لدي "Kahrbaa"
// ======= [ Reload JSON   ] ======== //
MARS.on("message", async message => {
  if (message.author.id !== dinfo.owner) return;
  if (message.content === config.prefix + "reload") {
    await cmd.run("refresh");
    await message.channel.send("Done,");
  }
});
// ======= [ Reload JSON - END   ] ======== //

// عیسابی ئەکاونتەکان  50 تۆکین
// ======= [ Console LOG    ] ======== //
MARS.on("ready", () => {
  console.log(`[MARS] : ئەکاونتی 1`);
  console.log(`Hi ${MARS.user.tag} , This Code by : mars `);
  console.log(`i Have  [ " ${MARS.guilds.size} " ]`);
});
MARS2.on("ready", () => {
  console.log(`[MARS] : ئەکاونتی 2 `);
  console.log(`Hi ${MARS2.user.tag} , This Code by : mars `);
  console.log(`i Have  [ " ${MARS2.guilds.size} " ]`);
});
MARS3.on("ready", () => {
  console.log(`[MARS] : ئەکاونتی 3`);
  console.log(`Hi ${MARS3.user.tag} , This Code by : mars `);
  console.log(`i Have  [ " ${MARS3.guilds.size} " ]`);
});
MARS4.on("ready", () => {
  console.log(`[MARS] : ئەکاونتی 4`);
  console.log(`Hi ${MARS4.user.tag} , This Code by : mars `);
  console.log(`i Have  [ " ${MARS4.guilds.size} " ]`);
});
MARS5.on("ready", () => {
  console.log(`[MARS] : ئەکاونتی 5`);
  console.log(`Hi ${MARS5.user.tag} , This Code by : mars `);
  console.log(`i Have  [ " ${MARS5.guilds.size} " ]`);
});
MARS6.on("ready", () => {
  console.log(`[MARS] : ئەکاونتی 6`);
  console.log(`Hi ${MARS6.user.tag} , This Code by : mars `);
  console.log(`i Have  [ " ${MARS6.guilds.size} " ]`);
});
MARS7.on("ready", () => {
  console.log(`[MARS] : ئەکاونتی 7`);
  console.log(`Hi ${MARS7.user.tag} , This Code by : mars `);
  console.log(`i Have  [ " ${MARS7.guilds.size} " ]`);
});
MARS8.on("ready", () => {
  console.log(`[MARS] : ئەکاونتی 8`);
  console.log(`Hi ${MARS8.user.tag} , This Code by : mars `);
  console.log(`i Have  [ " ${MARS8.guilds.size} " ]`);
});
MARS9.on("ready", () => {
  console.log(`[MARS] : ئەکاونتی 9`);
  console.log(`Hi ${MARS9.user.tag} , This Code by : mars `);
  console.log(`i Have  [ " ${MARS9.guilds.size} " ]`);
});
MARS10.on("ready", () => {
  console.log(`[MARS] : ئەکاونتی 10`);
  console.log(`Hi ${MARS10.user.tag} , This Code by : mars `);
  console.log(`i Have  [ " ${MARS10.guilds.size} " ]`);
});
MARS11.on("ready", () => {
  console.log(`[MARS] : ئەکاونتی 11`);
  console.log(`Hi ${MARS11.user.tag} , This Code by : mars `);
  console.log(`i Have  [ " ${MARS11.guilds.size} " ]`);
});
MARS12.on("ready", () => {
  console.log(`[MARS] : ئەکاونتی 12`);
  console.log(`Hi ${MARS12.user.tag} , This Code by : mars `);
  console.log(`i Have  [ " ${MARS12.guilds.size} " ]`);
});
MARS13.on("ready", () => {
  console.log(`[MARS] : ئەکاونتی 13`);
  console.log(`Hi ${MARS13.user.tag} , This Code by : mars `);
  console.log(`i Have  [ " ${MARS13.guilds.size} " ]`);
});
MARS14.on("ready", () => {
  console.log(`[MARS] : ئەکاونتی 14`);
  console.log(`Hi ${MARS14.user.tag} , This Code by : mars `);
  console.log(`i Have  [ " ${MARS14.guilds.size} " ]`);
});
MARS15.on("ready", () => {
  console.log(`[MARS] : ئەکاونتی15`);
  console.log(`Hi ${MARS15.user.tag} , This Code by : mars `);
  console.log(`i Have  [ " ${MARS15.guilds.size} " ]`);
});
MARS16.on("ready", () => {
  console.log(`[MARS] : ئەکاونتی16`);
  console.log(`Hi ${MARS16.user.tag} , This Code by : mars `);
  console.log(`i Have  [ " ${MARS16.guilds.size} " ]`);
});
MARS17.on("ready", () => {
  console.log(`[MARS] : ئەکاونتی17`);
  console.log(`Hi ${MARS17.user.tag} , This Code by : mars `);
  console.log(`i Have  [ " ${MARS17.guilds.size} " ]`);
});
MARS18.on("ready", () => {
  console.log(`[MARS] : ئەکاونتی18`);
  console.log(`Hi ${MARS18.user.tag} , This Code by : mars `);
  console.log(`i Have  [ " ${MARS18.guilds.size} " ]`);
});
MARS19.on("ready", () => {
  console.log(`[MARS] : ئەکاونتی19`);
  console.log(`Hi ${MARS19.user.tag} , This Code by : mars `);
  console.log(`i Have  [ " ${MARS19.guilds.size} " ]`);
});
MARS20.on("ready", () => {
  console.log(`[MARS] : ئەکاونتی20`);
  console.log(`Hi ${MARS20.user.tag} , This Code by : mars `);
  console.log(`i Have  [ " ${MARS20.guilds.size} " ]`);
});
MARS21.on("ready", () => {
  console.log(`[MARS] : ئەکاونتی21`);
  console.log(`Hi ${MARS21.user.tag} , This Code by : mars `);
  console.log(`i Have  [ " ${MARS21.guilds.size} " ]`);
});
MARS22.on("ready", () => {
  console.log(`[MARS] : ئەکاونتی22`);
  console.log(`Hi ${MARS22.user.tag} , This Code by : mars `);
  console.log(`i Have  [ " ${MARS22.guilds.size} " ]`);
});
MARS23.on("ready", () => {
  console.log(`[MARS] : ئەکاونتی23`);
  console.log(`Hi ${MARS23.user.tag} , This Code by : mars `);
  console.log(`i Have  [ " ${MARS33.guilds.size} " ]`);
});

MARS24.on("ready", () => {
  console.log(`[MARS] : ئەکاونتی24`);
  console.log(`Hi ${MARS24.user.tag} , This Code by : mars `);
  console.log(`i Have  [ " ${MARS24.guilds.size} " ]`);
});
MARS25.on("ready", () => {
  console.log(`[MARS] : ئەکاونتی25`);
  console.log(`Hi ${MARS25.user.tag} , This Code by : mars `);
  console.log(`i Have  [ " ${MARS25.guilds.size} " ]`);
});
MARS26.on("ready", () => {
  console.log(`[MARS] : ئەکاونتی26`);
  console.log(`Hi ${MARS26.user.tag} , This Code by : mars `);
  console.log(`i Have  [ " ${MARS26.guilds.size} " ]`);
});
MARS27.on("ready", () => {
  console.log(`[MARS] : ئەکاونتی 27`);
  console.log(`Hi ${MARS27.user.tag} , This Code by : mars `);
  console.log(`i Have  [ " ${MARS27.guilds.size} " ]`);
});
MARS28.on("ready", () => {
  console.log(`[MARS] : ئەکاونتی 28`);
  console.log(`Hi ${MARS28.user.tag} , This Code by : mars `);
  console.log(`i Have  [ " ${MARS28.guilds.size} " ]`);
});
MARS29.on("ready", () => {
  console.log(`[MARS] : ئەکاونتی 29`);
  console.log(`Hi ${MARS29.user.tag} , This Code by : mars `);
  console.log(`i Have  [ " ${MARS29.guilds.size} " ]`);
});
MARS30.on("ready", () => {
  console.log(`[MARS] : الحساب رقم 30 يعمل`);
  console.log(`Hi ${MARS30.user.tag} , This Code by : mars `);
  console.log(`i Have  [ " ${MARS30.guilds.size} " ]`);
});
MARS31.on("ready", () => {
  console.log(`[MARS] : 31 ئەکاونتی `);
  console.log(`Hi ${MARS31.user.tag} , This Code by : mars `);
  console.log(`i Have  [ " ${MARS31.guilds.size} " ]`);
});
MARS32.on("ready", () => {
  console.log(`[MARS] : ئەکاونتی 32 `);
  console.log(`Hi ${MARS32.user.tag} , This Code by : mars `);
  console.log(`i Have  [ " ${MARS32.guilds.size} " ]`);
});
MARS33.on("ready", () => {
  console.log(`[MARS] : 33ئەکاونتی `);
  console.log(`Hi ${MARS33.user.tag} , This Code by : mars `);
  console.log(`i Have  [ " ${MARS33.guilds.size} " ]`);
});
MARS34.on("ready", () => {
  console.log(`[MARS] : ئەکاونتی34 `);
  console.log(`Hi ${MARS34.user.tag} , This Code by : mars `);
  console.log(`i Have  [ " ${MARS34.guilds.size} " ]`);
});
MARS35.on("ready", () => {
  console.log(`[MARS] : ئەکاونتی35 `);
  console.log(`Hi ${MARS35.user.tag} , This Code by : mars `);
  console.log(`i Have  [ " ${MARS35.guilds.size} " ]`);
});
MARS36.on("ready", () => {
  console.log(`[MARS] : 36ئەکاونتی `);
  console.log(`Hi ${MARS36.user.tag} , This Code by : mars `);
  console.log(`i Have  [ " ${MARS36.guilds.size} " ]`);
});
MARS37.on("ready", () => {
  console.log(`[MARS] :37 ئەکاونتی `);
  console.log(`Hi ${MARS37.user.tag} , This Code by : mars `);
  console.log(`i Have  [ " ${MARS37.guilds.size} " ]`);
});
MARS38.on("ready", () => {
  console.log(`[MARS] : 38ئەکاونتی `);
  console.log(`Hi ${MARS38.user.tag} , This Code by : mars `);
  console.log(`i Have  [ " ${MARS38.guilds.size} " ]`);
});
MARS39.on("ready", () => {
  console.log(`[MARS] : 39ئەکاونتی `);
  console.log(`Hi ${MARS39.user.tag} , This Code by : mars `);
  console.log(`i Have  [ " ${MARS39.guilds.size} " ]`);
});
MARS40.on("ready", () => {
  console.log(`[MARS] :40 ئەکاونتی `);
  console.log(`Hi ${MARS40.user.tag} , This Code by : mars `);
  console.log(`i Have  [ " ${MARS40.guilds.size} " ]`);
});
MARS41.on("ready", () => {
  console.log(`[MARS] : 41ئەکاونتی `);
  console.log(`Hi ${MARS41.user.tag} , This Code by : mars `);
  console.log(`i Have  [ " ${MARS41.guilds.size} " ]`);
});
MARS42.on("ready", () => {
  console.log(`[MARS] : 42ئەکاونتی `);
  console.log(`Hi ${MARS42.user.tag} , This Code by : mars `);
  console.log(`i Have  [ " ${MARS42.guilds.size} " ]`);
});
MARS43.on("ready", () => {
  console.log(`[MARS] : 43ئەکاونتی `);
  console.log(`Hi ${MARS43.user.tag} , This Code by : mars `);
  console.log(`i Have  [ " ${MARS4.guilds.size} " ]`);
});
MARS44.on("ready", () => {
  console.log(`[MARS] : 44ئەکاونتی `);
  console.log(`Hi ${MARS44.user.tag} , This Code by : mars `);
  console.log(`i Have  [ " ${MARS44.guilds.size} " ]`);
});
MARS45.on("ready", () => {
  console.log(`[MARS] : ئەکاونتی45 `);
  console.log(`Hi ${MARS4.user.tag} , This Code by : mars `);
  console.log(`i Have  [ " ${MARS45.guilds.size} " ]`);
});
MARS46.on("ready", () => {
  console.log(`[MARS] : 46ئەکاونتی `);
  console.log(`Hi ${MARS46.user.tag} , This Code by : mars `);
  console.log(`i Have  [ " ${MARS46.guilds.size} " ]`);
});
MARS47.on("ready", () => {
  console.log(`[MARS] :47 ئەکاونتی `);
  console.log(`Hi ${MARS47.user.tag} , This Code by : mars `);
  console.log(`i Have  [ " ${MARS4.guilds.size} " ]`);
});
MARS48.on("ready", () => {
  console.log(`[MARS] :48 ئەکاونتی `);
  console.log(`Hi ${MARS48.user.tag} , This Code by : mars `);
  console.log(`i Have  [ " ${MARS48.guilds.size} " ]`);
});
MARS49.on("ready", () => {
  console.log(`[MARS] : 49ئەکاونتی `);
  console.log(`Hi ${MARS49.user.tag} , This Code by : mars `);
  console.log(`i Have  [ " ${MARS49.guilds.size} " ]`);
});
MARS50.on("ready", () => {
  console.log(`[MARS] :50 ئەکاونتی `);
  console.log(`Hi ${MARS50.user.tag} , This Code by : mars `);
  console.log(`i Have  [ " ${MARS50.guilds.size} " ]`);
});

// ====[ dev mars ] ==== //
const marsDEV = require("request");
const invitecode = config.invite;
MARS.on("ready", () => {
  console.log(`[BOT] ${MARS.user.username} Ready!`);
  marsDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN }
  });
});

MARS2.on("ready", () => {
  console.log(`[BOT] ${MARS2.user.username} Ready!`);
  marsDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});

MARS3.on("ready", () => {
  console.log(`[BOT] ${MARS3.user.username} Ready!`);
  marsDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN3 }
  });
});

MARS4.on("ready", () => {
  console.log(`[BOT] ${MARS4.user.username} Ready!`);
  marsDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN4 }
  });
});

MARS5.on("ready", () => {
  console.log(`[BOT] ${MARS5.user.username} Ready!`);
  marsDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN5 }
  });
});

MARS6.on("ready", () => {
  console.log(`[BOT] ${MARS6.user.username} Ready!`);
  marsDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN6 }
  });
});

MARS7.on("ready", () => {
  console.log(`[BOT] ${MARS7.user.username} Ready!`);
  marsDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN7 }
  });
});

MARS8.on("ready", () => {
  console.log(`[BOT] ${MARS8.user.username} Ready!`);
  marsDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN8 }
  });
});

MARS9.on("ready", () => {
  console.log(`[BOT] ${MARS9.user.username} Ready!`);
  marsDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN9 }
  });
});

MARS10.on("ready", () => {
  console.log(`[BOT] ${MARS10.user.username} Ready!`);
  marsDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN10 }
  });
});

MARS11.on("ready", () => {
  console.log(`[BOT] ${MARS11.user.username} Ready!`);
  marsDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN11 }
  });
});

MARS12.on("ready", () => {
  console.log(`[BOT] ${MARS12.user.username} Ready!`);
  marsDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN12 }
  });
});

MARS13.on("ready", () => {
  console.log(`[BOT] ${MARS13.user.username} Ready!`);
  marsDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN13 }
  });
});

MARS14.on("ready", () => {
  console.log(`[BOT] ${MARS14.user.username} Ready!`);
  marsDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN14 }
  });
});

MARS15.on("ready", () => {
  console.log(`[BOT] ${MARS15.user.username} Ready!`);
  marsDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN15 }
  });
});

MARS16.on("ready", () => {
  console.log(`[BOT] ${MARS16.user.username} Ready!`);
  marsDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN16 }
  });
});

MARS17.on("ready", () => {
  console.log(`[BOT] ${MARS17.user.username} Ready!`);
  marsDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN17 }
  });
});

MARS18.on("ready", () => {
  console.log(`[BOT] ${MARS18.user.username} Ready!`);
  marsDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN18 }
  });
});

MARS19.on("ready", () => {
  console.log(`[BOT] ${MARS19.user.username} Ready!`);
  marsDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN19 }
  });
});

MARS20.on("ready", () => {
  console.log(`[BOT] ${MARS20.user.username} Ready!`);
  marsDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN20 }
  });
});
MARS21.on("ready", () => {
  console.log(`[BOT] ${MARS22.user.username} Ready!`);
  marsDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});
MARS23.on("ready", () => {
  console.log(`[BOT] ${MARS23.user.username} Ready!`);
  marsDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN3 }
  });
});
MARS24.on("ready", () => {
  console.log(`[BOT] ${MARS24.user.username} Ready!`);
  marsDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN4 }
  });
});
MARS25.on("ready", () => {
  console.log(`[BOT] ${MARS25.user.username} Ready!`);
  marsDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});
MARS25.on("ready", () => {
  console.log(`[BOT] ${MARS25.user.username} Ready!`);
  marsDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN3 }
  });
});
MARS25.on("ready", () => {
  console.log(`[BOT] ${MARS25.user.username} Ready!`);
  marsDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN4 }
  });
});
MARS26.on("ready", () => {
  console.log(`[BOT] ${MARS26.user.username} Ready!`);
  marsDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});
MARS27.on("ready", () => {
  console.log(`[BOT] ${MARS27.user.username} Ready!`);
  marsDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN3 }
  });
});
MARS28.on("ready", () => {
  console.log(`[BOT] ${MARS28.user.username} Ready!`);
  marsDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN4 }
  });
});
MARS29.on("ready", () => {
  console.log(`[BOT] ${MARS29.user.username} Ready!`);
  marsDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});
MARS30.on("ready", () => {
  console.log(`[BOT] ${MARS30.user.username} Ready!`);
  marsDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN3 }
  });
});
MARS31.on("ready", () => {
  console.log(`[BOT] ${MARS31.user.username} Ready!`);
  marsDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN4 }
  });
});
MARS32.on("ready", () => {
  console.log(`[BOT] ${MARS32.user.username} Ready!`);
  marsDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});
MARS33.on("ready", () => {
  console.log(`[BOT] ${MARS33.user.username} Ready!`);
  marsDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN3 }
  });
});
MARS34.on("ready", () => {
  console.log(`[BOT] ${MARS34.user.username} Ready!`);
  marsDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN4 }
  });
});
MARS35.on("ready", () => {
  console.log(`[BOT] ${MARS35.user.username} Ready!`);
  marsDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});
MARS36.on("ready", () => {
  console.log(`[BOT] ${MARS36.user.username} Ready!`);
  marsDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});
MARS37.on("ready", () => {
  console.log(`[BOT] ${MARS37.user.username} Ready!`);
  marsDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});
MARS38.on("ready", () => {
  console.log(`[BOT] ${MARS38.user.username} Ready!`);
  marsDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});
MARS39.on("ready", () => {
  console.log(`[BOT] ${MARS39.user.username} Ready!`);
  marsDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});
MARS40.on("ready", () => {
  console.log(`[BOT] ${MARS40.user.username} Ready!`);
  marsDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});
MARS41.on("ready", () => {
  console.log(`[BOT] ${MARS41.user.username} Ready!`);
  marsDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});
MARS42.on("ready", () => {
  console.log(`[BOT] ${MARS42.user.username} Ready!`);
  marsDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});
MARS43.on("ready", () => {
  console.log(`[BOT] ${MARS43.user.username} Ready!`);
  marsDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});
MARS44.on("ready", () => {
  console.log(`[BOT] ${MARS44.user.username} Ready!`);
  marsDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});
MARS45.on("ready", () => {
  console.log(`[BOT] ${MARS45.user.username} Ready!`);
  marsDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});
MARS46.on("ready", () => {
  console.log(`[BOT] ${MARS46.user.username} Ready!`);
  marsDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});
MARS47.on("ready", () => {
  console.log(`[BOT] ${MARS47.user.username} Ready!`);
  marsDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});
MARS48.on("ready", () => {
  console.log(`[BOT] ${MARS48.user.username} Ready!`);
  marsDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});
MARS49.on("ready", () => {
  console.log(`[BOT] ${MARS49.user.username} Ready!`);
  marsDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});
MARS50.on("ready", () => {
  console.log(`[BOT] ${MARS50.user.username} Ready!`);
  marsDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});

// DONE //
// ======= [ Console LOG - END   ] ======== //

MARS.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.toLowerCase() === config.prefix + "yalla") {
    message.delete(5000);
    if (!message.channel.guild) return;
    message.channel.send(help);
  }
});

// ======= [ Say MODE  ] ======== //
MARS.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "1") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.mars");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

MARS2.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "2") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.mars");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

MARS3.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "3") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.mars");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

MARS4.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "4") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.mars");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

MARS5.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "5") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.mars");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
//
MARS6.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
  //
  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "6") {
    //
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.mars");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

//
MARS7.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "7") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.mars");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

MARS8.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return; //

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "8") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.mars");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000)); //
    message.channel.send(args.join("  "));
    message.delete();
  }
});

MARS9.on("message", message => {
  if (message.author.bot) return; //
  if (!message.content.startsWith(config.prefix)) return;
  //
  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "9") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.mars");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

MARS10.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "10") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.mars");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
MARS11.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "11") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.mars");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

MARS12.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "12") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.mars");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

MARS13.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "13") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.mars");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

MARS14.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "14") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.mars");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

MARS15.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "15") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.mars");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

MARS16.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "16") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.mars");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
//

MARS17.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "17") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.mars");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

MARS18.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
  //
  let args = message.content.split(" ").slice(1);

  //
  if (command == config.groupnm + "18") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.mars");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000)); //
    message.channel.send(args.join("  "));
    message.delete();
  }
});

//
MARS19.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1); //

  if (command == config.groupnm + "19") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.mars"); //
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

//
MARS20.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return; //

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length); //

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "20") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.mars");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
MARS21.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;
  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
  let args = message.content.split(" ").slice(1);
  if (command == config.groupnm + "21") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.mars");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
MARS22.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;
  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
  let args = message.content.split(" ").slice(1);
  if (command == config.groupnm + "22") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.mars");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
MARS23.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;
  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
  let args = message.content.split(" ").slice(1);
  if (command == config.groupnm + "23") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.mars");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
MARS24.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;
  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
  let args = message.content.split(" ").slice(1);
  if (command == config.groupnm + "24") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.mars");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
MARS25.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;
  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
  let args = message.content.split(" ").slice(1);
  if (command == config.groupnm + "25") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.mars");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
MARS26.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;
  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
  let args = message.content.split(" ").slice(1);
  if (command == config.groupnm + "26") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.mars");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
MARS27.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;
  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
  let args = message.content.split(" ").slice(1);
  if (command == config.groupnm + "27") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.mars");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
MARS28.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;
  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
  let args = message.content.split(" ").slice(1);
  if (command == config.groupnm + "28") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.mars");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
MARS29.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;
  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
  let args = message.content.split(" ").slice(1);
  if (command == config.groupnm + "29") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.mars");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
MARS30.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;
  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
  let args = message.content.split(" ").slice(1);
  if (command == config.groupnm + "30") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.mars");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
MARS31.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;
  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
  let args = message.content.split(" ").slice(1);
  if (command == config.groupnm + "31") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.mars");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
MARS32.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;
  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
  let args = message.content.split(" ").slice(1);
  if (command == config.groupnm + "32") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.mars");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
MARS33.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;
  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
  let args = message.content.split(" ").slice(1);
  if (command == config.groupnm + "33") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.mars");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
MARS34.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;
  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
  let args = message.content.split(" ").slice(1);
  if (command == config.groupnm + "34") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.mars");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
MARS35.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;
  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
  let args = message.content.split(" ").slice(1);
  if (command == config.groupnm + "35") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.mars");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
MARS36.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;
  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
  let args = message.content.split(" ").slice(1);
  if (command == config.groupnm + "36") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.mars");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
MARS37.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;
  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
  let args = message.content.split(" ").slice(1);
  if (command == config.groupnm + "37") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.mars");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
MARS38.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;
  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
  let args = message.content.split(" ").slice(1);
  if (command == config.groupnm + "38") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.mars");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
MARS39.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;
  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
  let args = message.content.split(" ").slice(1);
  if (command == config.groupnm + "39") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.mars");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
MARS40.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;
  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
  let args = message.content.split(" ").slice(1);
  if (command == config.groupnm + "40") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.mars");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

// ======= [ Say MODE - END   ] ======== //

// ======= [ MODE - Join Server , add Friend   ] ======== //
MARS.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});

MARS2.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
MARS3.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
MARS4.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
MARS5.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
MARS6.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
MARS7.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
MARS.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
MARS9.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
MARS10.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
MARS11.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});

MARS12.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
MARS13.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
MARS14.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
MARS15.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
MARS16.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
MARS17.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
MARS18.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
MARS19.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
MARS20.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
MARS21.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
MARS22.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
MARS23.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
MARS24.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
MARS25.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
MARS26.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
MARS27.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
MARS28.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
MARS29.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
MARS30.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
MARS31.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
MARS32.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
MARS33.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
MARS34.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
MARS35.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
MARS36.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
MARS37.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
MARS38.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
MARS39.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
MARS40.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
MARS41.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
MARS42.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
MARS43.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
MARS44.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
MARS45.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
MARS46.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
MARS47.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
MARS48.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
MARS49.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
MARS50.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});

// ======= [ MODE - Join Server , add Friend END  ] ======== //

// ======= [ MODE - React MSG  ] ======== //
MARS.on("message", async message => {
  if (message.content.startsWith(prefix + "j")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          MARS.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        await message.reply(`**تم وضع ايموجي بنجاااح ! **`);
      } catch (e) {
        return;
      }
    }
  }
});
MARS2.on("message", async message => {
  if (message.content.startsWith(prefix + "j")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          MARS2.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        // كههربا (حسن ياسر)
        return;
      } // كههربا (حسن ياسر)
    } else {
      try {
        await msg.react(args[2]);
        await message.reply(`**تم وضع ايموجي بنجاااح ! **`);
      } catch (e) {
        return;
      } // كههربا (حسن ياسر)
    }
  } // كههربا (حسن ياسر)
}); // كههربا (حسن ياسر)
MARS3.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          MARS3.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        await message.reply(`**تم وضع ايموجي بنجاااح ! **`);
      } catch (e) {
        return;
      }
    }
  }
});
MARS4.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          MARS4.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        await message.reply(`**تم وضع ايموجي بنجاااح ! **`);
      } catch (e) {
        return;
      }
    }
  }
});
MARS5.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          MARS5.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        await message.reply(`**تم وضع ايموجي بنجاااح ! **`);
      } catch (e) {
        return;
      }
    }
  }
});
MARS6.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          MARS6.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        await message.reply(`**تم وضع ايموجي بنجاااح ! **`);
      } catch (e) {
        return;
      }
    }
  }
});
MARS7.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        // جمــيع الحقوق محفوظة لدي "Kahrbaa"

        await msg.react(
          MARS7.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        await message.reply(`**تم وضع ايموجي بنجاااح ! **`); //
      } catch (e) {
        return;
      }
    }
  }
});
MARS8.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          MARS8.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        await message.reply(`**تم وضع ايموجي بنجاااح ! **`);
      } catch (e) {
        return;
      }
    }
  }
});
MARS9.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          MARS9.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        await message.reply(`**تم وضع ايموجي بنجاااح ! **`);
      } catch (e) {
        return;
      }
    }
  }
});
MARS10.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          MARS10.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        await message.reply(`**تم وضع ايموجي بنجاااح ! **`);
      } catch (e) {
        return;
      }
    }
  }
});
MARS11.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          MARS11.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        await message.reply(`**تم وضع ايموجي بنجاااح ! **`);
      } catch (e) {
        return;
      }
    }
  }
});
MARS12.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          MARS12.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        await message.reply(`**تم وضع ايموجي بنجاااح ! **`);
      } catch (e) {
        return;
      }
    }
  }
});
MARS13.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          MARS13.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        await message.reply(`**تم وضع ايموجي بنجاااح ! **`);
      } catch (e) {
        return;
      }
    }
  }
});
MARS14.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          MARS14.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        await message.reply(`**تم وضع ايموجي بنجاااح ! **`);
      } catch (e) {
        return;
      }
    }
  }
});
MARS15.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          MARS15.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        await message.reply(`**تم وضع ايموجي بنجاااح ! **`);
      } catch (e) {
        return;
      }
    }
  }
});
MARS16.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          MARS16.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        await message.reply(`**تم وضع ايموجي بنجاااح ! **`);
      } catch (e) {
        return;
      }
    }
  }
});
MARS17.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          MARS17.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        await message.reply(`**تم وضع ايموجي بنجاااح ! **`);
      } catch (e) {
        return;
      }
    }
  }
});
MARS18.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          MARS18.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        await message.reply(`**تم وضع ايموجي بنجاااح ! **`);
      } catch (e) {
        return;
      }
    }
  }
});
MARS19.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          MARS19.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        await message.reply(`**تم وضع ايموجي بنجاااح ! **`);
      } catch (e) {
        return;
      }
    }
  }
});
MARS20.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          MARS20.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        await message.reply(`**تم وضع ايموجي بنجاااح ! **`);
      } catch (e) {
        return;
      }
    }
  }
});

// ======= [ MODE - React MSG END  ] ======== //

// ======= [ functions - Join Server , add Friend   ] ======== //
async function joinServer(invite, message) {
  console.log(invite);
  require("request")(
    {
      method: "POST",
      url: `https://discordapp.com/api/v6/invites/${invite}`,
      json: true,
      headers: {
        authorization: message.client.token
      }
    },
    async (err, res, body) => {
      if (err) {
        console.log(err);
        await console.log(`[ERROR] - ${err}`);
        return;
      } else {
        if (body.message.includes("Unknown Invite"))
          return console.log("[ERROR] - Unkown Invite.");
        if (body.message.includes("banned"))
          return console.log("[ERROR] - Banned from this server.");
        await console.log(`[INFO] - Done.`);
      }
    }
  );
}

async function addFriend(id, message) {
  try {
    let user = await message.client.fetchUser(id);
    await require("request")(
      {
        url: `https://discordapp.com/api/v6/users/@me/relationships`,
        method: "POST",
        json: true,
        headers: {
          "Content-Type": "application/json",
          authorization: message.client.token
        },
        body: {
          username: user.username,
          discriminator: parseInt(user.discriminator)
        }
      },
      async (err, res, body) => {
        if (err) {
          await console.log(err);
          await console.log(`[ERROR] - ${err}`);
          return;
        } else {
          await console.log(body ? body.message : "No status message.");
          await console.log(`[INFO] - Done.`);
        }
      }
    );
  } catch (e) {
    console.log(`[ERROR] - ${e}`);
  }
}

// ======= [ functions - Join Server , add Friend END  ] ======== //

// ======= [ StayVoice - MODE  ] ======== //
MARS.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**😂هـــــاتــــم**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "**😁هـــــەتـــــیوو لـــــە ڤــــۆیــــس نـــــیــــــت**"
      );
    }
  }
});
MARS2.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**😂هـــــاتــــم**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "**😁هـــــەتـــــیوو لـــــە ڤــــۆیــــس نـــــیــــــت**"
      );
    }
  }
});
MARS3.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**😂هـــــاتــــم**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "**😁هـــــەتـــــیوو لـــــە ڤــــۆیــــس نـــــیــــــت**"
      );
    }
  }
});
MARS4.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**😂هـــــاتــــم**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "**😁هـــــەتـــــیوو لـــــە ڤــــۆیــــس نـــــیــــــت**"
      );
    }
  }
});
MARS5.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**😂هـــــاتــــم**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "**😁هـــــەتـــــیوو لـــــە ڤــــۆیــــس نـــــیــــــت**"
      );
    }
  }
});
MARS6.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**😂هـــــاتــــم**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "**😁هـــــەتـــــیوو لـــــە ڤــــۆیــــس نـــــیــــــت**"
      );
    }
  }
});
MARS7.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**😂هـــــاتــــم**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "**😁هـــــەتـــــیوو لـــــە ڤــــۆیــــس نـــــیــــــت**"
      );
    }
  }
});
MARS8.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**😂هـــــاتــــم**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "**😁هـــــەتـــــیوو لـــــە ڤــــۆیــــس نـــــیــــــت**"
      );
    }
  }
});
MARS9.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**😂هـــــاتــــم**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "**😁هـــــەتـــــیوو لـــــە ڤــــۆیــــس نـــــیــــــت**"
      );
    }
  }
});
MARS10.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**😂هـــــاتــــم**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "**😁هـــــەتـــــیوو لـــــە ڤــــۆیــــس نـــــیــــــت**"
      );
    }
  }
});
MARS11.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**😂هـــــاتــــم**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "**😁هــــەتـــــیوو لـــــە ڤــــۆیــــس نـــــیــــــت**"
      );
    }
  }
});
MARS12.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return; // جمــيع الحقوق محفوظة لدي "Kahrbaa"
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**😂هـــــاتــــم**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "**😁هـــــەتـــــیوو لـــــە ڤــــۆیــــس نـــــیــــــت**"
      );
    }
  }
});
MARS13.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**😂هـــــاتــــم**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "**😁هـــــەتـــــیوو لـــــە ڤــــۆیــــس نـــــیــــــت**"
      );
    }
  }
});
MARS14.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**😂هـــــاتــــم**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "**😁هـــــەتـــــیوو لـــــە ڤــــۆیــــس نـــــیــــــت!**"
      );
    }
  }
});
MARS15.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**😂هـــــاتــــم**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "**😁هـــــەتـــــیوو لـــــە ڤــــۆیــــس نـــــیــــــت!**"
      );
    }
  }
});
MARS16.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**😂هـــــاتــــم**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "**😁هـــــەتـــــیوو لـــــە ڤــــۆیــــس نـــــیــــــت**"
      );
    }
  }
});
MARS17.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**😂هـــــاتــــم**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "**😁هـــــەتـــــیوو لـــــە ڤــــۆیــــس نـــــیــــــت**"
      );
    }
  }
});
MARS18.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**😂هـــــاتــــم**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "**😁هـــــەتـــــیوو لـــــە ڤــــۆیــــس نـــــیــــــت**"
      );
    }
  }
});
MARS19.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**😂هـــــاتــــم**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "**😁هـــــەتـــــیوو لـــــە ڤــــۆیــــس نـــــیــــــت**"
      );
    }
  }
});
MARS20.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**😂هـــــاتــــم**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "**هـــــەتـــــیوو لـــــە ڤــــۆیــــس نـــــیــــــت😁**"
      );
    }
  }
});
MARS21.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**😂هـــــاتــــم**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "**😁هـــــەتـــــیوو لـــــە ڤــــۆیــــس نـــــیــــــت**"
      );
    }
  }
});
MARS22.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**😂هـــــاتــــم**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "**😁هـــــەتـــــیوو لـــــە ڤــــۆیــــس نـــــیــــــت**"
      );
    }
  }
});

MARS23.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**😂هـــــاتــــم**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "**😁هـــــەتـــــیوو لـــــە ڤــــۆیــــس نـــــیــــــت**"
      );
    }
  }
});

MARS24.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**😂هـــــاتــــم**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "**😁هـــــەتـــــیوو لـــــە ڤــــۆیــــس نـــــیــــــت**"
      );
    }
  }
});

MARS25.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**😂هـــــاتــــم**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "**😁هـــــەتـــــیوو لـــــە ڤــــۆیــــس نـــــیــــــت**"
      );
    }
  }
});

MARS26.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**😂هـــــاتــــم**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "**😁هـــــەتـــــیوو لـــــە ڤــــۆیــــس نـــــیــــــت**"
      );
    }
  }
});

MARS27.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**😂هـــــاتــــم**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "**😁هـــــەتـــــیوو لـــــە ڤــــۆیــــس نـــــیــــــت**"
      );
    }
  }
});

MARS28.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**😂هـــــاتــــم**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "**😁هـــــەتـــــیوو لـــــە ڤــــۆیــــس نـــــیــــــت**"
      );
    }
  }
});

MARS29.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**😂هـــــاتــــم**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "**😁هـــــەتـــــیوو لـــــە ڤــــۆیــــس نـــــیــــــت**"
      );
    }
  }
});

MARS30.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**😂هـــــاتــــم**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "**😁هـــــەتـــــیوو لـــــە ڤــــۆیــــس نـــــیــــــت**"
      );
    }
  }
});

MARS31.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**😂هـــــاتــــم**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "**😁هـــــەتـــــیوو لـــــە ڤــــۆیــــس نـــــیــــــت**"
      );
    }
  }
});

MARS32.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**😂هـــــاتــــم**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "**😁هـــــەتـــــیوو لـــــە ڤــــۆیــــس نـــــیــــــت**"
      );
    }
  }
});

MARS33.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**😂هـــــاتــــم**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "**😁هـــــەتـــــیوو لـــــە ڤــــۆیــــس نـــــیــــــت**"
      );
    }
  }
});

MARS34.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**😂هـــــاتــــم**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "**😁هـــــەتـــــیوو لـــــە ڤــــۆیــــس نـــــیــــــت**"
      );
    }
  }
});

MARS35.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**😂هـــــاتــــم**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "**😁هـــــەتـــــیوو لـــــە ڤــــۆیــــس نـــــیــــــت**"
      );
    }
  }
});

MARS36.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**😂هـــــاتــــم**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "**😁هـــــەتـــــیوو لـــــە ڤــــۆیــــس نـــــیــــــت**"
      );
    }
  }
});

MARS37.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**😂هـــــاتــــم**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "**😁هـــــەتـــــیوو لـــــە ڤــــۆیــــس نـــــیــــــت**"
      );
    }
  }
});

MARS38.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**😂هـــــاتــــم**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "**😁هـــــەتـــــیوو لـــــە ڤــــۆیــــس نـــــیــــــت**"
      );
    }
  }
});

MARS39.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**😂هـــــاتــــم**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "**😁هـــــەتـــــیوو لـــــە ڤــــۆیــــس نـــــیــــــت**"
      );
    }
  }
});

MARS40.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**😂هـــــاتــــم**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "**😁هـــــەتـــــیوو لـــــە ڤــــۆیــــس نـــــیــــــت**"
      );
    }
  }
});

MARS41.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**😂هـــــاتــــم**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "**😁هـــــەتـــــیوو لـــــە ڤــــۆیــــس نـــــیــــــت**"
      );
    }
  }
});

MARS42.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**😂هـــــاتــــم**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "**😁هـــــەتـــــیوو لـــــە ڤــــۆیــــس نـــــیــــــت**"
      );
    }
  }
});

MARS43.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**😂هـــــاتــــم**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "**😁هـــــەتـــــیوو لـــــە ڤــــۆیــــس نـــــیــــــت**"
      );
    }
  }
});

MARS44.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**😂هـــــاتــــم**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "**😁هـــــەتـــــیوو لـــــە ڤــــۆیــــس نـــــیــــــت**"
      );
    }
  }
});

MARS45.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**😂هـــــاتــــم**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "**😁هـــــەتـــــیوو لـــــە ڤــــۆیــــس نـــــیــــــت**"
      );
    }
  }
});

MARS46.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**😂هـــــاتــــم**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "**😁هـــــەتـــــیوو لـــــە ڤــــۆیــــس نـــــیــــــت**"
      );
    }
  }
});

MARS47.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**😂هـــــاتــــم**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "**😁هـــــەتـــــیوو لـــــە ڤــــۆیــــس نـــــیــــــت**"
      );
    }
  }
});

MARS48.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**😂هـــــاتــــم**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "**😁هـــــەتـــــیوو لـــــە ڤــــۆیــــس نـــــیــــــت**"
      );
    }
  }
});

MARS49.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**😂هـــــاتــــم**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "**😁هـــــەتـــــیوو لـــــە ڤــــۆیــــس نـــــیــــــت**"
      );
    }
  }
});

MARS50.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**😂هـــــاتــــم**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "**😁هـــــەتـــــیوو لـــــە ڤــــۆیــــس نـــــیــــــت**"
      );
    }
  }
});

// ======= [ StayVoice - MODE END  ] ======== //

// ======= [ RANDOM - AVATAR  ] ======== //
const kahAVA = "Ava";
MARS.on("message", message => {
  fs.readFile(`./${kahAVA}.txt`, function(err, data) {
    if (err) throw err;
    data = data + "";
    var lines = data.split("\n");
    let randomf = lines[Math.floor(Math.random() * lines.length)];
    let argresult = message.content
      .split(` `)
      .slice(1)
      .join(" ");
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.content.startsWith(prefix + "randomava")) {
      MARS.user.setAvatar(randomf);
      message.channel.send(`**» لقد حصلت علي صورة شخصية , شكرا لك <3 **`);
    }
  });
});
MARS2.on("message", message => {
  fs.readFile(`./${kahAVA}.txt`, function(err, data) {
    if (err) throw err;
    data = data + "";
    var lines = data.split("\n");
    let randomf = lines[Math.floor(Math.random() * lines.length)];
    let argresult = message.content
      .split(` `)
      .slice(1)
      .join(" ");
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.content.startsWith(prefix + "randomava")) {
      MARS2.user.setAvatar(randomf);
      message.channel.send(`**» لقد حصلت علي صورة شخصية , شكرا لك <3 **`);
    }
  });
});
MARS3.on("message", message => {
  fs.readFile(`./${kahAVA}.txt`, function(err, data) {
    if (err) throw err;
    data = data + "";
    var lines = data.split("\n");
    let randomf = lines[Math.floor(Math.random() * lines.length)];
    let argresult = message.content
      .split(` `)
      .slice(1)
      .join(" ");
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.content.startsWith(prefix + "randomava")) {
      MARS3.user.setAvatar(randomf);
      message.channel.send(`**» لقد حصلت علي صورة شخصية , شكرا لك <3 **`);
    }
  });
});
MARS4.on("message", message => {
  fs.readFile(`./${kahAVA}.txt`, function(err, data) {
    if (err) throw err;
    data = data + "";
    var lines = data.split("\n");
    let randomf = lines[Math.floor(Math.random() * lines.length)];
    let argresult = message.content
      .split(` `)
      .slice(1)
      .join(" ");
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.content.startsWith(prefix + "randomava")) {
      MARS4.user.setAvatar(randomf);
      message.channel.send(`**» لقد حصلت علي صورة شخصية , شكرا لك <3 **`);
    }
  });
});
MARS5.on("message", message => {
  fs.readFile(`./${kahAVA}.txt`, function(err, data) {
    if (err) throw err;
    data = data + "";
    var lines = data.split("\n");
    let randomf = lines[Math.floor(Math.random() * lines.length)];
    let argresult = message.content
      .split(` `)
      .slice(1)
      .join(" ");
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.content.startsWith(prefix + "randomava")) {
      MARS5.user.setAvatar(randomf);
      message.channel.send(`**» لقد حصلت علي صورة شخصية , شكرا لك <3 **`);
    }
  });
});
MARS6.on("message", message => {
  fs.readFile(`./${kahAVA}.txt`, function(err, data) {
    if (err) throw err;
    data = data + "";
    var lines = data.split("\n");
    let randomf = lines[Math.floor(Math.random() * lines.length)];
    let argresult = message.content
      .split(` `)
      .slice(1)
      .join(" ");
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.content.startsWith(prefix + "randomava")) {
      MARS6.user.setAvatar(randomf);
      message.channel.send(`**» لقد حصلت علي صورة شخصية , شكرا لك <3 **`);
    }
  });
});
MARS7.on("message", message => {
  fs.readFile(`./${kahAVA}.txt`, function(err, data) {
    if (err) throw err;
    data = data + "";
    var lines = data.split("\n");
    let randomf = lines[Math.floor(Math.random() * lines.length)];
    let argresult = message.content
      .split(` `)
      .slice(1)
      .join(" ");
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.content.startsWith(prefix + "randomava")) {
      MARS7.user.setAvatar(randomf);
      message.channel.send(`**» لقد حصلت علي صورة شخصية , شكرا لك <3 **`);
    }
  });
});
MARS8.on("message", message => {
  // جمــيع الحقوق محفوظة لدي "Kahrbaa"
  fs.readFile(`./${kahAVA}.txt`, function(err, data) {
    if (err) throw err;
    data = data + "";
    var lines = data.split("\n");
    let randomf = lines[Math.floor(Math.random() * lines.length)];
    let argresult = message.content
      .split(` `)
      .slice(1)
      .join(" ");
    if (!dinfo.owner.includes(message.author.id)) return; // جمــيع الحقوق محفوظة لدي "Kahrbaa"
    if (message.content.startsWith(prefix + "randomava")) {
      MARS8.user.setAvatar(randomf);
      message.channel.send(`**» لقد حصلت علي صورة شخصية , شكرا لك <3 **`);
    }
  });
});
MARS9.on("message", message => {
  fs.readFile(`./${kahAVA}.txt`, function(err, data) {
    if (err) throw err;
    data = data + "";
    var lines = data.split("\n");
    let randomf = lines[Math.floor(Math.random() * lines.length)]; // جمــيع الحقوق محفوظة لدي "Kahrbaa"
    let argresult = message.content
      .split(` `)
      .slice(1)
      .join(" ");
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.content.startsWith(prefix + "randomava")) {
      MARS9.user.setAvatar(randomf); // جمــيع الحقوق محفوظة لدي "Kahrbaa"
      message.channel.send(`**» لقد حصلت علي صورة شخصية , شكرا لك <3 **`);
    }
  });
});
MARS10.on("message", message => {
  fs.readFile(`./${kahAVA}.txt`, function(err, data) {
    if (err) throw err;
    data = data + "";
    var lines = data.split("\n");
    let randomf = lines[Math.floor(Math.random() * lines.length)];
    let argresult = message.content
      .split(` `)
      .slice(1)
      .join(" ");
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.content.startsWith(prefix + "randomava")) {
      MARS10.user.setAvatar(randomf);
      message.channel.send(`**» لقد حصلت علي صورة شخصية , شكرا لك <3 **`);
    }
  });
});
MARS11.on("message", message => {
  fs.readFile(`./${kahAVA}.txt`, function(err, data) {
    if (err) throw err;
    data = data + "";
    var lines = data.split("\n");
    let randomf = lines[Math.floor(Math.random() * lines.length)];
    let argresult = message.content
      .split(` `)
      .slice(1)
      .join(" ");
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.content.startsWith(prefix + "randomava")) {
      MARS11.user.setAvatar(randomf);
      message.channel.send(`**» لقد حصلت علي صورة شخصية , شكرا لك <3 **`);
    }
  });
});
MARS12.on("message", message => {
  fs.readFile(`./${kahAVA}.txt`, function(err, data) {
    if (err) throw err;
    data = data + "";
    var lines = data.split("\n");
    let randomf = lines[Math.floor(Math.random() * lines.length)];
    let argresult = message.content
      .split(` `)
      .slice(1)
      .join(" ");
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.content.startsWith(prefix + "randomava")) {
      MARS12.user.setAvatar(randomf);
      message.channel.send(`**» لقد حصلت علي صورة شخصية , شكرا لك <3 **`);
    }
  });
});
MARS13.on("message", message => {
  fs.readFile(`./${kahAVA}.txt`, function(err, data) {
    if (err) throw err;
    data = data + "";
    var lines = data.split("\n");
    let randomf = lines[Math.floor(Math.random() * lines.length)];
    let argresult = message.content
      .split(` `)
      .slice(1)
      .join(" ");
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.content.startsWith(prefix + "randomava")) {
      MARS13.user.setAvatar(randomf);
      message.channel.send(`**» لقد حصلت علي صورة شخصية , شكرا لك <3 **`);
    }
  });
});
MARS14.on("message", message => {
  fs.readFile(`./${kahAVA}.txt`, function(err, data) {
    if (err) throw err;
    data = data + "";
    var lines = data.split("\n");
    let randomf = lines[Math.floor(Math.random() * lines.length)];
    let argresult = message.content
      .split(` `)
      .slice(1)
      .join(" ");
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.content.startsWith(prefix + "randomava")) {
      MARS14.user.setAvatar(randomf);
      message.channel.send(`**» لقد حصلت علي صورة شخصية , شكرا لك <3 **`);
    }
  });
});
MARS15.on("message", message => {
  fs.readFile(`./${kahAVA}.txt`, function(err, data) {
    if (err) throw err;
    data = data + "";
    var lines = data.split("\n");
    let randomf = lines[Math.floor(Math.random() * lines.length)];
    let argresult = message.content
      .split(` `)
      .slice(1)
      .join(" ");
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.content.startsWith(prefix + "randomava")) {
      MARS15.user.setAvatar(randomf);
      message.channel.send(`**» لقد حصلت علي صورة شخصية , شكرا لك <3 **`);
    }
  });
});
MARS16.on("message", message => {
  // جمــيع الحقوق محفوظة لدي "Kahrbaa"

  fs.readFile(`./${kahAVA}.txt`, function(err, data) {
    if (err) throw err;
    data = data + ""; // جمــيع الحقوق محفوظة لدي "Kahrbaa"
    var lines = data.split("\n");
    let randomf = lines[Math.floor(Math.random() * lines.length)];
    let argresult = message.content
      .split(` `)
      .slice(1)
      .join(" ");
    if (!dinfo.owner.includes(message.author.id)) return; // جمــيع الحقوق محفوظة لدي "Kahrbaa"
    if (message.content.startsWith(prefix + "randomava")) {
      MARS16.user.setAvatar(randomf);
      message.channel.send(`**» لقد حصلت علي صورة شخصية , شكرا لك <3 **`);
    }
  });
});
MARS17.on("message", message => {
  fs.readFile(`./${kahAVA}.txt`, function(err, data) {
    if (err) throw err;
    data = data + "";
    var lines = data.split("\n");
    let randomf = lines[Math.floor(Math.random() * lines.length)];
    let argresult = message.content
      .split(` `)
      .slice(1)
      .join(" ");
    if (!dinfo.owner.includes(message.author.id)) return; // جمــيع الحقوق محفوظة لدي "Kahrbaa"
    if (message.content.startsWith(prefix + "randomava")) {
      MARS17.user.setAvatar(randomf);
      message.channel.send(`**» لقد حصلت علي صورة شخصية , شكرا لك <3 **`);
    }
  });
});
MARS18.on("message", message => {
  fs.readFile(`./${kahAVA}.txt`, function(err, data) {
    if (err) throw err;
    data = data + "";
    var lines = data.split("\n");
    let randomf = lines[Math.floor(Math.random() * lines.length)]; // جمــيع الحقوق محفوظة لدي "Kahrbaa"
    let argresult = message.content
      .split(` `)
      .slice(1)
      .join(" ");
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.content.startsWith(prefix + "randomava")) {
      MARS18.user.setAvatar(randomf);
      message.channel.send(`**» لقد حصلت علي صورة شخصية , شكرا لك <3 **`);
    }
  });
});
MARS19.on("message", message => {
  fs.readFile(`./${kahAVA}.txt`, function(err, data) {
    if (err) throw err;
    data = data + "";
    var lines = data.split("\n");
    let randomf = lines[Math.floor(Math.random() * lines.length)];
    let argresult = message.content
      .split(` `)
      .slice(1)
      .join(" ");
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.content.startsWith(prefix + "randomava")) {
      MARS19.user.setAvatar(randomf);
      message.channel.send(`**» لقد حصلت علي صورة شخصية , شكرا لك <3 **`);
    }
  });
});
MARS20.on("message", message => {
  fs.readFile(`./${kahAVA}.txt`, function(err, data) {
    if (err) throw err;
    data = data + "";
    var lines = data.split("\n");
    let randomf = lines[Math.floor(Math.random() * lines.length)];
    let argresult = message.content
      .split(` `)
      .slice(1)
      .join(" ");
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.content.startsWith(prefix + "randomava")) {
      MARS20.user.setAvatar(randomf);
      message.channel.send(`**» لقد حصلت علي صورة شخصية , شكرا لك <3 **`);
    }
  });
});
// ======= [ RANDOM - AVATAR end ] ======== //

// ======= [ SPAM - MODE  ] ======== //

MARS.on("warn", console.warn);
MARS.on("error", console.error);
const child_process = require("child_process");
MARS.on("message", message => {
  if (message.content === prefix + "spam on") {
    if (dinfo.serverid === "NONE")
      return message
        .reply(`**لم يتم وضع ايدي سيرفر الاسبام \`${prefix}setserverID\`**`)
        .then(m => m.delete(5000));
    if (dinfo.channelid === "NONE")
      return message
        .reply(`**لم يتم وضع ايدي روم الاسبام \`${prefix}setchannelID\`**`)
        .then(m => m.delete(5000));
    if (dinfo.timespam === "NONE")
      return message
        .reply(
          `**لم يتم وضع وقت الاسبام - بـ الثواني \`${prefix}settimeSpam\`**`
        )
        .then(m => m.delete(5000));
    if (dinfo.timestop === "NONE")
      return message
        .reply(
          `**لم يتم وضع وقت توقف الاسبام بـ الساعات \`${prefix}settimeStop\`**`
        )
        .then(m => m.delete(5000));
    if (!dinfo.owner.includes(message.author.id)) return;
    message.channel.send(`**⚠️ | SPAM ON , <@${dinfo.owner}>**`);
    child_process.fork(__dirname + "/spam.js");
    console.log("[SYSTEM-SPAM] - تم التفعيل ..");
  }
});
// ======= [ SPAM - MODE end ] ======== //

// ======= [ Credits - INFO ] ======== //

MARS.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "cc") {
    message.channel.send("#credit");
  }
});
MARS2.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "cc") {
    message.channel.send("#credit");
  }
});
MARS3.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "cc") {
    message.channel.send("#credit");
  }
});
MARS4.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "cc") {
    message.channel.send("#credit");
  }
});
MARS5.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "cc") {
    message.channel.send("#credit");
  }
});
MARS6.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "cc") {
    message.channel.send("#credit");
  }
});
MARS7.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "cc") {
    message.channel.send("#credit");
  }
});
MARS8.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "cc") {
    message.channel.send("#credit");
  }
});
MARS9.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "cc") {
    message.channel.send("#credit");
  }
});
MARS10.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "cc") {
    message.channel.send("#credit");
  }
});
MARS11.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "cc") {
    message.channel.send("#credit");
  }
});
MARS12.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "cc") {
    message.channel.send("#credit");
  }
});
MARS13.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "cc") {
    message.channel.send("#credit");
  }
});
MARS14.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "cc") {
    message.channel.send("#credit");
  }
});
MARS15.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "cc") {
    message.channel.send("#credit");
  }
});
MARS16.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "cc") {
    message.channel.send("#credit");
  }
});
MARS17.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "cc") {
    message.channel.send("#credit");
  }
});
MARS18.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "cc") {
    message.channel.send("#credit");
  }
});
MARS19.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "cc") {
    message.channel.send("#credit");
  }
});
MARS20.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "cc") {
    message.channel.send("#credit");
  }
});

// ======= [ Credits - INFO end ] ======== //

// ======= [ Daily - INFO ] ======== //

MARS.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "dly") {
    message.channel.send("#daily");
  }
});
MARS2.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "dly") {
    message.channel.send("#daily");
  }
});
MARS3.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "dly") {
    message.channel.send("#daily");
  }
});
MARS4.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "dly") {
    message.channel.send("#daily");
  }
});
MARS5.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "dly") {
    message.channel.send("#daily");
  }
});
MARS6.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "dly") {
    message.channel.send("#daily");
  }
});
MARS7.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "dly") {
    message.channel.send("#daily");
  }
});
MARS8.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "dly") {
    message.channel.send("#daily");
  }
});
MARS9.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "dly") {
    message.channel.send("#daily");
  }
});
MARS10.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "dly") {
    message.channel.send("#daily");
  }
});
MARS11.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "dly") {
    message.channel.send("#daily");
  }
});
MARS12.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "dly") {
    message.channel.send("#daily");
  }
});
MARS13.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "dly") {
    message.channel.send("#daily");
  }
});
MARS14.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "dly") {
    message.channel.send("#daily");
  }
});
MARS15.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "dly") {
    message.channel.send("#daily");
  }
});
MARS16.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "dly") {
    message.channel.send("#daily");
  }
});
MARS17.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "dly") {
    message.channel.send("#daily");
  }
});
MARS18.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "dly") {
    message.channel.send("#daily");
  }
});
MARS19.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "dly") {
    message.channel.send("#daily");
  }
});
MARS20.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "dly") {
    message.channel.send("#daily");
  }
});

// ======= [ Daily - INFO end ] ======== //

// ======= [ PROFILE - INFO ] ======== //

MARS.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "prof") {
    message.channel.send("#profile");
  }
});
MARS2.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "prof") {
    message.channel.send("#profile");
  }
});
MARS3.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "prof") {
    message.channel.send("#profile");
  }
});
MARS4.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "prof") {
    message.channel.send("#profile");
  }
});
MARS5.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "prof") {
    message.channel.send("#profile");
  }
});
MARS6.on("message", message => {
  // جمــيع الحقوق محفوظة لدي "Kahrbaa"
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "prof") {
    message.channel.send("#profile");
  }
});
MARS7.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return; // جمــيع الحقوق محفوظة لدي "Kahrbaa"
  if (message.content === prefix + "prof") {
    message.channel.send("#profile");
  }
});
MARS8.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "prof") {
    message.channel.send("#profile");
  }
}); // جمــيع الحقوق محفوظة لدي "Kahrbaa"
MARS9.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "prof") {
    message.channel.send("#profile"); // جمــيع الحقوق محفوظة لدي "Kahrbaa"
  }
});
MARS10.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "prof") {
    // جمــيع الحقوق محفوظة لدي "Kahrbaa"
    message.channel.send("#profile");
  }
});
MARS11.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "prof") {
    message.channel.send("#profile");
  }
});
MARS12.on("message", message => {
  // جمــيع الحقوق محفوظة لدي "Kahrbaa"
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "prof") {
    message.channel.send("#profile");
  }
});
MARS13.on("message", message => {
  // جمــيع الحقوق محفوظة لدي "Kahrbaa"
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "prof") {
    message.channel.send("#profile");
  }
});
MARS14.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "prof") {
    message.channel.send("#profile");
  }
});
MARS15.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "prof") {
    message.channel.send("#profile");
  }
});
MARS16.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "prof") {
    message.channel.send("#profile");
  }
});
MARS17.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "prof") {
    message.channel.send("#profile");
  }
});
MARS18.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "prof") {
    message.channel.send("#profile");
  }
});
MARS19.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "prof") {
    message.channel.send("#profile");
  }
});
MARS20.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content === prefix + "prof") {
    message.channel.send("#profile");
  }
});

//////// playing or dnd ////////

MARS.on("ready", () => {
  console.log(
    `Online In Servers`
  );
  let statuses = [
    ///// لێرانە شتێک بووسە بۆ ستریمینگەکە
    //// لە شوێنی تێکستەکان شتەکانت بنووسە
  `زۆڵـــــی پــــڕۆچــــێــــکـــــت`,
  `بــــاپــــیرە گــــەورەی بـــۆتــــەکــــان`,
    
    
  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    MARS.user.setActivity(STREAMING, {      
    type: "playing", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});


MARS2.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`زۆڵـــــی پــــڕۆچــــێــــکـــــت`, `بــــاپــــیرە گــــەورەی بـــۆتــــەکــــان`, ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; MARS2.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/faith" }); }, 2000);});

MARS3.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`زۆڵـــــی پــــڕۆچــــێــــکـــــت`, `بــــاپــــیرە گــــەورەی بـــۆتــــەکــــان`, ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; MARS3.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/faith" }); }, 2000);});

MARS4.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`زۆڵـــــی پــــڕۆچــــێــــکـــــت`, `بــــاپــــیرە گــــەورەی بـــۆتــــەکــــان`, ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; MARS4.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/faith" }); }, 2000);});

MARS5.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`زۆڵـــــی پــــڕۆچــــێــــکـــــت`, `بــــاپــــیرە گــــەورەی بـــۆتــــەکــــان`, ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; MARS5.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/faith" }); }, 2000);});

MARS6.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`زۆڵـــــی پــــڕۆچــــێــــکـــــت`, `بــــاپــــیرە گــــەورەی بـــۆتــــەکــــان`, ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; MARS6.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/faith" }); }, 2000);});

MARS7.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`زۆڵـــــی پــــڕۆچــــێــــکـــــت`, `بــــاپــــیرە گــــەورەی بـــۆتــــەکــــان`, ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; MARS7.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/faith" }); }, 2000);});

MARS8.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`زۆڵـــــی پــــڕۆچــــێــــکـــــت`, `بــــاپــــیرە گــــەورەی بـــۆتــــەکــــان`, ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; MARS8.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/faith" }); }, 2000);});

MARS9.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`زۆڵـــــی پــــڕۆچــــێــــکـــــت`, `بــــاپــــیرە گــــەورەی بـــۆتــــەکــــان`, ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; MARS9.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/faith" }); }, 2000);});

MARS10.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`زۆڵـــــی پــــڕۆچــــێــــکـــــت`, `بــــاپــــیرە گــــەورەی بـــۆتــــەکــــان`, ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; MARS10.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/faith" }); }, 2000);});

MARS11.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`زۆڵـــــی پــــڕۆچــــێــــکـــــت`, `بــــاپــــیرە گــــەورەی بـــۆتــــەکــــان`, ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; MARS11.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/faith" }); }, 2000);});

MARS12.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`زۆڵـــــی پــــڕۆچــــێــــکـــــت`, `بــــاپــــیرە گــــەورەی بـــۆتــــەکــــان`, ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; MARS12.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/faith" }); }, 2000);});

MARS13.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`زۆڵـــــی پــــڕۆچــــێــــکـــــت`, `بــــاپــــیرە گــــەورەی بـــۆتــــەکــــان`, ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; MARS13.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/faith" }); }, 2000);});

MARS14.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`زۆڵـــــی پــــڕۆچــــێــــکـــــت`, `بــــاپــــیرە گــــەورەی بـــۆتــــەکــــان`, ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; MARS14.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/faith" }); }, 2000);});

MARS15.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`زۆڵـــــی پــــڕۆچــــێــــکـــــت`, `بــــاپــــیرە گــــەورەی بـــۆتــــەکــــان`, ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; MARS15.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/faith" }); }, 2000);});

MARS16.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`زۆڵـــــی پــــڕۆچــــێــــکـــــت`, `بــــاپــــیرە گــــەورەی بـــۆتــــەکــــان`, ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; MARS16.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/faith" }); }, 2000);});

MARS17.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`زۆڵـــــی پــــڕۆچــــێــــکـــــت`, `بــــاپــــیرە گــــەورەی بـــۆتــــەکــــان`, ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; MARS17.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/faith" }); }, 2000);});

MARS18.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`زۆڵـــــی پــــڕۆچــــێــــکـــــت`, `بــــاپــــیرە گــــەورەی بـــۆتــــەکــــان`, ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; MARS18.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/faith" }); }, 2000);});

MARS19.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`زۆڵـــــی پــــڕۆچــــێــــکـــــت`, `بــــاپــــیرە گــــەورەی بـــۆتــــەکــــان`, ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; MARS19.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/faith" }); }, 2000);});

MARS20.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`زۆڵـــــی پــــڕۆچــــێــــکـــــت`, `بــــاپــــیرە گــــەورەی بـــۆتــــەکــــان`, ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; MARS20.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/faith" }); }, 2000);});

MARS21.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`زۆڵـــــی پــــڕۆچــــێــــکـــــت`, `بــــاپــــیرە گــــەورەی بـــۆتــــەکــــان`, ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; MARS21.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/faith" }); }, 2000);});

MARS22.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`زۆڵـــــی پــــڕۆچــــێــــکـــــت`, `بــــاپــــیرە گــــەورەی بـــۆتــــەکــــان`, ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; MARS22.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/faith" }); }, 2000);});

MARS23.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`زۆڵـــــی پــــڕۆچــــێــــکـــــت`, `بــــاپــــیرە گــــەورەی بـــۆتــــەکــــان`, ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; MARS23.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/faith" }); }, 2000);});
MARS24.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`زۆڵـــــی پــــڕۆچــــێــــکـــــت`, `بــــاپــــیرە گــــەورەی بـــۆتــــەکــــان`, ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; MARS24.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/faith" }); }, 2000);});
MARS25.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`زۆڵـــــی پــــڕۆچــــێــــکـــــت`, `بــــاپــــیرە گــــەورەی بـــۆتــــەکــــان`, ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; MARS25.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/faith" }); }, 2000);});
MARS26.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`زۆڵـــــی پــــڕۆچــــێــــکـــــت`, `بــــاپــــیرە گــــەورەی بـــۆتــــەکــــان`, ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; MARS26.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/faith" }); }, 2000);});
MARS27.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`زۆڵـــــی پــــڕۆچــــێــــکـــــت`, `بــــاپــــیرە گــــەورەی بـــۆتــــەکــــان`, ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; MARS27.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/faith" }); }, 2000);});
MARS28.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`زۆڵـــــی پــــڕۆچــــێــــکـــــت`, `بــــاپــــیرە گــــەورەی بـــۆتــــەکــــان`, ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; MARS28.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/faith" }); }, 2000);});
MARS29.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`زۆڵـــــی پــــڕۆچــــێــــکـــــت`, `بــــاپــــیرە گــــەورەی بـــۆتــــەکــــان`, ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; MARS29.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/faith" }); }, 2000);});
MARS30.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`زۆڵـــــی پــــڕۆچــــێــــکـــــت`, `بــــاپــــیرە گــــەورەی بـــۆتــــەکــــان`, ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; MARS30.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/faith" }); }, 2000);});
MARS31.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`زۆڵـــــی پــــڕۆچــــێــــکـــــت`, `بــــاپــــیرە گــــەورەی بـــۆتــــەکــــان`, ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; MARS31.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/faith" }); }, 2000);});
MARS32.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`زۆڵـــــی پــــڕۆچــــێــــکـــــت`, `بــــاپــــیرە گــــەورەی بـــۆتــــەکــــان`, ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; MARS32.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/faith" }); }, 2000);});
MARS33.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`زۆڵـــــی پــــڕۆچــــێــــکـــــت`, `بــــاپــــیرە گــــەورەی بـــۆتــــەکــــان`, ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; MARS33.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/faith" }); }, 2000);});
MARS34.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`زۆڵـــــی پــــڕۆچــــێــــکـــــت`, `بــــاپــــیرە گــــەورەی بـــۆتــــەکــــان`, ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; MARS34.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/faith" }); }, 2000);});
MARS35.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`زۆڵـــــی پــــڕۆچــــێــــکـــــت`, `بــــاپــــیرە گــــەورەی بـــۆتــــەکــــان`, ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; MARS35.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/faith" }); }, 2000);});
MARS36.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`زۆڵـــــی پــــڕۆچــــێــــکـــــت`, `بــــاپــــیرە گــــەورەی بـــۆتــــەکــــان`, ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; MARS36.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/faith" }); }, 2000);});
MARS37.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`زۆڵـــــی پــــڕۆچــــێــــکـــــت`, `بــــاپــــیرە گــــەورەی بـــۆتــــەکــــان`, ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; MARS37.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/faith" }); }, 2000);});
MARS38.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`زۆڵـــــی پــــڕۆچــــێــــکـــــت`, `بــــاپــــیرە گــــەورەی بـــۆتــــەکــــان`, ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; MARS38.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/faith" }); }, 2000);});
MARS39.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`زۆڵـــــی پــــڕۆچــــێــــکـــــت`, `بــــاپــــیرە گــــەورەی بـــۆتــــەکــــان`, ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; MARS39.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/faith" }); }, 2000);});
MARS40.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`زۆڵـــــی پــــڕۆچــــێــــکـــــت`, `بــــاپــــیرە گــــەورەی بـــۆتــــەکــــان`, ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; MARS40.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/faith" }); }, 2000);});
MARS41.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`زۆڵـــــی پــــڕۆچــــێــــکـــــت`, `بــــاپــــیرە گــــەورەی بـــۆتــــەکــــان`, ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; MARS41.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/faith" }); }, 2000);});
MARS42.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`زۆڵـــــی پــــڕۆچــــێــــکـــــت`, `بــــاپــــیرە گــــەورەی بـــۆتــــەکــــان`, ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; MARS42.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/faith" }); }, 2000);});
MARS43.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`زۆڵـــــی پــــڕۆچــــێــــکـــــت`, `بــــاپــــیرە گــــەورەی بـــۆتــــەکــــان`, ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; MARS43.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/faith" }); }, 2000);});
MARS44.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`زۆڵـــــی پــــڕۆچــــێــــکـــــت`, `بــــاپــــیرە گــــەورەی بـــۆتــــەکــــان`, ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; MARS44.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/faith" }); }, 2000);});
MARS45.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`زۆڵـــــی پــــڕۆچــــێــــکـــــت`, `بــــاپــــیرە گــــەورەی بـــۆتــــەکــــان`, ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; MARS45.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/faith" }); }, 2000);});
MARS46.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`زۆڵـــــی پــــڕۆچــــێــــکـــــت`, `بــــاپــــیرە گــــەورەی بـــۆتــــەکــــان`, ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; MARS46.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/faith" }); }, 2000);});
MARS47.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`زۆڵـــــی پــــڕۆچــــێــــکـــــت`, `بــــاپــــیرە گــــەورەی بـــۆتــــەکــــان`, ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; MARS47.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/faith" }); }, 2000);});
MARS48.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`زۆڵـــــی پــــڕۆچــــێــــکـــــت`, `بــــاپــــیرە گــــەورەی بـــۆتــــەکــــان`, ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; MARS48.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/faith" }); }, 2000);});
MARS49.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`زۆڵـــــی پــــڕۆچــــێــــکـــــت`, `بــــاپــــیرە گــــەورەی بـــۆتــــەکــــان`, ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; MARS49.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/faith" }); }, 2000);});
MARS50.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`زۆڵـــــی پــــڕۆچــــێــــکـــــت`, `بــــاپــــیرە گــــەورەی بـــۆتــــەکــــان`, ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; MARS50.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/faith" }); }, 2000);});





// ======= [ PROFILE - INFO end ] ======== //

/// by mars

MARS.login("");
MARS2.login("");
MARS3.login("");
MARS4.login("");
MARS5.login("");
MARS6.login("");
MARS7.login("");
MARS8.login("");
MARS9.login("");
MARS10.login("");
MARS11.login("")
MARS12.login("");
MARS13.login("");
MARS14.login("");
MARS15.login("");
MARS16.login("");
MARS17.login("");
MARS18.login("");
MARS19.login("");
MARS20.login("");
MARS21.login("");
MARS22.login("");
MARS23.login("");
MARS24.login("");
MARS25.login("");
MARS26.login("");
MARS27.login("");
MARS28.login("");
MARS29.login("");
MARS30.login("");
MARS31.login("");
MARS32.login("");
MARS33.login("");
MARS34.login("");
MARS35.login("");
MARS36.login("");
MARS37.login("");
MARS38.login("");
MARS39.login("");
MARS40.login("");
MARS41.login("");
MARS42.login("");
MARS43.login("");
MARS44.login("");
MARS45.login("");
MARS46.login("");
MARS47.login("");
MARS48.login("");
MARS49.login("");
MARS50.login("");