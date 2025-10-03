"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Methodology() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 800);
    return () => clearTimeout(timer);
  }, []);

  const steps = [
    {
      number: "01",
      title: "Cupcake Ipsum Dolor",
      description:
        "Caramels cotton candy croissant bear claw jelly beans. Sweet soufflé halvah dessert cotton candy carrot cake. Sugar plum sugar plum liquorice cake pudding sugar plum tart.",
      features: [
        "Bear claw icing marshmallow",
        "Macaroon chocolate bar",
        "Tootsie roll icing",
        "Candy canes gingerbread",
      ],
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
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
      color: "from-cyan-500 to-blue-500",
    },
    {
      number: "02",
      title: "Cake Pudding Cake",
      description:
        "Candy canes apple pie cupcake cake. Danish lollipop ice cream biscuit tiramisu. Dessert gingerbread gummi bears fruitcake jelly beans brownie soufflé.",
      features: [
        "Cheesecake bear claw",
        "Chocolate bar lemon",
        "Drops soufflé tart",
        "Pie halvah tiramisu",
      ],
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
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
          />
        </svg>
      ),
      color: "from-blue-500 to-purple-500",
    },
    {
      number: "03",
      title: "Lemon Drops Bonbon",
      description:
        "Caramels wafer. Biscuit soufflé soufflé lollipop shortbread candy canes. Chocolate cake chupa chups gummies sweet pie. Cookie oat cake soufflé carrot cake.",
      features: [
        "Cake pastry chocolate",
        "Chupa chups wafer",
        "Macaroon lemon drops",
        "Gingerbread chupa chups",
      ],
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
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
      color: "from-purple-500 to-pink-500",
    },
    {
      number: "04",
      title: "Chocolate Bar Biscuit",
      description:
        "Marshmallow pastry marzipan chupa chups pie cheesecake. Pie shortbread lollipop candy canes marshmallow sugar plum candy. Cupcake ipsum dolor sit amet powder jelly beans chupa chups chocolate.",
      features: [
        "Lemon drops candy powder",
        "Brownie candy canes",
        "Fruitcake topping pastry",
        "Lollipop liquorice cake",
      ],
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
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      color: "from-pink-500 to-red-500",
    },
  ];

  return (
    <section
      id="metodologia"
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

          {/* Steps */}
          <div className="space-y-12 mb-16">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-8 items-center transform transition-all duration-1000 delay-${
                  (index + 1) * 200
                } ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
                {/* Content */}
                <div
                  className={`space-y-6 ${index % 2 === 1 ? "md:order-2" : ""}`}
                >
                  <div className="flex items-center space-x-4">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg`}
                    >
                      {step.number}
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">
                      {step.title}
                    </h3>
                  </div>

                  <p className="text-slate-600 leading-relaxed">
                    {step.description}
                  </p>

                  <ul className="space-y-3">
                    {step.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-slate-600"
                      >
                        <svg
                          className="w-5 h-5 text-green-500 mr-3 flex-shrink-0"
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
                </div>

                {/* Visual */}
                <div className={`${index % 2 === 1 ? "md:order-1" : ""}`}>
                  <div className="relative">
                    <div
                      className={`w-32 h-32 bg-gradient-to-r ${step.color} rounded-3xl flex items-center justify-center text-white shadow-2xl mx-auto`}
                    >
                      {step.icon}
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-500/20 rounded-full"></div>
                    <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-500/20 rounded-full"></div>
                    <div className="absolute top-1/2 -right-8 w-4 h-4 bg-purple-500/20 rounded-full"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div
            className={`text-center transform transition-all duration-1000 delay-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 text-white shadow-2xl">
              <h3 className="text-2xl font-bold mb-4">
                Pronto para começar seu projeto?
              </h3>
              <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
                Vamos aplicar nossa metodologia comprovada para criar um projeto
                que gere resultados reais para o seu negócio.
              </p>
              <Link
                href="#contato"
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Começar Projeto
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
