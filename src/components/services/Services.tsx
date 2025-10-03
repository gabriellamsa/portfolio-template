"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 400);
    return () => clearTimeout(timer);
  }, []);

  const services = [
    {
      title: "Cupcake Ipsum Dolor",
      description:
        "Caramels cotton candy croissant bear claw jelly beans. Sweet soufflé halvah dessert cotton candy carrot cake.",
      features: [
        "Sugar plum sugar plum",
        "Liquorice cake pudding",
        "Sugar plum tart",
        "Bear claw icing",
      ],
      price: "Cupcake ipsum",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      color: "from-cyan-500 to-blue-500",
    },
    {
      title: "Marshmallow Macaroon",
      description:
        "Chocolate bar tootsie roll icing. Candy canes gingerbread cake pudding cake candy canes apple pie cupcake cake.",
      features: [
        "Danish lollipop ice cream",
        "Biscuit tiramisu",
        "Dessert gingerbread gummi",
        "Bears fruitcake jelly",
      ],
      price: "Beans brownie soufflé",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      color: "from-blue-500 to-purple-500",
    },
    {
      title: "Cheesecake Bear Claw",
      description:
        "Chocolate bar lemon drops soufflé tart pie halvah. Tiramisu lemon drops bonbon caramels wafer.",
      features: [
        "Biscuit soufflé soufflé",
        "Lollipop shortbread candy",
        "Canes chocolate cake",
        "Chupa chups gummies",
      ],
      price: "Sweet pie cookie",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01"
          />
        </svg>
      ),
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section
      id="servicos"
      className="py-20 bg-slate-50 relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div
            className={`text-center mb-16 transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-cyan-50 text-cyan-600 text-sm font-medium mb-6">
              <div className="w-2 h-2 bg-cyan-500 rounded-full mr-2"></div>
              Cupcake ipsum dolor sit amet
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
                Powder jelly beans chupa chups
              </span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Chocolate. Lemon drops candy powder brownie candy canes fruitcake.
              Topping pastry lollipop liquorice cake shortbread cupcake
              macaroon.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 transform transition-all duration-1000 delay-${
                  (index + 1) * 200
                } ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
                {/* Icon */}
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {service.icon}
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-slate-900">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-sm text-slate-600"
                      >
                        <svg
                          className="w-4 h-4 text-green-500 mr-2 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Price */}
                  <div className="pt-4 border-t border-slate-100">
                    <div className="text-2xl font-bold text-slate-900 mb-4">
                      {service.price}
                    </div>
                    <Link
                      href="#contato"
                      className={`block w-full bg-gradient-to-r ${service.color} text-white text-center py-3 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25`}
                    >
                      Solicitar Orçamento
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div
            className={`text-center transform transition-all duration-1000 delay-800 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Não encontrou o que procura?
              </h3>
              <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
                Entre em contato conosco e vamos criar uma solução personalizada
                para o seu negócio.
              </p>
              <Link
                href="#contato"
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Falar com Especialista
                <svg
                  className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
