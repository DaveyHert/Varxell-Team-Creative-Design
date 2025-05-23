import { useEffect } from "react";

interface SectionsConfig {
  id: string;
  threshold: number;
  rootMargin?: string;
}
export function useActiveSection(
  setActiveLink: (link: string) => void,
  sectionsConfig: SectionsConfig[],
  manualOverride: boolean
) {
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionsConfig.forEach(({ id, threshold, rootMargin }) => {
      const targetSection = document.getElementById(id);
      if (!targetSection) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !manualOverride) {
            setActiveLink(id);
          }
        },
        { threshold, rootMargin }
      );

      observer.observe(targetSection);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    }; // cleanup
  }, [sectionsConfig, manualOverride, setActiveLink]);
}
