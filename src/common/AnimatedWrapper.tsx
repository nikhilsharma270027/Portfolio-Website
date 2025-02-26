"use client";

import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import React from "react";

interface FadeInProps {
    children: React.ReactNode;
    duration?: number; // Delay in milliseconds before animation starts
    className?: string;
}

export default function FadeIn({ children, duration = 0, className }: FadeInProps) {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef<HTMLDivElement | null>(null);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null); // ✅ Fix applied

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    timeoutRef.current = setTimeout(() => {
                        setIsVisible(true);
                    }, duration);
                }
            },
            { threshold: 0.1 }
        );

        const currentElement = elementRef.current;
        if (currentElement) observer.observe(currentElement);

        return () => {
            if (currentElement) observer.unobserve(currentElement);
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, [duration]);

    return (
        <div
            ref={elementRef}
            className={clsx(
                "transition-all duration-700 ease-out",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
                className
            )}
        >
            {children}
        </div>
    );
}
