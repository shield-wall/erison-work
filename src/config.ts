export const SITE = {
  website: "https://blog.erison.work",
  profile: "https://blog.erison.work", // TODO: I do not know why we need this
  author: "Erison Silva",
  desc: "It's my personal blog, here I'm posting techinical posts and things that I consider intersting to share.",
  title: "erison.work",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: true,
    text: "Edit page",
    url: "https://github.com/shield-wall/erison-work/edit/master/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "Europe/Berlin", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
