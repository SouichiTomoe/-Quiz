export type Options = {
    text: string;
};

export interface Questions {
    text: string;
    image: string;
    lifetimeSeconds: number;
    options: Options[];
}

export interface SurveyType {
    title: string;
    image: string;
    questions: Questions[];
}
