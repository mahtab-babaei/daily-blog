import dynamic from "next/dynamic";
import PostFormSkeleton from "../components/PostFormSkeleton";

const PostForm = dynamic(() => import("@/app/admin/components/PostForm"), {
  ssr: false,
  loading: () => <PostFormSkeleton />,
});

const CreateNewPost = () => {
  return <PostForm />;
};

export default CreateNewPost;
