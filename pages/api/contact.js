export default function (req, res) {
    require('dotenv').config()

    let nodemailer = require('nodemailer')
    const EMAIL = process.env.email
    const PASSWORD = process.env.password

    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
            user: EMAIL,
            pass: PASSWORD,
        },
        secure: true,
        })

    const mailData = {
        from: req.body.email,
        to: EMAIL,
        subject: `Nuevo mensaje de: ${req.body.name}`,
        text: req.body.message,
        html: `
            <div style='border: 1px solid #f3f3f3; background-color: #f3f3f3;'>
            <h1 style='text-align: left;'>Nuevo mensaje de: ${req.body.name}</h1>
            <br>
            <p style='font-style: italic;'>${req.body.message}</p>
            <br>
            <p style='font-weight: bold;'>Enviado desde : ${req.body.email}</p>
            <br>
            </div>
        `
    }

    transporter.sendMail(mailData, function (err, info) {
        if(err)
            console.log(err)
        else
            console.log(info)
    })

    res.status(200)
    res.send()
}