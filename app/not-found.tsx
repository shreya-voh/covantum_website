import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '60vh', textAlign: 'center' }}>
      <h2>Not Found</h2>
      <p style={{ margin: '1rem 0' }}>Could not find requested resource</p>
      <Link href="/" className="btn btn-primary">Return Home</Link>
    </div>
  );
}
