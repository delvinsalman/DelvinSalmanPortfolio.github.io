import { useEffect, useRef, useState, type RefObject } from "react";

const DEFAULT_TOP_REVEAL = 32;
const DEFAULT_HIDE_SCROLL = 56;
const DEFAULT_SHOW_SCROLL = 28;

export function useScrollHide(
  scrollRef: RefObject<HTMLElement | null>,
  enabled: boolean,
) {
  const lastScrollY = useRef(0);
  const scrollAccumulator = useRef(0);
  const hiddenRef = useRef(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const setHiddenState = (value: boolean) => {
      if (hiddenRef.current === value) return;
      hiddenRef.current = value;
      setHidden(value);
    };

    if (!enabled) {
      setHiddenState(false);
      lastScrollY.current = 0;
      scrollAccumulator.current = 0;
      return;
    }

    const el = scrollRef.current;
    if (!el) return;

    lastScrollY.current = el.scrollTop;
    scrollAccumulator.current = 0;

    const onScroll = () => {
      const y = el.scrollTop;
      const step = y - lastScrollY.current;
      lastScrollY.current = y;

      if (y <= DEFAULT_TOP_REVEAL) {
        scrollAccumulator.current = 0;
        setHiddenState(false);
        return;
      }

      if (step !== 0) {
        const sameDirection =
          scrollAccumulator.current === 0 ||
          Math.sign(step) === Math.sign(scrollAccumulator.current);
        scrollAccumulator.current = sameDirection
          ? scrollAccumulator.current + step
          : step;
      }

      if (!hiddenRef.current && scrollAccumulator.current >= DEFAULT_HIDE_SCROLL) {
        setHiddenState(true);
        scrollAccumulator.current = 0;
      } else if (hiddenRef.current && scrollAccumulator.current <= -DEFAULT_SHOW_SCROLL) {
        setHiddenState(false);
        scrollAccumulator.current = 0;
      }
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [enabled, scrollRef]);

  return hidden;
}
