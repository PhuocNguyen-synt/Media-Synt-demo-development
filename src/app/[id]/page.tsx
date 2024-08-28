import articlesApiRequest from "@/apiRequests/articles";
import ArticleCard from "@/components/ArticleCard";

type Props = {
  params: {id: string};
}
export default async function TypeOfCategoriesPage ({params}: Props) {
  const {payload} = await articlesApiRequest.getList(params.id.toLowerCase());
  const articles = payload.results;
  return (
      <div className='grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-8 items-center justify-between p-8'>
        {articles.map((article: any, index: number) => (
            <ArticleCard key={index} article={article} />
        ))}
      </div>
  );
}