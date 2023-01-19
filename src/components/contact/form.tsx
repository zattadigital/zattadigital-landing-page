type TypeFormProps = {
    handleFormSubmit: () => {};
    handleInputChange: () => {};
    setForm: () => {};
    form: object;
    isLoading: boolean;
};

const ContactForm = (props: TypeFormProps) => {
    const { handleFormSubmit, handleInputChange, setForm, form, isLoading } =
        props;

    console.log("aa", form.data.whatsappContact);

    return (
        <>
            <div className="form-title text-center">
                <h2>Contato</h2>
                <p>
                    Preencha os campos abaixo e logo retornaremos para conversar
                    sobre seu projeto
                </p>
            </div>
            <form
                className="form"
                method="post"
                onSubmit={(event) => handleFormSubmit(event)}
            >
                {form.validationError && (
                    <div className="error-message">
                        <svg
                            className="me-3"
                            height="25"
                            viewBox="0 0 32 32"
                            width="25"
                            space="preserve"
                            xmlns="http://www.w3.org/2000/svg"
                            xlink="http://www.w3.org/1999/xlink"
                        >
                            <g>
                                <g id="Error_1_">
                                    <g id="Error">
                                        <circle
                                            cx="16"
                                            cy="16"
                                            id="BG"
                                            r="16"
                                            style={{
                                                fill: "#D72828",
                                            }}
                                        />
                                        <path
                                            d="M14.5,25h3v-3h-3V25z M14.5,6v13h3V6H14.5z"
                                            id="Exclamatory_x5F_Sign"
                                            style={{
                                                fill: "#E6E6E6",
                                            }}
                                        />
                                    </g>
                                </g>
                            </g>
                        </svg>
                        {form.validationMessage}
                    </div>
                )}

                <div className="row">
                    <div className="col-lg-6 col-12">
                        <div className="form-group">
                            <input
                                name="name"
                                type="text"
                                placeholder="Nome*"
                                value={form.data.name}
                                onChange={({ target }) =>
                                    handleInputChange(target)
                                }
                            />
                        </div>
                    </div>

                    <div className="col-lg-6 col-12">
                        <div className="form-group">
                            <input
                                name="phone"
                                maxLength={11}
                                type="text"
                                placeholder="Telefone*"
                                value={form.data.phone}
                                onChange={({ target }) =>
                                    handleInputChange(target)
                                }
                            />
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-group">
                            <input
                                name="email"
                                type="text"
                                placeholder="Email*"
                                value={form.data.email}
                                onChange={({ target }) =>
                                    handleInputChange(target)
                                }
                            />
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-group message">
                            <textarea
                                value={form.data.message}
                                onChange={({ target }) =>
                                    handleInputChange(target)
                                }
                                name="message"
                                placeholder="Um breve resumo sobre sua empresa, quais produtos ou serviços são oferecidos?"
                            ></textarea>
                        </div>
                    </div>
                    {/* <div className="col-12">
                        <div className="form-group">
                            <p>Podemos responder pelo Whatsapp?</p>
                            <div className="row">
                                <div className="col-auto contact-radio-button">
                                    <input
                                        type={"radio"}
                                        id="whatsapp-contact"
                                        name="whatsappContact"
                                        // checked
                                        // checked={form.data.whatsappContact}
                                    />
                                </div>
                                <div className="col-auto">
                                    <label htmlFor="whatsapp-contact">
                                        Sim
                                    </label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-auto contact-radio-button">
                                    <input
                                        type={"radio"}
                                        id="no-whatsapp-contact"
                                        name="whatsappContact"
                                    />
                                </div>
                                <div className="col-auto">
                                    <label htmlFor="no-whatsapp-contact">
                                        Não
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <div className="col-12">
                        <div className="form-group button text-center">
                            {isLoading ? (
                                <button className="btn w-50">
                                    {/* Solicitar orçamento */}
                                    <span className="appmeet-load-mini"></span>
                                </button>
                            ) : (
                                <button type="submit" className="btn w-50">
                                    Solicitar orçamento
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
};

export default ContactForm;
