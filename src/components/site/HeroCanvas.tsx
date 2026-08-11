import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HeroTypography } from "./HeroTypography";

gsap.registerPlugin(ScrollTrigger);

const TOTAL_FRAMES = 251;
const FRAME_PREFIX = "/hero-sequence/frame-";
const FRAME_EXT = ".jpg";

const getFramePath = (index: number) => {
  const frameNum = String(index + 1).padStart(3, "0");
  return `${FRAME_PREFIX}${frameNum}${FRAME_EXT}`;
};

export function HeroCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<(HTMLImageElement | null)[]>(new Array(TOTAL_FRAMES).fill(null));
  const frameIndexRef = useRef({ frame: 0 });
  const lastDrawnFrameRef = useRef<number>(-1);
  const [currentFrame, setCurrentFrame] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  // GSAP quickTo refs for mouse-follow animation
  const xTo = useRef<((val: number) => void) | null>(null);
  const yTo = useRef<((val: number) => void) | null>(null);

  useEffect(() => {
    if (indicatorRef.current) {
      xTo.current = gsap.quickTo(indicatorRef.current, "x", { duration: 0.5, ease: "power2.out" });
      yTo.current = gsap.quickTo(indicatorRef.current, "y", { duration: 0.5, ease: "power2.out" });
    }
  }, []);

  useEffect(() => {
    let isMounted = true;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Helper to draw a frame onto the canvas with 'object-fit: cover' logic
    const drawFrame = (index: number) => {
      const img = imagesRef.current[index];
      if (!img || !img.complete || img.naturalWidth === 0) return;

      const container = containerRef.current;
      const width = container ? container.clientWidth : window.innerWidth;
      const height = container ? container.clientHeight : window.innerHeight;

      // High-DPI device pixel ratio for sharp Retina and Mobile rendering (up to 3x)
      const dpr = Math.min(window.devicePixelRatio || 1, 3);
      if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
        canvas.width = width * dpr;
        canvas.height = height * dpr;
      }

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
      ctx.clearRect(0, 0, width, height);

      // Calculate aspect ratio fit (cover)
      const imgRatio = img.naturalWidth / img.naturalHeight;
      const containerRatio = width / height;

      let drawWidth = width;
      let drawHeight = height;
      let offsetX = 0;
      let offsetY = 0;

      if (containerRatio > imgRatio) {
        drawHeight = width / imgRatio;
        offsetY = (height - drawHeight) / 2;
      } else {
        drawWidth = height * imgRatio;
        if (width >= 1024) {
          // Desktop: Centered rendering across all frames
          offsetX = (width - drawWidth) / 2;
        } else {
          // Mobile (< 768px) and Tablet (768px - 1023px) 3-Stage Camera Movement
          const baseRatio = width >= 768 ? 0.85 : 1.0; // Phase 1 (Frames 1-158): Right-aligned
          const peakLeftRatio = 0.36; // Phase 2 peak (Frames 159-187): Left-biased pan
          const finalRightBiasRatio = 0.47; // Phase 3 final (Frames 188-End): Almost centered with subtle 1.5% right bias

          const phase1EndIndex = 157; // Frame 158 (0-indexed)
          const phase2EndIndex = 186; // Frame 187 (0-indexed)
          const totalFramesIndex = TOTAL_FRAMES - 1; // Frame 251 (0-indexed)

          let targetRatio = baseRatio;

          if (index > phase1EndIndex) {
            if (index <= phase2EndIndex) {
              // Phase 2 (Frames 159–187): Smooth fluid cinematic camera pan toward the LEFT
              const progress = (index - phase1EndIndex) / (phase2EndIndex - phase1EndIndex);
              const easeProgress = progress * progress * (3 - 2 * progress);
              targetRatio = baseRatio + (peakLeftRatio - baseRatio) * easeProgress;
            } else {
              // Phase 3 (Frames 188–End): Fine-tuning ease-out back toward the RIGHT with a subtle 1.5% right bias
              const progress = (index - phase2EndIndex) / (totalFramesIndex - phase2EndIndex);
              const easeOutProgress = 1 - Math.pow(1 - progress, 2.5); // Smooth ease-out settlement into final frame
              targetRatio = peakLeftRatio + (finalRightBiasRatio - peakLeftRatio) * easeOutProgress;
            }
          }

          offsetX = (width - drawWidth) * targetRatio;
        }
      }

      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
      ctx.restore();
      lastDrawnFrameRef.current = index;
    };

    // Load first frame immediately for instant first paint
    const firstImg = new Image();
    firstImg.decoding = "async";
    firstImg.src = getFramePath(0);
    firstImg.onload = () => {
      if (!isMounted) return;
      imagesRef.current[0] = firstImg;
      drawFrame(0);
      setIsLoaded(true);
    };

    // Preload remaining frames in background with async decoding
    const preloadImages = () => {
      for (let i = 1; i < TOTAL_FRAMES; i++) {
        const img = new Image();
        img.decoding = "async";
        img.src = getFramePath(i);
        img.onload = () => {
          if (!isMounted) return;
          imagesRef.current[i] = img;
          if (Math.round(frameIndexRef.current.frame) === i) {
            drawFrame(i);
          }
        };
      }
    };

    preloadImages();

    // GSAP ScrollTrigger Setup
    const container = containerRef.current;
    if (!container) return;

    const trigger = ScrollTrigger.create({
      trigger: container,
      start: "top top",
      end: "+=250%",
      pin: true,
      scrub: 0.3,
      onUpdate: (self) => {
        if (!isMounted) return;
        const targetFrame = Math.min(
          TOTAL_FRAMES - 1,
          Math.max(0, Math.floor(self.progress * (TOTAL_FRAMES - 1)))
        );

        if (targetFrame !== lastDrawnFrameRef.current) {
          frameIndexRef.current.frame = targetFrame;
          setCurrentFrame(targetFrame);
          requestAnimationFrame(() => drawFrame(targetFrame));
        }
      },
    });

    // Window Resize Handling
    const handleResize = () => {
      if (!isMounted) return;
      const currentFrameIndex = Math.round(frameIndexRef.current.frame);
      drawFrame(currentFrameIndex);
    };

    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      isMounted = false;
      window.removeEventListener("resize", handleResize);
      trigger.kill();
    };
  }, []);

  // Smooth mouse-follow handler
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
      return; // Disable mouse follow on touch devices
    }
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Calculate offset relative to initial bottom-center anchor
    const defaultX = rect.width / 2;
    const defaultY = rect.height - 80;

    const deltaX = mouseX + 25 - defaultX;
    const deltaY = mouseY + 25 - defaultY;

    if (xTo.current && yTo.current) {
      xTo.current(deltaX);
      yTo.current(deltaY);
    }
  };

  const handleMouseLeave = () => {
    if (xTo.current && yTo.current) {
      xTo.current(0);
      yTo.current(0);
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative h-screen w-full overflow-hidden bg-background"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full object-cover will-change-transform"
      />

      {/* Dark gradient overlay for text legibility */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background" />

      {/* Animated Scroll-Scrubbed Red Character-Reveal Typography Overlay */}
      <HeroTypography currentFrame={currentFrame} />

      {/* Scroll to Explore Indicator (Visible for Frames 1-50 only, Smooth Mouse Follow) */}
      <div
        ref={indicatorRef}
        className={`pointer-events-none absolute bottom-16 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center transition-opacity duration-500 ease-out ${
          currentFrame < 50 ? "opacity-100" : "opacity-0"
        }`}
      >
        <p className="label-mono text-foreground/85 whitespace-nowrap">Scroll to explore services</p>
      </div>
    </div>
  );
}
