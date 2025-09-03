import { useState } from 'react';
import { Form } from 'react-router';
import { authClient } from '~/const/auth-client';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = async () => {
    await authClient.signIn.social({
      provider: 'tiktok',
    });
  };

  return (
    <div>
      <h2>Sign In</h2>
      <Form onSubmit={signIn}>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          value={email}
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          value={password}
        />
        <button type="submit">Sign In</button>
      </Form>
    </div>
  );
}
