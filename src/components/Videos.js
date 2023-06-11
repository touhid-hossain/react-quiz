import React, { useState } from "react";
import Video from "./Video";
import { Link } from "react-router-dom";
import useVideoList from "../hooks/useVideoList";
import InfiniteScroll from "react-infinite-scroll-component";

const Videos = () => {
  const [page, setPage] = useState(1);
  const { loading, error, videos, hasMore } = useVideoList(page);
  return (
    <div>
      {videos.length > 0 && (
        <InfiniteScroll
          dataLength={videos.length}
          hasMore={hasMore}
          loader="Loading...."
          next={() => setPage(page + 8)}
        >
          {videos.map((video) => {
            return video.noq > 0 ? (
              <Link
                to={`/quiz/${video.youtubeID}`}
                state={video.title}
                key={video.youtubeID}
              >
                <Video
                  title={video.title}
                  id={video.youtubeID}
                  noq={video.noq}
                />
              </Link>
            ) : (
              <Video
                key={video.youtubeID}
                title={video.title}
                id={video.youtubeID}
                noq={video.noq}
              />
            );
          })}
        </InfiniteScroll>
      )}

      {/* Fetch data depending on states */}
      {!loading && videos.length === 0 && <div>No data found!</div>}
      {error && <div>there was an error!</div>}
      {loading && <div>Loading...</div>}
      {/* Fetch data depending on states */}
    </div>
  );
};

export default Videos;
