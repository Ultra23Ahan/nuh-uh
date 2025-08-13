import type { ReadonlyURLSearchParams } from 'next/navigation';
import * as React from 'react';

export function getWebsiteName(
  searchParams: ReadonlyURLSearchParams,
  setWebsite: React.Dispatch<React.SetStateAction<string>>
) {
  const raw = searchParams.get('website');
  if (raw) {
    try {
      const urlObj = new URL(raw.includes('://') ? raw : `https://${raw}`);
      const host = urlObj.hostname.replace(/^www\./, '');
      const parts = host.split('.');
      let mainName = parts.length > 2 ? parts[parts.length - 2] : parts[0];
      mainName = mainName.charAt(0).toUpperCase() + mainName.slice(1);
      setWebsite(mainName);
    } catch {
      setWebsite('a distracting website');
    }
  } else {
    setWebsite('a distracting website');
  }
}
