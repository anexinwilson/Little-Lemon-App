import React from 'react';
import { Link } from 'react-router-dom';

export const ReservationConfirmation = (() => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white px-4 text-center">
      <h1 className="text-4xl font-bold text-green-600 mb-4">🎉 Reservation Confirmed!</h1>
      <p className="text-gray-700 text-lg mb-6">
        You have successfully booked a table at Little Lemon Restaurant.
      </p>
      <Link
        to="/"
        className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded"
      >
        Go Back Home
      </Link>
    </main>
  );
});
