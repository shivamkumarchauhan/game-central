import useData from "./useData";

export interface Platform {
  id: number;
  name: string
  slug: string
  image_background: string
  image: string
}

const usePlatformFilter = () => useData<Platform>('/platforms/lists/parents')

export default usePlatformFilter;