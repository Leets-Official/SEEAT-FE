import { useEffect, useState } from 'react';
import { ReviewCard, Header } from '@/components';
import { getMyBookmarks } from '@/api/review/myBookmark.api';
import type { BookmarkReviewItem } from '@/types/review'; 

const MyBookmarkPage = () => {
  const [bookmarks, setBookmarks] = useState<BookmarkReviewItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBookmarks = async () => {
      try {
        const { content } = await getMyBookmarks({ page: 1, size: 10 }); 
        setBookmarks(content);
      } catch (err: unknown) {
        console.error(err);
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('북마크를 불러오지 못했습니다.');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchBookmarks();
  }, []);

  return (
    <div className="w-full px-4">
      <Header
        leftSection="BACK"
        onKebabClick={() => console.log('케밥버튼 클릭')}
        className="bg-gray-900"
      >
        북마크
      </Header>

      <main className="flex flex-col gap-y-3 py-4 pt-[68px]">
        {loading && <p className="text-white">로딩 중...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {!loading && !error && bookmarks.length === 0 && (
          <p className="text-gray-400">북마크한 후기가 없습니다.</p>
        )}
        {bookmarks.map((review) => (
          <ReviewCard
            key={review.reviewId}
            imageUrl={review.thumbnailUrl}
            tags={(review.hashtags ?? []).map((tag) => tag.hashTagName)}
            title={review.title}
            description={review.content}
            likeCount={review.heartCount}
            onClick={() => {
              console.log(`Bookmark ${review.reviewId} clicked`);
            }}
          />
        ))}
      </main>
    </div>
  );
};

export default MyBookmarkPage;
