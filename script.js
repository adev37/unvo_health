// import emailjs from '@emailjs/browser'

let menu = document.querySelector('#menu');
let links = document.querySelector('#links');
let closed = document.querySelector('#close');

menu.addEventListener('click',()=>{
    if (links.style.display === "none") {
        links.style.display = "block";
        closed.style.display = "block";
        menu.style.display = "none"
      } else {
        links.style.display = "none";
        closed.style.display = "none";
      }
})

closed.addEventListener('click',()=>{
  if(links.style.display === "block"){
    links.style.display = "none";
    menu.style.display = "block"
    closed.style.display = "none"
  } else{
    links.style.display = "block";
    menu.style.display = "none";
  }
})

// document.getElementById("contact-form").addEventListener("submit", function (event) {
//   event.preventDefault();

//   var params={
//     sendername: document.querySelector("#sendername").value,
//     number: document.querySelector("#number").value,
//     email: document.querySelector("#email").value,
//     message: document.querySelector("#message").value,
//   };

//   emailjs.send('service_ale4jsr', 'template_hq1v2af', params)
//       .then(function () {
//           alert('Data sent successfully!');
//       }, function (error) {
//           alert('Failed to send email: ' + JSON.stringify(error));
//       });

//       sendername.value = ""
//       number.value = ""
//       email.value = ""
//       message.value = ""
// });

document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();
  
    // Collect form data
    const params = {
      sendername: document.querySelector("#sendername").value,
      number: document.querySelector("#number").value,
      email: document.querySelector("#email").value,
      message: document.querySelector("#message").value,
    };
  
    // Send email via EmailJS
    emailjs
      .send("service_ale4jsr", "template_hq1v2af", params, "-edgX2BkCVe2xW2vy")
      .then(
        function (response) {
          alert("Email sent successfully!");
        },
        function (error) {
          alert("Failed to send email: " + JSON.stringify(error));
        }
      );
  
    // Optional: Clear form inputs
    document.querySelector("#sendername").value = "";
    document.querySelector("#number").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#message").value = "";
  });
  

// const nodemailer = require('nodemailer');

// const transport = nodemailer.createTransport(
//   {
//     secure:true,
//     host:'smtp.gmail.com',
//     port: 465,
//     auth: {
//       user: 'ramit5752@gmail.com',
//       pass: 'purr adpn unsu dyag'
//     }
//   }
// )

// const sendMail=(to,sub,msg)=>{
//   transport.sendMail({
//     to: to,
//     subject: sub,
//     html: msg
//   })
//   console.log('Email sent successfully')
// }

// console.log("Amit")

// const nodemailer = require("nodemailer");

// // Configure transporter for GoDaddy webmail
// const transporter = nodemailer.createTransport({
//   host: "smtp.secureserver.net", // GoDaddy SMTP server
//   port: 465, // Use 465 for SSL, 587 for TLS
//   secure: true, // true for 465, false for 587
//   auth: {
//     user: "contact@unvo-health.com", // Your GoDaddy email
//     pass: "Contact@$2025",   // Your GoDaddy email password
//   },
//   tls: {
//     rejectUnauthorized: false, // Ignore certificate issues
//   },
// });

// // Email sending function
// const sendEmail = async () => {
//   try {
//     const mailOptions = {
//       from: "ramit5752@gmail.com", // Sender's email and name
//       to: "contact@unvo-health.com", // Recipient's email
//       subject: "Test Email from Node.js", // Subject
//       text: "Hello, this is a test email from Node.js using GoDaddy webmail!", // Plain text body
//       html: "<b>Hello, this is a test email from Node.js using GoDaddy webmail!</b>", // HTML body
//     };

//     const info = await transporter.sendMail(mailOptions);
//     console.log("Email sent: %s", info.messageId);
//   } catch (error) {
//     console.error("Error sending email:", error);
//   }
// };

// // Call the function to send the email
// sendEmail();
