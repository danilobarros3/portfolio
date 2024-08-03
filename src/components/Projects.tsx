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

interface Repo {
  name: string;
  description: string;
  link: string;
}

interface GitHubRepo {
  name: string;
  description?: string;
  html_url: string;
}

interface GitHubRepoLanguages {
  [language: string]: number;
}

export function Projects() {
  const [projects, setProjects] = useState<Repo[]>([]);
  const [_, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const getDataProjects = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get<GitHubRepo[]>(
        "https://api.github.com/users/danilobarros3/repos"
      );
      const repos = response.data;

      const fetchLanguagesPromises = repos.map(async (repo) => {
        try {
          const languagesResponse = await axios.get<GitHubRepoLanguages>(
            `https://api.github.com/repos/danilobarros3/${repo.name}/languages`
          );
          const languages = languagesResponse.data;

          return {
            name: repo.name,
            description: repo.description || "Sem descrição",
            link: repo.html_url,
            hasJava: languages["Java"] !== undefined,
          };
        } catch {
          return {
            name: repo.name,
            description: repo.description || "Sem descrição",
            link: repo.html_url,
            hasJava: false,
          };
        }
      });

      const reposWithLanguages = await Promise.all(fetchLanguagesPromises);

      const filteredProjects: Repo[] = reposWithLanguages
        .filter((repo) => !repo.hasJava)
        .map((repo) => ({
          name: repo.name,
          description: repo.description,
          link: repo.link,
        }));

      setProjects(filteredProjects);
    } catch (error) {
      console.error("Erro ao buscar os projetos do GitHub", error);
      setError("Erro ao buscar os projetos do GitHub. Tente novamente mais tarde.");
      toast.error("Erro ao buscar os projetos do GitHub. Tente novamente mais tarde.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getDataProjects();
  }, []);

  return (
    <div
      id="projects"
      className="bg-primary py-10 px-4 md:px-16 lg:px-24 flex flex-col items-center gap-10"
    >
      <h1 className="text-[#70FF00] text-3xl md:text-4xl font-bold text-center">
        projects( )
      </h1>
      {error && <p className="text-red-500 text-center">{error}</p>}
      <div className="w-full max-w-4xl">
        <Carousel>
          <CarouselContent className="gap-6 md:gap-8">
            {projects.map((repo) => (
              <CarouselItem key={repo.name} className="p-4 md:p-6">
                <div className="grid gap-6 md:gap-8 items-center text-white">
                  <img
                    src={projectsImage}
                    alt={repo.name}
                    className="w-full h-auto rounded-lg"
                  />
                  <div className="text-center">
                    <h2 className="font-bold text-lg md:text-xl">
                      {repo.name}
                    </h2>
                    <p className="mt-4 mb-6 text-sm md:text-base">
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
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-white hover:text-[#70ff00]" />
          <CarouselNext className="text-white hover:text-[#70ff00]" />
        </Carousel>
      </div>
    </div>
  );
}
