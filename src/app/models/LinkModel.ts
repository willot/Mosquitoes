export interface LinkModel {
    section: string;
    linkName: string;
    linkUrl: string;
    linkDescriptiom: string;
}

export function getEmptyLinkModel(): LinkModel {
    return {
        section: '',
        linkName: '',
        linkUrl: '',
        linkDescriptiom: ''
    };
}
