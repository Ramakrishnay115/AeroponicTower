import { styled } from "@guruhotel/aura-ui";
import { motion } from "framer-motion";

export const FramerGrid = styled(motion.div, {
  boxSizing: "border-box",
  display: "grid",
  variants: {
    columns: {
      1: { gridTemplateColumns: "repeat(1, 1fr)" },
      2: { gridTemplateColumns: "repeat(2, 1fr)" },
      3: { gridTemplateColumns: "repeat(3, 1fr)" },
      4: { gridTemplateColumns: "repeat(4, 1fr)" },
      
    },
    rows: {
      1: { gridTemplateRows: "repeat(1, 1fr)" },
      2: { gridTemplateRows: "repeat(2, 1fr)" },
      3: { gridTemplateRows: "repeat(3, 1fr)" },
      4: { gridTemplateRows: "repeat(4, 1fr)" },
     
    }
  }
});

export const FramerBox = styled(motion.div, {
  boxSizing: "border-box"
});

export const FramerStack = styled(motion.div, {
  boxSizing: "border-box",
  display: "flex"
});

export const FramerText = styled(motion.p, {
  margin: "0",
  lineHeight: "150px",
  whiteSpace: "normal",
  fontVariantNumeric: "tabular-nums",
  variants: {
    uppercase: {
      true: { textTransform: "uppercase" }
    },
    isTruncated: {
      true: {
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      }
    },
    noOfLines: {
      1: {
        display: "-webkit-box",
        overflow: "hidden",
        textOverflow: "ellipsis",
        "-webkit-box-orient": "vertical",
        "-webkit-line-clamp": 1
        
        
      },
      2: {
        display: "-webkit-box",
        overflow: "hidden",
        textOverflow: "ellipsis",
        "-webkit-box-orient": "vertical",
        "-webkit-line-clamp": 2
      },
      3: {
        display: "-webkit-box",
        overflow: "hidden",
        textOverflow: "ellipsis",
        "-webkit-box-orient": "vertical",
        "-webkit-line-clamp": 3
      },
      4: {
        display: "-webkit-box",
        overflow: "hidden",
        textOverflow: "ellipsis",
        "-webkit-box-orient": "vertical",
        "-webkit-line-clamp": 4
      },
      
    }
  }
});
