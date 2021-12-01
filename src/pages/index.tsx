import type { NextPage } from "next";
import Image from "next/image";
import { Text } from "@chakra-ui/react";

import { Container } from "@/components/Container.js";
// import { DarkModeSwitch } from "@/components/DarkModeSwitch.js";

import s from "@/sections/index/style.module.scss";

const Home: NextPage = () => {
  return (
    <div className={s.soon}>
      <Container height="100vh">
        {/* <DarkModeSwitch /> */}
        <header>
          <div className={s.logo}>
            Bechke
            <small>alpha0.1</small>
          </div>
        </header>

        <h1 className={s.tagline}>
          Your product, your customer and your money.
        </h1>

        <div className={s.about}>
          <p>
            Bechke, is a unique marketplace for small sellers, housewives &amp;
            shopkeepers who want to sell products without any hassle.
          </p>
          <p>
            Hassles like &quot;knowing your customer&quot; (KYC), current bank
            account, platform commission, or so-called platform service fees.
          </p>
          <p>
            Here, it’s only you and your customers. We just trying to ease your
            product listing.
          </p>
          <p>Easy like you update your status.</p>
        </div>

        <div className={s.features}>
          <figure>
            <Image
              src="/images/soon/feature.png"
              alt="Bechke feature"
              title="Bechke feature"
              width={375}
              height={305}
            />
          </figure>

          <p>You and your customer direct. No interfer till you don’t want.</p>

          <figure>
            <Image
              src="/images/soon/feature-ease.png"
              alt="Bechke feature"
              title="Bechke feature"
              width={375}
              height={375}
            />
          </figure>
        </div>

        <div className={s.social}>
          <p>Follow us social network</p>

          <ul>
            <li>
              <a
                href="https://www.facebook.com/bechkeapp"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src="/images/soon/icon-facebook.png"
                  alt="Facebook link"
                  title="Facebook link"
                  width={50}
                  height={50}
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com/bechkeapp"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src="/images/soon/icon-twitter.png"
                  alt="Twitter link"
                  title="Twitter link"
                  width={50}
                  height={50}
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/bechkeapp"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src="/images/soon/icon-instagram.png"
                  alt="Instagram link"
                  title="Instagram link"
                  width={50}
                  height={50}
                />
              </a>
            </li>
          </ul>
        </div>

        <footer className={s.copyright}>
          <Text align="center">© 2021 Bechke</Text>
        </footer>
      </Container>
    </div>
  );
};

export default Home;
