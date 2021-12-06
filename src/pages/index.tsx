import type { NextPage } from "next";
import { useRef } from "react";
import Image from "next/image";
import { Text, Input, Button, useToast } from "@chakra-ui/react";

import firebase from "@/libs/firebase";

import { Container } from "@/components/Container.js";
// import { DarkModeSwitch } from "@/components/DarkModeSwitch.js";

import feature from "@/sections/soon/images/feature.json";
import feature_ease from "@/sections/soon/images/feature_ease.json";
import icon_facebook from "@/sections/soon/images/icon_facebook.json";
import icon_twitter from "@/sections/soon/images/icon_twitter.json";
import icon_instagram from "@/sections/soon/images/icon_instagram.json";

import validation from "@/sections/soon/validation";

import s from "@/sections/soon/style.module.scss";

type Props = {
  data: object;
};

const Home: NextPage<Props> = () => {
  const toast = useToast();
  const emailRef = useRef<HTMLInputElement | null>();

  const handleValidation = (el) => {
    let email = el.value;
    const { valid, errors } = validation({ email });

    if (!valid) {
      toast({
        // title: errors.email,
        description: errors["email"],
        status: "error",
        duration: 3000,
        isClosable: true,
      });

      return false;
    }

    return true;
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();
    let el = emailRef.current;

    let isValid = handleValidation(el);
    if (!isValid) return;

    const db = firebase.firestore();
    let colRef = db.collection("subscribers");

    let query = colRef
      .where("email", "==", el.value)
      .get()
      .then(async (snapshot) => {
        if (!snapshot.empty) {
          return toast({
            // title: errors.email,
            description: "Congrats, already subscribed.",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
        }

        let res = await colRef.add({
          createdate: new Date().toISOString(),
          email: el.value,
          type: "comingsoon",
        });

        colRef
          .doc(res.id)
          .update({ id: res.id })
          .then(() => {
            toast({
              // title: errors.email,
              description: "Subscribe successfully done!",
              status: "success",
              duration: 3000,
              isClosable: true,
            });

            el.value = "";
          })
          .catch((error) => {
            console.error(error);
          });
      })
      .catch((error) => {
        console.error(error);
      });
  };

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

        <div className={s.subscribe}>
          <h2>To know more subscribe with us.</h2>

          <form
            className={s.form}
            action=""
            onSubmit={handleSubscribe}
            noValidate
          >
            <input type="email" placeholder="Your email ID" ref={emailRef} />
            <button type="submit">Subscribe</button>
          </form>
        </div>

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
              src={feature.base64}
              alt="Bechke feature"
              title="Bechke feature"
              width={375}
              height={305}
            />
          </figure>

          <p>You and your customer direct. No interfer till you don’t want.</p>

          <figure>
            <Image
              src={feature_ease.base64}
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
                  src={icon_facebook.base64}
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
                  src={icon_twitter.base64}
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
                  src={icon_instagram.base64}
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

// export async function getServerSideProps(context) {
//   const res = await fetch(`http://localhost:2000/api/subscribers`);
//   const data = await res.json();
//   if (!data) {
//     return {
//       notFound: true,
//     };
//   }
//   return {
//     props: { data }, // will be passed to the page component as props
//   };
// }
