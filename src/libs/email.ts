const nodemailer = require("nodemailer");

type TypeData = {
    name: string,
    email: string,
    phone: string,
    message: string,
    whatsappContact: boolean
}

export function sendContactEmail(data:TypeData) {
    return new Promise((resolve, reject) => {

        try {
            const {name = '', email = '', phone = '', message = '', whatsappContact = true} = data;
    
            const transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                    user: process.env.EMAIL_SEND_FROM,
                    pass: process.env.EMAIL_APP_PASS
                },
            });
    
            const emailOptions = {
                from: process.env.EMAIL_SEND_FROM,
                to: process.env.EMAIL_SEND_TO,
                subject: "Contato ZattaDigital",
                text: `
                Nome: ${name}; 
                Email: ${email}; 
                Telefone: ${phone}; 
                Responder pelo Whatsapp: ${whatsappContact ? 'Sim' : 'Não'}; 
                Mensagem: ${message}`,
            };
    
            transporter.sendMail(emailOptions, function (error, info) {
                if (error) return reject({ ok: false });
    
                return resolve({ ok: true });
            });
        } catch (error) {
            return reject({ ok: false});
        }
    });
}
