import Link from 'next/link';

export interface PagesLandingPageProps {}

export function PagesLandingPage(props: PagesLandingPageProps) {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 min-h-screen flex items-center justify-center">
      <div className="container mx-auto p-4 text-center">
        <h1 className="text-4xl font-bold text-white mb-8">Welcome to My Website!</h1>
        <p className="text-white text-lg mb-8">
          In this Medium article, I'll be explaining the benefits of using NX and Next.js together.
          Discover how these amazing tools can streamline your development workflow and improve code organization.
        </p>
        <Link legacyBehavior href="/about-us">
          <a className="bg-white text-blue-500 py-2 px-4 rounded-lg font-bold text-lg hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out">
            Learn More
          </a>
        </Link>
      </div>
    </div>
  );
}

export default PagesLandingPage;
