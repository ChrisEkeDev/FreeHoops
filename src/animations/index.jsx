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

export const menu_animations = {
    animate: { x: 0},
    initial: { x: -300},
    exit: { x: -300},
    transition: { type: "tween", ease: "easeIn"}
}

export const form_transitions = {
    animate: { y: 0},
    initial: { y: -100},
    exit: { y: -100},
}

export const parent_transitions = {
    visible: {
        opacity: 1,
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.2
        }
    },
    hidden: {
        opacity: 0,
        transition: {
            when: "afterChildren"
        }
    }
}

export const child_transitions = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 15 },
}
