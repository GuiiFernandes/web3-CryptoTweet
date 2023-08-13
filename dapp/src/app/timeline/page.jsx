'use client';

import FormTweet from '../../components/FormTweet';
import PageLayout from '../../components/PageLayout';

export default function Timeline() {
  return (
    <PageLayout>
      <main className="container">
        <div className="row">
          <FormTweet />
        </div>
      </main>
    </PageLayout>
  );
}
