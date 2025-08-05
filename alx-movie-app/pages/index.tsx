import Layout from '@/components/layouts/Layout';
import MovieCard from '@/components/commons/MovieCard';
import Button from '@/components/commons/Button';
import Loading from '@/components/commons/Loading';

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col items-center gap-6 py-10">
        <h1 className="text-3xl font-bold">Welcome to ALX Movie App 🎬</h1>
        <MovieCard />
        <Button />
        <Loading />
      </div>
    </Layout>
  );
}