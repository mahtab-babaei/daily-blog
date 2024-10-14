"use client";
import { AccentButton, ErrorMessage, SuccessMessage } from "@/app/components";
import noAvatar from "@/public/images/avatars/noAvatar.png";
import { Avatar, Flex, Grid } from "@radix-ui/themes";
import axios from "axios";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface Commentdata {
  content: string;
}

const PostComment = ({ postId }: { postId: number }) => {
  const { data: session } = useSession();
  const router = useRouter();
  const { register, handleSubmit, reset } = useForm<Commentdata>();
  const [isSubmitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const onSubmit = handleSubmit(async (data) => {
    try {
      setSubmitting(true);
      setError("");
      setSuccessMessage("");
      if (!session) {
        router.push("/auth/signin");
      } else {
        const response = await axios.post("/api/user", session!.user);
        const userId = response.data.id;
        await axios.post("/api/comments", {
          content: data.content,
          postId,
          userId,
        });
        setSuccessMessage("نظر شما با موفقیت ثبت شد :)");
        reset();
        router.refresh();
      }
    } catch (error) {
      setSubmitting(false);
      setError("خطا در ثبت کامنت.");
    } finally {
      setSubmitting(false);
    }
  });

  return (
    <form onSubmit={onSubmit}>
      <Grid>
        <Flex gap="2" align="start" justify="center">
          <Avatar
            radius="full"
            size="5"
            fallback={
              <Image className="rounded-full" src={noAvatar} alt="noAvatar" />
            }
          />
          <Grid className="w-full">
            <input
              {...register("content")}
              className="bg-neutral border-b-2 border-b-light border-opacity-40 w-full p-2 mb-2 focus:outline-none"
              placeholder="نظر خود را بنویسید..."
            />
            <ErrorMessage>{error}</ErrorMessage>
            <SuccessMessage>{successMessage}</SuccessMessage>
          </Grid>
        </Flex>
        <Flex justify="end">
          <AccentButton isSubmitting={isSubmitting}>ثبت نظر</AccentButton>
        </Flex>
      </Grid>
    </form>
  );
};

export default PostComment;
