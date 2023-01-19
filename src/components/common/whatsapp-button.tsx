const WhatsappButton = () => {
    const phoneNumber = "5551980453922";
    const message = "Olá, gostaria de solicitar um orçamento";

    return (
        <a
            href={`https://wa.me/${phoneNumber}?text=${message}`}
            className="btn-whatsapp-pulse"
            target="_blank"
            rel="noopener noreferrer"
        >
            <i className="lni lni-whatsapp"></i>
        </a>
    );
};

export default WhatsappButton;
