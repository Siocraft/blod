import { funEmoji } from "@dicebear/collection";
import { createAvatar } from "@dicebear/core";

export const createBlodAvatar = (seed: string) => createAvatar(funEmoji, {
  seed,
  backgroundType: [ "gradientLinear" ],
  radius: 16,
  randomizeIds: true,
  eyes: [ "closed", "closed2", "cute", "glasses", "pissed", "plain", "shades", "sleepClose", "stars", "wink" ],
  mouth: [ "cute", "lilSmile", "smileLol", "smileTeeth", "tongueOut", "wideSmile" ],
}).toString();