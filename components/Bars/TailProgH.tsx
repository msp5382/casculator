/* This example requires Tailwind CSS v2.0+ */
import { CheckIcon } from '@heroicons/react/solid'

const steps = [
    { name: 'สมัครสอบ GAT/PAT', href: '#', status: 'complete' },
    { name: 'สมัครสอบ วิชาสามัญ', href: '#', status: 'complete' },
    { name: 'สอบ GAT/PAT', href: '#', status: 'current' },
    { name: 'สอบ วิชาสามัญ', href: '#', status: 'upcoming' },
    { name: 'ประกาศคะแนน', href: '#', status: 'upcoming' },
    { name: 'เลือกมหาลัย', href: '#', status: 'upcoming' },
    { name: 'ประกาศ TCAS รอบ 3', href: '#', status: 'upcoming' },
]

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
}

export default function ProgressBarH() {
    return (
        <nav aria-label="Progress">
            <ol className="overflow-hidden">
                {steps.map((step, stepIdx) => (
                    <li key={step.name} className={classNames(stepIdx !== steps.length - 1 ? 'pb-10' : '', 'relative')}>
                        {step.status === 'complete' ? (
                            <>
                                {stepIdx !== steps.length - 1 ? (
                                    <div className="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-base" aria-hidden="true" />
                                ) : null}
                                <a href={step.href} className="relative flex items-start group">
                                    <span className="h-9 flex items-center">
                                        <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-base rounded-full ">
                                            <CheckIcon className="w-5 h-5 text-white" aria-hidden="true" />
                                        </span>
                                    </span>
                                    <span className="ml-4 h-full min-w-0 flex flex-col justify-around mt-2.5">
                                        <span className="text-xs font-semibold tracking-wide uppercase">{step.name}</span>
                                    </span>
                                </a>
                            </>
                        ) : step.status === 'current' ? (
                            <>
                                {stepIdx !== steps.length - 1 ? (
                                    <div className="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-gray-300" aria-hidden="true" />
                                ) : null}
                                <a href={step.href} className="relative flex items-start group" aria-current="step">
                                    <span className="h-9 flex items-center" aria-hidden="true">
                                        <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 border-base rounded-full">
                                            <span className="h-2.5 w-2.5 bg-base rounded-full" />
                                        </span>
                                    </span>
                                    <span className="ml-4 h-full min-w-0 flex flex-col justify-around mt-2.5">
                                        <span className="text-xs font-semibold tracking-wide uppercase text-base">{step.name}</span>
                                    </span>
                                </a>
                            </>
                        ) : (
                            <>
                                {stepIdx !== steps.length - 1 ? (
                                    <div className="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-gray-300" aria-hidden="true" />
                                ) : null}
                                <a href={step.href} className="relative flex items-start group">
                                    <span className="h-9 flex items-center" aria-hidden="true">
                                        <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full group-hover:border-gray-400">
                                            <span className="h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300" />
                                        </span>
                                    </span>
                                    <span className="ml-4 h-full min-w-0 flex flex-col mt-2.5">
                                        <span className="text-xs font-semibold tracking-wide uppercase text-gray-500">{step.name}</span>
                                    </span>
                                </a>
                            </>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    )
}
