// Pure score formulas, shared by the live preview and the saved review.
// Kept DOM-free so they can be unit-tested (see test/score.test.mjs).

export function clamp(v, lo, hi) { return Math.min(hi, Math.max(lo, v)); }

const _round2 = n => Math.round(n * 100) / 100;

// The 0-100 display score shown in the live meter.
export function computeDisplayScore({
    experience = 0, uniquenessLen = 0, theme = 0, effects = 0,
    sounds = 0, queueLine = 0, smoothness = 0, repeatFactor = 0,
} = {}) {
    const thrill  = experience * 4 + uniquenessLen * 1.5;
    const theming = theme * 3 + effects * 2 + sounds * 1.5 + queueLine * 1.5;
    const comfort = (smoothness + 1) * 4;
    const repeat  = repeatFactor * 4;
    return clamp(Math.round(thrill + theming + comfort + repeat), 0, 100);
}

// The detailed T/I/K/W sub-scores persisted with a saved review.
export function computeDetailScores({
    physicsScore = 0, experience = 0, uniquenessLen = 0, theme = 0, effects = 0,
    sounds = 0, queueLine = 0, smoothness = 0, familySum = 0, repeatFactor = 0,
} = {}) {
    const T = (physicsScore + experience + uniquenessLen) / 3;
    const I = (theme + effects + sounds + queueLine) / 4;
    const K = (smoothness + familySum * (5 / 6)) / 2;
    const W = repeatFactor;

    const scoreThrill    = (T * 0.4) + (W * 0.3) + (K * 0.2) + (I * 0.1);
    const scoreTheme     = (I * 0.5) + (K * 0.3) + (W * 0.2);
    const tOptimal       = 5 - Math.abs(3 - T);
    const scoreComfort   = (K * 0.4) + (I * 0.3) + (W * 0.2) + (tOptimal * 0.1);

    return {
        T: _round2(T), I: _round2(I), K: _round2(K), W,
        scoreThrill:  _round2(scoreThrill),
        scoreTheme:   _round2(scoreTheme),
        scoreComfort: _round2(scoreComfort),
    };
}
