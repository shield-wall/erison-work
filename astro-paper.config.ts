import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://blog.erison.work/",
    title: "erison.work",
    description: "It's my personal blog, here I'm posting techinical posts and things that I consider intersting to share.",
    author: "Erison Silva",
    profile: "https://blog.erison.work/",
    ogImage: "default-og.jpg",
    lang: "en",
    timezone: "Europe/Berlin",
    dir: "ltr",
    googleVerification: "7vlGZmcQOc0US8lHfVRJnE_w0zaDoEif0NXLD6Fh6rw",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: false,
    showBackButton: true,
    editPost: {
      enabled: true,
      url: "https://github.com/shield-wall/erison-work/edit/master/",
    },
    search: "pagefind",
  },
  socials: [
    { name: "github",   url: "https://github.com/eerison" },
    { name: "linkedin", url: "https://www.linkedin.com/in/eerison/" },
    { name: "mail",     url: "mailto:hey@erison.work" },
    { name: "rss",      url: "/rss.xml" },
  ],
  shareLinks: [
    { name: "whatsapp", url: "https://wa.me/?text=" },
    { name: "facebook", url: "https://www.facebook.com/sharer.php?u=" },
    { name: "x",        url: "https://x.com/intent/post?url=" },
    { name: "telegram", url: "https://t.me/share/url?url=" },
    { name: "mail",     url: "mailto:?subject=See%20this%20post&body=" },
  ],
});
