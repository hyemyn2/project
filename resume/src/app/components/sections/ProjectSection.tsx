"use client";
import React from 'react'
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Github, MonitorSmartphone } from 'lucide-react';
// import Image from "next/image";

interface IProjectSectionProps {
  id: string
}

interface IProject {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  serviceLink?: string;
  codeLink?: string;
}

const projects: IProject[] = [
  {
    id: 0,
    title: "투두 인 캘린더",
    description: "Vue.js를 학습한 후 만든 캘린더 서비스입니다.\n구글 캘린더의 UI를 벤치마킹하고, 투두 기능을 결합했습니다.",
    techStack: ["Vue.js"],
    serviceLink: "https://hyemyn2.github.io/project/todo-calendar",
    codeLink: "https://github.com/hyemyn2/todo-calendar"
  },
  {
    id: 1,
    title: "Vue3 피벗테이블 라이브러리 개발",
    description: "기존 vue-pivottable을 Vue3 환경에 맞게 새로 개발하여 npm에 배포했습니다.\nrender function으로 작성된 코드를 Vue3 스타일로 전환하였으며, 주간 다운로드 수 1,000회 이상을 기록하고 있습니다.",
    techStack: ["Vue.js"],
    serviceLink: "https://vue-pivottable.vercel.app/",
    codeLink: "https://github.com/vue-pivottable/vue3-pivottable"
  }
  // {
  //   id: 2,
  //   title: "리액트 기술 도입 데모 서비스",
  //   description:
  //     "기존 Vue 기반 사내 서비스를 대상으로 React 도입 가능성을 검증하기 위해 데모 서비스 개발. 프로젝트 결과를 바탕으로 신규 프로젝트 React 전환 제안.",
  //   techStack: ["React", "Redux", "React-query", "TypeScript"],
  // }
];

function ProjectSection({id}: IProjectSectionProps) {
  const openLink = (link?: string) => {
    if (!link) return;
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      id={id}
      className="w-full mt-80 scroll-mt-32"
    >
      <span className="text-zinc-500 text-4xl font-bold inline-block mb-20">PROJECTS</span>
      <section className="max-w-4xl mx-auto py-4 flex flex-col gap-10">
        {projects.map((project) => (
          <Card key={project.id} className="p-6 flex flex-col justify-between gap-y-10 h-full hover:shadow-lg hover:scale-[1.02] transition-transform duration-200">
            <div>
              <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100 mb-3">
                {project.title}
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4 whitespace-pre-line">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    # {tech}
                  </Badge>
                ))}
              </div>
            </div>
            <div
              className="flex flex-wrap gap-3"
            >
              {project.serviceLink && (
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => openLink(project.serviceLink)}
                >
                  사이트 구경가기 <MonitorSmartphone/>
                </Button>
              )}
              {project.codeLink && (
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => openLink(project.codeLink)}
                >
                  코드 보러가기 <Github/>
                </Button>
              )}
            </div>
          </Card>
        ))}
      </section>
  </div>
  )
}

export default ProjectSection
