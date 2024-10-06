import dynamic from "next/dynamic";

const PostForm = dynamic(() => import("@/app/admin/components/PostForm"), {
  ssr: false,
});

const CreateNewPost = () => {
  return <PostForm />;
};

export default CreateNewPost;
