import React, {type MouseEvent as ReactMouseEvent} from "react";
import {motion, useMotionTemplate, useMotionValue} from "framer-motion";
import type {CardsProps} from "../Interfaces/CardsProps.ts";


const Cards = (props: CardsProps) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const {images, title, description} = props;

    function handleMouseMove({
                                 currentTarget,
                                 clientX,
                                 clientY,
                             }: ReactMouseEvent<HTMLDivElement>) {
        const {left, top} = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    const background = useMotionTemplate`radial-gradient(650px circle at ${mouseX}px ${mouseY}px, rgba(14, 165, 233, 0.15), transparent 80%)`;

    return (
        <div
            className="group relative max-w-md rounded-xl border border-white/10 bg-gray-900/0 px-8 py-16 shadow-2xl"
            onMouseMove={handleMouseMove}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{background}}
            />
            <div>
                {images.length > 0 && (
                    <div className="grid grid-cols-1 gap-4">
                        {images[0] && (
                            <img
                                key={0}
                                src={images[0]}
                                alt="NASA image 1"
                                className="w-full h-40 object-cover rounded-lg"
                            />
                        )}
                    </div>
                )}
                <div className="mt-2 flex items-center gap-x-2">
                    <span
                        className="text-5xl font-bold tracking-tight text-white break-words whitespace-normal overflow-hidden">
                      {title}
                    </span>
                </div>
                <p className="mt-6 text-base leading-7 text-gray-300 break-words overflow-hidden ">
                    {description?.slice(0, 250)}
                    {description && description.length > 250 && '...'}
                </p>
            </div>
        </div>
    );
};

export default Cards;
