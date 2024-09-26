import Detail from '@/components/Detail';

type Props = {
  params: { detail: string };
};
export default async function DetailPage({ params }: Props) {
  const { detail } = params;
  const encodedUrl = detail.includes('metadata') && new URL(detail).searchParams.get('metadata');
  const currentArticle = encodedUrl && JSON.parse(atob(encodedUrl));
  return <Detail params={currentArticle}></Detail>;
}
