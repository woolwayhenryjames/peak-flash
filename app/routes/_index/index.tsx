import { auth } from '~/services/auth.server';
import type { Route } from './+types/index';
import { redirect } from 'react-router';

export async function loader({ request }: Route.LoaderArgs) {
  const session = await auth.api.getSession({
    headers: request.headers,
  });
  if (!session) {
    throw redirect('/login');
  }
  return session.user;
}
export default function Home() {
  return <div>Hello World</div>;
}
