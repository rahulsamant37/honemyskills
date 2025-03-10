"use client"

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from '@/components/ui/button';
import { useContext } from "react";
import { AuthContext } from '@/context/AuthContext';
import { Settings, Bot, Rocket } from 'lucide-react';

export default function LandingPage() {
    const router = useRouter();
    const { user } = useContext(AuthContext);
    const SettingsIcon = Settings;
    const BotIcon = Bot;
    const RocketIcon = Rocket;

    const handleGetStarted = () => {
      router.push('/sign-in');
    };

    return (
    <div className="flex flex-col min-h-screen dark:bg-gray-900">
        {/* Header */}
        <header className="flex justify-between items-center px-6 py-3 border-b border-gray-200 dark:border-gray-800">
          <Link href="/">
            <div className="relative w-40 h-12">
              <Image 
                src="/logo.svg" 
                alt="Logo" 
                fill
                className="object-contain"
              />
            </div>
          </Link>
          <Button 
            onClick={handleGetStarted}
            className="px-6 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white rounded-xl transition-transform hover:scale-105 shadow-lg cursor-pointer"
          >
            Get Started
          </Button>
        </header>

        {/* Main Content */}
        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative py-20 px-4 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 dark:from-blue-800 dark:via-purple-800 dark:to-pink-800 text-white">
            <div className="max-w-6xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight animate-[fadeIn_1s_ease-in] text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
                Welcome to honeyourskills
              </h1>
              <p className="text-lg md:text-xl mb-8 text-blue-100/90 dark:text-blue-200 max-w-3xl mx-auto">
                Build, customize, and deploy intelligent assistants tailored to your needs. 
                Shape AI behavior with custom instructions and create unique digital personas 
                that evolve with you.
              </p>
              <div className="flex gap-4 justify-center">
                <Button 
                  className="px-8 py-6 text-lg bg-white text-blue-600 rounded-xl hover:bg-gray-100 
                  dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 transition-transform hover:scale-105 shadow-lg cursor-pointer"
                  onClick={handleGetStarted}
                >
                  Start Creating Free
                </Button>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900/50">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100">
                Transform Your AI Experience
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {/* Instruction Crafting Card */}
                <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                    <SettingsIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 dark:text-gray-100">Smart Instruction Engine</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Design precise AI behavior patterns with our visual instruction builder. 
                    Save and reuse configurations across multiple assistants.
                  </p>
                </div>

                {/* Assistant Studio Card */}
                <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4">
                    <BotIcon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 dark:text-gray-100">Assistant Studio</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Create distinct AI personalities with custom knowledge bases, 
                    communication styles, and specialized skill sets.
                  </p>
                </div>

                {/* Deployment Card */}
                <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-4">
                    <RocketIcon className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 dark:text-gray-100">One-Click Deployment</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Integrate your AI assistants anywhere - websites, apps, 
                    or messaging platforms. Monitor performance in real-time.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="text-center py-4 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} HoneYourSkills. All rights reserved.
        </footer>
    </div>
  );
}