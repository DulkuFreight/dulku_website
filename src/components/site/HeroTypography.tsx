import { useMemo } from "react";

interface HeroTypographyProps {
  currentFrame: number;
}

const PHRASES = [
  {
    id: 1,
    lines: ["We simplify", "the movement of freight."],
    startFrame: 8,
    revealEndFrame: 48,
    fadeStartFrame: 72,
    endFrame: 88,
    verticalOffset: "translate-y-[28vh]",
  },
  {
    id: 2,
    lines: [
      "Connecting ports across New Jersey & New York",
      "to warehousing, cross docking & fulfillment.",
    ],
    startFrame: 95,
    revealEndFrame: 142,
    fadeStartFrame: 156,
    endFrame: 175,
    verticalOffset: "translate-y-0",
  },
  {
    id: 3,
    lines: [
      "One trusted logistics partner, keeping your supply",
      "chain moving with precision.",
    ],
    startFrame: 178,
    revealEndFrame: 226,
    fadeStartFrame: 240,
    endFrame: 250,
    verticalOffset: "translate-y-[28vh]",
  },
];

export function HeroTypography({ currentFrame }: HeroTypographyProps) {
  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center p-4 sm:p-6 text-center z-30 select-none">
      {PHRASES.map((phrase) => {
        if (currentFrame < phrase.startFrame || currentFrame > phrase.endFrame) {
          return null;
        }

        return (
          <PhraseReveal
            key={phrase.id}
            phrase={phrase}
            currentFrame={currentFrame}
          />
        );
      })}
    </div>
  );
}

function PhraseReveal({
  phrase,
  currentFrame,
}: {
  phrase: (typeof PHRASES)[number];
  currentFrame: number;
}) {
  // Structure lines -> words -> characters with global index to guarantee no word splitting
  const { lineWords, totalChars } = useMemo(() => {
    let globalIdx = 0;
    const lineWords = phrase.lines.map((line) => {
      const words = line.split(" ").map((wordText) => {
        const chars = wordText.split("").map((char) => ({
          char,
          idx: globalIdx++,
        }));
        globalIdx++; // Account for space between words
        return { wordText, chars };
      });
      return words;
    });
    return { lineWords, totalChars: globalIdx };
  }, [phrase]);

  // Reveal progress: float from 0 to totalChars based on currentFrame
  const revealProgress = useMemo(() => {
    if (currentFrame <= phrase.startFrame) return 0;
    if (currentFrame >= phrase.revealEndFrame) return totalChars;
    const progress = (currentFrame - phrase.startFrame) / (phrase.revealEndFrame - phrase.startFrame);
    return progress * totalChars;
  }, [currentFrame, phrase, totalChars]);

  // Fade out multiplier when phrase completes
  const phraseFadeOpacity = useMemo(() => {
    if (currentFrame <= phrase.fadeStartFrame) return 1;
    if (currentFrame >= phrase.endFrame) return 0;
    const p = (currentFrame - phrase.fadeStartFrame) / (phrase.endFrame - phrase.fadeStartFrame);
    return 1 - p;
  }, [currentFrame, phrase]);

  return (
    <div
      style={{
        opacity: phraseFadeOpacity,
        filter: phraseFadeOpacity < 1 ? `blur(${(1 - phraseFadeOpacity) * 6}px)` : "none",
        transition: "opacity 0.2s ease-out, filter 0.2s ease-out",
      }}
      className={`w-full max-w-5xl space-y-2 sm:space-y-3 antialiased [-webkit-font-smoothing:antialiased] [-moz-osx-font-smoothing:grayscale] transition-transform duration-300 ease-out ${phrase.verticalOffset}`}
    >
      {lineWords.map((words, lineIdx) => (
        <div
          key={lineIdx}
          className="flex flex-wrap justify-center text-2xl font-extrabold tracking-[-0.03em] leading-[1.15] sm:text-4xl md:text-5xl lg:text-6xl"
        >
          {words.map((word, wordIdx) => (
            <span key={wordIdx} className="inline-block whitespace-nowrap">
              {word.chars.map(({ char, idx }) => {
                const dist = revealProgress - idx;

                // 1. Unrevealed character
                if (dist < 0) {
                  return (
                    <span
                      key={idx}
                      style={{
                        display: "inline-block",
                        opacity: 0,
                        transform: "translate3d(0, 8px, 0)",
                        willChange: "transform, opacity",
                      }}
                    >
                      {char}
                    </span>
                  );
                }

                // 2. Active leading red cursor character
                if (dist >= 0 && dist < 1) {
                  const subProgress = Math.min(1, Math.max(0.4, dist));
                  const translateY = (1 - subProgress) * 6;

                  return (
                    <span
                      key={idx}
                      style={{
                        display: "inline-block",
                        color: "#F40009",
                        opacity: subProgress,
                        transform: `translate3d(0, ${translateY}px, 0)`,
                        textShadow:
                          "0 0 16px rgba(244, 0, 9, 1), 0 0 36px rgba(244, 0, 9, 0.75), 0 0 60px rgba(244, 0, 9, 0.4)",
                        willChange: "transform, opacity, color, text-shadow",
                      }}
                    >
                      {char}
                    </span>
                  );
                }

                // 3. Trailing red glow zone across last 3-5 revealed characters
                if (dist >= 1 && dist < 4.5) {
                  const trailRatio = 1 - (dist - 1) / 3.5;
                  const glowSpread = trailRatio * 32;
                  const glowAlpha = trailRatio * 0.85;

                  return (
                    <span
                      key={idx}
                      style={{
                        display: "inline-block",
                        color: trailRatio > 0.4 ? "#F40009" : "#FFFFFF",
                        opacity: 1,
                        transform: "translate3d(0, 0, 0)",
                        textShadow:
                          trailRatio > 0.05
                            ? `0 0 14px rgba(244, 0, 9, ${glowAlpha}), 0 0 ${glowSpread}px rgba(244, 0, 9, ${glowAlpha * 0.6})`
                            : "none",
                        willChange: "color, text-shadow",
                      }}
                    >
                      {char}
                    </span>
                  );
                }

                // 4. Completed revealed white letter
                return (
                  <span
                    key={idx}
                    style={{
                      display: "inline-block",
                      color: "#FFFFFF",
                      opacity: 1,
                      transform: "translate3d(0, 0, 0)",
                      textShadow: "none",
                      willChange: "color, text-shadow",
                    }}
                  >
                    {char}
                  </span>
                );
              })}
              {/* Space between words */}
              {wordIdx < words.length - 1 && <span className="inline-block w-[0.26em]" />}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}
