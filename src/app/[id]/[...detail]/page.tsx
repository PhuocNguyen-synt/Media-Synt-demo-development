import Detail from '@/components/Detail';
import { headers } from 'next/headers';
import { Suspense } from 'react';

type Props = {
  params: { detail: string };
};
export default function DetailPage({ params }: Props) {
  const { detail } = params;
  const headersList = headers();
  const referer = headersList.get('referer');
  const host = headersList.get('host');
  const currentUrl = referer || `https://${host}${detail}`;
  const encodedUrl = currentUrl.includes('metadata') && new URL(currentUrl).searchParams.get('metadata');
  const currentArticle = encodedUrl && JSON.parse(atob(encodedUrl));
  
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Detail params={currentArticle} />
    </Suspense>
  );
}
