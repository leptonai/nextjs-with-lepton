# Next.js Lepton AI Starter

This is a [Next.js](https://nextjs.org/) project using the [Lepton AI](https://www.lepton.ai/). It is a starter template to help you get started with building applications that use the Lepton API.

## DEMO

- [nextjs-with-lepton.vercel.app](https://nextjs-with-lepton.vercel.app/)

## Getting Started

1. Clone the repository and `cd` into the directory

    ```bash
    git clone git@github.com:leptonai/nextjs-with-lepton.git my-nextjs-with-lepton
    # or
    git clone https://github.com/leptonai/nextjs-with-lepton.git my-nextjs-with-lepton
    
    cd my-nextjs-with-lepton
    ```

2. Install the dependencies

    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    ```

3. Copy `.env.local.example` to `.env.local` and set the `LEPTON_API_TOKEN` to your Lepton API token.

    You can get your Lepton API token from the [Lepton AI Dashboard](https://dashboard.lepton.ai/workspace-redirect/settings/api-tokens)
    
    ```bash
    cp .env.local.example .env.local
    ```

4. Start the development server

    ```bash
    npm run dev
    ```
   
    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploy on Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fleptonai%2Fnextjs-with-lepton&project-name=nextjs-with-lepton&repository-name=nextjs-with-lepton&demo-title=Next.js%20With%20Lepton%20AI&demo-description=A%20Next.js%20starter%20with%20the%20Lepton%20LLM%20API&demo-url=https%3A%2F%2Fnextjs-with-lepton.vercel.app%2F&demo-image=https%3A%2F%2Fwww.lepton.ai%2Fapi%2Fog&integration-ids=oac_fSHKmIjNmv1PtiGhOzYdEwJh&external-id=https%3A%2F%2Fgithub.com%2Fleptonai%2Fnextjs-with-lepton%2Ftree%2Fmain&from=templates)

## Help Links

- [Vercel With Lepton AI](https://www.lepton.ai/docs/integrations/vercel)
- [Next.js on Vercel](https://vercel.com/docs/frameworks/nextjs)
- [Vercel AI SDK](https://sdk.vercel.ai/docs/guides/frameworks/nextjs-app)
