import { GetStaticProps } from "next";

type Post = {
  type: string
  setup: string
  punchline: string
  id: number
}

type Props = {
  post: Post;
};

// export async function getStaticProps() {
export const getStaticProps: GetStaticProps<Props> = async () => {
  const res = await fetch("https://official-joke-api.appspot.com/random_joke");
  const post: Post = await res.json();
  return {
    props: {
      pageId: "projects",
      post
    }
  }
}

export default function Projects({ post }: Props) {
  return <div className="max-w-sm w-full lg:max-w-full lg:flex">
  <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
  </div>
  <div className="mt-5 border-r border-b border-l border-gray-400 lg:border-l-1 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
    <div className="mb-8">
      <p className="text-sm text-gray-600 flex items-center">
      </p>
      <div className="text-gray-900 font-bold text-xl mb-2">TEST FETCH API</div>
      <p className="text-gray-700 text-base">Type : {post.type}</p>
      <p className="text-gray-700 text-base">Setup : {post.setup}</p>
      <p className="text-gray-700 text-base">Punchline : {post.punchline}</p>
      <p className="text-gray-700 text-base">ID : {post.id}</p>
    </div>
    <div className="flex items-center">
      <div className="text-sm">
        <p className="text-gray-900 leading-none">wafiamna</p>
        <p className="text-gray-600">July 27</p>
      </div>
    </div>
  </div>
</div>

}