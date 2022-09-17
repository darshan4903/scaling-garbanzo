const Post = require("../models/Post");

const router = require("express").Router();

router.post("/", async (req, res) => {
  try {
    let newPost = Post({
      userEmail: req.body.userEmail,
      title: req.body.title,
      desc: req.body.desc,
      jobDesc: req.body.jobDesc,
      jobType: req.body.jobType,
      company:req.body.company,
      interviewDate:req.body.interviewDate,
      companyLogo:req.body.imageUrl,
      onCampus: req.body.onCampus,
      postHTML: req.body.postHTML,
    });

    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (error) {
    console.log(error)
    res.status(500).json(error);
  }
});

router.get("/id/:postId",async(req,res)=>{
    const id = req.params.postId;
    try {
        const post = await Post.findById(id);
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json(error);
    }
})

router.get("/company/:company",async(req,res)=>{
    const company = req.params.company;
    try {
        const posts = await Post.find({company:company});
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json(error);
    }
})

router.get("/type/:jobType",async(req,res)=>{
    const type = req.params.jobType;
    try {
        const posts = await Post.find({jobType:type});
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json(error);
    }
})

router.get("/user/:userEmail",async(req,res)=>{
    const userEmail = req.params.userEmail;
    try {
        const posts = await Post.find({userEmail:userEmail});
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json(error);
    }
})



module.exports = router;
