// import { IPost, IPostComment } from 'components/interfaces';

export interface IAPIResponse {
    // data: IPost | IPost[] | IPostComment[];
    data: any
    headers: {
        [key: string]: string;
    }
}
