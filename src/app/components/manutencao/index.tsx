"use client";

import { getItemBySlug } from "@/app/utils/actions/get-data";
import { PostProps } from "@/app/utils/post.type";
import { useParams } from "next/navigation";
import React from "react";
import { Hero } from "../hero";
import { Phone } from "lucide-react";
import { Container } from "../container";
import styles from "./styles.module.scss";
import Image from "next/image";

export function GetManuntencao() {
  const { slug } = useParams();
  const [data, setData] = React.useState<PostProps>();

  React.useEffect(() => {

    async function fetchData() {
      if (slug) {
        if (typeof slug === "string") {
          const getData: PostProps = await getItemBySlug(slug);
          setData(getData);
        } else {
          console.error("Invalid slug:", slug);
        }
      }
    }
    fetchData();
  }, [slug]);

  return (
    <div>
      {data && (
        <Hero
          heading={data.object.title}
          buttonTitle={data.object.metadata.button.title}
          buttonUrl={data.object.metadata.button.url}
          bannerUrl={data.object.metadata.banner.url}
          icon={<Phone size={24} color="#fff" />}
        />
      )}

      <Container>
        <section className={styles.about}>
          <article className={styles.innerAbout}>
            <h1 className={styles.title}>
              {data?.object.metadata.description.title}
            </h1>
            <p>{data?.object.metadata.description.text}</p>

            {data?.object.metadata.description.button_active && (
              <a
                href={data?.object.metadata.description.button_url as string}
                target="_blank"
                className={styles.link}
              >
                {data?.object.metadata.description.buttton_title}
              </a>
            )}
          </article>

          <div className={styles.bannerAbout}>
            <Image
              className={styles.imageAbout}
              alt={data?.object.title as string}
              quality={100}
              fill
              priority
              sizes="(max-width: 480px) 100vw, (max-width: 1024px) 75vw, 60vw"
              src={data?.object.metadata.description.banner.url as string}
            />
          </div>
        </section>
      </Container>
    </div>
  );
}
