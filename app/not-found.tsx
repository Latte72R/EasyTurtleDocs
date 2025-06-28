

import React from 'react';
import MainContent from "@/app/components/MainContent";
import Container from '@/app/components/Container';

export const metadata = {
    title: 'Not Found',
    openGraph: {
        title: 'Not Found',
    },
};

const NotFoundPage: React.FC = () => {
    return (
        <MainContent>
            <Container>
                <h2>404 Not Found</h2>
                <p>ページが見つかりませんでした。</p>
                <p>お探しのページは存在しないか、移動された可能性があります。</p>
            </Container>
        </MainContent>
    );
}
export default NotFoundPage;

