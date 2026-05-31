export const mockDiscoverWeekly = {
  name: "Top 50 - Global (Mocked)",
  description: "Your daily update of the most played tracks right now. Data is locally mocked to bypass API restrictions.",
  images: [
    {
      url: "https://charts-images.scdn.co/assets/locale_en/regional/daily/region_global_default.jpg",
    },
  ],
  tracks: {
    items: [
      {
        track: {
          id: "1",
          name: "Mockingbird",
          artists: [{ name: "Eminem" }],
          album: {
            name: "Encore",
            images: [{ url: "https://upload.wikimedia.org/wikipedia/en/b/b4/Encore_%28Eminem_album%29_coverart.jpg" }]
          }
        }
      },
      {
        track: {
          id: "2",
          name: "In The End",
          artists: [{ name: "Linkin Park" }],
          album: {
            name: "Hybrid Theory",
            images: [{ url: "https://upload.wikimedia.org/wikipedia/en/2/2a/Linkin_Park_Hybrid_Theory_Album_Cover.jpg" }]
          }
        }
      }
    ]
  }
};