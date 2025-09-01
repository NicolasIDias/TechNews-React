import Post from "../Schema/Post.js";
import { v4 as uuidv4 } from "uuid";

class PostRepository {
  async findAll() {
    try {
      const posts = await Post.find({});

      if (posts.length === 0) {
        return {
          success: true,
          statusCode: 200,
          message: "No posts found",
          data: [],
        };
      }

      return {
        success: true,
        statusCode: 200,
        message: "Posts successfully recovered",
        data: posts,
      };
    } catch (error) {
      console.error("Error when recovering data:", error);
      return {
        success: false,
        statusCode: 500,
        message: "Internal server error",
        data: null,
      };
    }
  }

  async findById(id) {
    try {
      const post = await Post.findOne({ id: id });

      if (!post) {
        return {
          success: false,
          statusCode: 404,
          message: "No post found with the provided ID",
          data: null,
        };
      }

      return {
        success: true,
        statusCode: 200,
        message: "Post successfully recovered",
        data: post,
      };
    } catch (error) {
      console.error("Error when recovering data:", error);
      return {
        success: false,
        statusCode: 500,
        message: "Internal server error",
        data: null,
      };
    }
  }

  async findBySlug(slug) {
    try {
      const post = await Post.findOne({ slug: slug });

      if (!post) {
        return {
          success: false,
          statusCode: 404,
          message: "No post found with the provided slug",
          data: null,
        };
      }

      return {
        success: true,
        statusCode: 200,
        message: "Post successfully recovered",
        data: post,
      };
    } catch (error) {
      console.error("Error when recovering data:", error);
      return {
        success: false,
        statusCode: 500,
        message: "Internal server error",
        data: null,
      };
    }
  }

  async create(postData) {
    try {
      const { title, content, description, slug } = postData;

      if (!title || !content || !description || !slug) {
        return {
          success: false,
          statusCode: 400,
          message: "Missing required fields",
          data: null,
        };
      }

      const newPost = await Post.create({
        ...postData,
        id: uuidv4(),
        time: new Date().toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
      });

      return {
        success: true,
        statusCode: 201,
        message: "Post successfully created",
        data: newPost,
      };
    } catch (error) {
      if (error.code === 11000) {
        return {
          success: false,
          statusCode: 409,
          message: "A post with the provided slug or ID already exists.",
          data: null,
        };
      }
      console.error("Error when creating data:", error);
      return {
        success: false,
        statusCode: 500,
        message: "Internal server error while creating the post",
        data: null,
      };
    }
  }

  async update(slug, updateData) {
    try {
      const updatedPost = await Post.findOneAndUpdate({ slug: slug }, updateData, {
        new: true,
        runValidators: true,
      });

      if (!updatedPost) {
        return {
          success: false,
          statusCode: 404,
          message: "Post not found with the provided slug",
          data: null,
        };
      }

      return {
        success: true,
        statusCode: 200,
        message: "Post successfully updated",
        data: updatedPost,
      };
    } catch (error) {
      console.error("Error when updating data:", error);
      return {
        success: false,
        statusCode: 500,
        message: "Internal server error while updating the post",
        data: null,
      };
    }
  }

  async delete(slug) {
    try {
      const deletedPost = await Post.findOneAndDelete({ slug: slug });

      if (!deletedPost) {
        return {
          success: false,
          statusCode: 404,
          message: "Post not found with the provided slug",
          data: null,
        };
      }

      return {
        success: true,
        statusCode: 200,
        message: "Post successfully deleted",
        data: deletedPost,
      };
    } catch (error) {
      console.error("Error when deleting data:", error);
      return {
        success: false,
        statusCode: 500,
        message: "Internal server error while deleting the post",
        data: null,
      };
    }
  }

  async comment(author, comment, slug) {
    try {
      const post = await Post.findOne({ slug: slug });

      if (!post) {
        return {
          success: false,
          statusCode: 404,
          message: "Post not found with the provided slug",
          data: null,
        };
      }

      post.comments.push({ author, comment: comment });
      const updatedPost = await post.save();

      return {
        success: true,
        statusCode: 200,
        message: "Comment successfully added",
        data: updatedPost,
      };
    } catch (error) {
      console.error("Error when adding comment:", error);
      return {
        success: false,
        statusCode: 500,
        message: "Internal server error while adding the comment",
        data: null,
      };
    }
  }
}

export default new PostRepository();