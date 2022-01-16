import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import FeatureCard from "../components/FeatureCard";
import PriceCard from "../components/PriceCard";
import USPCard from "../components/USPCard";

export default function Home() {
  return (
    <div>
      <Head>
        <title>DeceNode - Sharing Power One Click Away</title>
        <meta
          name="description"
          content="We help users monetize their spare computation power by
                    hosting other users seeking affordable and accessible
                    processing."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={styles.landing}>
          <div className="container">
            <div className="row text-center mb-5">
              <div className="col-12">
                <Image
                  src={"/Group_11.png"}
                  width={300}
                  height={300}
                  alt="Globe Icon"
                />
              </div>
              <div className="col-12">
                <div>
                  <h1 className="display-3 fw-bold">
                    <span className="purple">Sharing Power</span> One Click Away
                  </h1>
                  <p className="text-muted description">
                    We help users monetize their spare computation power by
                    hosting other users seeking affordable and accessible
                    processing.
                  </p>
                  <a
                    href="https://discord.com/invite/b4nRGTjYqy"
                    className={`btn btn-primary btn-lg`}
                  >
                    Join Our Community!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-sm-4 text-center mb-2">
              <Image
                src={"/Group_27.png"}
                width={300}
                height={300}
                alt="Node Globe"
              />
            </div>
            <div className="col-sm-8">
              <h2 className="fw-bold">What Do We Do?</h2>
              <p className="text-muted description">
                Decenode provides ML Developers and Data Scientists with time
                and cost efficient computation power by utilizing idle computers
                via a decentralized peer-to-peer network.
              </p>
            </div>
          </div>
        </div>

        <div className={`features ${styles.bgpurple}`}>
          <div className="container py-5 text-center">
            <h2 className="fw-bold text-white mb-5">
              Our Decentralized Marketplace Platform Enables
            </h2>
            <div className="row">
              <div className="col-sm-4">
                <FeatureCard
                  img={"/Group_1.png"}
                  title={"Host"}
                  desc={
                    "To earn profits by renting out their spare, unused computation power to other users in need of it."
                  }
                />
              </div>
              <div className="col-sm-4">
                <FeatureCard
                  img={"/Group_2.png"}
                  title={"Rentee"}
                  desc={
                    "To access affordable computation power as opposed to expensive hardware upgrades or monopolized cloud computing."
                  }
                />
              </div>
              <div className="col-sm-4">
                <FeatureCard
                  img={"/Group_3.png"}
                  title={"Developer"}
                  desc={
                    "To utilize quick and easy developing environment setup to run power intensive AI/ML/Data-Science tasks."
                  }
                />
              </div>
            </div>
          </div>
        </div>

        <div className="pricing">
          <div className="container py-5 text-center">
            <h2 className="fw-bold mb-3">Simple Pricing Plans</h2>
            <p className="text-muted mb-5 description">
              We offer competitive plans to match your use case
            </p>
            <div className="row">
              <div className="col-sm-4 mb-2">
                <PriceCard
                  title="Basic"
                  price="0"
                  caption="Ideal for beginners and hobbies"
                  desc1="Pay as you Go"
                  desc2="Hourly Rates Decided by the Hosts (as Low as 1$ per Hour)"
                  desc3="6% Per Transaction + 0.30"
                  btn="Get Started for FREE!"
                />
              </div>
              <div className="col-sm-4 mb-2">
                <PriceCard
                  title="Pro"
                  price="10"
                  caption="For frequent users what need more"
                  desc1="PAll Benefits as Basic"
                  desc2="24/7 Live Support"
                  desc3="4% per transaction + 0.30 cents"
                  btn="Get Started"
                />
              </div>
              <div className="col-sm-4 mb-2">
                <PriceCard
                  title="Enterprise"
                  price="50"
                  caption="Ideal for beginners and hobbies"
                  desc1="All Benefits as Basic"
                  desc2="24/7 Live Support"
                  desc3="2% per transaction + 0.30 cents"
                  btn="Get Started"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="USP">
          <div className="container py-5 text-center">
            <h2 className="fw-bold mb-3">Features That Set Us Apart</h2>
            <p className="text-muted mb-5 description">
              Our unique features makes us different from others while offering
              the best to our users
            </p>
            <div className="row">
              <div className="col-sm-6">
                <USPCard
                  img="/Group_11.png"
                  title="Curated for ML Developers"
                  desc="We focus on creating a user-friendly platform making development easy for AI and ML practitioners."
                />
              </div>
              <div className="col-sm-6">
                <USPCard
                  img="/Group_22.png"
                  title="Plugin System For Easier Development"
                  desc="We provide a rich plugin system for hassle-free setup of your custom development environment."
                />
              </div>
              <div className="col-sm-6">
                <USPCard
                  img="/Group_33.png"
                  title="Currency Based, Non-Volatile Transactions"
                  desc="Unlike Web3.0 platforms, we operate on non-crypto payment methods using simple, day-to-day currency based transactions."
                />
              </div>
              <div className="col-sm-6">
                <USPCard
                  img="/Group_44.png"
                  title="Academically backed and Open Source"
                  desc="Our decentralized P2PRC network is academically published and is an open source contribution"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="team">
          <div className="container py-5 text-center">
            <h2 className="fw-bold mb-3">Our Team</h2>
            <p className="text-muted mb-5 description">
              Meet our dynamic team geared up to innovate and revolutionize
            </p>
            <Image
              src={"/Group_24.png"}
              width={1920}
              height={732}
              alt="Our Team"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
