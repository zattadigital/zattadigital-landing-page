import axios from "axios";
import { createRef, FormEvent, useRef, useState } from "react";
import { isValidEmail, isValidPhoneNumber } from "../../utils";
import ContactFormErrorMessage from "./error-message";
import ContactForm from "./form";
import ContactFormSuccessMessage from "./success-message";

type TFormData = {
    name: string;
    email: string;
    phone: string;
    message: string;
    whatsappContact: boolean;
};

type TForm = {
    data: TFormData;
    validationError: boolean;
    validationMessage: string;
    submitted: boolean;
    onSubmitError: boolean;
};

const Contact = () => {
    const [form, setForm] = useState<TForm>({
        data: {
            name: "",
            email: "",
            phone: "",
            message: "",
            whatsappContact: true,
        },
        validationError: false,
        validationMessage: "",
        submitted: false,
        onSubmitError: false,
    });
    const [isLoading, setIsLoading] = useState(false);
    const contactSectionRef = useRef();

    const handleInputChange = ({ name = "", value = "" }) => {
        if (name === "phone") {
            const data = { ...form.data, [name]: value.replace(/\D/g, "") };
            setForm({ ...form, data });
        } else {
            const data = { ...form.data, [name]: value };
            setForm({ ...form, data });
        }
    };

    const handleSetFormError = (message: string) => {
        setForm({ ...form, validationError: true, validationMessage: message });
        contactSectionRef &&
            contactSectionRef.current &&
            contactSectionRef.current.scrollIntoView();
    };

    const handleRemoveFormError = () => {
        setForm({ ...form, validationError: false, validationMessage: "" });
    };

    const isValidForm = () => {
        handleRemoveFormError();

        try {
            if (form.data.name.length < 3) {
                handleSetFormError(
                    "Informe o nome, com pelo menos 3 caracteres"
                );
                return false;
            }

            if (!form.data.phone.length) {
                handleSetFormError(
                    "Informe o telefone com DDD sem o '0' (zero)"
                );

                return false;
            }

            if (!isValidPhoneNumber(form.data.phone)) {
                handleSetFormError(
                    "Telefone inválido, digite o telefone com DDD com dois números"
                );

                return false;
            }

            if (!isValidEmail(form.data.email)) {
                handleSetFormError("Email inválido");
                return false;
            }

            if (form.data.message.length < 20) {
                handleSetFormError(
                    "A mensagem precisa ter no mínimo 20 caracteres"
                );
                return false;
            }

            if (form.data.message.length > 5000) {
                handleSetFormError(
                    "A mensagem precisa ter no máximo 5000 caracteres"
                );
                return false;
            }
        } catch (error) {
            return false;
        }

        return true;
    };

    const handleFormSubmit = async (event: FormEvent) => {
        event.preventDefault();

        setIsLoading(true);

        if (isValidForm()) {
            await axios
                .post("/api/contact", { data: form.data })
                .then(function (response) {
                    setForm({
                        ...form,
                        submitted: true,
                        onSubmitError: false,
                    });

                    contactSectionRef.current.scrollIntoView();
                })
                .catch(function (error) {
                    setForm({ ...form, submitted: true, onSubmitError: true });
                    contactSectionRef.current.scrollIntoView();
                });
        }
        setIsLoading(false);
    };

    return (
        <section
            id="contact-us"
            className="contact-us section"
            ref={contactSectionRef}
        >
            <div className="container">
                <div className="contact-head">
                    <div className="justify-content-center row">
                        <div className="section-title" data-aos="zoom-in">
                            <h3 className="wow zoomIn" data-wow-delay=".2s">
                                Contato
                            </h3>
                            <h2 className="wow fadeInUp" data-wow-delay=".4s">
                                Solicite agora um orçamento
                            </h2>
                            <p className="wow fadeInUp" data-wow-delay=".6s">
                                Não espere mais, entre em contato conosco agora
                                e veja como podemos ajudar você a alcançar seus
                                objetivos!
                            </p>
                        </div>
                        <div className="col-lg-7 col-12">
                            <div className="form-main" data-aos="fade-up">
                                {form && !form.submitted && (
                                    <ContactForm
                                        handleFormSubmit={handleFormSubmit}
                                        handleInputChange={handleInputChange}
                                        form={form}
                                        setForm={setForm}
                                        isLoading={isLoading}
                                    />
                                )}

                                {form.submitted && !form.onSubmitError && (
                                    <ContactFormSuccessMessage />
                                )}

                                {form.submitted && form.onSubmitError && (
                                    <ContactFormErrorMessage />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
