import "../page.css";

export default () => {
  return (
    <>
      <video
        src="/7649289-hd_1920_1080_30fps.mp4"
        className="fixed top-0 left-0 w-full h-full object-cover z-[-1]"
        autoPlay
        playsInline
        loop
        muted
      />

      <div className="flex flex-col h-full text-white">
        <h1 className="text-4xl font-bold">Lightspeed</h1>
        <p className="text-xl">
          High-performance fully-redudant application delivery.
        </p>
      </div>

      <hr className="border-t border-white my-8" />

      <div className="flex flex-col">
        <h2 className="text-2xl font-bold">Introduction</h2>
        <div className="text-lg space-y-4 mt-2">
          <p>
            Termina One's Lightspeed is designed to deliver both static and
            dynamic content at the fastest speeds possible. Our global network
            of data centers ensures that your content is always close to your
            users.
          </p>
          <p>
            Our Lightspeed platform is fully redundant, meaning that even if one
            data center goes down, your content will still be available to your
            users via one of our hundreds of partner data centers.
          </p>
        </div>
      </div>
    </>
  );
};
