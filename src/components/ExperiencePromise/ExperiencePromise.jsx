import "./ExperiencePromise.css";

function ExperiencePromise() {
    return (
        <section className="experience-promise">

            <div className="promise-item">
                <span className="promise-icon">✦</span>
                <div>
                    <h3>Curated</h3>
                    <p>Handpicked destinations</p>
                </div>
            </div>

            <div className="promise-item">
                <span className="promise-icon">◉</span>
                <div>
                    <h3>Local</h3>
                    <p>Authentic experiences</p>
                </div>
            </div>

            <div className="promise-item">
                <span className="promise-icon">◇</span>
                <div>
                    <h3>Flexible</h3>
                    <p>Travel your way</p>
                </div>
            </div>

            <div className="promise-item">
                <span className="promise-icon">✓</span>
                <div>
                    <h3>Trusted</h3>
                    <p>Journeys you can trust</p>
                </div>
            </div>

        </section>
    );
}

export default ExperiencePromise;