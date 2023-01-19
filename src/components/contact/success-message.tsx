const ContactFormSuccessMessage = () => {
    return (
        <div className="success-content text-center">
            <i className="lni lni-thumbs-up success-thumb"></i>
            <h2 style={{color: '#5034fc'}}>Parabéns!</h2>
            <h4 className="mt-20">Sua mensagem foi enviada com sucesso!</h4>
            <p>Retornaremos o mais breve possível.</p>
        </div>
    );
};

export default ContactFormSuccessMessage;
