export interface PageParam { 
    pageSize: number;
    pageNumber: number;
}


export interface SearchParam extends PageParam{
    search: string;
}

export interface IDParam { 
    id: string;
}