"use client";
import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription } from '@/app/components/ui/card'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/app/components/ui/accordion'
import { Badge } from '../ui/badge';

interface ICareerSectionProps {
  id: string
}

function CareerSection({id}: ICareerSectionProps) {
  const career = [
    {
      id: 0,
      period: "2022.02 - 2022.10",
      project: "사내 빌링팀 전용 데이터 조회 서비스 개발",
      description: [
        "사내 빌링팀의 업무 효율 향상을 위해 데이터 조회 전용 서비스 설계 및 개발",
        "프론트엔드 개발 전 과정을 단독으로 기획·구현·배포",
        "유지보수 및 추가 기능 개발을 통해 서비스 안정성 확보 및 팀 업무 처리 속도 향상"
      ],
      techStack: ["Vue.js", "Vuex"]
    },
    {
      id: 1,
      period: "2022.11 - 2023.08",
      project: "사내 어드민 서비스 개편 및 기능 개선",
      description: [
        "새로운 디자인으로 어드민 서비스를 개발하고 초기 구조 설계",
        "사내 빌링팀과 협업하여 UI/UX 개선 및 핵심 기능 추가 개발",
        "서비스 사용 단계 단축 및 업무 처리 효율 향상"
      ],
      techStack: ["Vue.js", "Vuex"]
    },
    {
      id: 2,
      period: "2023.09 - 2023.12",
      project: "팀 내 주요 서비스 개선 및 UI/UX 정비",
      description: [
        "팀 내 주요 서비스를 담당하며, 기능 우선순위 및 필요/불필요 메뉴를 분석하고 개선 방향 정리",
        "UI 통일성과 UX 문제를 PPT로 시각화하여 회의에서 제안, 팀 합의를 통해 기능 개선 주도",
        "서비스 접근성 향상 및 사용 단계 단축으로 업무 편의성 개선"
      ],
      techStack: ["Vue.js", "Vuex"]
    },
    {
      id: 3,
      period: "2024.01 - 2024.06",
      project: "커스텀 대시보드 개발 및 도입",
      description: [
        "주요 데이터 시각화를 위해 커스텀 대시보드 설계·개발 주도",
        "초기 도입 후 다른 서비스에도 적용 가능하도록 확장성 고려",
        "랜딩페이지에서 사용자가 원하는 차트를 자유롭게 구성 가능하도록 구현",
        "실제 사용자 만족도 긍정적 피드백 획득"
      ],
      techStack: ["Vue.js", "Vuex"]
    },
    {
      id: 4,
      period: "2024.07 - 2024.08",
      project: "일본 서비스 개편 및 배포",
      description: [
        "국내 서비스를 일본 법인 환경에 맞게 개편·마이그레이션 및 배포 주도",
        "UI/UX 개선을 통해 일본 서비스 환경 최적화",
        "AWS 파이프라인 설정을 통한 배포 자동화로 안정적인 운영 지원",
        "배포 이후 모니터링 및 유지보수 수행"
      ],
      techStack: ["Vue.js", "Vuex"]
    },
    {
      id: 5,
      period: "2024.09 - 2024.10",
      project: "Vue3 버전 피벗테이블 라이브러리 개발",
      description: [
        "기존 vue-pivottable 라이브러리를 분석 후, Vue3 환경에 맞춰 새로 개발",
        "React 및 render function 구조로 되어 있던 기존 코드를 개선하여 Vue3 기반으로 전환",
        "개발한 라이브러리를 팀 내 활용을 위해 npm에 배포하고 내부 테스트 및 운영 수행"
      ],
      techStack: ["Vue.js", "Vuex"]
    },
    {
      id: 6,
      period: "2024.11 - 2024.12",
      project: "리액트 기술 도입을 위한 데모 서비스 개발",
      description: [
        "기존 Vue 기반 사내 서비스를 대상으로 React 도입 가능성을 검증하기 위해 데모 서비스 개발",
        "프로젝트 결과를 바탕으로 React 기술 도입을 공식 제안, 이후 신규 프로젝트부터 React로 전환"
      ],
      techStack: ["React", "Redux", "React-query", "TypeScript"]
    },
    {
      id: 7,
      period: "2025.01 - 현재",
      project: "어드민 서비스 개편",
      description: [
        "사내 어드민 서비스를 통합 빌링 서비스 목표에 맞춰 새롭게 개발",
        "서비스 구조 설계 및 개발을 통해 다중 클라우드 환경 통합 가능성 확보",
        "현재 배포 및 운영 중이며, 지속적인 고도화 작업 수행"
      ],
      techStack: ["React", "Zustand", "React-query", "TypeScript", "Storybook"]
    },
  ];
  
  return (
    <div
      id={id}
      className="w-full mt-80 scroll-mt-32"
    >
      <span className="text-zinc-500 text-4xl font-bold inline-block mb-20">CAREER</span>
      <section className="max-w-4xl mx-auto py-4">
        <div className="flex flex-col lg:flex-row gap-x-20 gap-y-10 mb-12">
          <div className="lg:w-1/3 space-y-4">
            <Card className="px-3 py-6">
              <CardHeader>
                <CardTitle>메가존클라우드주식회사</CardTitle>
                <CardDescription>
                  Frontend Developer · Manager <br />
                  2022.02 – 현재 (3년 9개월)
                </CardDescription>
              </CardHeader>
            </Card>
            <div className="p-4">
              <h3 className="mb-2 text-zinc-800 dark:text-zinc-100">
                담당 업무
              </h3>
              <ul className="list-disc pl-5 text-sm space-y-1 text-zinc-600 dark:text-zinc-400">
                <li>주요 기능 구현 및 코드 구조 개선 담당</li>
                <li>기획 의도에 맞는 UI/UX 제안 및 구현</li>
                <li>협업을 통한 코드 품질 및 일관성 유지</li>
                <li>사용자 피드백 기반 기능 개선</li>
                <li>신규 기술 검토 및 도입 논의 참여</li>
              </ul>
            </div>
          </div>
          <div className="lg:w-2/3 space-y-4">
          <Accordion
            type="single"
            collapsible
          >
            {career.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={`item-${item.id}`}
                >
                  <AccordionTrigger className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-zinc-800 dark:text-zinc-100 font-medium">
                    <span className="sm:mr-4 text-sm text-zinc-500 dark:text-zinc-400">{item.period}</span>
                    <span className="font-semibold">{item.project}</span>
                  </AccordionTrigger>
                  <AccordionContent className="pl-4 text-zinc-600 dark:text-zinc-400">
                    <ul className="list-disc space-y-1 text-sm">
                      {item.description.map((desc, idx) => (
                        <li key={idx}>{desc}</li>
                      ))}
                    </ul>
                    <div className="mt-5">
                      { item.techStack.map(tech => (
                        <Badge key={tech}
                          variant="secondary"
                          className="mr-2"
                        >
                          # {tech}
                        </Badge>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
            ))}
            </Accordion>
          </div>
        </div>
      </section>
  </div>
  )
}

export default CareerSection
