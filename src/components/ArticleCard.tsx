import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from './ui/button';
import Image from 'next/image';

export interface ArticleCardProps {
  article: any;
  key?: number;
}

export default function ArticleCard(props: ArticleCardProps) {
  const { article } = props;
  let imgURL;
  if (article.multimedia) {
    for (let i = 0; i < article.multimedia.length; i++) {
      if (i === 1) {
        imgURL = `${article.multimedia[i].url}`;
      }
    }
  }
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
        <Button variant='secondary'>Continue Reading</Button>
      </CardFooter>
    </Card>
  );
}
