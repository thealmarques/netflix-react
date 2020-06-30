import { Recommendation } from "shared/interfaces/recommendation.interfaces"

export const getPopularOnNetflix = (): Promise<Recommendation[]> => {
    return Promise.resolve([
        {
            name: 'The 100',
            video: 'the-100.mp4',
            poster: 'https://i0.wp.com/noticiasetecnologia.com/wp-content/uploads/2019/05/The-100.jpg?resize=800%2C450&ssl=1'
        },
        {
            name: 'Dark',
            video: 'dark.mp4',
            poster: 'https://cdn.dnaindia.com/sites/default/files/styles/full/public/2020/04/23/903342-netflix-dark.jpg'
        },
        {
            name: 'Stranger Things',
            video: 'stranger-things.mp4',
            poster: 'https://boygeniusreport.files.wordpress.com/2019/09/stranger-things-4.jpg?quality=70&strip=all'
        },
    ])
}
