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
  // let currentArticle = JSON.parse(
  //   localStorage?.getItem('currentArticle') || '{}'
  // );
  // let img = localStorage?.getItem('imgURL') || '{}';
  // let currentArticle;
  // let img;
  const [currentArticle,setCurrentArticle] = useState({title:'',abstract:'',url:'',byline:'',created_date:''})
  const [img,setImg] = useState('')
  useEffect(() => {
    (typeof window !== 'undefined' && window.localStorage) && setCurrentArticle(JSON.parse(window?.localStorage?.getItem('currentArticle') || '{}'));
    (typeof window !== 'undefined' && window.localStorage) && setImg(window?.localStorage?.getItem('imgURL') || '{}');
  },[])
  const { title, abstract, url, byline, created_date } = currentArticle;

  return (
    <>
    <MetaTags>
        <title>{title}</title>
        <meta name="description" content={abstract} />
        <meta property="og:type" content='article' />
        <meta property="og:title" content={title} />
        <meta property="og:image" content={img} />
        <meta property="article:published_time" content={created_date && new Date(created_date).toISOString()} />
      </MetaTags>
    <Card className='max-w-4xl mx-auto my-8 p-4'>
      <CardHeader>
        <CardTitle className='text-3xl font-bold'>{title}</CardTitle>
      </CardHeader>

      <CardContent className='mt-2'>
        <div className='flex items-center justify-between text-gray-600'>
          <div className='flex items-center space-x-2'>
            <CalendarDaysIcon className='w-5 h-5' />
            <p className='text-sm'>{created_date}</p>
          </div>
          <div className='flex items-center space-x-2'>
            <Avatar>
              <AvatarImage src='/path-to-reporter-avatar.jpg' alt='Reporter' />
            </Avatar>
            <p className='text-sm'>Reported by {byline}</p>
          </div>
        </div>

        <Separator className='my-4' />

        <Image
          src={img}
          alt='Main Image'
          width={380}
          height={180}
          className='rounded-lg mb-4 w-full'
        />

        <p className='text-lg mb-4'>{abstract}</p>

        <div className='flex space-x-2 mt-4'>
          <Badge variant='outline' className='text-sm'>
            {url}
          </Badge>
        </div>
      </CardContent>
    </Card>
    </>
  );
}
