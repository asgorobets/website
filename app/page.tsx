import Image from "next/image";
import { socialLinks } from "./config";
import Link from "next/link";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.twitter} target="_blank">
        <Image
          src="/profile.jpg"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>

      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        Hi there! I'm Alexei Gorobet
      </h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p className="text-xl">
          I'm a software engineer in webdev
        </p>
        <p>
          I built websites for clients using Next.js, Vercel, Drupal, Contentful, Payload CMS and other cool tech.
        </p>
        <p>
          You can find my public work on my{" "}
          <a href={socialLinks.github} target="_blank">
            github
          </a>{" "}, but I'll occasionally write about my experiments on my <Link href='/blog'>blog</Link>
        </p>
        <p>

        </p>
        <p>
          This site is open-source and can be found here{" "}
          <a href={socialLinks.github + '/website'} target="_blank">here</a>

        </p>
        <p>
          Thanks to <a href="https://imsirius.xyz/" target="_blank">Sirius</a> for an excellent <a href="https://github.com/1msirius/Nextfolio" target="_blank">portfolio starter</a>
        </p>
      </div>
    </section>
  );
}
