
import { useState } from 'react';
import { useSEO, generateWebPageSchema, generateWebSiteSchema, generateOrganizationSchema } from '../../utils/seo';

export default function HomePage() {
  const [isRedirecting, setIsRedirecting] = useState(false);
  const [countdown, setCountdown] = useState(2);

  // SEO Optimization
  useSEO({
    title: 'Play Now - Ultimate Gaming Experience',
    description: 'Join thousands of players worldwide in the ultimate gaming adventure. Experience top-rated gameplay with our community of 10K+ players. Start your gaming journey now with immersive gameplay and exciting challenges.',
    keywords: 'gaming, play now, online game, multiplayer, gaming experience, ultimate gaming, gaming adventure, active players',
    canonical: `${import.meta.env.VITE_SITE_URL || 'https://example.com'}/`,
    ogImage: `${import.meta.env.VITE_SITE_URL || 'https://example.com'}/og-image.jpg`,
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        generateWebSiteSchema(),
        generateOrganizationSchema(),
        generateWebPageSchema('/', 'Play Now - Ultimate Gaming Experience', 'Join thousands of players worldwide in the ultimate gaming adventure. Experience top-rated gameplay with our community of 10K+ players. Start your gaming journey now with immersive gameplay and exciting challenges.'),
      ],
    },
  });

  const handlePlayNow = () => {
    setIsRedirecting(true);
    let count = 2;
    
    const timer = setInterval(() => {
      count -= 1;
      setCountdown(count);
      
      if (count === 0) {
        clearInterval(timer);
        window.location.href = 'https://me99aud.com/RFTIKTOKME';
      }
    }, 800);
  };

  return (
    <main className="min-h-screen bg-black relative overflow-hidden">
      {/* Neon glow effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 md:w-[700px] md:h-[700px] bg-blue-600/30 rounded-full blur-[120px] -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 md:w-[700px] md:h-[700px] bg-purple-600/30 rounded-full blur-[120px] top-1/4 right-0 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute w-96 h-96 md:w-[700px] md:h-[700px] bg-blue-500/20 rounded-full blur-[120px] -bottom-48 -right-48 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Neon grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzNiODJmNiIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50"></div>

      {/* Neon lines */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-500/50 to-transparent"></div>
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-purple-500/50 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 md:px-6 lg:px-8">
        <header className="text-center space-y-4 md:space-y-6 lg:space-y-8 mb-8 md:mb-12 lg:mb-16">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]">
              Ready to Play?
            </span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-2xl mx-auto px-4 drop-shadow-[0_0_10px_rgba(168,85,247,0.3)]">
            Join thousands of players worldwide in the ultimate gaming adventure
          </p>
        </header>

        {/* Neon CTA Button */}
        <button
          onClick={handlePlayNow}
          disabled={isRedirecting}
          className="group relative px-8 sm:px-10 md:px-12 lg:px-16 py-4 sm:py-5 md:py-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold shadow-[0_0_40px_rgba(59,130,246,0.6)] hover:shadow-[0_0_60px_rgba(168,85,247,0.8)] transition-all duration-300 hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 whitespace-nowrap cursor-pointer border-2 border-blue-400/50"
        >
          <span className="relative z-10 flex items-center gap-3">
            {isRedirecting ? (
              <>
                <i className="ri-loader-4-line animate-spin"></i>
                Redirecting in {countdown}...
              </>
            ) : (
              <>
                Play Now
                <i className="ri-play-circle-fill group-hover:translate-x-1 transition-transform"></i>
              </>
            )}
          </span>
          
          {/* Neon glow effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 blur-2xl opacity-60 group-hover:opacity-90 transition-opacity"></div>
        </button>

        {/* Stats with neon effect */}
        <div className="mt-12 md:mt-16 lg:mt-20 flex flex-col sm:flex-row items-center gap-6 sm:gap-8 md:gap-12 lg:gap-16">
          <div className="text-center p-4 rounded-lg border border-blue-500/30 bg-blue-500/5 backdrop-blur-sm shadow-[0_0_20px_rgba(59,130,246,0.2)]">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-400 drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]">10K+</div>
            <div className="text-xs sm:text-sm md:text-base text-gray-400 mt-1">Active Players</div>
          </div>
          
          <div className="hidden sm:block w-px h-12 bg-gradient-to-b from-transparent via-purple-500/50 to-transparent"></div>
          
          <div className="text-center p-4 rounded-lg border border-purple-500/30 bg-purple-500/5 backdrop-blur-sm shadow-[0_0_20px_rgba(168,85,247,0.2)]">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-400 flex items-center justify-center gap-1 drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]">
              4.9
              <i className="ri-star-fill text-xl sm:text-2xl md:text-3xl"></i>
            </div>
            <div className="text-xs sm:text-sm md:text-base text-gray-400 mt-1">Rating</div>
          </div>
        </div>
      </div>
    </main>
  );
}
