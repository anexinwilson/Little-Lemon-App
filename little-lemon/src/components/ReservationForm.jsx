import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export const ReservationForm = (() => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      resDate: "",
      resTime: "",
      guests: "",
      occasion: "",
    },
    onSubmit: () => {
      navigate("/confirmation");
    },
    validationSchema: Yup.object({
      resDate: Yup.string().required("Please select a date"),
      resTime: Yup.string().required("Please select a time"),
      guests: Yup.number()
        .min(1, "Minimum 1 guest")
        .max(10, "Maximum 10 guests")
        .required("Please enter the number of guests"),
      occasion: Yup.string().required("Please select an occasion"),
    }),
  });

  return (
    <main className="flex flex-col items-center  min-h-screen pt-10 bg-white px-4">
      <h2 className="text-3xl font-bold text-center mb-6">Book a Table</h2>
      <form
        onSubmit={formik.handleSubmit}
        className="grid gap-4 w-full max-w-sm bg-yellow-50 p-6 rounded shadow"
      >
        <div>
          <label htmlFor="res-date" className="block font-semibold mb-1">Choose date</label>
          <input
            type="date"
            id="res-date"
            className="w-full p-2 border border-gray-300 rounded"
            {...formik.getFieldProps("resDate")}
          />
          {formik.touched.resDate && formik.errors.resDate && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.resDate}</p>
          )}
        </div>

        <div>
          <label htmlFor="res-time" className="block font-semibold mb-1">Choose time</label>
          <select
            id="res-time"
            className="w-full p-2 border border-gray-300 rounded"
            {...formik.getFieldProps("resTime")}
          >
            <option value="">Select</option>
            {["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"].map((time) => (
              <option key={time}>{time}</option>
            ))}
          </select>
          {formik.touched.resTime && formik.errors.resTime && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.resTime}</p>
          )}
        </div>

        <div>
          <label htmlFor="guests" className="block font-semibold mb-1">Number of guests</label>
          <input
            type="number"
            min="1"
            max="10"
            id="guests"
            placeholder="1"
            className="w-full p-2 border border-gray-300 rounded"
            {...formik.getFieldProps("guests")}
          />
          {formik.touched.guests && formik.errors.guests && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.guests}</p>
          )}
        </div>

        <div>
          <label htmlFor="occasion" className="block font-semibold mb-1">Occasion</label>
          <select
            id="occasion"
            className="w-full p-2 border border-gray-300 rounded"
            {...formik.getFieldProps("occasion")}
          >
            <option value="">Select</option>
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>
          {formik.touched.occasion && formik.errors.occasion && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.occasion}</p>
          )}
        </div>

        <input
          type="submit"
          value="Make Your Reservation"
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 rounded cursor-pointer disabled:opacity-50"
          disabled={
            !(
              formik.values.resDate &&
              formik.values.resTime &&
              formik.values.guests &&
              formik.values.occasion
            )
          }
        />
      </form>
    </main>
  );
});
