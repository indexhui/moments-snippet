export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    name: "走走小日 moments",
    description:
      "走走小日 moments 是一款療癒系日常遊戲（尚未推出）。追蹤我們以獲得最新消息與釋出時間。",
    url: "https://mugio.studio",
    sameAs: [
      "https://www.instagram.com/mugio_studio/",
      "https://www.threads.com/@mugio_studio?xmt=AQF02DIAlQ7wBCOVZ-VhMzDSEHaKmZHHx_JHAI31v419qAg",
      "https://www.youtube.com/@Mugio-studio",
    ],
    publisher: {
      "@type": "Organization",
      name: "Mugio Studio",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
