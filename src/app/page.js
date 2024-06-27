import "./page.css";

export default function Home() {
  const placeholderImage =
    "https://placehold.co/1920x1080/222/fff?text=Coming+Soon";

  return (
    <>
      <video
        src="/pexels-cottonbro-8721655 (1080p).mp4"
        className="fixed top-0 left-0 w-full h-full object-cover z-[-1]"
        autoPlay
        playsInline
        loop
        muted
      />
      <div
        className="space-y-8"
        style={{
          margin: "0 auto",
          maxWidth: "90vw",
        }}
      >
        <div className="space-y-4">
          <h1 className="text-6xl font-bold">
            Termina One, <br />
            Tech Wizards 🧙
          </h1>
          <p className="text-justify text-2xl">
            Termina One is a group of nerds founded by zuedev known for
            innovating the development of software and hardware for the tech
            industry. We are a team of professionals that have been working in
            the tech industry for over 10 years. We have worked with many
            companies and have helped them to develop their products and
            services.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-4xl font-bold">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a href="https://hosting.t1.zue.dev">
              <img src="/header_modern_cloud.png" alt="Modern Cloud" />
            </a>
            <a>
              <img src={placeholderImage} />
            </a>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-4xl font-bold">Customers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <a href="https://www.worldanvil.com">
              <img src="/customer-worldanvil.png" />
            </a>
            <a href="https://novembergames.com">
              <img src="/customer-novembergames.png" />
            </a>
            <a href="https://aspenwoolf.co.uk">
              <img src="/customer-aspenwoolf.png" />
            </a>
            <a href="https://www.baycat.co.uk">
              <img src="/customer-baycat.png" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
