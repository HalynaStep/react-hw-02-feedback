export const Section = ({ title, children }) => (
        <section>
            {title && <h2>{title}</h2>}
            {children}
        </section>
);