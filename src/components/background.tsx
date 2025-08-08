'use client';

import Image from 'next/image';

export default function Background() {
  return (
    <div className="absolute inset-0 h-full w-full overflow-hidden pointer-events-none">
      <Image
        src="https://persistent.oaistatic.com/burrito-nux/1920.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="scale-[1.02] object-cover opacity-50 blur-2xl dark:opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent from-75% to-white dark:to-black" />
    </div>
  );
}
