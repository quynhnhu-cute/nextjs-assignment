import NavBar from "@/components/NavBar";
import PostHeader from "./components/Header";
import ArticleContent from "./components/ArticleContent";
import Footer from "@/components/Footer";

const PostPage = () => {
  return (
    <>
      <NavBar />
      <PostHeader />
      <ArticleContent/>
      <Footer/>
    </>
  );
};

export default PostPage;
