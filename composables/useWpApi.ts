/**
 * WordPress Composables
 * A collection of WordPress composable functions.
 */

// import { Post } from "~~/types/post";

export default () => {
  const config = useRuntimeConfig();
  const WP_URL: string = config.wpApiUrl;

  const get = async <T>(endpoint: string) => {
    return useFetch<T>(`${WP_URL}/wp-json/wp/v2/${endpoint}`);
  };

  const getPosts = async <T>(
    category?: number,
    page: number = 1,
    perPgae: number = 15,
    // fields: string = "author,id,excerpt,title,link,slug,date"
  ) => {
    let query: string = `posts?page=${page}&per_page=${perPgae}&_embed=1`;
    if (category) {
      query += `&categories=${category}`;
    }
    return get<T>(query);
  };

  // Get a single post
  const getPost = async <T>(slug: string) => {
    return get<T>(`posts?slug=${slug}&_embed=1`);
  };

  // Get all categories
  const getCatgories = async <T>(fields: string = "name,slug,count") => {
    return get<T>(`categories?per_page=100`);
  };
  
  // Get a single category
  const getCatgory = async <T>(slug: string) => {
    return get<T>(`categories?slug=${slug}`);
  };

  return {
    get,
    getPosts,
    getPost,
    getCatgories,
    getCatgory,
  };
};
