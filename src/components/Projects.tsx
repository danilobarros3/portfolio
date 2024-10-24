import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { useEffect, useState } from "react";
import axios from "axios";
import projectsImage from "../assets/projects.png";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";
import { motion, useAnimation } from "framer-motion";

interface Repo {
  name: string;
  description?: string;
  link: string;
}

interface GitHubRepo {
  name: string;
  description?: string;
  html_url: string;
  link: string;
}

export function Projects() {
  const [projects, setProjects] = useState<Repo[]>([]);
  const [_, setLoading] = useState<boolean>(true);
  const controls = useAnimation();

  const getDataProject = async () => {
    setLoading(true);
    try {
      const response = await axios.get<GitHubRepo[]>(
        "https://api.github.com/users/danilobarros3/repos"
      );
      const formattedProjects: Repo[] = response.data.map((repo) => ({
        description: repo.description,
        name: repo.name,
        link: repo.html_url,
      }));
      setProjects(formattedProjects);
    } catch (error) {
      console.error(error);
      toast.error("Erro ao buscar projetos do GitHub");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getDataProject();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const projectsSection = document.getElementById("projects");
      if (projectsSection) {
        const top = projectsSection.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
          controls.start({
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeInOut" },
          });
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  const { t } = useTranslation();

  return (
    <div
      id="projects"
      className="bg-primary py-4 px-4 md:px-16 lg:px-24 flex flex-col items-center gap-6 md:gap-10"
    >
      <motion.h1
        className="text-[#70FF00] text-3xl md:text-4xl font-bold text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
      >
        {t("projects")}
      </motion.h1>

      <motion.div
        className="w-full max-w-5xl"
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
      >
        <Carousel>
          <CarouselContent className="gap-4 md:gap-6 lg:gap-8 p-4 md:p-0">
            {projects.map((repo) => (
              <CarouselItem
                key={repo.name}
                className="p-2 md:p-4 max-w-full sm:max-w-[90%] md:max-w-[45%] lg:max-w-[30%] mx-auto"
              >
                <motion.div
                  className="grid gap-4 md:gap-6 items-center text-white"
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src={projectsImage}
                    alt={repo.name}
                    className="w-full h-auto rounded-lg"
                  />
                  <div className="text-center">
                    <h2 className="font-bold text-lg md:text-xl">
                      {repo.name}
                    </h2>
                    <p className="mt-2 mb-4 text-sm md:text-base">
                      {repo.description}
                    </p>
                    <a
                      href={repo.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#70FF00] hover:underline"
                    >
                      See on GitHub
                    </a>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden text-white hover:text-[#70ff00] items-center text-center" />
          <CarouselNext className="hidden text-white hover:text-[#70ff00] items-center text-center" />
        </Carousel>
      </motion.div>
    </div>
  );
}
