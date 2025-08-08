import { Suspense } from 'react';
import PageClient from './pageclient';

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PageClient />
    </Suspense>
  );
}
