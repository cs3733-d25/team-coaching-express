import { FeedbackRequest, GetFeedback } from '../database/feedback';
import { Suspense, use } from 'react';
import { FeedBackDisplay } from './FeedBackDisplay';

function DisplayFeedbackAsync({ feedbackPromise }: { feedbackPromise: Promise<FeedbackRequest> }) {
    const feedback = use(feedbackPromise);
    return <FeedBackDisplay feedback={feedback}></FeedBackDisplay>;
}

export default function FeedbackGetter() {
    const feedbackPromise = GetFeedback();
    return (
        <Suspense fallback={'Loading...'}>
            <DisplayFeedbackAsync feedbackPromise={feedbackPromise} />
        </Suspense>
    );
}
