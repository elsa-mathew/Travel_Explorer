import "./ContactForm.css";

function ContactForm() {
    return (
        <section className="contact-form-section">

            <div className="contact-form-intro">

                <p className="section-label">
                    SEND A MESSAGE
                </p>

                <h2>
                    Tell us what's
                    <br />
                    on your mind.
                </h2>

                <p>
                    Whether you need help choosing a destination
                    or have a question about Travel Explorer,
                    send us a message.
                </p>

            </div>

            <form className="contact-form">

                <div className="form-row">

                    <div className="form-field">
                        <label htmlFor="name">
                            Name
                        </label>

                        <input
                            type="text"
                            id="name"
                            placeholder="Your name"
                        />
                    </div>

                    <div className="form-field">
                        <label htmlFor="email">
                            Email
                        </label>

                        <input
                            type="email"
                            id="email"
                            placeholder="you@example.com"
                        />
                    </div>

                </div>

                <div className="form-field">
                    <label htmlFor="subject">
                        Subject
                    </label>

                    <input
                        type="text"
                        id="subject"
                        placeholder="How can we help?"
                    />
                </div>

                <div className="form-field">
                    <label htmlFor="message">
                        Message
                    </label>

                    <textarea
                        id="message"
                        rows="6"
                        placeholder="Write your message..."
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="contact-submit"
                >
                    Send Message →
                </button>

            </form>

        </section>
    );
}

export default ContactForm;