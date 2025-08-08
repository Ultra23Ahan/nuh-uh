'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';

export default function Page() {
  const searchParams = useSearchParams();
  const [website, setWebsite] = useState('a distracting website');

  useEffect(() => {
    const raw = searchParams.get('website');
    if (raw) {
      try {
        const urlObj = new URL(raw.includes('://') ? raw : `https://${raw}`);
        const host = urlObj.hostname.replace(/^www\./, ''); // remove www
        const parts = host.split('.');
        let mainName = parts.length > 2 ? parts[parts.length - 2] : parts[0]; // root name only
        mainName = mainName.charAt(0).toUpperCase() + mainName.slice(1);
        setWebsite(mainName);
      } catch {
        setWebsite('a distracting website');
      }
    } else {
      setWebsite('a distracting website');
    }
  }, [searchParams]);

  const learn =
    searchParams.get('learn') || 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';

  return (
    <main className="flex min-h-screen flex-col items-center justify-center z-[9999] dark:bg-gray-900 bg-white text-gray-800 dark:text-gray-200 opacity-100">
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
        Are you trying to visit {website}?
      </p>
      <Button variant="outline" className="mt-4" size="lg">
        <a href={learn} target="_blank" rel="noopener noreferrer">
          Learn Something New Instead!
        </a>
      </Button>
    </main>
  );
}
