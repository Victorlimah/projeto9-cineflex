export default function Footer({ posterURL, title, hours = "" }) {
  return (
    <footer class="footer-movie">
      <img src={posterURL} alt={`poster of ${title}`} />
      <div>
        <h2>{title}</h2>
        <h2>{hours}</h2>
      </div>
    </footer>
  );
}
