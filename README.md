# Hello!

This is a simple website which is supposed to help you quit going to any website and getting distracted, here YouTube is taken as an example.

## Usage:

go to `https://nuh-uh-ultra23ahans-projects.vercel.app/` and put in a parameter website and a parameter learn. For example:

`https://nuh-uh-ultra23ahans-projects.vercel.app/?website=https://youtube.com&learn=https://nextjs.org/docs`

To acually quit your habit, bookmark the website instead of YouTube for example and then just forget about it. Now, when you go to the website, it will show a message and will advise you to learn something new instead of wasting your time.

## Guidelines for parameters:

#### Website parameter:

the `?website=` parameter should be the website you are trying to stopvisiting. For example, if you are trying to stop visiting YouTube, it is recommended to set the parameter to `?website=youtube`. The parameter also supports websites in full like `?learn=https://www.youtube.com`. You can leave out any part of the domain you do not have. All of the following are valid:

`?learn=https://youtube.com`

`?learn=https://www.youtube.com`

`?learn=youtube.com`

`?learn=https://youtube`

`?learn=youtube` (preferred)

#### Learn parameter

the `?learn=` parameter is the website URL you want to go to to learn something new. For example, if I want to learn Next.js, I will set the parameter to `?learn=https://nextjs.org/docs`, which leads to the nextjs docs.

Full example (preferred practices):
`https://nuh-uh-ultra23ahans-projects.vercel.app/?website=https://youtube&learn=https://nextjs.org/docs`

## More Examples

https://nuh-uh-ultra23ahans-projects.vercel.app/?website=https://instagram.com&learn=https://www.npmjs.com/package/next-themes?activeTab=readme

https://nuh-uh-ultra23ahans-projects.vercel.app/?website=https://x.com&learn=https://docs.astro.build/en/getting-started/

https://nuh-uh-ultra23ahans-projects.vercel.app/?website=https://netflix.com&learn=https://vuejs.org/guide/introduction

https://nuh-uh-ultra23ahans-projects.vercel.app/?website=https://twitch.tv.com&learn=https://www.youtube.com/watch?v=lfmg-EJ8gm4
