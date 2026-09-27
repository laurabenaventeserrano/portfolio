import { Link } from 'react-router-dom';
import { Kicker } from '../components/ui';
import { ROUTES } from '../content/site';
import { useTitle } from '../lib/hooks';

export default function NotFound() {
  useTitle('Page not found · Laura Benavente');
  return (
    <section className="section notfound">
      <div className="container stack gap-32">
        <Kicker>404</Kicker>
        <h1 className="h-xl">This page wandered off.</h1>
        <Link to={ROUTES.home} className="pill pill--dark pill--lg" style={{ alignSelf: 'flex-start' }}>Back home →</Link>
      </div>
    </section>
  );
}
