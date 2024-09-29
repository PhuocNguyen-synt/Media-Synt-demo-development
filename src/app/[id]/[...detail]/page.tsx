import Detail from '@/components/Detail';
import { Suspense } from 'react';

type Props = {
  params: { detail: string };
};
export default function DetailPage({ params }: Props) {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Detail />
    </Suspense>
  );
}
