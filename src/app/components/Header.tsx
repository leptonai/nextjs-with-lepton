export const Header = () => {
  return (
    <nav className="w-full flex justify-center border-b h-16 border-gray-200 dark:border-gray-700">
      <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm"><a
        className="py-2 px-3 flex rounded-md no-underline border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
        href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fleptonai%2Fnextjs-with-lepton&project-name=nextjs-with-lepton&repository-name=nextjs-with-lepton&demo-title=Next.js%20With%20Lepton%20AI&demo-description=A%20Next.js%20starter%20with%20the%20Lepton%20LLM%20API&demo-url=https%3A%2F%2Fnextjs-with-lepton.vercel.app%2F&demo-image=https%3A%2F%2Fwww.lepton.ai%2Fapi%2Fog&integration-ids=oac_fSHKmIjNmv1PtiGhOzYdEwJh"
        target="_blank" rel="noreferrer">
        <svg aria-label="Vercel logomark" role="img" viewBox="0 0 74 64" className="h-4 w-4 mr-2">
          <path d="M37.5896 0.25L74.5396 64.25H0.639648L37.5896 0.25Z" fill="currentColor"></path>
        </svg>
        Deploy to Vercel</a>
        <span>
          <span className="text-gray-500 dark:text-gray-400 mr-1">Powered by</span>
          <a href="https://www.lepton.ai/"
           target="_blank" className="font-semibold hover:underline" rel="noreferrer">Lepton AI
          </a>
        </span>
      </div>
    </nav>
  )
}
