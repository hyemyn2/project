"use client";
import Image from 'next/image';
import React from 'react'
import {   SiReact, SiVuedotjs, SiTypescript, SiNodedotjs, SiGit, SiFigma, SiAmazon, SiReactquery, SiRedux, SiTailwindcss } from "react-icons/si";

interface IAboutSectionProps {
  id: string
}

function AboutSection({id}: IAboutSectionProps) {
  const skills = [
    { id: 0, icon: <SiReact className="w-8 h-8 text-blue-400" />, name: "React" },
    { id: 1, icon: <SiRedux className="w-8 h-8 text-green-500" />, name: "Redux" },
    { id: 2, icon: <SiReactquery className="w-8 h-8 text-purple-500" />, name: "React Query" },
    { id: 3, icon: <SiVuedotjs className="w-8 h-8 text-green-500" />, name: "Vue.js" },
    { id: 5, icon: <SiTailwindcss className="w-8 h-8 text-orange-500" />, name: "Tailwind" },
    { id: 6, icon: <SiFigma className="w-8 h-8 text-pink-500" />, name: "Figma" },
    { id: 5, icon: <SiGit className="w-8 h-8 text-orange-500" />, name: "Git" },
    { id: 7, icon: <SiAmazon className="w-8 h-8 text-yellow-500" />, name: "AWS" },
    { id: 8, icon: <SiTypescript className="w-8 h-8 text-blue-600" />, name: "TypeScript" },
    { id: 9, icon: <SiNodedotjs className="w-8 h-8 text-green-600" />, name: "Node.js" },
  ];
  
  return (
    <div
      id={id}
      className="w-full mt-80 scroll-mt-32"
    >
      <span className="text-zinc-500 text-4xl font-bold inline-block mb-20">ABOUT</span>
      <section className="max-w-4xl mx-auto py-4">
        <div className="w-full max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100 mb-6">
            Profile
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 mb-20">
            <Image
              src="/assets/profile.png"
              alt="profile"
              width={150}
              height={50}
              className="w-32 h-32 rounded-full object-cover shadow-md"
            />
            <div className="flex-1 text-zinc-700 dark:text-zinc-300">
              <div className="flex-1 text-zinc-700 dark:text-zinc-300">
                <p className="mb-3 text-zinc-700 dark:text-zinc-300">
                  <strong>이혜민</strong> · 프론트엔드 개발자
                </p>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm mb-2">
                  Vue와 React 기반 사내 서비스 개발 경험을 가진 개발자입니다.
                </p>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm mb-2">
                  사용자 중심 UI/UX 설계와 코드 구조 개선에 집중하며, 안정적이고 직관적인 서비스를 구현합니다.
                </p>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm">
                  현재는 TypeScript, React, 상태 관리, 폼 유효성 고도화를 중심으로 프로젝트를 진행 중입니다.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100 mb-6">
            Skills
          </h2>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-8 justify-items-center">
            {skills.map((skill) => (
              <div
                key={skill.id}
                className="flex flex-col items-center group transition-transform duration-200 hover:scale-105"
              >
                <div className="text-4xl text-zinc-600 dark:text-zinc-300 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">
                  {skill.icon}
                </div>
                <span className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutSection


  {/* <p className="text-zinc-500 mb-4">Frontend Developer</p>
            <p className="leading-relaxed mb-4">
              React 기반의 SaaS 플랫폼과 어드민 서비스를 개발하며,
              코드 구조의 일관성과 사용자의 경험을 동시에 고려하는 개발을 지향합니다.
              복잡한 로직을 단순하고 직관적인 UI로 표현하는 것에 보람을 느낍니다.
            </p>
            <p className="leading-relaxed">
              현재는 TypeScript와 React Hook Form을 기반으로
              컴포넌트 아키텍처 개선 및 폼 유효성 관리 고도화에 집중하고 있습니다.
            </p> */}
            {/* <a
              href="/assets/이혜민_이력서.pdf"
              download
              className="inline-flex items-center gap-2 mt-6 text-sm font-medium border border-zinc-300 dark:border-zinc-700 rounded-xl px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            >
              <span>Download Resume 📄</span>
            </a> */}