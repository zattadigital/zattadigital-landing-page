const nodemailer = require("nodemailer");

// type TypeData = {
//     name: string,
//     email: string,
//     phone: string,
//     message: string,
//     whatsappContact: boolean
// }

export function sendContactEmail(data) {
    return new Promise((resolve, reject) => {

        try {
            const {name = '', email = '', phone = '', message = '', whatsappContact = true} = data;
    
            const transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                    user: process.env.emailSendFrom,
                    pass: process.env.emailAppPass
                },
            });
    
            const emailOptions = {
                from: process.env.emailSendFrom,
                to: process.env.emailSendTo,
                subject: "Contato ZattaDigital",
                text: `
                Nome: ${name}; 
                Email: ${email}; 
                Telefone: ${phone}; 
                Responder pelo Whatsapp: ${whatsappContact ? 'Sim' : 'Não'}; 
                Mensagem: ${message}`,
            };
    
            const send = transporter.sendMail(emailOptions, function (error) {
                console.log('E777', error)
                if (error) return reject({ ok: false });
    
                return resolve({ ok: true });
            });
        } catch (error) {
            return reject({ ok: false});
        }
    });
}
