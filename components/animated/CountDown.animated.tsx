import { useSpring, config, animated } from 'react-spring'

const Number = () => {
    const { number } = useSpring({
        reset: true,
        from: { number: 365 },
        number: 12,
        delay: 100,
        config: config.molasses,
    })
    return (
        <>
            <div className="flex flex-row md:mt-12 font-bold text-center text-6xl lg:text-9xl">
                <animated.div>{number.to(n => n.toFixed(0))}</animated.div>
                <div className='ml-6'>day{0 > 1 ? "s" : ""}</div>
            </div>
            <div className="flex flex-row font-bold text-center text-lg  lg:text-2xl justify-center">
                <animated.div>{number.to(n => n.toFixed(0))}</animated.div>
                <div className='ml-2 mr-2'>day{0 > 1 ? "s" : ""}</div>
                <animated.div>{number.to(n => n.toFixed(0))}</animated.div>
                <div className='ml-2'>
                    month left
                </div>
            </div>
        </>
    )
}

export default Number;