import "./Newsletter.css";

function Newsletter() {
    return (
        <section className="newsletter">

            <div className="newsletter-content">

                <p className="section-label">
                    STAY INSPIRED
                </p>

                <h2>
                    Your next adventure
                    starts here.
                </h2>

                <p>
                    Get travel inspiration, destination ideas,
                    and stories delivered to your inbox.
                </p>

                <form className="newsletter-form">

                    <input
                        type="email"
                        placeholder="Enter your email"
                    />

                    <button type="submit">
                        Subscribe →
                    </button>

                </form>

            </div>

        </section>
    );
}

export default Newsletter;