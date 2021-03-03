Book by Kevin Ashley

This book is for anyone interested in AI and creativity: design, art, illustration, game creation, movies, animation, and other creative endeavors. My method is combining creativity and AI.

![http://kevinashley.com](images/banner.png)

In the book you’ll find many illustrations and infographics created and augmented by artificial intelligence. In addition to this book, there’s also a supplemental art book called The Art of AI which includes real art created with artificial intelligence from several artists who participated in this project. 

- [Video Tutorials](http://ai-learning.vhx.tv) - Subscribe, updated weekly
- [The Art of AI](http://kevinashley.com/art-of-ai) – A yearly almanac of the art of AI and the artwork for this book
- [Instagram](http://instagram.com/awesomeai_art)

# Practical Projects for the Book

Please, use these supplemental materials and code for the video tutorial [Awesome AI: Drawing with Artificial Intelligence](http://ai-learning.vhx.tv). 

Most examples are available in playground environments like Google Colab and Binder. For standalone notebooks, it is recommended that your kernel environment is set to Python 3. Check [requirements.txt](requirements.txt) for dependencies. 

# Chapter 1. Getting Started

## Project 1.1 Drawing Sketches

In this project we begin by simply sketching a portrait, a pose of a human or an animal, and scene, a building or a landscape. Just draw anything you like, we'll use it later in the book. With this method by combining creativity and AI, we'll make beautiful illustrations, like these:

![http://kevinashley.com](images/sketches.png)

# Chapter 2. Creative Tools

## Project 2.1 Creative Tools and AI

In this project we begin by simply sketching a portrait, a pose of a human or an animal, and scene, a building or a landscape. Just draw anything you like, we'll use it later in the book.

- **Quick Draw** - Doodling with AI and predictive sketching. This is a great tool to understand how AI can predict what you are thinking to sketch! It also comes with Quick Draw dataset, collected from thousands of drawings! ( [Try it](https://quickdraw.withgoogle.com/) )
- **Photoshop Neural Filters**, and Adobe Sensei - is the classic digital tool’s window to AI creativity. Explore neural filters that Adobe engineers collected as part of Photoshop. ( [Article](https://helpx.adobe.com/photoshop/using/neural-filters.html) )
- **Clip Studio Paint AI Colorizing** – another classic illustration and drawing tool very popular with manga and anime artists. This tool includes AI colorizing that allows you to apply color to your sketches. We discuss AI based coloring in depth in this book. ( [Article](https://tips.clip-studio.com/en-us/articles/3939) )
- **Petalica Paint** ( [Try it](https://petalica-paint.pixiv.dev/index_en.html) )
- **OpenAI Microscope** – in this book we discuss neural networks. OpenAI came out with a great tool to visualize neural networks. This is a fantastic tool to understand how images get processed through different types of neural nets. ([Try it](https://openai.com/blog/microscope/))


## Project 2.2 Getting Started with Notebooks

- Getting Started with Notebooks - Style Transfer ( [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/kevinash/awesome-ai/blob/main/notebooks/1_GettingStarted/StyleTransfer_Pytorch.ipynb) ) - this is a basic introduction to using an online Colab notebook. No installation required, but a GPU kernel recommended. Very easy code with just a few steps. 

# Chapter 3. Neural Networks

![http://kevinashley.com](images/neuralnet.jpg)

## Project 3.1 Create a Single Neuron

- Make a Single Neuron ([![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/kevinash/awesome-ai/blob/main/3_NeuralNetworks/SimpleNeuralNetworks.ipynb))

## Project 3.2 Neural Networks

- Make a Simple Neural Network ([![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/kevinash/awesome-ai/blob/main/notebooks/3_NeuralNetworks/Multi-LayerNetworks.ipynb))
- Activation Functions ([![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/kevinash/awesome-ai/blob/main/notebooks/3_NeuralNetworks/ActivationFunctions.ipynb))
- Visualizing Neurons ([![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/kevinash/awesome-ai/blob/main/notebooks/3_NeuralNetworks/VisualizingNeurons.ipynb))
- Activation Atlas ([Article](https://ai.googleblog.com/2018/03/the-building-blocks-of-interpretability.html)| [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/tensorflow/lucid/blob/master/notebooks/activation-atlas/activation-atlas-simple.ipynb)) 

## Project 3.3 Neural Methods

- Classification ([![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/kevinash/awesome-ai/blob/main/notebooks/3_NeuralNetworks/Classification.ipynb))
- Detection ([![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/kevinash/awesome-ai/blob/main/notebooks/3_NeuralNetworks/Detection.ipynb))
- Segmentation ([![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/kevinash/awesome-ai/blob/main/notebooks/3_NeuralNetworks/Segmentation.ipynb))

# Chapter 4. Drawing, Sketching and Painting 

![http://kevinashley.com](images/ballerina-colors-banner-96-thumb.png)

## Project 4.1 Explore Sketching with AI

- **Quick Draw** - Doodling with AI and predictive sketching. This is a great tool to understand how AI can predict what you are thinking to sketch! It also comes with Quick Draw dataset, collected from thousands of drawings! ( [Try it](https://quickdraw.withgoogle.com/) )
- **Sketch RNN** ( [Try it](https://experiments.withgoogle.com/sketch-rnn-demo) )
- **Predicting the rest of the sketch** you can see a variety of different endings predicted by the model. ( [Try it](https://magenta.tensorflow.org/assets/sketch_rnn_demo/multi_predict.html) )
- **Morphing one sketch to another** the model will come up with new drawings that it believes to be the interpolation between the two original drawings ( [Try it](https://magenta.tensorflow.org/assets/sketch_rnn_demo/interp.html) )
- **Mimic your sketches** Rather than drawing a perfect duplicate copy of your drawing, the model will try to mimic your drawing instead. ( [Try it](https://magenta.tensorflow.org/assets/sketch_rnn_demo/multi_vae.html) )
- **Cartoonify** – turn your photo in a drawing, Google experiment ( [Try it](https://experiments.withgoogle.com/cartoonify) )

## Project 4.2 Colorize your Sketch

- **Colorize Sketches** - great online model to get started with ([![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/kevinash/awesome-ai/blob/main/notebooks/4_DrawingAndSketching/ImageColorizerColabSketch.ipynb))
- **Style2Paints** - one of the best tools for colorization, for best results this tool requires installation ( [Docs](https://style2paints.github.io/) | [Code](https://github.com/lllyasviel/style2paints) )
- Colorize Photos ([![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/kevinash/awesome-ai/blob/main/notebooks/4_DrawingAndSketching/ImageColorizerColab.ipynb))
- Colorize GrayScale ([![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/kevinash/awesome-ai/blob/main/notebooks/4_DrawingAndSketching/ImageColorizerColabGrayScale.ipynb))
- Colorize Sketch to Grayscale ([![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/kevinash/awesome-ai/blob/main/notebooks/4_DrawingAndSketching/ImageColorizerColabSketch2Gray.ipynb))

## Project 4.3 More on Sketching

- Sketch from portraits (ArtLine) ( [Code](https://github.com/vijishmadhavan/ArtLine) | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/kevinash/awesome-ai/blob/main/notebooks/4_DrawingAndSketching/SketchFromPortraits_ArtLine.ipynb))
- Cartoons from Portraits ( [Code](https://github.com/vijishmadhavan/Toon-Me) | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/kevinash/awesome-ai/blob/main/notebooks/4_DrawingAndSketching/CartoonifyPortraits_ToonMe.ipynb) )
- Pix2Pix ( [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/tensorflow/docs/blob/master/site/en/tutorials/generative/pix2pix.ipynb) | [Code](https://github.com/phillipi/pix2pix) | [Demo](https://affinelayer.com/pixsrv/) )
- ShadeSketch ( [Paper](https://arxiv.org/abs/2002.11812) | [Try it](https://qyzdao.github.io/ShadeSketch/) | [Code](https://github.com/qyzdao/ShadeSketch) )
- Sketch Simplification ( [Paper](https://esslab.jp/~ess/en/research/sketch_master/) | [Code](https://github.com/bobbens/sketch_simplification) )
- Sketching Lines Refining ( [Code](https://github.com/hepesu/LineRelifer/) )
- Sketch based Deep Learning ( [Read more...](https://github.com/qyzdao/Sketch-Based-Deep-Learning) )
- Design and technical sketches [Sketch Graph](https://github.com/PrincetonLIPS/SketchGraphs)
    
# Chapter 5. Faces and Expressions with AI

![http://kevinashley.com](images/anime-faces.png)

## Project 5.1 Face and Facial Features

- **Facial Detection** facial detection with Google MediaPipe ( [Docs](https://google.github.io/mediapipe) | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/kevinash/awesome-ai/blob/main/notebooks/5_FacesAndExpressions/MediaPipe_Face_Detection.ipynb))
- **Facial Features** facial features with Google MediaPipe ( [Docs](https://google.github.io/mediapipe) | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/kevinash/awesome-ai/blob/main/notebooks/5_FacesAndExpressions/MediaPipe_Face_Mesh.ipynb))
- **Hair Recoloring** - Super realistic real time hair recoloring and segmentation. ( [Docs](https://google.github.io/mediapipe/solutions/hair_segmentation.html) )
- **Iris and Depth** - an amazing work that shows how to reconstruct depth from an iris. ( [Docs](https://google.github.io/mediapipe/solutions/iris.html) )

## Project 5.2 Generate Anime Faces

- **Generate Anime Faces** - this notebook shows how to use StyleGAN to generate anime faces. ( [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/kevinash/awesome-ai/blob/main/notebooks/5_FacesAndExpressions/Generate_Anime_with_StyleGAN.ipynb) )
- **Photorealistic faces** with NVIDIA StyleGAN2 ( [Article](https://news.developer.nvidia.com/synthesizing-high-resolution-images-with-stylegan2/) | [Code](https://github.com/NVlabs/stylegan2) )
- **Generate Cartoon Faces with Customization** - this notebook uses StyleGAN2 to create customizable cartoon faces based on Cartoon Set ( [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/kevinash/awesome-ai/blob/main/notebooks/5_FacesAndExpressions/CustomizableToonFaces_cartoonset100k.ipynb) )
- **Training StyleGAN model on portraits** train StyleGAN to generate portraits **long, advanced** ( [Docs](https://google.github.io/mediapipe) | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/kevinash/awesome-ai/blob/main/notebooks/5_FacesAndExpressions/StyleGAN_Portraits.ipynb))
- **This Anime Does not Exist** is a great exploration tool for anime generation ( [This Anime Does Not Exist](https://thisanimedoesnotexist.ai) )

# Chapter 6. Body and Poses with AI

- Keypoints and joints with AI ([Notebook](Face.ipynb))
- Pose Estimation ([Notebook](Face.ipynb))
- Datasets 2D ([Notebook](Face.ipynb))
- Datasets 3D ([Notebook](Face.ipynb))
- Tips for using AI with human body ([Notebook](Face.ipynb))

# Chapter 7. Animation with AI

- First Order Motion Model for Image Animation ([Paper](https://arxiv.org/pdf/2003.00196.pdf))
- An Illusion of Life ([Book](https://www.amazon.com/gp/product/0786860707))
- Animator's Survival Kit ([Book](https://www.amazon.com/Animators-Survival-Kit-Principles-Classical/dp/086547897X))
- Pose Animator (Faces and Poses)([Article](https://blog.tensorflow.org/2020/05/pose-animator-open-source-tool-to-bring-svg-characters-to-life.html)|[Code](https://github.com/yemount/pose-animator)|[Demo](https://pose-animator-demo.firebaseapp.com/camera.html))
 

# Chapter 8. Scenes, Landscapes, Building and Architecture
 
- Landscape Painting with Generative Adversarial Networks ([Article](https://arxiv.org/abs/2011.05552))

# Chapter 2. Creativity with AI

## Project 2.1 Style Transfer

## Project 2.2 Compositions and Patterns

- Patterns ( [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/tensorflow/lucid/blob/master/notebooks/differentiable-parameterizations/xy2rgb.ipynb) | [Article](https://distill.pub/2018/differentiable-parameterizations/) )

![](images/cppn_transparency.png)

- Transparency and Patterns ([![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/kevinash/awesome-ai/blob/main/notebooks/2_Creativity/Transparency.ipynb))

- Exaggerating Features (Cartoonification)  ( [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/kevinash/awesome-ai/blob/main/notebooks/2_Creativity/Cartoonify_GAN.ipynb) )





- Activation Atlas ([![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/kevinash/awesome-ai/blob/main/notebooks/1_GettingStarted/ActivationAtlas.ipynb) 


- 
- 
- Style Transfer(|[Original Colab](https://colab.research.google.com/github/tensorflow/lucid/blob/master/notebooks/differentiable-parameterizations/style_transfer_2d.ipynb)|[Colab](https://colab.research.google.com/drive/1Yia9N6r3sMK04zjFAJUqD3GA4XPA4Qjz))

## Project 1.2 Explore Creativity

- Text to Illustration (Deep Daze) - OpenAI CLIP and SIREN ( [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/kevinash/awesome-ai/blob/main/notebooks/2_Tools/Deep_Daze.ipynb) ) 
- Text to Illustration (Big Sleep) - OpenAI CLIP and BigGAN ( [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/kevinash/awesome-ai/blob/main/notebooks/2_Tools/Big_Sleep.ipynb) ) 

- Style Transfer ( [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/kevinash/awesome-ai/blob/main/notebooks/1_GettingStarted/StyleTransfer_Pytorch.ipynb) ) 
- Style Transfer with Blending Proportions ( [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/tensorflow/tensorflow/blob/master/tensorflow/lite/g3doc/models/style_transfer/overview.ipynb) )
- Style Transfer Parametrizations ( [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/tensorflow/lucid/blob/master/notebooks/differentiable-parameterizations/style_transfer_2d.ipynb) )
- Generating Images with BigGAN ( [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/tensorflow/hub/blob/master/examples/colab/biggan_generation_with_tf_hub.ipynb) )
- WikiArt Model Artwork Trained ( [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/Norod/my-colab-experiments/blob/master/WikiArt_Example_Generation_By_Peter_Baylies.ipynb) )
- Artwork Trained Model ( [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/kevinash/awesome-ai/blob/main/notebooks/1_GettingStarted/StyleGAN_Paintings.ipynb) )

# Chapter 3. Creative AI Tools 

- Neural Network Visualization
    - OpenAI Microscope ([Try it](https://openai.com/blog/microscope/))
    - Activation Atlases ([Article](https://ai.googleblog.com/2018/03/the-building-blocks-of-interpretability.html)|[Colab](https://colab.research.google.com/github/tensorflow/lucid/blob/master/notebooks/activation-atlas/activation-atlas-simple.ipynb)) 
- Style Transfer
    - Fast Style Transfer ([Code](https://github.com/lengstrom/fast-style-transfer))
    - Generative Style Transfer ([Tensorflow](https://www.tensorflow.org/tutorials/generative/style_transfer))
- Generating Images from Text
    - Generating Images from Text ([DALL-E](https://openai.com/blog/dall-e))
- Generating Anime Faces    
  - Anime Faces Generation ([Article](https://www.gwern.net/TWDNE))
- Fashion
  - Fashion [Tool](https://app.runwayml.com/models/ALANIX/Fashion-Illustrations)|[Code](https://colab.research.google.com/drive/1zRt7bKlH6sHeo3anHwvVnz6Z_0YToWb7) 
- 3D Models
    - [Article](https://nv-tlabs.github.io/DIB-R/)

# The Art of AI


