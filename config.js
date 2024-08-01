const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "237679672107" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "237679672107";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "true", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_35_08_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxMzksXG4gICAgICAgIDIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgOTksXG4gICAgICAgIDE5OCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjAwLFxuICAgICAgICA3MixcbiAgICAgICAgMzIsXG4gICAgICAgIDcwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDgyLFxuICAgICAgICAzLFxuICAgICAgICA3MixcbiAgICAgICAgMzYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA1NCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDQ5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTg4LFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzEsXG4gICAgICAgIDY2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNjMsXG4gICAgICAgIDI3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDY4LFxuICAgICAgICAxODksXG4gICAgICAgIDU3LFxuICAgICAgICA0NSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTcwLFxuICAgICAgICAzOSxcbiAgICAgICAgMTQzLFxuICAgICAgICAzNyxcbiAgICAgICAgMTc3LFxuICAgICAgICA4NyxcbiAgICAgICAgNDQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNDYsXG4gICAgICAgIDYyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjI3LFxuICAgICAgICA4MSxcbiAgICAgICAgMCxcbiAgICAgICAgMCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDk3LFxuICAgICAgICAyMjksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMyxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMDksXG4gICAgICAgIDU5LFxuICAgICAgICAxMCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNzMsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDQ4LFxuICAgICAgICA1MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDcyLFxuICAgICAgICA4NCxcbiAgICAgICAgMzgsXG4gICAgICAgIDk3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNzMsXG4gICAgICAgIDExOSxcbiAgICAgICAgODEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTU1LFxuICAgICAgICA1NSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDI3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDM3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMDksXG4gICAgICAgIDEzMyxcbiAgICAgICAgNixcbiAgICAgICAgMzhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjI4LFxuICAgICAgICA4NSxcbiAgICAgICAgMjksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxOSxcbiAgICAgICAgMjksXG4gICAgICAgIDE3NCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNzIsXG4gICAgICAgIDI4LFxuICAgICAgICAxMixcbiAgICAgICAgNTksXG4gICAgICAgIDIxMixcbiAgICAgICAgMTY0LFxuICAgICAgICAxMSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDI3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDUxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjQ1LFxuICAgICAgICA2MixcbiAgICAgICAgMTg4LFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDcxLFxuICAgICAgICAzOCxcbiAgICAgICAgMTksXG4gICAgICAgIDQzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTA2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDYxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDYwLFxuICAgICAgICAzNSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDUzLFxuICAgICAgICAxNTksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMjksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzNixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgOTZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAzNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICAyMDksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjM5LFxuICAgICAgICA4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNzcsXG4gICAgICAgIDg2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTU1LFxuICAgICAgICA3NixcbiAgICAgICAgMTg5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDc1LFxuICAgICAgICA5NSxcbiAgICAgICAgNTIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNzgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTcsXG4gICAgICAgIDkxLFxuICAgICAgICAxMCxcbiAgICAgICAgMTI1LFxuICAgICAgICA1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDM5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTM2LFxuICAgICAgICA3LFxuICAgICAgICA3NyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTYsXG4gICAgICAgIDUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTgzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDMwLFxuICAgICAgICAyOCxcbiAgICAgICAgMjA1LFxuICAgICAgICA2NixcbiAgICAgICAgMjAsXG4gICAgICAgIDI5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTY4LFxuICAgICAgICAxNDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDUwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjkwZ2RqMk44WmZUc3NSa0d6UjU1TUxmVTJOYzI0Q2hYVTJYZUdJQUdLYW89XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIl9ZTURIMDM5VGpHa3NET25SVUg0WFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiODJjYThjZjMtOTUyMi00YTQyLTljZGMtM2ZiMzViNjQ5ZDg5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5MyxcbiAgICAgIDEwNyxcbiAgICAgIDE5NSxcbiAgICAgIDIyNCxcbiAgICAgIDEzOSxcbiAgICAgIDIxMyxcbiAgICAgIDUxLFxuICAgICAgMTUzLFxuICAgICAgMTU3LFxuICAgICAgOTksXG4gICAgICAyMzMsXG4gICAgICA3NyxcbiAgICAgIDgxLFxuICAgICAgMTQ5LFxuICAgICAgMTkzLFxuICAgICAgODEsXG4gICAgICAyMTAsXG4gICAgICAyNTQsXG4gICAgICAzMixcbiAgICAgIDE0MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjYsXG4gICAgICA4NSxcbiAgICAgIDE2NSxcbiAgICAgIDg5LFxuICAgICAgOTIsXG4gICAgICAyMTIsXG4gICAgICAxMjIsXG4gICAgICA4NCxcbiAgICAgIDI1MSxcbiAgICAgIDg5LFxuICAgICAgMTgyLFxuICAgICAgMjQ1LFxuICAgICAgMTYwLFxuICAgICAgMjQwLFxuICAgICAgMjI0LFxuICAgICAgMTI2LFxuICAgICAgMjU1LFxuICAgICAgMjQ5LFxuICAgICAgMTY0LFxuICAgICAgNjZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNVkyU1pZUENcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNzYyMDczMjA1NjoyNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkpvcmVzIEZhbGNhbyBCdXNpbmVzc1wiLFxuICAgIFwibGlkXCI6IFwiNjU5NjIzNDI2NzA0MTA6MjRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSnl5MXVZRkVMblpyTFVHR0FnZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJFM2VUeFRTTFBVbHV0SVBvNDl0dUZlOHZ1aCtlRlVMcWpmSGpySFUyblZJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIm00c1Z1V2NnK1ptVGFsVm5DaUY0cXFLUG1LL2E4UkdxRHd1S1BXNTZKZ1JTY0JVWnZ3OExVL0tEbGJ2V2lNMkNPQ3NPZTNCNXB3MzArS0xsY2EwaERRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImxTY0lLTnpGdEloYjN4MWRVTjBRUnU5VGY2dzlabW1UWVNERlo3ekg4U21CL3R1QjRQVmpDQkJqaGVyV21QbmRUVzRHVzlZRjBsRU5ka2pkSHh2eWlBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNzYyMDczMjA1NjoyNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDgyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI0OTQxNDRcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9" 
// PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "#",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "true",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
