import React from "react";
import { Brain, Shield, Zap, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import GradientButton from "./shared/GradientButton";

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-indigo-50 via-white to-white">
      {/* Gradient Orbs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-r from-pink-500/30 to-purple-500/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-l from-indigo-500/30 to-blue-500/30 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="pt-20 pb-16 text-center lg:pt-32">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl"
          >
            Find the perfect match with{" "}
            <span className="relative whitespace-nowrap">
              <span className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
                AI-powered freelancing
              </span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700"
          >
            Connect with top talent using our advanced AI matching system.
            Secure blockchain payments, verified profiles, and seamless
            collaboration all in one place.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10 flex justify-center gap-x-6"
          >
            <GradientButton className="group">
              Get started
              <ArrowRight className="ml-2 h-4 w-4 inline-block transition-transform group-hover:translate-x-1" />
            </GradientButton>

            <GradientButton variant="secondary">View demo</GradientButton>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mx-auto mt-20 max-w-7xl px-6 lg:px-8"
        >
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-gray-600">
                Active freelancers
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                100,000+
              </dd>
            </div>
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-gray-600">
                Projects completed
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                250,000+
              </dd>
            </div>
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-gray-600">
                Client satisfaction
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                98%
              </dd>
            </div>
          </dl>
        </motion.div>

        {/* Features Grid */}
        <div className="mt-24 grid grid-cols-1 gap-8 sm:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-indigo-500/5 to-indigo-500/10 p-8"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 text-white">
              <Brain className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-gray-900">
              AI-Powered Matching
            </h3>
            <p className="mt-2 text-gray-600">
              Our advanced AI algorithms ensure perfect project-talent matches
              every time.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-purple-500/5 to-purple-500/10 p-8"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 text-white">
              <Shield className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-gray-900">
              Secure Payments
            </h3>
            <p className="mt-2 text-gray-600">
              Blockchain-secured transactions ensure safe and transparent
              payments.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-pink-500/5 to-pink-500/10 p-8"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 text-white">
              <Zap className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-gray-900">
              Fast Delivery
            </h3>
            <p className="mt-2 text-gray-600">
              Quick project completion with automated milestone tracking.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
