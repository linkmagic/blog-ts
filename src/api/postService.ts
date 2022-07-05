import axios from 'axios';

import { IAPIResponse } from 'api/interfaces'

export default class PostService {

    static async getAll(limit: string = '10', page: number = 1): Promise<IAPIResponse> {
        return await axios.get(
            'https://jsonplaceholder.typicode.com/posts',
            {
                params: {
                    _limit: limit,
                    _page: page,
                }
            }
        );
    }

    static async getById(id: string | undefined) {
        return await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    }

    static async getPostCommentsById(id: string | undefined) {
        return await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
    }

}