/* About is a Server Component: the skills are static and can be rendered at build time.
   Icons from devicons-react are used (client-safe as they render as SVG), but importing them inside
   a server component is fine because they are static. If an icon package required browser-only APIs,
   we'd mark this as 'use client'. */

import PythonOriginal from "devicons-react/icons/PythonOriginal";
import COriginal from "devicons-react/icons/COriginal";
import CplusplusOriginal from "devicons-react/icons/CplusplusOriginal";
import JavaOriginal from "devicons-react/icons/JavaOriginal";
import JavascriptOriginal from "devicons-react/icons/JavascriptOriginal";
import Html5Original from "devicons-react/icons/Html5Original";
import Css3Plain from "devicons-react/icons/Css3Plain";
import ROriginal from "devicons-react/icons/ROriginal";

import ReactOriginal from "devicons-react/icons/ReactOriginal";
import NodejsOriginal from "devicons-react/icons/NodejsOriginal";
import FastapiOriginal from "devicons-react/icons/FastapiOriginal";

import MysqlOriginal from "devicons-react/icons/MysqlOriginal";
import PostgresqlOriginal from "devicons-react/icons/PostgresqlOriginal";
import MongodbOriginal from "devicons-react/icons/MongodbOriginal";

import GitOriginal from "devicons-react/icons/GitOriginal";
import GithubOriginal from "devicons-react/icons/GithubOriginal";
import DockerOriginal from "devicons-react/icons/DockerOriginal";
import LinuxOriginal from "devicons-react/icons/LinuxOriginal";

const skills = [
  { title: "Python", icon: PythonOriginal, url: "https://www.python.org/doc/" },
  { title: "C", icon: COriginal, url: "https://en.wikipedia.org/wiki/C_(programming_language)" },
  { title: "C++", icon: CplusplusOriginal, url: "https://en.wikipedia.org/wiki/C%2B%2B" },
  { title: "Java", icon: JavaOriginal, url: "https://docs.oracle.com/javase/8/docs/" },
  { title: "JavaScript", icon: JavascriptOriginal, url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { title: "HTML5", icon: Html5Original, url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { title: "CSS3", icon: Css3Plain, url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { title: "R", icon: ROriginal, url: "https://www.r-project.org/" },

  { title: "React", icon: ReactOriginal, url: "https://react.dev/" },
  { title: "Node.js", icon: NodejsOriginal, url: "https://nodejs.org/en/docs/" },
  { title: "FastAPI", icon: FastapiOriginal, url: "https://fastapi.tiangolo.com/" },

  { title: "MySQL", icon: MysqlOriginal, url: "https://dev.mysql.com/doc/" },
  { title: "PostgreSQL", icon: PostgresqlOriginal, url: "https://www.postgresql.org/docs/" },
  { title: "MongoDB", icon: MongodbOriginal, url: "https://www.mongodb.com/docs/" },

  { title: "Git", icon: GitOriginal, url: "https://git-scm.com/doc" },
  { title: "GitHub", icon: GithubOriginal, url: "https://docs.github.com/" },
  { title: "Docker", icon: DockerOriginal, url: "https://docs.docker.com/" },
  { title: "Linux", icon: LinuxOriginal, url: "https://kernel.org/doc/html/latest/" },
];

export default function About() {
  return (
    <section id="about" className="py-12">
      <h3 className="text-xl font-bold mb-4 text-primary">About me</h3>

      <p className="mb-4">
        Currently a Computer Engineering student with a strong passion for coding and network management, and eager to dive into real-world
        challenges. I am an outgoing, collaborative developer who enjoys working with others, sharing ideas, and learning through teamwork.
        Whether it's coding alone, side-by-side, tackling networking tasks, or contributing to a group project, I'm ready to take any challenge
        head on!
      </p>

      <p className="mb-4">
        I'm experienced in the following programming languages and tools:
      </p>

      <div className="flex flex-wrap gap-6 justify-center">
        {skills.map(({ title, icon: Icon, url, text }) =>
          Icon ? (
            <a
              key={title}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              title={title}
              className={
                `flex items-center justify-center
                w-16 h-16
                bg-white dark:bg-gray-800
                border border-gray-300 dark:border-gray-600
                rounded-xl
                shadow
                transition-transform duration-300
                hover:scale-110
                hover:shadow-xl
                cursor-pointer`
              }
            >
              <Icon size={32} />
            </a>
          ) : (
            <span
              key={title}
              title={title}
              className="
                flex items-center justify-center
                w-16 h-16
                border border-gray-300 dark:border-gray-600
                rounded-xl
                text-blue-500
                font-semibold
                text-sm
                cursor-default
                select-none
              "
            >
              {text}
            </span>
          )
        )}
      </div>
    </section>
  )
}
