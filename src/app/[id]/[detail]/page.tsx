import Detail from '@/components/Detail';

type Props = {
  params: { detail: string };
};
export default async function DetailPage({ params }: Props) {
  return <Detail></Detail>;
}
