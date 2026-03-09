export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-overlay">
        <h2>Contactez Domaine Fendri</h2>
        <p>
          Une question sur nos huiles, une commande ou un partenariat ?<br></br>
          Notre équipe se fera un plaisir de vous répondre.
        </p>

        <form className="contact-form">
          <label htmlFor="nom">Nom complet</label>
          <input
            type="text"
            id="nom"
            name="nom"
            placeholder="Votre nom"
            required
          />

          <label htmlFor="email">Email </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="votre@email.com"
            required
          />

          <label htmlFor="sujet">Sujet</label>
          <input
            type="text"
            id="sujet"
            name="sujet"
            placeholder="Comment pouvons-nous vous aider ?"
          />

          <label htmlFor="message">Votre message </label>
          <textarea
            id="message"
            name="message"
            rows="6"
            placeholder="Écrivez votre message ici..."
            required
          ></textarea>

          <button type="submit">
            Envoyer
          </button>
        </form>
      </div>
    </section>
  );
}
