'use client';
import { Button } from "@/components/ui/button";
import { redirect, useRouter } from "next/navigation";

export default function InternalPaymentPage() {
  const router = useRouter()
  return (
    <div className="container text-center">
      <h1 className='text-xl font-semibold text-center'>
        Internal Payment System
      </h1>
      <p>
        Welcome to our news app! We are a team of dedicated journalists and
        developers who are passionate about bringing you the latest and most
        accurate news from around the world. Our app is designed to be fast,
        reliable, and easy to use, so you can stay informed on the go. We strive
        to provide a diverse range of perspectives on the stories that matter
        most to you, and we are committed to upholding the highest standards of
        journalism. Thank you for choosing our news app, and we hope you enjoy
        using it as much as we enjoyed creating it.
      </p>
      <b>
        By clicking the button PAY below, you agree to the terms and conditions
        of use and privacy policy. The monthly subscription fee is $44.95.
      </b>
      <br />
      <div className='flex justify-center gap-x-4'>
        <Button
          className='px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow hover:bg-blue-600 transition duration-200'
          onClick={() => {
          //  localStorage.setItem('paid', 'true');
            router.push('/payment-successful');
          }}
        >
          Pay
        </Button>
        <Button
          className='px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow hover:bg-blue-600 transition duration-200'
          onClick={() => {
            router.push('/');
          }}
        >
          Cancel
        </Button>
      </div>
    </div>
  );
}
