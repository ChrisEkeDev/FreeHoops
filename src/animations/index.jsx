export const page_transitions = {
    animate: { opacity: 1, x: 0},
    initial: {opacity: 0, x: 300},
    exit: { opacity: 0, x: -300},
    transition: { type: "tween", ease: "anticipate", duration: .5}
}

export const icon_animations = {
    animate: {scale: 1},
    initial: { scale: 0},
    exit: { scale: 0},
    transition: { type: "spring", stiffness: 500, ease: "easeIn", duration: 1}
}
