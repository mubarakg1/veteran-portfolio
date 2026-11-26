/* ============================================================
   VETERAN PORTFOLIO — ALL YOUR CONTENT LIVES HERE
   To update the site, edit this file only. Keep the commas
   and quotes as they are. Images go in the assets folder.
   ============================================================ */
window.CONTENT = {

  /* ---------- AMBASSADOR LOG ----------
     status: 'ACTIVE' (live now) or 'LANDED' (former)
     logo: image file name in assets/, without .jpg            */
  ambassador: [
    { logo: 'actionmodel', name: 'ACTION MODEL', status: 'ACTIVE', about: 'My current ambassadorship. Content for Action Model AI, including the Action Model × Sweep Global collaboration with a $150K prize pool.' },
    { logo: 'edel',        name: 'EDEL FINANCE', status: 'LANDED', about: 'Former ambassador. Weekly research-backed long-form posts across three lanes: Lending, Canton and Structural Growth, plus the EDELx utility story.' },
    { logo: 'ygg',         name: 'YGG',          status: 'LANDED', about: 'Former ambassador for YGG, the Web3 gaming guild, creating content for its community and campaigns.' },
    { logo: '1win',        name: '1WIN',         status: 'LANDED', about: 'Former ambassador. World Cup prediction market content, token sale coverage and the 1win creator program.' }
  ],

  /* ---------- STAR MAP: YOUR AGENCY (centre star) ---------- */
  home: { name: 'Verge Collective', label: 'Home base', about: 'UGC and KOL agency. I assemble creator squads, write the proposals and run campaigns from brief to posted entries.', tags: ['UGC', 'KOL', 'Proposals'] },

  /* ---------- STAR MAP: AGENCIES I'VE WORKED WITH ----------
     logo is optional. Without one, the star shows initials.   */
  agencies: [
    { name: 'Creator Academy', label: 'Creator network',      about: 'Campaign rounds through the Academy, including the KiiChain Creators Academy competition and Poise Finance Round 2.', projects: ['KiiChain', 'Poise Finance'] , logo: 'creatoracademy' },
    { name: 'Surgence Labs',   label: 'Creator agency',       about: 'My most active agency. Four campaigns run through Surgence.', projects: ['Project Phäros', 'Chimera Wallet', 'GetOn', 'IPX Fan Szn'], logo: 'surgence' },
    { name: 'Nfluence',        label: 'Creator agency',       about: 'Creator campaigns run through Nfluence.' , logo: 'nfluence' },
    { name: 'Bricktopian',     label: 'Creator agency',       about: 'Runs creator campaigns I take part in. I won its best post of the week with a video, and two of my PFPs are Bricktopian NFTs.', projects: ['Best post of the week'], logo: 'bricktopian' },
    { name: 'Arcadia',         label: 'Creator agency',       about: 'Creator campaigns run through Arcadia.' , logo: 'arcadia' },
    { name: 'Momentum',        label: 'Creator agency',       about: 'Creator campaigns run through Momentum.' , logo: 'momentum' },
    { name: 'AP Collective',   label: 'Hub by AP Collective', about: 'The quest hub where I picked up some of my biggest exchange and gaming campaigns.', projects: ['MEXC', 'ClawArena', 'HaloArena'] , logo: 'apcollective' },
    { name: 'The Sphere',      label: 'Creator agency',       about: 'Creator campaigns run through The Sphere.' , logo: 'thesphere' },
    { name: 'Kronicles',       label: 'Creator agency',       about: 'Glyph Universe campaign: a thread and a 16:9 motion video for the AI-judged text battle game on Base.', projects: ['Glyph Universe'], logo: 'kronicles' },
    { name: 'Pandora',         label: 'Creator agency',       about: 'Creator campaigns run through Pandora.' , logo: 'pandora' }
  ],

  /* ---------- IDENTITY VAULT (the brick carousel) ---------- */
  identities: [
    { img: 'id-pfp',     name: 'Main PFP',                   about: 'The pilot. Purple beret, gold goggles, mint skies. My face across Web3.' },
    { img: 'id-helmet',  name: 'Bricktopian NFT · Hard hat', about: 'A Bricktopian NFT I own. Hard hat on, building in public.' },
    { img: 'id-tongue',  name: 'Bricktopian NFT · Original', about: 'My other Bricktopian NFT, part of the same identity.' },
    { img: 'id-penguin', name: 'Penguin',                    about: 'The side character. Same callsign, stitched right on the hood.' }
  ],

  /* ---------- WRITING (articles & threads) ----------
     post: the long number from your X link. read: optional.   */
  articles: [
    { title: 'Every Token Rewards Program Dies The Same Way. KiiChain Built One That Cannot.', project: 'KiiChain', read: '5 min read', post: '2058327142786818259' },
    { title: 'When a $59 Trillion Custodian Chooses Your Blockchain, Pay Attention', project: 'ADI Chain × BNY', post: '2057571323195654582' },
    { title: 'ActionFi Is Live: Here\u2019s How to Get Involved in the $100K Reward Pool', project: 'ActionFi', post: '2092314796121260140' }
  ],

  /* ---------- CINEMA BAY ----------
     post: the long number from your X link
           (x.com/its_veteran1/status/THIS_NUMBER)
     type: 'ai' | 'promo' | 'walk' | 'explain'
     The date and "x days ago" are worked out automatically.
     Order doesn't matter: the site sorts by date.               */
  videos: [
    { title: 'Ethena Pay',             type: 'walk',    kind: 'How-to tutorial',          about: 'A step-by-step tutorial showing how to use Ethena Pay, start to finish.', tags: ['Tutorial', 'Walkthrough'], post: '2125389789339734129' },
    { title: 'Year of More',           type: 'ai',      kind: 'ElevenCreative contest',   about: 'My entry for the ElevenLabs ElevenCreative "Year of More" video contest.', tags: ['AI video', 'Contest'], post: '2124458240968716377' },
    { title: 'Bricktopian AI film',    type: 'ai',      kind: 'AI cinematic short',       about: 'My AI film for the Bricktopian community. Concept board, stills and shot-by-shot motion, built with ChatGPT and Seedance.', tags: ['ChatGPT', 'Seedance', '16:9'], post: '2123510372296466942', video: true },
    { title: 'Edited clip with AI',    type: 'ai',      kind: 'AI clip',                  about: 'A clip I edited with AI: pacing, cuts and sound done end to end.', tags: ['AI edit', 'Motion'], post: '2123227603813244933', video: true },
    { title: 'Edited clip with AI',    type: 'ai',      kind: 'AI clip',                  about: 'Another AI-edited clip, built to hold attention from the first second.', tags: ['AI edit', 'Motion'], post: '2123019765627183582' },
    { title: 'GetOn',                  type: 'promo',   kind: 'Passport waitlist video',  about: 'A video for the GetOn Passport waitlist UGC activation.', tags: ['AI video', 'UGC'], post: '2122813442704671008', video: true },
    { title: 'Primus Labs',            type: 'explain', kind: 'AI explainer',             about: 'An AI-built video that lands the Primus Labs story in seconds instead of a wall of text.', tags: ['AI video', 'Voiceover'], post: '2117896716875714888', video: true },
    { title: 'TermiX',                 type: 'promo',   kind: 'Project video',            about: 'A video I made for TermiX, the agent settlement layer on BNB Chain.', tags: ['Video', 'Motion'], post: '2113718590146814430', video: true },
    { title: 'Glyph Universe',         type: 'promo',   kind: 'Project video',            about: 'A video for Glyph Universe, the AI-judged text battle game on Base.', tags: ['Video', 'Motion'], post: '2112960828961960336', video: true },
    { title: 'Action Model × Sweep',   type: 'promo',   kind: 'First on-camera video',    about: 'My first face-to-camera video, on the Action Model × Sweep contest, made as an Action Model ambassador.', tags: ['On camera', 'Ambassador'], post: '2111497398899839414' },
    { title: 'KiiChain',               type: 'explain', kind: 'Whiteboard illustration',  about: 'A whiteboard-style illustrated explainer for KiiChain.', tags: ['Whiteboard', 'Illustration'], post: '2105788303479873822', video: true },
    { title: 'Canborsa Trading Arena', type: 'walk',    kind: 'Walkthrough + voiceover',  about: 'An original walkthrough of the Canborsa Trading Arena, with my own voiceover.', tags: ['Walkthrough', 'Voiceover'], post: '2098815960203346120', video: true },
    { title: 'Ragnarok Breaker',       type: 'walk',    kind: 'Gameplay recording',       about: 'A gameplay recording of Ragnarok Breaker.', tags: ['Gameplay', 'Recording'], post: '2081761154087403634', video: true },
    { title: 'MEXC',                   type: 'promo',   kind: 'Campaign video',           about: 'A campaign video for MEXC, picked up through the Hub by AP Collective.', tags: ['Video', 'Campaign'], post: '2075020863502528702', video: true },
    { title: 'Waifu Sweeper',          type: 'walk',    kind: 'Video walkthrough',        about: 'A video walkthrough of Waifu Sweeper.', tags: ['Walkthrough', 'Gameplay'], post: '2066594992018325580', video: true }
  ]
};
