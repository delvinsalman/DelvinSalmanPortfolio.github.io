import { useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

type ScreenshotLightboxProps = {
  images: string[];
  activeIndex: number | null;
  projectName: string;
  onClose: () => void;
  onIndexChange: (index: number) => void;
};

export function ScreenshotLightbox({
  images,
  activeIndex,
  projectName,
  onClose,
  onIndexChange,
}: ScreenshotLightboxProps) {
  const isOpen = activeIndex !== null;
  const currentIndex = activeIndex ?? 0;
  const hasMultiple = images.length > 1;

  const goToPrevious = useCallback(() => {
    if (!isOpen) return;
    onIndexChange((currentIndex - 1 + images.length) % images.length);
  }, [currentIndex, images.length, isOpen, onIndexChange]);

  const goToNext = useCallback(() => {
    if (!isOpen) return;
    onIndexChange((currentIndex + 1) % images.length);
  }, [currentIndex, images.length, isOpen, onIndexChange]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      } else if (event.key === "ArrowLeft") {
        goToPrevious();
      } else if (event.key === "ArrowRight") {
        goToNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToNext, goToPrevious, isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={`${projectName} screenshot viewer`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm md:p-8"
          onClick={onClose}
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            aria-label="Close screenshot viewer"
          >
            <X className="h-5 w-5" />
          </button>

          {hasMultiple && (
            <p className="absolute top-5 left-1/2 -translate-x-1/2 text-sm font-medium text-white/70">
              {currentIndex + 1} / {images.length}
            </p>
          )}

          {hasMultiple && (
            <>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  goToPrevious();
                }}
                className="absolute top-1/2 left-3 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 md:left-6"
                aria-label="Previous screenshot"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  goToNext();
                }}
                className="absolute top-1/2 right-3 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 md:right-6"
                aria-label="Next screenshot"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          )}

          <motion.img
            key={images[currentIndex]}
            src={images[currentIndex]}
            alt={`${projectName} screenshot ${currentIndex + 1}`}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="max-h-[85vh] max-w-[min(100%,1200px)] rounded-lg object-contain shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
