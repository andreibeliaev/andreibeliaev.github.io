export default function News() {
  const updates = [
    {
      date: "December 6, 2025",
      title: (
        <>
          I will start a <strong>Graduate Research Assistantship</strong> in the <strong>Department
           of Comparative Biosciences</strong> at <strong>UIUC</strong> in January 2026, focusing on 
           computer vision for reproductive biology.
        </>
      )
    },
    {
      date: "October 8, 2025",
      title: (
        <>
          Began work on a new computer vision project for histopathology at <strong>Epivara</strong>.
        </>
      )
    },
    {
      date: "May 19, 2025",
      title: (
        <>
          I started my <strong>AI/ML SWE Internship</strong> at <strong>Epivara</strong> in the Research Park!
        </>
      )
    }
  ];

  return (
    <section id="news" className="pt-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-4">
          Updates
        </h2>

        <div className="space-y-4 max-h-32 overflow-y-auto">
          {updates.map((item, index) => (
            <div key={index} className="group">
              <div className="flex gap-8 items-center">
                <time className="text-base text-black dark:text-white w-32 flex-shrink-0">
                  {item.date}
                </time>
                <div className="flex-1">
                  <h3 className="text-base text-black dark:text-white">
                    {item.title}
                  </h3>
                  {/* <p className="text-sm text-gray-500">
                    {item.description}
                  </p> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
