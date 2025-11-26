/*
  Projects is a Server Component that references static media files in /public/assets.
  Videos are included using the <video> tag; Next.js will serve them from /public.
  Consider serving heavy videos from a CDN for production.
*/

const projects = [
  {
    name: "Recommendations engine",
    description:
      "API developed with FastAPI that recommends commercial services to users within an airport, taking into account their location and visit history.",
    url: "https://github.com/Wallace3228/Recommendations-engine",
    media: "/assets/demo1.mp4",
    type: "video",
  },
  {
    name: "Racing Manager Frontend design",
    description: "Mobile App UI prototype based on Axure.",
    url: "https://github.com/Wallace3228/Mobile-App-UX-UI-Prototype",
    media: "/assets/demo4.mp4",
    type: "video",
  },
  {
    name: "Connect 4 AI Player",
    description: "Minimax-based Connect 4 player built on Java.",
    url: "https://github.com/Wallace3228/Jugador-Connecta4-Minimax",
    media: "/assets/demo2.webm",
    type: "video",
  },
  {
    name: "Hex AI Player",
    description: "Dijkstra-based Hex player built on Java.",
    url: "https://github.com/Wallace3228/Jugador-Hex-Dijkstra",
    media: "/assets/demo3.webm",
    type: "video",
  },
  {
    name: "Recommendations engine",
    description:
      "API developed with FastAPI that recommends commercial services to users within an airport, taking into account their location and visit history.",
    url: "https://github.com/Wallace3228/Recommendations-engine",
    media: "/assets/demo1.mp4",
    type: "video",
  },
  {
    name: "Racing Manager Frontend design",
    description: "Mobile App UI prototype based on Axure.",
    url: "https://github.com/Wallace3228/Mobile-App-UX-UI-Prototype",
    media: "/assets/demo4.mp4",
    type: "video",
  },
  {
    name: "Connect 4 AI Player",
    description: "Minimax-based Connect 4 player built on Java.",
    url: "https://github.com/Wallace3228/Jugador-Connecta4-Minimax",
    media: "/assets/demo2.webm",
    type: "video",
  },
  {
    name: "Hex AI Player",
    description: "Dijkstra-based Hex player built on Java.",
    url: "https://github.com/Wallace3228/Jugador-Hex-Dijkstra",
    media: "/assets/demo3.webm",
    type: "video",
  },
  {
    name: "Recommendations engine",
    description:
      "API developed with FastAPI that recommends commercial services to users within an airport, taking into account their location and visit history.",
    url: "https://github.com/Wallace3228/Recommendations-engine",
    media: "/assets/demo1.mp4",
    type: "video",
  },
  {
    name: "Racing Manager Frontend design",
    description: "Mobile App UI prototype based on Axure.",
    url: "https://github.com/Wallace3228/Mobile-App-UX-UI-Prototype",
    media: "/assets/demo4.mp4",
    type: "video",
  },
  {
    name: "Connect 4 AI Player",
    description: "Minimax-based Connect 4 player built on Java.",
    url: "https://github.com/Wallace3228/Jugador-Connecta4-Minimax",
    media: "/assets/demo2.webm",
    type: "video",
  },
  {
    name: "Hex AI Player",
    description: "Dijkstra-based Hex player built on Java.",
    url: "https://github.com/Wallace3228/Jugador-Hex-Dijkstra",
    media: "/assets/demo3.webm",
    type: "video",
  },
  {
    name: "Recommendations engine",
    description:
      "API developed with FastAPI that recommends commercial services to users within an airport, taking into account their location and visit history.",
    url: "https://github.com/Wallace3228/Recommendations-engine",
    media: "/assets/demo1.mp4",
    type: "video",
  },
  {
    name: "Racing Manager Frontend design",
    description: "Mobile App UI prototype based on Axure.",
    url: "https://github.com/Wallace3228/Mobile-App-UX-UI-Prototype",
    media: "/assets/demo4.mp4",
    type: "video",
  },
  {
    name: "Connect 4 AI Player",
    description: "Minimax-based Connect 4 player built on Java.",
    url: "https://github.com/Wallace3228/Jugador-Connecta4-Minimax",
    media: "/assets/demo2.webm",
    type: "video",
  },
  {
    name: "Hex AI Player",
    description: "Dijkstra-based Hex player built on Java.",
    url: "https://github.com/Wallace3228/Jugador-Hex-Dijkstra",
    media: "/assets/demo3.webm",
    type: "video",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-12">
      <h3 className="text-2xl font-bold mb-10 text-primary text-center">
        Projects
      </h3>
      <div className="space-y-10">
        {projects.map((project, i) => (
          <div
            key={i}
            className="flex flex-col md:flex-row items-center gap-6 border rounded-xl p-6 bg-white dark:bg-gray-800 dark:border-gray-600 shadow hover:shadow-xl transition max-w-5xl mx-auto h-auto md:h-[260px]"
          >
            <div className="md:w-1/2 w-full h-full flex flex-col justify-center">
              <h4 className="text-2xl font-bold mb-3">{project.name}</h4>
              <p className="text-base leading-relaxed mb-4 text-gray-700 dark:text-gray-300">
                {project.description}
              </p>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-medium hover:underline text-base"
              >
                View on GitHub →
              </a>
            </div>

            <div className="md:w-1/2 w-full h-full flex items-center justify-center md:justify-end">
              {project.type === "image" ? (
                <img src={project.media} alt={project.name} className="max-h-full max-w-full md:max-w-[320px] object-contain rounded" />
              ) : (
                <video
                  src={project.media}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="max-h-full max-w-full md:max-w-[320px] object-contain rounded"
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
