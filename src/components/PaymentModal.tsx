'use client';
import * as React from 'react';
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';

export default function PaymentModal() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const paymentLink = 'https://buy.stripe.com/test_6oE8zmdqH2NueKk7st';
  const router = useRouter();
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const payWithStripe = () => {
    window.location.href = paymentLink;
  };

  const payWithSynt = () => {
    router.push('/internal-payment');
  };

  const btnStyles = 'px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow hover:bg-blue-600 transition duration-200'

  return (
    <>
      {/* Button to open the modal */}
      <Button onClick={openModal} className={btnStyles}>
        Continue Reading
      </Button>

      {/* Modal */}
      {isModalOpen && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
          <div className='bg-white rounded-lg shadow-lg w-full max-w-lg p-4 md:p-6 relative mx-4 md:mx-0'>
            {/* Modal content */}
            <h2 className='text-xl font-semibold mb-4'>Continue Reading</h2>
            <p className='text-gray-700 mb-4'>
              This exclusive content requires a payment to access. Please
              proceed with your payment to continue reading.
            </p>
            <div className='flex flex-col md:flex-row gap-4 justify-between'>
              <Button onClick={payWithStripe} className={btnStyles}>
                Pay With Stripe
              </Button>
              <Button onClick={payWithSynt} className={btnStyles}>
                Pay With Synt
              </Button>
              <Button onClick={closeModal} className={btnStyles}>
                Close Modal
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
