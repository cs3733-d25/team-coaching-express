import axios from 'axios';

export interface FeedbackRequest {
    name: string;
    feedback: string;
}

export async function SubmitFeedbackRequest(request: FeedbackRequest) {
    await axios.post('/api/feedback', request);
}

export async function GetFeedback() {
    return (await axios.get<FeedbackRequest>('/api/feedback')).data;
}
