//to learn any thing about any component in material UI check the component API from the website
import React from "react";
import { Stack, Box } from "@mui/material";

import { VideoCard, ChannelCard } from "./index";

const Videos = ({ videos, direction }) => {
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="center" gap={2}>
      {/* loop on videos or channels and render it */}
      {videos.map((item, idx) => {
        return (
          <Box key={idx}>
            {item.id.videoId && <VideoCard video={item} />}
            {item.id.channelId && <ChannelCard channelDetail={item} />}
          </Box>
        );
      })}
    </Stack>
  );
};

export default Videos;
