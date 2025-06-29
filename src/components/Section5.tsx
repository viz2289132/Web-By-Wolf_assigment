'use client'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const formSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email'),
  phone: z.string().min(1, 'Phone number is required'),
  timeFrame: z.string().min(1, 'Time Frame is required'),
  size: z.string().min(1, 'Size is required'),
  quantity: z.string().min(1, 'Quantity is required'),
  project: z.string().min(1, 'Project description is required'),
})

type FormData = z.infer<typeof formSchema>

const Section5: React.FC = () => {
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = (data: FormData) => {
    console.log(data)
    setSubmitted(true)
    reset()
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-6 text-center font-roboto-condensed text-3xl font-bold text-gray-800 md:text-5xl lg:mb-12">
            REQUEST A QUOTE
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm text-gray-700">Name</label>
                <input
                  type="text"
                  {...register('name')}
                  className="w-full rounded-md border border-gray-200 bg-gray-50 px-4 py-2 text-gray-900 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  placeholder="Enter your name"
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
              </div>

              <div>
                <label className="mb-2 block text-sm text-gray-700">E-mail</label>
                <input
                  type="email"
                  {...register('email')}
                  className="w-full rounded-md border border-gray-200 bg-gray-50 px-4 py-2 text-gray-900 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  placeholder="Enter your email"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  {...register('phone')}
                  className="w-full rounded-md border border-gray-200 bg-gray-50 px-4 py-2 text-gray-900 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  placeholder="Enter your phone"
                />
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
              </div>

              <div>
                <label className="mb-2 block text-sm text-gray-700">Time Frame <span className="text-red-500">*</span></label>
                <select
                  {...register('timeFrame')}
                  className="w-full rounded-md border border-gray-200 bg-gray-50 px-4 py-2 text-gray-900 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                >
                  <option value="">Choose Time Frame</option>
                  <option value="1-2weeks">1-2 Weeks</option>
                  <option value="2-4weeks">2-4 Weeks</option>
                  <option value="1-2months">1-2 Months</option>
                  <option value="2-3months">2-3 Months</option>
                </select>
                {errors.timeFrame && <p className="text-red-500 text-sm">{errors.timeFrame.message}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm text-gray-700">Size <span className="text-red-500">*</span></label>
                <select
                  {...register('size')}
                  className="w-full rounded-md border border-gray-200 bg-gray-50 px-4 py-2 text-gray-900 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                >
                  <option value="">Choose Size</option>
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                </select>
                {errors.size && <p className="text-red-500 text-sm">{errors.size.message}</p>}
              </div>

              <div>
                <label className="mb-2 block text-sm text-gray-700">Quantity <span className="text-red-500">*</span></label>
                <select
                  {...register('quantity')}
                  className="w-full rounded-md border border-gray-200 bg-gray-50 px-4 py-2 text-gray-900 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                >
                  <option value="">Choose Quantity</option>
                  <option value="1-10">1-10</option>
                  <option value="11-50">11-50</option>
                  <option value="51-100">51-100</option>
                  <option value="100+">100+</option>
                </select>
                {errors.quantity && <p className="text-red-500 text-sm">{errors.quantity.message}</p>}
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm text-gray-700">Please Describe Your Project <span className="text-red-500">*</span></label>
              <textarea
                rows={6}
                {...register('project')}
                placeholder="Describe your project..."
                className="w-full rounded-md border border-gray-200 bg-gray-50 px-4 py-2 text-gray-900 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
              {errors.project && <p className="text-red-500 text-sm">{errors.project.message}</p>}
            </div>

            <div className="text-center text-sm text-gray-600">
              By submitting this form you agree to our{' '}
              <a href="/terms" className="font-semibold underline hover:text-gray-800">Terms of Service</a> and{' '}
              <a href="/privacy" className="font-semibold underline hover:text-gray-800">Privacy Policy</a>.
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-8 py-2 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg"
              >
                Lorem Ipsum
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-7-7 7 7-7 7" />
                </svg>
              </button>
            </div>

            {submitted && (
              <p className="text-center text-green-600 font-medium">Your form has been submitted successfully!</p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Section5
