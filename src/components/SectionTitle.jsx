export default function SectionTitle({ nameClass, text }) {
  return (
    <section className={nameClass}>
      <h3>{text}</h3>
    </section>
  );
}
