import React from "react";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";

const MainContainer = () => {
	const movies = useSelector((store) => store.movies?.nowPlayingMovies);
	// console.log(movies);

	if (!movies) return;

	const mainMovie = movies[2];
	// console.log(mainMovie);

	const { title, overview } = mainMovie;
	return (
		<div>
			<VideoBackground movieId={mainMovie.id} />
			<VideoTitle title={title} overview={overview} />
			aljkds
		</div>
	);
};

export default MainContainer;

// {
//   "id": 787699,
//   "results": [
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Soundtrack Out Now!",
//       "key": "vCcGYxy6PNA",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2023-12-08T18:18:07.000Z",
//       "id": "6573b5a3bbe1dd0138cedc81"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "World Premiere",
//       "key": "Df1-tQ8IiDA",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Featurette",
//       "official": true,
//       "published_at": "2023-12-07T15:15:46.000Z",
//       "id": "6572a61f6f6a9901392b232b"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Chocolate Statue Reveal",
//       "key": "pkoqu0wZr_s",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Featurette",
//       "official": true,
//       "published_at": "2023-12-06T08:00:29.000Z",
//       "id": "657032ce41ad8d06e3cc1ab5"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Recipe for an Icon",
//       "key": "a1LcSbGRpIE",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Behind the Scenes",
//       "official": true,
//       "published_at": "2023-12-05T17:25:19.000Z",
//       "id": "65700711d18fb9013aa85bab"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Becoming Wonka - Featurette",
//       "key": "9Dup3jnovFs",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Featurette",
//       "official": true,
//       "published_at": "2023-11-24T17:47:00.000Z",
//       "id": "656383fcb234b900acfb9747"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "\"A Good Chocolate\" Clip",
//       "key": "JXIpIVelQkc",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Clip",
//       "official": true,
//       "published_at": "2023-11-14T17:00:16.000Z",
//       "id": "65551212d4fe04011b9138ce"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "\"Funny Little Man\" Clip",
//       "key": "CsU0Yq6_LyQ",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Clip",
//       "official": true,
//       "published_at": "2023-11-14T17:00:07.000Z",
//       "id": "6555120c53866e00ff06aed9"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "\"Try One\" Clip",
//       "key": "19bhnCBezs4",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Clip",
//       "official": true,
//       "published_at": "2023-11-14T17:00:02.000Z",
//       "id": "65551206ac4161013b4aa62e"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Dream TV Spot",
//       "key": "d2lVg-b_E2g",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2023-11-13T21:00:05.000Z",
//       "id": "6552b2790816c700c3da0e8f"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Watch Full Trailer Now!",
//       "key": "NiCEEIxI1ME",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2023-10-12T16:07:23.000Z",
//       "id": "6528549c81383100fe3df66a"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Trailer #2",
//       "key": "wYmtRhKvmVE",
//       "site": "YouTube",
//       "size": 2160,
//       "type": "Trailer",
//       "official": true,
//       "published_at": "2023-10-12T16:00:44.000Z",
//       "id": "652854bffd63005d7a2d884b"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Official Trailer",
//       "key": "otNh9bTjXWg",
//       "site": "YouTube",
//       "size": 2160,
//       "type": "Trailer",
//       "official": true,
//       "published_at": "2023-07-11T16:00:39.000Z",
//       "id": "64ad8035b686b9010e0dcf7f"
//     }
//   ]
// }
