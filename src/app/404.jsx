export default function NotFound() {
  return (
    <div style={{ minHeight: '60vh', display: 'grid', placeItems: 'center', textAlign: 'center' }}>
      <div>
        <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>404 — Not Found</h1>
        <p style={{ color: '#666' }}>The page you are looking for does not exist.</p>
        <a href="/" style={{ marginTop: '1rem', display: 'inline-block', textDecoration: 'underline' }}>Go back home</a>
      </div>
    </div>
  );
}