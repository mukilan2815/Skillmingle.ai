import React from "react";
import { Check, X } from "lucide-react";

const features = [
  {
    name: "AI-Powered Matching",
    competitors: [true, false, false, false, false],
  },
  {
    name: "Blockchain Payments",
    competitors: [true, false, false, false, false],
  },
  { name: "Skill Verification", competitors: [true, true, true, true, false] },
  { name: "Instant Payouts", competitors: [true, false, true, false, false] },
  { name: "Dispute Resolution", competitors: [true, true, true, true, true] },
  { name: "Project Management", competitors: [true, true, true, true, true] },
  { name: "Real-time Chat", competitors: [true, true, true, true, false] },
  { name: "Mobile App", competitors: [true, false, true, true, true] },
  {
    name: "Advanced Analytics",
    competitors: [true, false, false, false, true],
  },
  {
    name: "AI-Powered Learning Recommendations",
    competitors: [true, false, false, false, false],
  },
  { name: "Escrow System", competitors: [true, true, true, false, true] },
  { name: "Community Forum", competitors: [true, false, false, true, true] },
  { name: "Verified Reviews", competitors: [true, true, true, true, true] },
];

export default function ComparisonTable() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Why Choose Mingle.ai?
        </h2>
        <p className="text-xl text-gray-600">
          See how we compare to traditional platforms
        </p>
      </div>

      <div className="mt-12 overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Features
              </th>
              <th className="px-6 py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-center text-xs font-medium text-white uppercase tracking-wider">
                Mingle.ai
              </th>
              <th className="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Upwork
              </th>
              <th className="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Fiverr
              </th>
              <th className="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                LinkedIn ProFinder
              </th>
              <th className="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Freelancer.com
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {features.map((feature, idx) => (
              <tr
                key={feature.name}
                className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {feature.name}
                </td>
                {feature.competitors.map((hasFeature, index) => (
                  <td
                    key={index}
                    className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center"
                  >
                    {hasFeature ? (
                      <Check className="w-5 h-5 text-green-500 mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-red-500 mx-auto" />
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
