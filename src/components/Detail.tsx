'use client';
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { CalendarDaysIcon } from 'lucide-react';
import Image from 'next/image';
import MetaTags from 'react-meta-tags';

export default function Detail() {
  const [articleData, setArticleData] = useState({
    title: '',
    abstract: '',
    url: '',
    byline: '',
    created_date: '',
    img: '',
  });

  const [metadata, setMetadata] = useState({
    newsUrl: '',
    title: '',
    abstract: '',
    imgUrl: '',
    author: '',
    date: '',
  });

  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedArticle = JSON.parse(
        window.localStorage.getItem('currentArticle') || '{}'
      );
      const storedImg = window.localStorage.getItem('imgURL') || '';

      const url = new URL(window.location.href);
      const metadataString = url.searchParams.get('metadata');
      if (metadataString) {
        const parsedMetadata = JSON.parse(atob(metadataString));

        window.localStorage.removeItem('currentArticle');
        window.localStorage.removeItem('imgURL');

        setMetadata(parsedMetadata);
      } else {
        setArticleData({
          ...storedArticle,
          img: storedImg,
        });
      }
    }
  }, []);

  const { title, abstract, url, byline, created_date, img } = articleData;
  const {
    newsUrl,
    title: metadataTitle,
    abstract: metadataAbstract,
    imgUrl,
    author,
    date,
  } = metadata;

  return (
    <>
      <MetaTags>
        <title>{metadataTitle || title}</title>
        <meta name='description' content={metadataAbstract || abstract} />
        <meta property='og:type' content='article' />
        <meta property='og:title' content={metadataTitle || title} />
        <meta property='og:image' content={imgUrl || img} />
        <meta
          property='article:published_time'
          content={
            (date || created_date) &&
            new Date(date || created_date).toISOString()
          }
        />
      </MetaTags>

      <Card className='max-w-4xl mx-auto my-8 p-4'>
        <CardHeader>
          <CardTitle className='text-3xl font-bold'>
            {metadataTitle || title}
          </CardTitle>
        </CardHeader>

        <CardContent className='mt-2'>
          <div className='flex items-center justify-between text-gray-600'>
            <div className='flex items-center space-x-2'>
              <CalendarDaysIcon className='w-5 h-5' />
              <p className='text-sm'>
                {(date || created_date) &&
                  new Date(date || created_date).toLocaleDateString()}
              </p>
            </div>
            <div className='flex items-center space-x-2'>
              <Avatar>
                <AvatarImage
                  src='/path-to-reporter-avatar.jpg'
                  alt='Reporter'
                />
              </Avatar>
              <p className='text-sm'>Reported by {author || byline}</p>
            </div>
          </div>

          <Separator className='my-4' />

          <Image
            src={imgUrl || img || '/placeholder.jpg'}
            alt='Main Image'
            width={380}
            height={180}
            className='rounded-lg mb-4 w-full'
          />

          <p className='text-lg mb-4'>{metadataAbstract || abstract}</p>

          <div className='flex space-x-2 mt-4'>
            <Badge variant='outline' className='text-sm'>
              {newsUrl || url}
            </Badge>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
