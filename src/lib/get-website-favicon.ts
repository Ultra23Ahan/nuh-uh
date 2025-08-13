export async function getWebsiteFavicon(searchParams) {
  const raw = searchParams.get('website');
  if (!raw) return;

  try {
    const urlObj = new URL(raw);
    const faviconUrl = `https://www.google.com/s2/favicons?sz=64&domain=${urlObj.hostname}`;

    // Set favicon
    const link =
      document.querySelector<HTMLLinkElement>("link[rel*='icon']") ||
      document.createElement('link');

    link.rel = 'icon';
    link.href = faviconUrl;
    link.type = 'image/png';
    document.head.appendChild(link);

    console.log('Favicon set to:', faviconUrl);
  } catch (e) {
    console.error('Invalid website URL:', raw, e);
  }
}
