import express from "express";
import PostModel from "..//models/postsSchema.js";
import WorkModel from "..//models/worksSchema.js";

import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://admin:Zxr0Mzbhj7D1Xjwj@curso-elaborata.isvkdpy.mongodb.net/app_test"
);

const router = express.Router();

async function getallpost(req, res) {
  console.log("cheguei no post");
  try {
    const posts = await PostModel.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function savePosts(req, res) {
  console.log("entrou na funcao");
  const newPost = new PostModel({
    title: req.body.title,
    description: req.body.description,
    categories: req.body.categories,
  });

  try {
    await newPost.save();
    console.log("Post inserido com sucesso!");
    res.status(201).send("createPost");
  } catch (err) {
    console.log("Ocorreu um erro:", err);
  }
}

async function updateposts(req, res) {
  console.log("entrou");
  // const userId = req.params.id;
  const postId = req.body.idToBeMofified;
  const updateData = req.body;
  try {
    const updatedpost = await PostModel.updateOne({ _id: postId }, updateData);
    if (updatedpost.nModified === 0) {
      res.status(404).send("Nenhum usuário encontrado no banco!");
    } else {
      res.status(200).json({ message: "Usuário Atualizado!" });
    }
  } catch (error) {
    console.log("Ocorreu um erro", error);
    res.status(500).send(error);
  }
}

async function deleteposts(req, res) {
  console.log("cheguei no delete");
  const postId = req.params.id;
  console.log(postId);
  try {
    const deletedPost = await PostModel.deleteOne({
      _id: postId,
    });
    if (deletedPost.deletedCount === 0) {
      res.status(404).send("Nenhum post encontrado no banco!");
    } else {
      res.status(204).send();
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}

router.get("/posts", getallpost);
router.post("/posts", savePosts);
router.patch("/posts/:id", updateposts);
router.delete("/posts/:id", deleteposts);

// WORKS

async function getallWorks(req, res) {
  console.log("cheguei no getallWorks");
  try {
    const works = await WorkModel.find();
    res.status(200).json(works);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function saveWorks(req, res) {
  console.log("entrou na funcao");
  const newWork = new WorkModel({
    title: req.body.title,
    description: req.body.description,
    categories: req.body.categories,
  });

  try {
    await newWork.save();
    console.log("work inserido com sucesso!");
    res.status(201).send("creatework");
  } catch (err) {
    console.log("Ocorreu um erro:", err);
  }
}

async function updateWork(req, res) {
  console.log("entrou");
  // const userId = req.params.id;
  const worksId = req.body.idToBeMofified;
  const updateData = req.body;
  try {
    const updatedwork = await PostModel.updateOne({ _id: worksId }, updateData);
    if (updatedwork.nModified === 0) {
      res.status(404).send("Nenhum work encontrado no banco!");
    } else {
      res.status(200).json({ message: "work Atualizado!" });
    }
  } catch (error) {
    console.log("Ocorreu um erro", error);
    res.status(500).send(error);
  }
}

async function deleteWork(req, res) {
  console.log("cheguei no delete work");
  const workId = req.params.id;
  console.log(workId);
  try {
    const deleteWork = await PostModel.deleteOne({ _id: workId });
    if (deleteWork.deletedCount === 0) {
      res.status(404).send("Nenhum work encontrado no banco!");
    } else {
      res.status(204).send();
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}

router.get("/Works", getallWorks);
router.post("/Works", saveWorks);
router.patch("/Works/:id", updateWork);
router.delete("/Works/:id", deleteWork);

export default router;
