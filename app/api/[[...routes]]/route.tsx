/** @jsxImportSource frog/jsx */

import { Button, Frog, TextInput } from 'frog'
import { devtools } from 'frog/dev'
// import { neynar } from 'frog/hubs'
import { handle } from 'frog/next'
import { serveStatic } from 'frog/serve-static'

  const app = new Frog({
    basePath: '/api',
    // hub: neynar({ apiKey: process.env.NEYMAR_API_KEY }),
    browserLocation: '/',
    imageOptions: {
      fonts: [
        {
          name: 'JetBrains Mono',
          source: 'google',
        },
      ],
    },
    title: 'Max ROI Post',
  })
  

// Uncomment to use Edge Runtime
// export const runtime = 'edge'

app.frame('/', (c) => {
  const { buttonValue, inputText, status } = c
  const fruit = inputText || buttonValue
  return c.res({
    image: 'https://i.postimg.cc/d1yk2X2N/TOKEN2049.jpg',
    intents: [
      <Button.Link href = 'https://meetings.hubspot.com/tomer-sharoni/meet-addressable-at-token2049-24-singapore?uuid=f9895b17-13c9-412f-bf84-da5f45998686'>Meet Up With Sharoni 💌</Button.Link>,
    ],
  })
})

devtools(app, { serveStatic })

export const GET = handle(app)
export const POST = handle(app)
