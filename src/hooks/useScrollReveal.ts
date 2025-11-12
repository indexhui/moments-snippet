import { useInView } from "framer-motion";
import { useRef } from "react";

export function useScrollReveal(options?: {
  once?: boolean;
  margin?:
    | `${number}${"px" | "%"}`
    | `${number}${"px" | "%"} ${number}${"px" | "%"}`
    | `${number}${"px" | "%"} ${number}${"px" | "%"} ${number}${"px" | "%"}`
    | `${number}${"px" | "%"} ${number}${"px" | "%"} ${number}${
        | "px"
        | "%"} ${number}${"px" | "%"}`;
  amount?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    ...options,
  });

  return { ref, isInView };
}
