'use client';

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function PaymentSuccessfullPage() {
  const router = useRouter();
  const isPaymentRunning =
    localStorage.getItem('payment-in-progress') === 'true';
  if (isPaymentRunning) {
    localStorage.setItem('paid', 'true');
    localStorage.removeItem('payment-in-progress');
  }
  return (
    <div className='container text-center'>
      <h1 className='my-5'>Payment Successful!</h1>
      <p className='lead'>
        Your payment has been processed successfully. Thank you for your
        purchase.
      </p>
      <Button
        className='px-4 py-2 mt-4 bg-blue-500 text-white font-semibold rounded-md shadow hover:bg-blue-600 transition duration-200'
        onClick={() => router.push('/')}
      >
        Go to Home Page
      </Button>
    </div>
  );
}