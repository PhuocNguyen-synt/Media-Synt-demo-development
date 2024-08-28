import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { ExclamationTriangleIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

export default function NotFound() {
  return (
    <main className='flex sm:flex-col flex-row items-center justify-between p-24'>
      <Alert variant='default'>
        <ExclamationTriangleIcon className='h-4 w-4' />
        <AlertTitle>Not Found</AlertTitle>
        <AlertDescription>Could not find requested resource</AlertDescription>
        <Link href='/' className='mb-1 font-medium leading-none tracking-tight'>
          Return Home
        </Link>
      </Alert>
    </main>
  );
}
