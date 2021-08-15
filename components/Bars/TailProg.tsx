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

export default function ProgressBar() {
    return (
        <nav aria-label="Progress">
            <ol className="flex items-center">
                {steps.map((step, stepIdx) => (
                    <li key={step.name} className={classNames(stepIdx !== steps.length - 1 ? 'pr-8 lg:pr-20 sm:pr-14' : '', 'relative')}>
                        {step.status === 'complete' ? (
                            <>
                                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                                    <div className="h-0.5 w-full bg-base" />
                                </div>
                                <a
                                    href="#"
                                    className="relative w-10 h-10 flex items-center justify-center bg-base rounded-full"
                                >
                                    <CheckIcon className="w-5 h-5 text-white" aria-hidden="true" />
                                    <span className="sr-only">{step.name}</span>
                                </a>
                                <div className="absolute text-xs mt-2 w-32 -ml-10 text-center">
                                    {step.name}
                                </div>
                            </>
                        ) : step.status === 'current' ? (
                            <>
                                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                                    <div className="h-0.5 w-full bg-gray-200" />
                                </div>
                                <a
                                    href="#"
                                    className="relative w-10 h-10 flex items-center justify-center bg-white border-2 border-base rounded-full"
                                    aria-current="step"
                                >
                                    <span className="h-2.5 w-2.5 bg-base rounded-full" aria-hidden="true" />
                                    <span className="sr-only">{step.name}</span>
                                </a>
                                <div className="absolute text-xs mt-2 w-32 -ml-10 text-center">
                                    {step.name}
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                                    <div className="h-0.5 w-full bg-gray-200" />
                                </div>
                                <a
                                    href="#"
                                    className="group relative w-10 h-10 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full hover:border-gray-400"
                                >
                                    <span
                                        className="h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300"
                                        aria-hidden="true"
                                    />
                                    <span className="sr-only">{step.name}</span>
                                </a>
                                <div className="absolute text-xs mt-2 w-32 -ml-10 text-center">
                                    {step.name}
                                </div>
                            </>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    )
}