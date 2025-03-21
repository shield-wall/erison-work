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
    url: "https://github.com/shield-wall/erison-work/edit/master/src/data/blog",
    text: "Suggest Changes",
    appendFilePath: true,
  },
  dynamicOgImage: false,
} as const;
