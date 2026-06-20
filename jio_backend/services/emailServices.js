const dotenv = require("dotenv");
const nodemailer = require("nodemailer");
const fs = require("fs");

dotenv.config();

async function updateTemplateHelper(
  templatePath,
  toReplaceObject
) {
  let templateContent =
    await fs.promises.readFile(
      templatePath,
      "utf-8"
    );

  Object.keys(toReplaceObject).forEach((key) => {
    templateContent =
      templateContent.replaceAll(
        `#{${key}}`,
        toReplaceObject[key]
      );
  });

  return templateContent;
}

async function sendEmail(
  templatePath,
  receiverEmail,
  toReplaceObject
) {
  try {
    console.log(
      "Sending email to:",
      receiverEmail
    );

    const content =
      await updateTemplateHelper(
        templatePath,
        toReplaceObject
      );

    const transporter =
      nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

    await transporter.verify();
    console.log("SMTP Connected");

    const info =
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: receiverEmail,
        subject: "Reset Password OTP",
        html: content,
      });

    console.log(
      "Email Sent Successfully"
    );
    console.log(
      "Message ID:",
      info.messageId
    );

    return info;

  } catch (err) {
    console.log(
      "Email not sent:",
      err
    );
    throw err;
  }
}

module.exports = sendEmail;