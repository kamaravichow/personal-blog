const siteMetadata = {
  title: 'Aravind Chowdary | Personal Portfolio & Blog',
  author: 'Aravind Chowdary Kamani',
  headerTitle: 'Aravind Chowdary',
  description: "As a hobbyist mobile app developer skilled in Kotlin, Java, Dart, Python, and various frameworks and technologies. Additionally, this blog serves as a platform for sharing my wealth of knowledge with the world. Explore his website to discover the latest updates on my creations and insights into my development process",
  language: 'en-us',
  siteUrl: 'https://www.aravi.me',
  siteRepo: 'https://github.com/kamaravichow/',
  image: '/static/img/avatar.png',
  socialBanner: '/static/img/twitter-card-optm.webp',
  email: 'hi@aravi.me',
  github: 'https://github.com/kamaravichow',
  twitter: 'https://twitter.com/heytrulyaravind',
  linkedin: 'https://www.linkedin.com/in/kamaravichow',
  locale: 'en-US',
  analytics: {
    // supports plausible, simpleAnalytics or googleAnalytics
    plausibleDataDomain: false, // e.g. tailwind-nextjs-starter-blog.vercel.app
    simpleAnalytics: false, // true or false
    googleAnalyticsId: 'G-83SM867C1J', // e.g. UA-000000-2 or G-XXXXXXX
  },
  newsletter: {
    // Please add your .env file and modify it according to your selection
    provider: 'emailOctopus',
  },
  comment: {
    provider: 'disqus', // supported providers: giscus, utterances, disqus
    giscusConfig: {
      repo: '', // username/repoName
      repositoryId: '',
      category: '',
      categoryId: '',
      mapping: '', // supported options: pathname, url, title
      reactions: '', // Emoji reactions: 1 = enable / 0 = disable
      // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
      metadata: '',
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: '',
      // theme when dark mode
      darkTheme: '',
      // If the theme option above is set to 'custom`
      // please provide a link below to your custom theme css file.
      // example: https://giscus.app/themes/custom_example.css
      themeURL: '',
    },
    utterancesConfig: {
      repo: '', // username/repoName
      issueTerm: '', // supported options: pathname, url, title
      label: '', // label (optional): Comment 💬
      // theme example: github-light, github-dark, preferred-color-scheme
      // github-dark-orange, icy-dark, dark-blue, photon-dark, boxy-light
      theme: '',
      // theme when dark mode
      darkTheme: '',
    },
    disqus: {
      shortname: 'kamaravichow',
    },
  },
}

module.exports = siteMetadata
