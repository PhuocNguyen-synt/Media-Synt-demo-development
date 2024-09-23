'use client';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import PaymentModal from './PaymentModal';
import { useRouter } from 'next/navigation';

export interface ArticleCardProps {
  article?: any;
  key?: number;
}

export default function ArticleCard(props: ArticleCardProps) {
  const router = useRouter();
  const { article } = props;
  const isPaid = (typeof window !== 'undefined' && window.localStorage) && window?.localStorage?.getItem('paid') === 'true';
  let imgURL: any;
  if (article.multimedia) {
    for (let i = 0; i < article.multimedia.length; i++) {
      if (i === 1) {
        imgURL = `${article.multimedia[i].url}`;
      }
    }
  }

  const handleItemClick = () => {
    (typeof window !== 'undefined' && window.localStorage) && window?.localStorage?.setItem('currentArticle', JSON.stringify(article));
    (typeof window !== 'undefined' && window.localStorage) &&window?.localStorage?.setItem('imgURL', imgURL);
    router.push(`/${article.section}/${article.title}`);
  };
  return (
    <Card>
      <CardHeader>
        <CardTitle>{article.title}</CardTitle>
        <CardDescription>{article.byline}</CardDescription>
      </CardHeader>
      <CardContent>
        <Image
          src={imgURL || ''}
          alt=''
          width={380}
          height={180}
          className='w-fit h-32 object-cover'
        ></Image>
        <p className='pt-4'>{article.abstract}</p>
      </CardContent>
      <CardFooter>
        {isPaid ? (
          <>
            <button
              className='px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow hover:bg-blue-600 transition duration-200'
              onClick={handleItemClick}
            >
              Read more
            </button>
          </>
        ) : (
          <PaymentModal />
        )}
      </CardFooter>
    </Card>
  );
}
