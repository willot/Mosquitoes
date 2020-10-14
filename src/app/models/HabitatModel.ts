export interface HabitatModel {
    topPositionRatio: number;
    leftPositionRatio: number;
    heightRatio: number;
    widthRatio: number;
    title: string;
    description: string;
    recommendations: string;
    image: string;
}

export function getEmptyHabitat(): HabitatModel {
    return {
        topPositionRatio: 0,
        leftPositionRatio: 0,
        heightRatio: 0,
        widthRatio: 0,
        title: '',
        description: '',
        recommendations: '',
        image: ''
    };
}
