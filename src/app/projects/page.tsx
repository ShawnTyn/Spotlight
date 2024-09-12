import { type Metadata } from 'next'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoAIGCBrotian from '@/images/logos/brotian.svg'
import logoLLaMAFactory from '@/images/logos/llama-factory.jpg'
import logoOllama from '@/images/logos/ollama.png'
import logoOpenWebUI from '@/images/logos/open-webui.png'

const projects = [
  {
    name: 'AIGC',
    description: '我的毕业设计（2024）衍生的AIGC项目。',
    link: { href: 'http://aigc.brotian.com', label: 'aigc.brotian.com' },
    logo: logoAIGCBrotian,
  },
  {
    name: '毕业设计（2024）',
    description: '我的2024届复旦专升本毕业设计，定格版本的开源项目。',
    link: { href: 'https://github.com/ShawnTyn', label: 'github.com' },
    logo: logoAIGCBrotian,
  },
  {
    name: 'LLaMA-Factory',
    description:
      '轻松微调大模型的实用工具，有web ui，支持模型量化训练，显存占用低、训练速度快。',
    link: {
      href: 'https://github.com/hiyouga/LLaMA-Factory',
      label: 'github.com',
    },
    logo: logoLLaMAFactory,
  },
  {
    name: 'Ollama',
    description: '轻松部署大模型在本地，配合LLaMA-Factory客制化你的AI大模型。',
    link: { href: 'https://ollama.com/', label: 'ollama.com' },
    logo: logoOllama,
  },
  {
    name: 'Open WebUI',
    description:
      '用户友好的全栈项目，支持对接Ollama、openai、功能全面、高频迭代、支持用户管理。',
    link: {
      href: 'https://github.com/open-webui/open-webui',
      label: 'github.com',
    },
    logo: logoOpenWebUI,
  },
]

function LinkIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: '项目',
  description: '在互联网时代，留下轻描淡写的一笔“天酱到此一游”。',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="在互联网时代，留下轻描淡写的一笔“天酱到此一游”。"
      intro="短短几年，我见识了不少项目。这些是我参与过的或是我墙裂推荐的项目，其中有些是开源项目、有些是我独立开发的。"
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="relative z-10 flex size-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={project.logo}
                alt=""
                className="size-8"
                unoptimized
              />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={project.link.href}>{project.name}</Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
              <LinkIcon className="size-6 flex-none" />
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
