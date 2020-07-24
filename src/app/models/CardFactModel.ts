export interface CardFactModel {
    title: string;
    image: string;
    imageAltText: string;
    text1: string;
    text2: string;
    text3: string;
}

export function getEmptyCardFact(): CardFactModel {
    return {
        title: '',
        image: '',
        imageAltText: '',
        text1: '',
        text2: '',
        text3: ''
    };
}
