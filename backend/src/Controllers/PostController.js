import PostRepository from "../Repositories/PostRepository.js";

class PostController {
  async createPost(request, response) {
    try {
      const postData = request.body;
      const repositoryResponse = await PostRepository.create(postData);

      response.status(repositoryResponse.statusCode).json(repositoryResponse);
    } catch (error) {
      console.error("Error in createPost controller:", error);
      response.status(500).json({
        success: false,
        message: "An unexpected controller error occurred.",
        data: null,
      });
    }
  }

  async getPosts(request, response) {
    try {
      const repositoryResponse = await PostRepository.findAll();
      response.status(repositoryResponse.statusCode).json(repositoryResponse);
    } catch (error) {
      console.error("Error in getPosts controller:", error);
      response.status(500).json({
        success: false,
        message: "An unexpected controller error occurred.",
        data: null,
      });
    }
  }

  async getPostBySlug(request, response) {
    try {
      const { slug } = request.params;
      const repositoryResponse = await PostRepository.findBySlug(slug);
      response.status(repositoryResponse.statusCode).json(repositoryResponse);
    } catch (error) {
      console.error("Error in getPostBySlug controller:", error);
      response.status(500).json({
        success: false,
        message: "An unexpected controller error occurred.",
        data: null,
      });
    }
  }

  async getPostById(request, response) {
    try {
      const { id } = request.params;
      const repositoryResponse = await PostRepository.findById(id);
      response.status(repositoryResponse.statusCode).json(repositoryResponse);
    } catch (error) {
      console.error("Error in getPostById controller:", error);
      response.status(500).json({
        success: false,
        message: "An unexpected controller error occurred.",
        data: null,
      });
    }
  }

  async updatePost(request, response) {
    try {
      const { slug } = request.params;
      const updateData = request.body;
      const repositoryResponse = await PostRepository.update(slug, updateData);
      response.status(repositoryResponse.statusCode).json(repositoryResponse);
    } catch (error) {
      console.error("Error in updatePost controller:", error);
      response.status(500).json({
        success: false,
        message: "An unexpected controller error occurred.",
        data: null,
      });
    }
  }

  async deletePost(request, response) {
    try {
      const { slug } = request.params;
      const repositoryResponse = await PostRepository.delete(slug);
      response.status(repositoryResponse.statusCode).json(repositoryResponse);
    } catch (error) {
      console.error("Error in deletePost controller:", error);
      response.status(500).json({
        success: false,
        message: "An unexpected controller error occurred.",
        data: null,
      });
    }
  }

  async addComment(request, response) {
    try {
      const { slug } = request.params;
      const { author, comment } = request.body;
      const repositoryResponse = await PostRepository.comment(author, comment, slug);
      response.status(repositoryResponse.statusCode).json(repositoryResponse);
    } catch (error) {
      console.error("Error in addComment controller:", error);
      response.status(500).json({
        success: false,
        message: "An unexpected controller error occurred.",
        data: null,
      });
    }
  }
}

export default new PostController();