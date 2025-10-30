"use client";

import React from 'react'
import { Card } from '@/app/components/ui/card'
import { Button } from '@/app/components/ui/button'
import { Github, FolderGit2 } from 'lucide-react';

interface IHomeSectionProps {
  id: string
}

function HomeSection({id}: IHomeSectionProps) {
  const strengths = [
    { id: 0, icon: "🧩", name: "Problem Solver", description: "복잡한 문제를 구조적으로 정리하고 해결하는 과정을 좋아해요."},
    { id: 1, icon: "🎨", name: "UX Focused", description: "기능 구현뿐 아니라, 사용성이 좋은 인터페이스를 함께 고민해요."},
    { id: 2, icon: "🌿", name: "Steady Growth", description: "작은 배움이라도 꾸준히 쌓아가며 성장하려고 해요."}
  ]
  const goToGithub = () => {
    window.open("https://github.com/hyemyn2", "_blank", "noopener,noreferrer")

  }
  const goToProject = () => {
    window.open("https://www.npmjs.com/package/vue-pivottable", "_blank", "noopener,noreferrer")
  }

  return (
    <section
      className="py-50"
    >
      <div
        className="flex"
      >
        <div>
          <h2
            className="text-6xl font-bold text-primary"
          >
            Frontend Developer
          </h2>
          <p
            className="text-3xl font-medium text-muted pt-5"
          >
            4년차 프론트엔드 개발자입니다.
            </p>
            <div
              className="pt-10"
            >
              <Button
                className="cursor-pointer mr-3"
                variant="accent"
                onClick={goToGithub}
              >
                Go to Github
                <Github/>
              </Button>
              <Button
                className="cursor-pointer"
                variant="secondary"
                onClick={goToProject}
              >
                Latest Project
                <FolderGit2/>
              </Button>
            </div>
        </div>
      </div>
      <div
        className="sm:flex mt-15 gap-x-8"
      >
        { strengths.map(item => (
          <Card
            key={`${item.id}-${item.name}`}
            className="sm:grow my-3 px-5"
          >
            <div>
              <span
                className="inline-block p-2 rounded-sm bg-zinc-800"

              >
                {item.icon}
              </span>
              <p
                className="py-3"
              >
                {item.name}
              </p>
              <span>
                {item.description}
              </span>
            </div>
          </Card>
        )) }
      </div>
    </section>
  )
}

export default HomeSection

                  {/* <Button 
                    onClick={() => handleScrollTo(item.id)}
                  >
                      {item.label}
                  </Button> */}
                    // const handleScrollTo = (id: string) => {
  //   document.getElementById(id)?.scrollIntoView({ behavior: "smooth"})
  // }