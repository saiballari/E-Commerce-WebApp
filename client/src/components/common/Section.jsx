import Container from "./Container";

function Section({ children, className = "" }) {
  return (
    <section className={`py-20 ${className}`}>
      <Container>
        {children}
      </Container>
    </section>
  );
}

export default Section;