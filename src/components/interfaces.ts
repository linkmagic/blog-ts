export interface IPost {
    id: string;
    title: string;
    body: string;
    [key: string]: string;
}

export interface IPostComment {
    body: string;
    email: string;
    id: number;
    name: string;
    postId: number;
}

export interface ISelectOption {
    value: string;
    name: string;
}

export interface IFilter {
    sort: string;
    query: string;
    limit: string;
}