import React, { memo } from "react";
import twemoji from "twemoji";

const Twemoji = ({ emoji }) => (
  <span
    dangerouslySetInnerHTML={{
      __html: twemoji.parse(emoji, {
        folder: "svg",
        ext: ".svg",
        base: "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/",
      }),
    }}
  />
);

export default memo(Twemoji);
