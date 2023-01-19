const ContactFormErrorMessage = () => {
    return (
        <div className="success-content text-center">
            <i className="lni lni-warning error-thumb" style={{color: 'red'}}></i>
            <h2 style={{ color: "red" }}>Ocorreu um erro!</h2>
            <h4 className="mt-20">Atualize a página e tente novamente!</h4>
        </div>
    );
};

export default ContactFormErrorMessage;
