import { useSpring, config, animated } from 'react-spring'

const CountDown = () => {
    const startCountDown = 365
    const target = 12
    const { number } = useSpring({
        from: { number: startCountDown },
        number: target,
        delay: 100,
        config: config.molasses,
    })
    return (
        <>
            <div className="flex flex-row md:mt-12 font-bold text-center text-6xl md:text-9xl">
                <animated.div>{number.to(n => n.toFixed(0))}</animated.div>
                <div className='ml-6'>day{target > 1 ? "s" : ""}</div>
            </div>
            <div className="flex flex-row font-bold text-center text-lg  md:text-2xl justify-center">
                <animated.div>{number.to(n => n.toFixed(0))}</animated.div>
                <div className='ml-2 mr-2'>day{target > 1 ? "s" : ""}</div>
                <animated.div>{number.to(n => n.toFixed(0))}</animated.div>
                <div className='ml-2'>
                    month{target > 1 ? "s" : ""} left
                </div>
            </div>
        </>
    )
}

export default CountDown;