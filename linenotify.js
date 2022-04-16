const request = require("request");
const dotenv = require("dotenv");
dotenv.config();

const url_line_notification = "https://notify-api.line.me/api/revoke";

request(
  {
    method: "POST",
    uri: url_line_notification,
    header: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    auth: {
      bearer: process.env.TOKEN,
    },
    form: {
      message: "สมัครสมาชิกใหม่ Lottowins",
    },
  },
  (err, httpResponse, body) => {
    if (err) {
      console.log(err);
    } else {
      console.log(body);
    }
  }
);
