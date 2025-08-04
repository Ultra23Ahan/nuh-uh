'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'motion/react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';

export default function Page() {
  const [learnText, setLearnText] = useState('');
  const searchParams = useSearchParams();

  const websiteRaw = searchParams.get('website');
  const websiteName = websiteRaw
    ? websiteRaw.charAt(0).toUpperCase() + websiteRaw.slice(1)
    : 'this website';

  const learn =
    searchParams.get('learn') || 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';

  useEffect(() => {
    async function fetchTitle() {
      try {
        const response = await fetch(learn);
        const html = await response.text();
        const match = html.match(/<title>(.*?)<\/title>/i);
        const title = match ? match[1].trim() : 'Something New';
        const firstWord = title.split(' ')[0];
        setLearnText(firstWord);
      } catch (err) {
        setLearnText('Something New');
      }
    }

    fetchTitle();
  }, [learn]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center z-[9999] dark:bg-gray-900 bg-white text-gray-800 dark:text-gray-200">
      <div className="flex flex-row items-center space-x-2">
        <h1 className="font-bold sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl text-3xl 2xl:text-8xl text-center">
          NUH UH
        </h1>
        <motion.span
          initial={{ rotate: -15 }}
          animate={{ rotate: 15 }}
          transition={{
            duration: 0.25,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'linear',
          }}
          className="sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl text-3xl 2xl:text-8xl">
          👆
        </motion.span>
      </div>
      <p className="mt-4 text-center text-2xl tracking-wider">
        Are you trying to visit {websiteName}?
      </p>
      <Button variant="outline" className="mt-4" size="lg">
        <a href={learn} target="_blank" rel="noopener noreferrer">
          Learn {learnText || 'something new'} Instead!
        </a>
      </Button>
    </main>
  );
}
