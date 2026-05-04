'use client';

import { Check, Plus } from 'lucide-react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingTier {
  name: string;
  price: number;
  description: string;
  features: PricingFeature[];
  popular?: boolean;
}

const pricingTiers: PricingTier[] = [
  {
    name: 'Standard Landing',
    price: 600,
    description: 'Perfect for businesses looking to establish their online presence',
    features: [
      { text: 'Multiple pages website', included: true },
      { text: 'Modern responsive design', included: true },
      { text: 'Contact form integration', included: true },
      { text: 'Email sending functionality', included: true },
      { text: 'SEO optimization', included: true },
      { text: 'Mobile-friendly layout', included: true },
      { text: 'Basic animations', included: true },
      { text: 'Database integration', included: false },
      { text: 'Admin panel', included: false },
      { text: 'Booking system', included: false },
    ],
  },
  {
    name: 'Professional Suite',
    price: 1200,
    description: 'Complete solution for businesses needing advanced functionality',
    features: [
      { text: 'Everything in Standard Landing', included: true },
      { text: 'Database integration', included: true },
      { text: 'Admin panel dashboard', included: true },
      { text: 'Clients list management', included: true },
      { text: 'Interactive calendar', included: true },
      { text: 'Visit scheduling system', included: true },
      { text: 'Client booking form', included: true },
      { text: 'Automated notifications', included: true },
      { text: 'Advanced analytics', included: true },
      { text: 'User authentication', included: true },
    ],
    popular: true,
  },
];

export default function PricingPage() {
  const titleRef = useRef(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const additionalRef = useRef(null);

  useGSAP(() => {
    // Animate title
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
    );

    // Animate cards
    if (cardsRef.current) {
      const cards = cardsRef.current.querySelectorAll('.pricing-card');
      gsap.fromTo(
        cards,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.2,
          ease: 'power2.out',
          delay: 0.3,
        }
      );
    }

    // Animate additional offer
    gsap.fromTo(
      additionalRef.current,
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: 'power2.out',
        delay: 0.8,
      }
    );
  });

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 pb-20">
      {/* Header Section */}
      <div className="mb-16 text-center" ref={titleRef}>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">
          Commercial <span className="text-purple-500">Offer</span>
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
          Choose the perfect package for your business needs. Professional web
          development services with transparent pricing.
        </p>
      </div>

      {/* Pricing Cards */}
      <div
        ref={cardsRef}
        className="grid md:grid-cols-2 gap-8 mb-12 max-w-5xl mx-auto"
      >
        {pricingTiers.map((tier, index) => (
          <div
            key={index}
            className={`pricing-card relative rounded-2xl p-8 border-2 transition-all duration-300 hover:scale-105 ${
              tier.popular
                ? 'border-purple-500 bg-gradient-to-br from-purple-900/20 to-transparent'
                : 'border-gray-800 bg-gray-900/50'
            }`}
          >
            {tier.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
            )}

            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
              <p className="text-gray-400 text-sm mb-4">{tier.description}</p>
              <div className="flex items-baseline">
                <span className="text-5xl font-bold text-purple-500">
                  ${tier.price}
                </span>
                <span className="text-gray-400 ml-2">one-time</span>
              </div>
            </div>

            <ul className="space-y-3 mb-8">
              {tier.features.map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <span
                    className={`mr-3 mt-1 flex-shrink-0 ${
                      feature.included
                        ? 'text-purple-500'
                        : 'text-gray-600'
                    }`}
                  >
                    <Check size={20} />
                  </span>
                  <span
                    className={
                      feature.included ? 'text-white' : 'text-gray-600'
                    }
                  >
                    {feature.text}
                  </span>
                </li>
              ))}
            </ul>

            <button
              className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                tier.popular
                  ? 'bg-purple-500 hover:bg-purple-600 text-white'
                  : 'bg-gray-800 hover:bg-gray-700 text-white'
              }`}
              onClick={() => {
                window.location.href = `mailto:alex@alexkadai.com?subject=Interested in ${tier.name} Package`;
              }}
            >
              Get Started
            </button>
          </div>
        ))}
      </div>

      {/* Additional Functionality Section */}
      <div
        ref={additionalRef}
        className="max-w-3xl mx-auto rounded-2xl border-2 border-purple-500/50 bg-gradient-to-r from-purple-900/10 via-transparent to-purple-900/10 p-8"
      >
        <div className="flex items-start gap-4">
          <div className="bg-purple-500 rounded-full p-3 flex-shrink-0">
            <Plus size={24} />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-3">
              Additional Functionality
            </h3>
            <p className="text-gray-300 mb-4">
              Need extra features or custom functionality? I can extend any
              package with specialized features tailored to your specific
              business requirements.
            </p>
            <div className="flex items-baseline mb-4">
              <span className="text-3xl font-bold text-purple-500">
                +$300
              </span>
              <span className="text-gray-400 ml-2">per feature</span>
            </div>
            <p className="text-sm text-gray-400 mb-6">
              Examples: Payment gateway integration, advanced search
              functionality, custom reporting tools, third-party API
              integrations, custom animations, and more.
            </p>
            <button
              className="bg-purple-500 hover:bg-purple-600 text-white py-2 px-6 rounded-lg font-semibold transition-all duration-300"
              onClick={() => {
                window.location.href =
                  'mailto:alex@alexkadai.com?subject=Custom Functionality Request';
              }}
            >
              Discuss Custom Features
            </button>
          </div>
        </div>
      </div>

      {/* FAQ or Additional Info */}
      <div className="mt-16 text-center">
        <p className="text-gray-400 max-w-2xl mx-auto">
          All packages include source code, documentation, and 30 days of free
          support after delivery. Need something different?{' '}
          <a
            href="mailto:alex@alexkadai.com"
            className="text-purple-500 hover:text-purple-400 underline"
          >
            Let&apos;s talk
          </a>
          .
        </p>
      </div>
    </div>
  );
}
