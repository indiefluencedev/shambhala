import axios from 'axios';

const fetchYouTubeEvents = async () => {
  const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;
  const channelId = import.meta.env.VITE_YOUTUBE_CHANNEL_ID;
  
  try {
    const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        part: 'snippet',
        channelId: channelId,
        type: 'video',
        key: apiKey,
        maxResults: 10
      },
    });
    return response.data.items;
  } catch (error) {
    console.error('Error fetching YouTube events:', error);
    return [];
  }
};

export default fetchYouTubeEvents;
