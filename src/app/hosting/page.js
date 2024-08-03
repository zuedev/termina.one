export default () => {
  return (
    <div className="space-y-32 mb-32">
      <div className="bg-[url('/rainbow.png')] bg-cover bg-center bg-no-repeat bg-fixed py-32">
        <div className="max-w-5xl mx-auto space-y-8 text-center">
          <h1 className="text-6xl flex flex-col items-center space-y-4">
            <span className="drop-shadow">Modern Cloud.</span>
            <span className="font-bold bg-black text-[yellow] p-4">
              ZERO MARKUPS.
            </span>
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto space-y-4">
        <p className="text-4xl">
          That's right,{" "}
          <span className="font-bold bg-[yellow] text-black py-0.5 px-2">
            ZERO MARKUPS.
          </span>
        </p>
        <p className="text-xl text-justify">
          Termina One is a modern cloud hosting provider committed to providing
          a simple, secure, and cost-effective way to run your production
          workloads. Our main selling point is that we don't charge any markups
          on your cloud bill, so you can focus on what matters most: running
          your business.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-4">
        <h2 className="text-4xl flex items-center space-x-4 font-bold">
          <span className="bg-[yellow] text-black py-0.5 px-2">YOUR BILL</span>
          <span>=</span>
          <span className="bg-[red] text-black py-0.5 px-2">vendor costs</span>
          <span>+</span>
          <span className="bg-[lime] text-black py-0.5 px-2">labour</span>
        </h2>
        <p className="text-xl text-justify">
          We're engineers and solutions architects at Termina One, not sales
          people. That's why we believe in providing top-tier servicing and
          consultancy instead of white-labelling another company's product.
          Account bills are separated and itemized into your infrastructure's
          base costs and the labour costs for any service requests.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-4">
        <h2 className="text-4xl flex items-center space-x-4 font-bold underline">
          EXAMPLE
        </h2>
        <p className="text-xl text-justify">
          All prices listed here are for demonstrative purposes only. Each
          account is unique and prices may vary depending on your requirements.
        </p>
        {[
          {
            name: "Static Site Hosting",
            content: (
              <>
                <p>
                  A 100MB web app that has 10,000 daily active users and is
                  updated 2 times per day with an average build time of 3
                  minutes and an average page size of 1.5MB.
                </p>
                <p>
                  <span className="font-bold">Vendor Costs (AWS)</span>
                  <br />
                  <ul>
                    <li>120 minutes of build & deploy: $1.20 / month</li>
                    <li>3.9GB of stored data: $0.09 / month</li>
                    <li>439.45GB of served pages: $65.92 / month</li>
                  </ul>
                </p>
                <p>
                  <span className="font-bold">Labour (Termina One)</span>
                  <br />
                  <ul>
                    <li>Initial consultation: $50 (USD) / one time</li>
                    <li>CI/CD setup: $25 / one time</li>
                    <li>Proactive monitoring: $10 / month</li>
                  </ul>
                </p>
                <p className="font-bold text-xl">
                  Total Cost:{" "}
                  <span className="bg-[yellow] text-black py-0.25 px-1">
                    $152.21
                  </span>{" "}
                  first month, then{" "}
                  <span className="bg-[yellow] text-black py-0.25 px-1">
                    $77.21
                  </span>{" "}
                  monthly
                </p>
              </>
            ),
          },
        ].map((example, index) => (
          <div key={index} className="space-y-4 bg-[yellow]">
            <h3 className="text-2xl font-bold bg-[yellow] p-4 pb-0 text-black">
              {example.name}
            </h3>
            <div className="space-y-2 border-4 border-[yellow] p-4 bg-black">
              {example.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
