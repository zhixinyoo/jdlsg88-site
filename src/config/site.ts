// src/config/site.ts — swap this file + public/assets/ to rebrand
// Generated entirely from .chameleon/competitor-reference.json (JDL688 Singapore / jdlsg88.com)

export const siteConfig = {
  brand: "JDL688 Singapore",
  domain: "jdlsg88.com",
  homepage: "/",
  cta: "https://shortslink.org/jdl-signup-sg",

  colors: {
    bg: "#111111",
    bg2: "#1a1a2e",
    primary: "#09174E",
    accent: "#F5D043",
    text: "#FFFFFF",
    font: "Manrope",
    radius: "5px",
  },

  seo: {
    title: "JDL688 Singapore | Trusted Online Casino & Agent Singapore",
    description:
      "Play at JDL688 Singapore — trusted online casino with slots, live casino, fishing games and more. Fast SGD deposits & withdrawals. Register now!",
    keywords:
      "JDL688, JDL688 Singapore, jdlsg88, online casino singapore, trusted online casino singapore, slot games singapore, live casino singapore",
    ogImage: "/assets/homepage/banner-1.png",
  },

  images: {
    logo: "/assets/shared/logo.png",
    favicon: "/assets/shared/favicon.png",
    androidIcon: "/assets/shared/android-icon.png",
    appleIcon: "/assets/shared/apple-icon.png",
    licenceBadge: "/assets/shared/gaming-curacao.png",
    certifications: "/assets/shared/provider-certifications.png",
    // Split from the composite provider-certifications.png so an incomplete last row
    // (5 logos in a 3-col grid) centers correctly instead of leaving a lopsided gap.
    certLogos: [
      { name: "iovation", src: "/assets/shared/cert-iovation.png" },
      { name: "BMM Testlabs", src: "/assets/shared/cert-bmm.png" },
      { name: "iTech Labs", src: "/assets/shared/cert-itech-labs.png" },
      { name: "TST Verified", src: "/assets/shared/cert-tst-verified.png" },
      { name: "GoDaddy Verified & Secured", src: "/assets/shared/cert-godaddy.png" },
    ],
    fbIcon: "/assets/shared/fb-icon.png",
    telegramIcon: "/assets/shared/telegram-icon.png",
    badge18Plus: "/assets/shared/18plus.png",

    banners: ["/assets/homepage/banner-1.png"],

    tabs: [
      {
        label: "Online Casino Games",
        id: "cat-4",
        iconDefault: "/assets/homepage/game-cat1-5.png",
        iconActive: "/assets/homepage/game-cat1-5.png",
      },
      {
        label: "Arcade & Table",
        id: "cat-1",
        iconDefault: "/assets/homepage/game-cat1-1.png",
        iconActive: "/assets/homepage/game-cat1-1.png",
      },
      {
        label: "Fishing",
        id: "cat-2",
        iconDefault: "/assets/homepage/game-cat2-1.png",
        iconActive: "/assets/homepage/game-cat2-1.png",
      },
      {
        label: "Bingo & Arcade",
        id: "cat-3",
        iconDefault: "/assets/homepage/game-cat3-1.png",
        iconActive: "/assets/homepage/game-cat3-1.png",
      },
    ],

    gameCards: {
      "cat-4": [
        { src: "/assets/homepage/game-cat1-1.png", label: "Justice Bao" },
        { src: "/assets/homepage/game-cat1-2.png", label: "Monkey King" },
        { src: "/assets/homepage/game-cat1-3.png", label: "Sic Bo" },
        { src: "/assets/homepage/game-cat1-4.png", label: "Dreams of American" },
        { src: "/assets/homepage/game-cat1-5.png", label: "Great Blue" },
        { src: "/assets/homepage/game-cat1-6.png", label: "Roulette 36 Synchronize" },
        { src: "/assets/homepage/game-cat2-1.png", label: "All-Star" },
        { src: "/assets/homepage/game-cat2-2.png", label: "Happy Fishing" },
        { src: "/assets/homepage/game-cat2-3.png", label: "Ocean King Jackpot" },
        { src: "/assets/homepage/game-cat2-4.png", label: "Boom Legend" },
        { src: "/assets/homepage/game-cat2-5.png", label: "Dragon Fortune" },
        { src: "/assets/homepage/game-cat2-6.png", label: "Fortune King Jackpot" },
        { src: "/assets/homepage/game-cat2-7.png", label: "Mega Fishing" },
        { src: "/assets/homepage/game-cat2-8.png", label: "Dinosaur Tycoon" },
        { src: "/assets/homepage/game-cat2-9.png", label: "Jackpot" },
        { src: "/assets/homepage/game-cat2-10.png", label: "Bombing Fishing" },
        { src: "/assets/homepage/game-cat2-11.png", label: "Bingo" },
        { src: "/assets/homepage/game-cat2-12.png", label: "JILI" },
        { src: "/assets/homepage/game-cat3-1.png", label: "Journey West" },
        { src: "/assets/homepage/game-cat3-2.png", label: "Jogo do Bicho" },
        { src: "/assets/homepage/game-cat3-3.png", label: "Elf Bingo" },
        { src: "/assets/homepage/game-cat3-4.png", label: "Jackpot Bingo" },
      ],
      "cat-1": [
        { src: "/assets/homepage/game-cat1-1.png", label: "Justice Bao" },
        { src: "/assets/homepage/game-cat1-2.png", label: "Monkey King" },
        { src: "/assets/homepage/game-cat1-3.png", label: "Sic Bo" },
        { src: "/assets/homepage/game-cat1-4.png", label: "Dreams of American" },
        { src: "/assets/homepage/game-cat1-5.png", label: "Great Blue" },
        { src: "/assets/homepage/game-cat1-6.png", label: "Roulette 36 Synchronize" },
      ],
      "cat-2": [
        { src: "/assets/homepage/game-cat2-1.png", label: "All-Star" },
        { src: "/assets/homepage/game-cat2-2.png", label: "Happy Fishing" },
        { src: "/assets/homepage/game-cat2-3.png", label: "Ocean King Jackpot" },
        { src: "/assets/homepage/game-cat2-4.png", label: "Boom Legend" },
        { src: "/assets/homepage/game-cat2-5.png", label: "Dragon Fortune" },
        { src: "/assets/homepage/game-cat2-6.png", label: "Fortune King Jackpot" },
        { src: "/assets/homepage/game-cat2-7.png", label: "Mega Fishing" },
        { src: "/assets/homepage/game-cat2-8.png", label: "Dinosaur Tycoon" },
        { src: "/assets/homepage/game-cat2-9.png", label: "Jackpot" },
        { src: "/assets/homepage/game-cat2-10.png", label: "Bombing Fishing" },
        { src: "/assets/homepage/game-cat2-11.png", label: "Bingo" },
        { src: "/assets/homepage/game-cat2-12.png", label: "JILI" },
      ],
      "cat-3": [
        { src: "/assets/homepage/game-cat3-1.png", label: "Journey West" },
        { src: "/assets/homepage/game-cat3-2.png", label: "Jogo do Bicho" },
        { src: "/assets/homepage/game-cat3-3.png", label: "Elf Bingo" },
        { src: "/assets/homepage/game-cat3-4.png", label: "Jackpot Bingo" },
      ],
    } as Record<string, { src: string; label: string }[]>,

    // 8 mobile app download icons — extra content prominent on the original site.
    apps: [
      { name: "Pussy888", src: "/assets/homepage/app-pussy888.png" },
      { name: "Gameplay", src: "/assets/homepage/app-gameplay.png" },
      { name: "Playtech Live Casino", src: "/assets/homepage/app-playtech-live.png" },
      { name: "Mega888", src: "/assets/homepage/app-mega888.png" },
      { name: "Xpro Gaming Live Casino", src: "/assets/homepage/app-xpro-gaming.png" },
      { name: "Dream Gaming Live Casino", src: "/assets/homepage/app-dream-gaming.png" },
      { name: "918Kiss", src: "/assets/homepage/app-918kiss.png" },
      { name: "Joker", src: "/assets/homepage/app-joker.png" },
    ],

    // No promo1/promo2/referBg images were scraped — rendered as CSS-only accent-bordered
    // panels (see src/components/PromoPanel.astro) instead of broken <img> references.
    panels: {
      freeCredit: {
        eyebrow: "NEW MEMBERS",
        headline: "SGD 10-20 Free Credit",
        subtext: "Free credit on your first deposit — no wagering tricks, just play.",
        cta: "Claim Free Credit",
      },
      promo1: {
        eyebrow: "LIMITED TIME",
        headline: "100% Welcome Bonus",
        subtext: "Up to SGD 388 on your first deposit — min deposit only SGD 10.",
        cta: "Claim Bonus",
      },
      promo2: {
        eyebrow: "EVERY SINGLE DAY",
        headline: "1% Daily Rebate",
        subtext: "Cashback win or lose, credited daily with no minimum turnover.",
        cta: "Learn More",
      },
      referBg: {
        eyebrow: "STAY CONNECTED",
        headline: "Join Us on Telegram",
        subtext: "Instant updates, exclusive promo codes & 24/7 support channel.",
        cta: "Join Telegram",
      },
    },

    promoData: [
      {
        title: "Welcome Bonus",
        description: "100% up to SGD 388, min deposit SGD 10",
        wagering: "15x",
        badge: "HOT",
      },
      {
        title: "Free Credit",
        description: "SGD 10-20 free for new members on first deposit",
        wagering: "20x",
        badge: "NEW",
      },
      {
        title: "Daily Rebate",
        description: "Up to 1% cashback daily, win or lose, no minimum",
        wagering: "1x",
        badge: "",
      },
      {
        title: "VIP Cashback",
        description: "Up to 10% weekly cashback across Silver/Gold/Platinum/Diamond tiers",
        wagering: "1x",
        badge: "VIP",
      },
      {
        title: "Referral Bonus",
        description: "SGD 50 per friend referred",
        wagering: "5x",
        badge: "",
      },
    ],
  },

  trustSignals: {
    atAGlance: {
      platform: "Online Casino and Sportsbook",
      games: "500+ slots, live dealer, fishing, table games",
      welcomeBonus: "100% up to SGD 388",
      minDeposit: "SGD 10",
      payoutSpeed: "2-24 hours",
      mobile: "Android APK + iOS + Browser",
      payments: "Touch n Go, GrabPay, DuitNow, Crypto",
      support: "24/7 Live Chat",
    },
    providers: [
      "Pragmatic Play",
      "JILI",
      "Spadegaming",
      "CQ9",
      "Evolution Gaming",
      "Asia Gaming",
      "Ezugi",
    ],
  },

  txTable: {
    phonePrefix: "65",
    amountPrefix: "SGD",
    games: ["JILI", "PRAGMATIC PLAY", "SPADEGAMING", "CQ9", "EVOLUTION", "ASIA GAMING"],
  },

  // Per-build compliance toggles — set from the Phase 2 Brief answers (both confirmed yes).
  compliance: {
    copyrightLine: true,
    licenceText: true,
  },
} as const;

export type SiteConfig = typeof siteConfig;
