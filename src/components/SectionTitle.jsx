export default function SectionTitle({ name, text }) {
  return (
    <section className={`container-select ${name}`}>
      <h3>{text}</h3>
    </section>
  );
}
